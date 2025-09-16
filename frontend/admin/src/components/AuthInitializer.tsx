import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

const AuthInitializer = () => {
    // const { refreshAccessToken } = useAuth();

    // useEffect(() => {
    //     refreshAccessToken(); // Call once on mount

    //     const handleVisibility = () => {
    //         if (document.visibilityState === "visible") {
    //             refreshAccessToken();
    //         }
    //     };

    //     document.addEventListener("visibilitychange", handleVisibility);
    //     return () => {
    //         document.removeEventListener("visibilitychange", handleVisibility);
    //     };
    // }, [refreshAccessToken]); // ✅ Only re-run if refreshAccessToken changes

    return null;
};

export default AuthInitializer;
