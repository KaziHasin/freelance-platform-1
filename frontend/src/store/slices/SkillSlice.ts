import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/lib/baseQueryWithReauth";
import { API_ENDPOINTS } from "@/lib/api";
import { ResolveSkillsRequest, ResolveSkillsResponse, skillsResponse } from "@/types/skill";


export const skillApi = createApi({
    reducerPath: "skillApi",
    baseQuery: baseQueryWithReauth,
    tagTypes: ["Skills"],
    endpoints: (builder) => ({
        listSkills: builder.query<skillsResponse, string | void>({
            query: (search) => ({
                url: API_ENDPOINTS.SKILLS.LIST,
                method: "GET",
                params: {
                    limit: 10,
                    ...(search ? { search } : {}),
                },
            }),
            providesTags: ["Skills"],
        }),

        resolveSkills: builder.mutation<ResolveSkillsResponse, ResolveSkillsRequest>({
            query: (body) => ({
                url: API_ENDPOINTS.SKILLS.RESOLVE,
                method: "POST",
                body,
            }),
            invalidatesTags: ["Skills"],
        }),
    }),
});

export const { useListSkillsQuery, useResolveSkillsMutation } = skillApi;
