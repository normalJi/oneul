import type { ApiResponse } from "../common";

export interface MemJoinRequest {
    email: string;
    name: string;
    password: string;
    passChk: string;
    phonNum: string;
    genderCd: number;
    agree: boolean;
    agree2: boolean;
}

export interface MemJoinResponse {
    email: string;
    name: string;    
}

export type MemJoinResult = ApiResponse<MemJoinResponse>;