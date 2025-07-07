export interface ApiResponse<T> {
    code: number;
    msg: string;
    token: string;
    data: T;
}