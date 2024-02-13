import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProperty } from '../model/iproperty';
import { IPropertyBase } from '../model/ipropertybase';
import { Property } from '../model/property';
import {environment} from '../../environments/environment'
import { Ikeyvaluepair } from '../model/IKeyValuePair';
//import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  baseurl = environment.baseUrl
  constructor(private http: HttpClient) { }

  getAllCities(): Observable<any>{
    return this.http.get<string[]>(this.baseurl + '/city');

  }
  getPropertyType(): Observable<Ikeyvaluepair[]>{
    return this.http.get<any>(this.baseurl + "/propertytype/list/");

  }
  getFurnishingType(): Observable<Ikeyvaluepair[]>{
    return this.http.get<any>(this.baseurl + "/furnishingtype/list/");

  }

  getProperty(id: number) {

    return this.http.get<Property>(this.baseurl + '/property/detail/' + id.toString())
   
  }

  getAllProperties(SellRent?: number): Observable<Property[]> {
    return this.http.get<Property[]>(this.baseurl + '/property/list/'+ SellRent?.toString())
    
  }
  addProperty(property: Property) {
    console.log(property);
    
    const httpoptions = {
      headers:new HttpHeaders({
        Authorization : 'Bearer ' + localStorage.getItem('token')
    })
    }
    return this.http.post<Property[]>(this.baseurl + '/property/add',property, httpoptions )
    //let newProp = [property];

    // Add new property in array if newProp alreay exists in local storage
    // if (localStorage.getItem('newProp')) {
    //   {/* @ts-ignore */}
    //   newProp = [property, ...JSON.parse(localStorage.getItem('newProp'))];
    // }

    // localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropID() {
    if (localStorage.getItem('PID')) {
      {/* @ts-ignore */}
      localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1));
      {/* @ts-ignore */}
      return +localStorage.getItem('PID');
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }

 //@ts-ignore
  getPropertyAge(dateofEstablishment: string): string
    {
        const today = new Date();
        const estDate = new Date(dateofEstablishment);
        let age = today.getFullYear() - estDate.getFullYear();
        const m = today.getMonth() - estDate.getMonth();

        // Current month smaller than establishment month or
        // Same month but current date smaller than establishment date
        if (m < 0 || (m === 0 && today.getDate() < estDate.getDate())) {
            age --;
        }

        // Establshment date is future date
        if(today < estDate) {
            return '0';
        }

        // Age is less than a year
        if(age === 0) {
            return 'Less than a year';
        }

        return age.toString();
    }

    setPrimaryPhoto(propertyId: number, propertyPhotoId: string) {
      const httpOptions = {
          headers: new HttpHeaders({
              Authorization: 'Bearer '+ localStorage.getItem('token')
          })
      };
      return this.http.post(this.baseurl + '/property/set-primary-photo/'+String(propertyId)
          +'/'+propertyPhotoId, {}, httpOptions);
  }

  deletePhoto(propertyId: number, propertyPhotoId: string) {
      const httpOptions = {
          headers: new HttpHeaders({
              Authorization: 'Bearer '+ localStorage.getItem('token')
          })
      };
      return this.http.delete(this.baseurl + '/property/delete-photo/'
          +String(propertyId)+'/'+propertyPhotoId, httpOptions);
  }
}
