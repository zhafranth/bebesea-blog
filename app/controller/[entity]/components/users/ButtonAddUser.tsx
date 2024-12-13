import useToggle from "@/utils/hooks/useToggle";
import { Button } from "@nextui-org/react";
import React from "react";
import { FaPlus } from "react-icons/fa";
import ModalUser from "./ModalUser";

const ButtonAddUser = () => {
  const { isOpen, toggle } = useToggle();
  return (
    <>
      <Button
        startContent={<FaPlus />}
        color="primary"
        size="sm"
        onPress={toggle}
      >
        Add User
      </Button>
      {isOpen && <ModalUser toggle={toggle} />}
    </>
  );
};

export default ButtonAddUser;
