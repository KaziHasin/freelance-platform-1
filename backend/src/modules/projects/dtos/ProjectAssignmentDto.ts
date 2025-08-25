export interface ProjectAssignmentDto {
  projectId: string;
  developerId: string;
  status: "PENDING" | "ACCEPTED" | "REJECTED" | "TIMEOUT";
  assignedAt: Date;
  respondedAt?: Date;
}
