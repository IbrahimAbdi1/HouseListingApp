import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { Property } from '../../model/property';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
public propertyId!: number;

public mainPhotoUrl: string = "assets/images/house_default.png";
property = new Property();
galleryOptions!: NgxGalleryOptions[];
galleryImages!: NgxGalleryImage[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private housingService: HousingService) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      // @ts-ignore
      (data: Property) => {
        // @ts-ignore
        this.property = data['prp'];
        console.log(this.property.photos)
      }

      
    );
    //@ts-ignore
    this.property.age = this.housingService.getPropertyAge(this.property.estPossessionOn)
    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data: Property) => {
    //         this.property = data;
    //       }, error => this.router.navigate(['/'])
    //     );
    //   }
    // );

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true
      }
    ];

    this.galleryImages = this.getPropertPhotos();
    // this.galleryImages = [
    //   {
    //     small: 'https://pbs.twimg.com/media/F4Sj5YhbIAEKsco?format=jpg&name=4096x4096',
    //     medium: 'https://pbs.twimg.com/media/F4Sj5YhbIAEKsco?format=jpg&name=4096x4096',
    //     big: 'https://pbs.twimg.com/media/F4Sj5YhbIAEKsco?format=jpg&name=4096x4096'
    //   },
    //   {
    //     small: 'https://pbs.twimg.com/media/F4Sj5YhbIAEKsco?format=jpg&name=4096x4096',
    //     medium: 'https://pbs.twimg.com/media/F4Sj5YhbIAEKsco?format=jpg&name=4096x4096',
    //     big: 'https://pbs.twimg.com/media/F4Sj5YhbIAEKsco?format=jpg&name=4096x4096'
    //   },
    //   {
    //     small: 'https://pbs.twimg.com/media/F4Sj5YhbIAEKsco?format=jpg&name=4096x4096',
    //     medium: 'https://pbs.twimg.com/media/F4Sj5YhbIAEKsco?format=jpg&name=4096x4096',
    //     big: 'https://pbs.twimg.com/media/F4Sj5YhbIAEKsco?format=jpg&name=4096x4096'
    //   },
    //   {
    //     small: 'https://pbs.twimg.com/media/F4Sj5YhbIAEKsco?format=jpg&name=4096x4096',
    //     medium: 'https://pbs.twimg.com/media/F4Sj5YhbIAEKsco?format=jpg&name=4096x4096',
    //     big: 'https://pbs.twimg.com/media/F4Sj5YhbIAEKsco?format=jpg&name=4096x4096'
    //   },
    //   {
    //     small: 'https://pbs.twimg.com/media/F4Sj5YhbIAEKsco?format=jpg&name=4096x4096',
    //     medium: 'https://pbs.twimg.com/media/F4Sj5YhbIAEKsco?format=jpg&name=4096x4096',
    //     big: 'https://pbs.twimg.com/media/F4Sj5YhbIAEKsco?format=jpg&name=4096x4096'
    //   }
    // ];


  }

  getPropertPhotos(): NgxGalleryImage[]{
      const photoUrls: NgxGalleryImage[] = [];
      if(this.property.photos){
      for (const photo of this.property.photos) {
          if(photo.isPrimary)
          {
              this.mainPhotoUrl = photo.imageUrl;
          }
          else{
              photoUrls.push(
                  {
                      small: photo.imageUrl,
                      medium: photo.imageUrl,
                      big: photo.imageUrl
                  }
              ); }
      }
    }
      return photoUrls;
  }
  
}
