"use client";

import useToggle from "@/utils/hooks/useToggle";
import {
  Accordion,
  AccordionItem,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { Comment } from "@prisma/client";
import dayjs from "dayjs";
import React from "react";
import { FaTrash } from "react-icons/fa6";
import { useComment } from "../../actions/hooks";

const TagComment = ({
  value,
  comments,
}: {
  value: boolean;
  comments: Comment[];
}) => {
  const { isOpen, toggle } = useToggle();
  const { mutateDeleteComment, pendingDeleteComment } = useComment();
  return (
    <>
      <Button
        size="sm"
        radius="full"
        className="text-[10px] font-bold h-7"
        color={value ? "primary" : "default"}
        isDisabled={comments.length === 0}
        onPress={toggle}
      >
        {value ? "Show" : "Hide"} | {comments?.length || 0}
      </Button>
      {isOpen && (
        <Modal
          isOpen
          onOpenChange={toggle}
          placement="top"
          isDismissable={false}
          isKeyboardDismissDisabled={true}
          size="3xl"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Comments
                </ModalHeader>
                <ModalBody className="mb-8">
                  <Accordion variant="splitted">
                    {comments?.map((item, index) => (
                      <AccordionItem
                        key={index}
                        aria-label={`Accordion ${index}`}
                        title={item.name}
                        subtitle={`${dayjs(item.createdAt).format(
                          "DD MMM YYYY"
                        )} | ${item.email}`}
                        classNames={{
                          title: "text-base",
                        }}
                        startContent={
                          <Button
                            isIconOnly
                            radius="full"
                            color="danger"
                            variant="flat"
                            size="sm"
                            onPress={() => mutateDeleteComment(item.id)}
                            isLoading={pendingDeleteComment}
                          >
                            <FaTrash />
                          </Button>
                        }
                      >
                        <Divider className="mb-4" />
                        <p className="text-sm mb-6">{item.comment}</p>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default TagComment;
