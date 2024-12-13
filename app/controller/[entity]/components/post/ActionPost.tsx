"use client";

import { usePost } from "@/app/controller/actions/hooks";
import ModalConfirmation from "@/components/molecules/ModalConfirmation";
import { Button } from "@nextui-org/react";
import type { Post } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";

const ActionPost = ({ data }: { data: Post }) => {
  const { mutateDeletePost, pendingDelete } = usePost();
  const [isShow, setIsShow] = useState(false);

  const router = useRouter();

  const { id } = data ?? {};

  const toggle = useCallback(() => setIsShow((prevState) => !prevState), []);

  const handleDeletePost = useCallback(() => {
    mutateDeletePost(id, {
      onSuccess: () => {
        toggle();
      },
    });
  }, [id, mutateDeletePost, toggle]);

  return (
    <>
      <div className="flex gap-x-4 items-center">
        <Button
          size="sm"
          isIconOnly
          radius="full"
          color="danger"
          onPress={toggle}
        >
          <FaTrash />
        </Button>
        <Button
          size="sm"
          isIconOnly
          radius="full"
          color="primary"
          onPress={() => router.push(`/controller/post/${id}`)}
        >
          <MdEditDocument size={16} />
        </Button>
        <Link href={`/preview/${id}`} target="_blank">
          <Button size="sm" isIconOnly radius="full" color="warning">
            <FaEye size={16} className="text-white" />
          </Button>
        </Link>
      </div>
      {isShow && (
        <ModalConfirmation
          description="Are you sure want delete the post ?"
          title="Remove Post"
          toggle={toggle}
          onConfirm={handleDeletePost}
          isLoading={pendingDelete}
        />
      )}
    </>
  );
};

export default ActionPost;
