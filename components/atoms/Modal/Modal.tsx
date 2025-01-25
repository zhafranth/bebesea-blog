import {
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Modal as ModalNextUI,
} from "@nextui-org/react";
import React from "react";

const Modal = ({
  toggle,
  title,
  children,
  onConfirm,
  confirmText = "Submit",
  cancelText = "Close",
  footer = [],
}: {
  toggle: () => void;
  onConfirm?: () => void;
  title: string;
  children: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  footer?: React.ReactNode[];
}) => {
  return (
    <ModalNextUI
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
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              {footer ? (
                footer
              ) : (
                <>
                  <Button color="danger" variant="light" onPress={onClose}>
                    {cancelText}
                  </Button>
                  <Button
                    color="primary"
                    type="submit"
                    onPress={onConfirm}
                    isLoading={false}
                  >
                    {confirmText}
                  </Button>
                </>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </ModalNextUI>
  );
};

export default Modal;
