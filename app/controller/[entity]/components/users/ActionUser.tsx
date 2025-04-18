import { useUser } from "@/app/controller/actions/hooks";
import ModalConfirmation from "@/components/molecules/ModalConfirmation";
import { Button } from "@nextui-org/react";
import { User } from "@prisma/client";
import React, { useCallback, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import ModalUpdateUser from "./ModalUpdateUser";

const ActionUser = ({ data }: { data: User }) => {
  const { id } = data ?? {};

  const [openedModal, setOpenedModal] = useState<"delete" | "edit" | null>(
    null
  );
  const { mutateDeleteUser, pendingDelete } = useUser();

  const handleCloseModal = useCallback(() => {
    setOpenedModal(null);
  }, []);

  const handleDelete = useCallback(() => {
    mutateDeleteUser(id, {
      onSuccess: handleCloseModal,
    });
  }, [handleCloseModal, id, mutateDeleteUser]);

  return (
    <>
      <div className="flex gap-x-4 items-center">
        <Button
          size="sm"
          isIconOnly
          radius="full"
          color="danger"
          onPress={() => setOpenedModal("delete")}
        >
          <FaTrash />
        </Button>
        <Button
          size="sm"
          isIconOnly
          radius="full"
          color="primary"
          onPress={() => setOpenedModal("edit")}
        >
          <MdEditDocument size={16} />
        </Button>
      </div>
      {openedModal === "delete" && (
        <ModalConfirmation
          description="Are you sure want delete the user ?"
          title="Remove User"
          toggle={handleCloseModal}
          onConfirm={handleDelete}
          isLoading={pendingDelete}
        />
      )}
      {openedModal === "edit" && (
        <ModalUpdateUser toggle={handleCloseModal} data={data} />
      )}
    </>
  );
};

export default ActionUser;
