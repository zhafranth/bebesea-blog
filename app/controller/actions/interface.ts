import type { Role } from "@prisma/client";

export interface PostPayload {
  title: string;
  tags: string;
  status: string;
  date: string;
  category: string;
  is_comment: boolean;
  content: string;
  authorId: string;
}

export interface UserPayload {
  name: string;
  username: string;
  password: string;
  role: Role;
}

export interface CommentPayload {
  name: string;
  email: string;
  comment: string;
  postId: string;
}

export interface VideoPayload {
  title: string;
  url: string;
}
export interface InstagramPayload {
  title: string;
  url: string;
  cover: string;
}
export interface PodcastPayload {
  title: string;
  url: string;
}

export type ColorType =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
