import {
  actionCreatePost,
  actionCreateUser,
  actionGetPosts,
  actionGetUsers,
  actionRemovePost,
  actionGetPost,
  actionUpdatePost,
  actionCreateComment,
  actionRemoveComment,
  actionCreateVideo,
  actionRemoveVideo,
  actionGetVideo,
  actionUpdateVideo,
} from "..";
import {
  CommentPayload,
  PostPayload,
  UserPayload,
  VideoPayload,
} from "../interface";
import type { Post, Video } from "@prisma/client";

export const getUsers = async () => {
  const response = await actionGetUsers();
  return response;
};

export const createPost = async (data: PostPayload) => {
  const response = await actionCreatePost(data);
  return response;
};

export const updatePost = async (data: PostPayload, id: string) => {
  const response = await actionUpdatePost(data, id);
  return response;
};

export const createUser = async (data: UserPayload) => {
  const response = await actionCreateUser(data);
  return response;
};

export const getPosts = async (params?: {
  page?: number;
  search?: string;
  status?: string;
}) => {
  const response: { data: any; status: number; total: number } =
    await actionGetPosts(params);
  return response;
};

export const delPost = async (id: string) => {
  const response = await actionRemovePost(id);
  return response?.message;
};

export const getPost = async (id?: string) => {
  const response: { data: Post | null; status: number } = await actionGetPost(
    id
  );
  return response.data;
};

export const createComment = async (data: CommentPayload) => {
  const response = await actionCreateComment(data);
  return response;
};

export const delComment = async (id: string) => {
  const response = await actionRemoveComment(id);
  return response?.message;
};

export const getVideos = async (params?: { page?: number; limit?: number }) => {
  const response: { data: Video[]; status: number; total: number } =
    await actionGetVideo(params);
  return response;
};

export const createVideo = async (data: VideoPayload) => {
  const response = await actionCreateVideo(data);
  return response;
};
export const updateVideo = async (data: VideoPayload, id: string) => {
  const response = await actionUpdateVideo(data, id);
  return response;
};

export const delVideo = async (id: string) => {
  const response = await actionRemoveVideo(id);
  return response?.message;
};
