import { ChangeEvent } from "react";
import { z } from "zod";
import { registerUserSchema } from "../../schemas/schemas.users";
export interface IUserREgister {
    name: string;
    email: string;
    password: string;
    avatar?: File;
}

export interface IuserLogin {
    email: string;
    password: string;
}

export type IregisterUser = z.infer<typeof registerUserSchema>;

export interface IreturnRegisterUser {
    name: string;
    email: string;
    avatar: string;
    id: string;
}

export interface iUserResponse {
    token: string;
}

export interface IuserInfo {
    adress: boolean;
    avatar: boolean;
    email: string;
    id: string;
    isAdmin: boolean;
    name: string;
    password: string;
    reset_token: boolean;
}
export interface ICardFile {
    name: string;
    size: number;
    type: string;
    file: File;
}
export type FileChangeEvent = ChangeEvent<ICardFile>;
export type CardFile = File | null;
