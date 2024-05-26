import { ObjectId } from "mongodb";

export interface User {
    _id?: ObjectId;
    username:string;
    email: string;
    password: string;
    role: "ADMIN" | "USER";
}

declare module 'express-session' {
    interface SessionData {
        user?: User; 
    }
}
