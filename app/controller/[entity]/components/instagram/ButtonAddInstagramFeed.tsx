import useToggle from "@/utils/hooks/useToggle";
import { Button } from "@nextui-org/react";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import ModalInstagramAction from "./ModalInstagramAction";

const ButtonAddInstagramFeed = () => {
  const { isOpen, toggle } = useToggle();
  return (
    <>
      <Button
        startContent={<FaPlus />}
        color="primary"
        size="sm"
        onPress={toggle}
      >
        Add Instagram Feed
      </Button>
      {isOpen && <ModalInstagramAction toggle={toggle} type="add" />}
    </>
  );
};

export default ButtonAddInstagramFeed;
