import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

const ButtonAddPost = () => {
  return (
    <Link href="/controller/post/create-post">
      <Button
        startContent={<FaPlus />}
        color="primary"
        size="sm"
        href="/controller/post/create-post"
      >
        Post
      </Button>
    </Link>
  );
};

export default ButtonAddPost;
