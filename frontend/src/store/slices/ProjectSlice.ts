import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/lib/baseQueryWithReauth";
import { API_ENDPOINTS } from "@/lib/api";
import {
    ProjectListResponse,
    ProjectDetailResponse,
    CreateProjectRequest,
    CreateProjectResponse,
    UpdateProjectRequest,
    DeleteProjectResponse,
} from "@/types/project";

export const projectApi = createApi({
    reducerPath: "projectApi",
    baseQuery: baseQueryWithReauth,
    tagTypes: ["Projects"],
    endpoints: (builder) => ({
        getProjects: builder.query<ProjectListResponse, string | void>({
            query: (search) => ({
                url: API_ENDPOINTS.PROJECTS.LIST,
                method: "GET",
                params: search ? { search } : {},
            }),
            providesTags: ["Projects"],
        }),

        getProjectById: builder.query<ProjectDetailResponse, string>({
            query: (id) => ({
                url: API_ENDPOINTS.PROJECTS.DETAIL(id),
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "Projects", id }],
        }),

        createProject: builder.mutation<any, CreateProjectRequest | FormData>({
            query: (formData) => {
                return {
                    url: API_ENDPOINTS.PROJECTS.CREATE,
                    method: "POST",
                    body: formData
                };
            },
            invalidatesTags: ["Projects"],
        }),



        updateProject: builder.mutation<ProjectDetailResponse, UpdateProjectRequest>({
            query: ({ id, ...body }) => ({
                url: API_ENDPOINTS.PROJECTS.UPDATE(id),
                method: "PUT",
                body,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: "Projects", id }],
        }),

        deleteProject: builder.mutation<DeleteProjectResponse, string>({
            query: (id) => ({
                url: API_ENDPOINTS.PROJECTS.DELETE(id),
                method: "DELETE",
            }),
            invalidatesTags: ["Projects"],
        }),
    }),
});

export const {
    useGetProjectsQuery,
    useGetProjectByIdQuery,
    useCreateProjectMutation,
    useUpdateProjectMutation,
    useDeleteProjectMutation,
} = projectApi;
