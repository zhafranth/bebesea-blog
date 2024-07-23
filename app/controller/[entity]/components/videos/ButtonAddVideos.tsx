"use client";

import useToggle from "@/utils/hooks/useToggle";
import { Button } from "@nextui-org/react";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import ModalActionVideos from "./ModalActionVideos";

const ButtonAddVideos = () => {
  const { isOpen, toggle } = useToggle();

  return (
    <>
      <Button
        startContent={<FaPlus />}
        color="primary"
        size="sm"
        onPress={toggle}
      >
        Add Videos
      </Button>
      {isOpen && <ModalActionVideos toggle={toggle} type="add" />}
    </>
  );
};

export default ButtonAddVideos;
