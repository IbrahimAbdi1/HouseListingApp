export interface User {
    userName?: string;
    email?: string;
    password?: string;
    mobile?: number;
}
 
export interface UserForLogin {
    userName: string;
    password: string;
    
}

export interface UserForRegister{
  userName?: string;
  email?: string;
  password?: string;
  mobile?: number;
  
}


export interface LoginRes{
  userName: string;
  token: string;
}