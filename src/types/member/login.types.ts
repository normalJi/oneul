import type { ApiResponse } from "../common";

export interface LoginRequest {
    email: string;
    userNm: string;
    password: string;
    remember: boolean;    
}

export interface LoginResponse {
    code: number;
    email: string;
    userNm: string;    
    remember: boolean;    
}

export type LoginResult = ApiResponse<LoginResponse>;