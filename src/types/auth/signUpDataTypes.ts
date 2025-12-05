
export type signUpRequestType = {
    firstName: string;
    lastName?: string;
    emailId: string;
    password?: string;
    mobileNumber: string;
    otp?: number;
    googleSignUp?: boolean;
    profileUrl?:string
}