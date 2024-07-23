import { useVideo } from "@/app/controller/actions/hooks";
import ModalConfirmation from "@/components/molecules/ModalConfirmation";
import useToggle from "@/utils/hooks/useToggle";
import { Button } from "@nextui-org/react";
import { Video } from "@prisma/client";
import React, { useCallback, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";
import ModalActionVideos from "./ModalActionVideos";

const ActionVideos = ({ data }: { data: Video }) => {
  const [showModal, setShowModal] = useState<"edit" | "del" | null>(null);
  const { mutateDeleteVideo, pendingDeleteVideo } = useVideo();

  const { id } = data ?? {};

  const closeModal = useCallback(() => setShowModal(null), []);

  const handleDeletePost = useCallback(() => {
    mutateDeleteVideo(id, {
      onSuccess: () => {
        closeModal();
      },
    });
  }, [id, mutateDeleteVideo, closeModal]);

  return (
    <>
      <div className="flex gap-x-4 items-center">
        <Button
          size="sm"
          isIconOnly
          radius="full"
          color="danger"
          onPress={() => setShowModal("del")}
        >
          <FaTrash />
        </Button>
        <Button
          size="sm"
          isIconOnly
          radius="full"
          color="primary"
          onPress={() => setShowModal("edit")}
        >
          <MdEditDocument size={16} />
        </Button>
      </div>
      {showModal === "edit" && (
        <ModalActionVideos toggle={closeModal} type="edit" data={data} />
      )}
      {showModal === "del" && (
        <ModalConfirmation
          description="Are you sure want delete video ?"
          title="Remove Video"
          toggle={closeModal}
          onConfirm={handleDeletePost}
          isLoading={pendingDeleteVideo}
        />
      )}
    </>
  );
};

export default ActionVideos;
