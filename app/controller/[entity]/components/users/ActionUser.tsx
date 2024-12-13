import ModalConfirmation from "@/components/molecules/ModalConfirmation";
import useToggle from "@/utils/hooks/useToggle";
import { Button } from "@nextui-org/react";
import { User } from "@prisma/client";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";

const ActionUser = ({ data }: { data: User }) => {
  const { isOpen, toggle } = useToggle();
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
        <Button size="sm" isIconOnly radius="full" color="primary">
          <MdEditDocument size={16} />
        </Button>
      </div>
      {isOpen && (
        <ModalConfirmation
          description="Are you sure want delete the user ?"
          title="Remove User"
          toggle={toggle}
          onConfirm={toggle}
          isLoading={false}
        />
      )}
    </>
  );
};

export default ActionUser;
