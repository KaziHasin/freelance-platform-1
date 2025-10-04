export declare class GoogleAuthService {
    private userRepo;
    private client;
    private authService;
    private developerService;
    private clientService;
    loginOrSignup(data: {
        token: string;
        role: string;
    }): Promise<{
        user: import("mongoose").Document<unknown, {}, import("../models/User").IUser, {}, {}> & import("../models/User").IUser & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
}
//# sourceMappingURL=googleAuthService.d.ts.map