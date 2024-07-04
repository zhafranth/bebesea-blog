import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log("this is called");

    return Response.json({
      message: "sample is called",
    });
  } catch (error) {
    return error;
  }
};
