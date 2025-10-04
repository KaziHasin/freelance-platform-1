import { Response } from "express";
interface Tokens {
    accessToken: string;
    refreshToken: string;
}
export declare const setAuthCookies: (res: Response, tokens: Tokens) => void;
export {};
//# sourceMappingURL=cookieHelper.d.ts.map