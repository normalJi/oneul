import type { ApiResponse } from "./common";

export interface LoginRequest {
    email: string;
    userNm: string;
    password: string;
    remember: boolean;
    area: string;
}

export interface LoginResponse {
    email: string;
    userNm: string;    
    remember: boolean;
    area: string;
}

export type LoginResult = ApiResponse<LoginResponse>;