import { ChangeEvent } from "react";

export interface IUserREgister {
    name: string;
    email: string;
    password: string;
    avatar?: string | undefined;
}

export interface IuserLogin {
    email: string;
    password: string;
}

export interface IreturnRegisterUser {
    name: string;
    email: string;
    avatar: string;
    id: string;
}

export interface iUserResponse {
    token: string;
}
export interface ICardFile {
    name: string;
    size: number;
    type: string;
    file: File;
}
export type FileChangeEvent = ChangeEvent<ICardFile>;
export type CardFile = File | null;
