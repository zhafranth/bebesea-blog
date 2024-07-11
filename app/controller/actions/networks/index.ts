import {
  actionCreatePost,
  actionCreateUser,
  actionGetPosts,
  actionGetUsers,
  actionRemovePost,
} from "..";
import { PostPayload, UserPayload } from "../interface";

export const getUsers = async () => {
  const response = await actionGetUsers();
  return response.data;
};

export const createPost = async (data: PostPayload) => {
  const response = await actionCreatePost(data);
  return response;
};
export const createUser = async (data: UserPayload) => {
  const response = await actionCreateUser(data);
  return response;
};

export const getPosts = async () => {
  const response: { data: any; status: number } = await actionGetPosts();
  return response.data;
};

export const delPost = async (id: string) => {
  const response = await actionRemovePost(id);
  return response?.message;
};
