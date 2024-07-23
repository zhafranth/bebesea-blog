import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Input,
} from "@nextui-org/react";
import { useForm } from "@tanstack/react-form";
import { useVideo } from "@/app/controller/actions/hooks";
import { toast } from "react-toastify";
import { VideoPayload } from "@/app/controller/actions/interface";
import { Video } from "@prisma/client";

const ModalActionVideos = ({
  toggle,
  type,
  data,
}: {
  type: "add" | "edit";
  toggle: () => void;
  data?: Video;
}) => {
  const { mutateCreateVideo, mutateUpdateVideo } = useVideo();
  const { id } = data ?? {};

  const onSuccess = ({ message }: { message: string }) => {
    toggle();
    toast.success(message);
  };

  const form = useForm<VideoPayload>({
    defaultValues: {
      title: data?.title ?? "",
      url: data?.url ?? "",
    },
    onSubmit: async ({ value }) => {
      if (type === "add") {
        mutateCreateVideo(value, {
          onSuccess,
        });
      } else {
        mutateUpdateVideo(
          { data: value, id: id as string },
          {
            onSuccess,
          }
        );
      }
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
            <ModalHeader className="flex flex-col gap-1 capitalize">
              {type} Videos
            </ModalHeader>
            <ModalBody>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  form.handleSubmit();
                }}
              >
                <form.Field
                  name="title"
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
                        label="Title"
                        placeholder="Input Title"
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
                  name="url"
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
                        label="URL"
                        placeholder="Input URL"
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
                    Add Video
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

export default ModalActionVideos;
