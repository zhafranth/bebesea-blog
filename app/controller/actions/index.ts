"use server";

import { prisma } from "@/lib/prisma";
import { PostPayload, UserPayload } from "./interface";

// USERS ACTION ================================

export const actionGetUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      select: {
        username: true,
        id: true,
        name: true,
        role: true,
      },
    });
    return {
      data: users,
      status: 200,
      total: 0,
      message: "success get users",
    };
  } catch (error) {
    throw new Error("Failed to fetch users data");
  }
};

export const actionCreateUser = async (data: UserPayload) => {
  try {
    await prisma.user.create({
      data,
    });
    return {
      status: 200,
      message: "Success create users",
    };
  } catch (error) {
    throw new Error("Failed to create user");
  }
};

// POSTS ACTION ================================

export const actionCreatePost = async (data: PostPayload) => {
  try {
    const post = await prisma.post.create({
      data,
    });
    return {
      status: 200,
      message: "Success create post",
    };
  } catch (error) {
    throw new Error("Failed to fetch posts data");
  }
};

export const actionGetPosts = async (params?: {
  page: number;
  search: string;
  status: string;
}) => {
  try {
    const { page = 1, search, status } = params ?? {};
    const limit = 20;
    const posts = await prisma.post.findMany({
      where: {
        title: {
          contains: search as string,
        },
        status,
      },
      include: {
        author: {
          select: {
            name: true,
            role: true,
            username: true,
          },
        },
      },
      take: +limit,
      skip: +limit * (+page - 1),
      orderBy: {
        createdAt: "desc",
      },
    });

    const total = await prisma.post.count();
    return {
      data: posts,
      total: total || 0,
      status: 200,
    };
  } catch (error) {
    throw new Error("Failed to fetch posts data");
  }
};

export const actionRemovePost = async (id: string) => {
  try {
    await prisma.post.delete({
      where: {
        id,
      },
    });

    return {
      status: 200,
      message: "Success remove post",
    };
  } catch (error) {
    throw new Error("Failed to fetch posts data");
  }
};

export const actionGetPost = async (id: string) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    return {
      data: post,
      status: 200,
    };
  } catch (error) {
    throw new Error("Failed to fetch post data");
  }
};

export const actionUpdatePost = async (data: PostPayload, id: string) => {
  try {
    await prisma.post.update({
      where: {
        id,
      },
      data,
    });
    return {
      status: 200,
      message: "Success edit post",
    };
  } catch (error) {
    throw new Error("Failed to fetch posts data");
  }
};
