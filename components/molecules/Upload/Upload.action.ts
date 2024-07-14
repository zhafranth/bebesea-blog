"use server";

import mime from "mime";
import { join } from "path";
import { stat, mkdir, writeFile, rm } from "fs/promises";

export const uploadCover = async (formData: FormData) => {
  const file = (formData.get("file") as File) || "";

  const buffer = Buffer.from(await file.arrayBuffer());
  const relativeUploadDir = `/uploads/${new Date(Date.now())
    .toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-")}`;

  const uploadDir = join(process.cwd(), "public", relativeUploadDir);

  try {
    await stat(uploadDir);
  } catch (e: any) {
    if (e.code === "ENOENT") {
      // This is for checking the directory is exist (ENOENT : Error No Entry)
      await mkdir(uploadDir, { recursive: true });
    } else {
      console.error(
        "Error while trying to create directory when uploading a file\n",
        e
      );
      return { status: 500 };
    }
  }

  try {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${file.name.replace(
      /\.[^/.]+$/,
      ""
    )}-${uniqueSuffix}.${mime.getExtension(file.type)}`;
    await writeFile(`${uploadDir}/${filename}`, buffer);
    const fileUrl = `${relativeUploadDir}/${filename}`;

    return {
      data: fileUrl,
      status: 200,
      message: "successfully upload cover",
    };
  } catch (e) {
    console.error("Error while trying to upload a file\n", e);
    return { status: 500, message: "Failed Upload file" };
  }
};

export const removeCover = async (url: string) => {
  const filePath = join(process.cwd(), "public", url as string);

  try {
    await rm(filePath as string);
  } catch (e) {
    console.log("Error remove file", e);
  }
};
