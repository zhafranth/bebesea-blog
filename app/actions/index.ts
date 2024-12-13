"use server";

import { prisma } from "@/lib/prisma";
import { ParamsPosts } from "./interface";

export const actionGetPostList = async (params?: ParamsPosts) => {
  try {
    const { page = 1, search, category, limit = 20 } = params ?? {};
    const posts = await prisma.post.findMany({
      where: {
        title: {
          contains: search as string,
        },
        category,
        status: "publish",
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

    const total = await prisma.post.count({
      where: {
        title: {
          contains: search as string,
        },
        category,
      },
    });

    return {
      data: posts,
      total: total || 0,
      status: 200,
    };
  } catch (error) {
    throw new Error("Failed to fetch posts data");
  }
};
