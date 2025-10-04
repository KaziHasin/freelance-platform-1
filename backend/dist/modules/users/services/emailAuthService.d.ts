export declare class EmailAuthService {
    private userRepo;
    private authService;
    private developerService;
    private clientService;
    signup(data: {
        name: string;
        email: string;
        password: string;
        role: string;
    }): Promise<{
        user: {
            _id: import("mongoose").Types.ObjectId;
            name: string;
            email?: string;
            phone?: string;
            provider: import("../models/User").Provider;
            role: import("../models/User").Role;
            status: "ACTIVE" | "INACTIVE";
            otp?: string | null;
            otpExpiresAt?: Date | null;
            lastLoginAt?: Date;
            createdAt: Date;
            updatedAt: Date;
            $locals: Record<string, unknown>;
            $op: "save" | "validate" | "remove" | null;
            $where: Record<string, unknown>;
            baseModelName?: string;
            collection: import("mongoose").Collection;
            db: import("mongoose").Connection;
            errors?: import("mongoose").Error.ValidationError;
            id?: any;
            isNew: boolean;
            schema: import("mongoose").Schema;
        };
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    login(data: {
        email: string;
        password: string;
    }): Promise<{
        user: {
            _id: import("mongoose").Types.ObjectId;
            name: string;
            email?: string;
            phone?: string;
            provider: import("../models/User").Provider;
            role: import("../models/User").Role;
            status: "ACTIVE" | "INACTIVE";
            otp?: string | null;
            otpExpiresAt?: Date | null;
            lastLoginAt?: Date;
            createdAt: Date;
            updatedAt: Date;
            $locals: Record<string, unknown>;
            $op: "save" | "validate" | "remove" | null;
            $where: Record<string, unknown>;
            baseModelName?: string;
            collection: import("mongoose").Collection;
            db: import("mongoose").Connection;
            errors?: import("mongoose").Error.ValidationError;
            id?: any;
            isNew: boolean;
            schema: import("mongoose").Schema;
        };
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
}
//# sourceMappingURL=emailAuthService.d.ts.map