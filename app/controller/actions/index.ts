"use server";

import { prisma } from "@/lib/prisma";
import {
  CommentPayload,
  PodcastPayload,
  PostPayload,
  UserPayload,
  VideoPayload,
} from "./interface";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

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
    console.log("error:", error);
    throw new Error("Failed to create post");
  }
};

export const actionGetPosts = async (params?: {
  page?: number;
  search?: string;
  status?: string;
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
        comments: true,
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

export const actionGetPost = async (id?: string) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
      include: {
        author: {
          select: {
            name: true,
            role: true,
            username: true,
          },
        },
        comments: true,
      },
    });
    return {
      data: post,
      status: 200,
    };
  } catch (error) {
    throw new Error("Failed to delete post");
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
    throw new Error("Failed to edit posts");
  }
};

//  COMMENTS ACTIONS ===========================
export const actionCreateComment = async (data: CommentPayload) => {
  try {
    await prisma.comment.create({
      data,
    });
    return {
      status: 200,
      message: "Success create comment",
    };
  } catch (error) {
    console.log("error:", error);
    throw new Error("Failed to create comment");
  }
};

export const actionRemoveComment = async (id: string) => {
  try {
    await prisma.comment.delete({
      where: {
        id,
      },
    });

    return {
      status: 200,
      message: "Success remove comment",
    };
  } catch (error) {
    throw new Error("Failed to fetch comments data");
  }
};

//  VIDEO ===========================

export const actionGetVideo = async (params?: {
  page?: number;
  limit?: number;
}) => {
  try {
    const { page = 1, limit = 20 } = params ?? {};
    const videos = await prisma.video.findMany({
      take: +limit,
      skip: +limit * (+page - 1),
      orderBy: {
        createdAt: "desc",
      },
    });

    const total = await prisma.video.count();
    return {
      data: videos,
      total: total || 0,
      status: 200,
    };
  } catch (error) {
    throw new Error("Failed to fetch videos data");
  }
};

export const actionCreateVideo = async (data: VideoPayload) => {
  try {
    await prisma.video.create({
      data,
    });
    return {
      status: 200,
      message: "Success create video",
    };
  } catch (error) {
    console.log("error:", error);
    throw new Error("Failed to create video");
  }
};

export const actionUpdateVideo = async (data: VideoPayload, id: string) => {
  try {
    await prisma.video.update({
      where: {
        id,
      },
      data,
    });
    return {
      status: 200,
      message: "Success update video",
    };
  } catch (error) {
    console.log("error:", error);
    throw new Error("Failed to update video");
  }
};

export const actionRemoveVideo = async (id: string) => {
  try {
    await prisma.video.delete({
      where: {
        id,
      },
    });

    return {
      status: 200,
      message: "Success remove video",
    };
  } catch (error) {
    throw new Error("Failed to fetch videos data");
  }
};

// PODCAST =========================

export const actionGetPodcast = async () => {
  try {
    const podcast = await prisma.podcast.findUnique({
      where: {
        id: 1,
      },
    });

    return {
      data: podcast,
      message: "Success get podcast",
      status: 200,
    };
  } catch (error) {
    throw new Error("Failed to fetch podcast data");
  }
};

export const actionUpdatePodcast = async (data: PodcastPayload) => {
  try {
    await prisma.podcast.update({
      where: {
        id: 1,
      },
      data,
    });
    return {
      status: 200,
      message: "Success update podcast",
    };
  } catch (error) {
    console.log("error:", error);
    throw new Error("Failed to update podcast");
  }
};

export const actionGetProfile = async () => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.username) {
      throw new Error("Invalid credentials");
    }

    const user = await prisma?.user.findUnique({
      where: {
        username: session.user.username,
      },
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    return { user };
  } catch (error) {
    throw new Error("Failed to update podcast");
  }
};
