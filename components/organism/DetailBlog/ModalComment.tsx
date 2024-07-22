import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Textarea,
} from "@nextui-org/react";
import { useForm } from "@tanstack/react-form";
import { useComment } from "@/app/controller/actions/hooks";
import React from "react";
import { CommentPayload } from "@/app/controller/actions/interface";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

const ModalComment = ({ toggle }: { toggle: () => void }) => {
  const { mutateCreateComment } = useComment();
  const { id } = useParams();

  const queryClient = useQueryClient();

  const form = useForm({
    onSubmit: async ({ value }: any) => {
      const payload = { ...value, postId: id } as CommentPayload;
      mutateCreateComment(payload, {
        onSuccess: ({ message }) => {
          toggle();
          toast.success(message);
          queryClient.invalidateQueries({ queryKey: ["post", id] });
        },
      });
    },
  });

  const inputStyle = {
    label: "font-bold",
    helperWrapper: "h-10",
  };

  return (
    <Modal
      isOpen
      onOpenChange={toggle}
      placement="top"
      isDismissable={false}
      isKeyboardDismissDisabled={true}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Comments</ModalHeader>
            <ModalBody>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  form.handleSubmit();
                }}
              >
                <form.Field
                  name="name"
                  validators={{
                    onChange: ({ value }) =>
                      !value ? "This field is required" : undefined,
                  }}
                >
                  {(field) => {
                    return (
                      <Input
                        name={field.name}
                        value={field.state.value as string}
                        label="Name"
                        placeholder="Input Name"
                        labelPlacement="outside"
                        classNames={inputStyle}
                        radius="sm"
                        isInvalid={field.state.meta.errors.length > 0}
                        errorMessage={field.state.meta.errors}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    );
                  }}
                </form.Field>
                <form.Field
                  name="email"
                  validators={{
                    onChange: ({ value }) =>
                      !value ? "This field is required" : undefined,
                  }}
                >
                  {(field) => {
                    return (
                      <Input
                        name={field.name}
                        value={field.state.value as string}
                        label="Email"
                        placeholder="Input Email"
                        labelPlacement="outside"
                        classNames={inputStyle}
                        radius="sm"
                        isInvalid={field.state.meta.errors.length > 0}
                        errorMessage={field.state.meta.errors}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    );
                  }}
                </form.Field>
                <form.Field
                  name="comment"
                  validators={{
                    onChange: ({ value }) =>
                      !value ? "This field is required" : undefined,
                  }}
                >
                  {(field) => {
                    return (
                      <Textarea
                        name={field.name}
                        value={field.state.value as string}
                        label="Comment"
                        placeholder="Input Comment"
                        labelPlacement="outside"
                        classNames={inputStyle}
                        radius="sm"
                        isInvalid={field.state.meta.errors.length > 0}
                        errorMessage={field.state.meta.errors}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    );
                  }}
                </form.Field>
                <div className="flex mb-8 mt-4 justify-end gap-x-4">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" type="submit" isLoading={false}>
                    Submit Comment
                  </Button>
                </div>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalComment;
