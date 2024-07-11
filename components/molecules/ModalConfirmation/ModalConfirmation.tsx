import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";

const ModalConfirmation = ({
  isLoading,
  onConfirm,
  toggle,
  title,
  description,
  okText = "Submit",
  cancelText = "Close",
}: {
  onConfirm: () => void;
  isLoading?: boolean;
  toggle: () => void;
  description: string;
  title: string;
  okText?: string;
  cancelText?: string;
}) => {
  return (
    <Modal
      isOpen
      onOpenChange={toggle}
      placement="center"
      isDismissable={false}
      isKeyboardDismissDisabled={true}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              <p>{description}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                {cancelText}
              </Button>
              <Button color="primary" onPress={onConfirm} isLoading={isLoading}>
                {okText}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalConfirmation;
