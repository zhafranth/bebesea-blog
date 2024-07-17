import {
  actionCreatePost,
  actionCreateUser,
  actionGetPosts,
  actionGetUsers,
  actionRemovePost,
  actionGetPost,
  actionUpdatePost,
} from "..";
import { PostPayload, UserPayload } from "../interface";
import type { Post } from "@prisma/client";

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
  page: number;
  search: string;
  status: string;
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
