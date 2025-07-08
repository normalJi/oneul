import type { ApiResponse } from "../common";

export interface LoginRequest {
    email: string;
    userNm: string;
    password: string;
    remember: boolean;    
}

export interface LoginResponse {
    email: string;
    userNm: string;    
    remember: boolean;    
}

export type LoginResult = ApiResponse<LoginResponse>;