"use server";

import { actionGetPostList } from "..";
import { ParamsPosts } from "../interface";
import { Post } from "@prisma/client";

export const getPostsList = async (params?: ParamsPosts) => {
  const response: { data: Post[]; status: number; total: number } =
    await actionGetPostList(params);
  return response;
};
