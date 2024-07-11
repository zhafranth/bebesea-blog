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

export const actionGetPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            name: true,
            role: true,
            username: true,
          },
        },
      },
    });
    return {
      data: posts,
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
