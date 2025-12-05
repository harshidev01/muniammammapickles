export type loginRequestType = {
    emailId:string;
    password:string;
    otp?:number;
    googleLogin?:boolean
    profileUrl?:string
    firstName?:string
}