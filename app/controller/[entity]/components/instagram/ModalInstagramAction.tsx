import { useInstagram } from "@/app/controller/actions/hooks";
import { InstagramPayload } from "@/app/controller/actions/interface";
import Upload from "@/components/molecules/Upload";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Input,
} from "@nextui-org/react";
import { useForm } from "@tanstack/react-form";
import React from "react";

const ModalInstagramAction = ({
  toggle,
  type,
}: {
  toggle: () => void;
  type: "edit" | "add";
}) => {
  const { mutateCreateInstagram } = useInstagram();

  const form = useForm<InstagramPayload>({
    onSubmit: async ({ value }) => {
      mutateCreateInstagram(value as InstagramPayload, {
        onSuccess: toggle,
      });
    },
  });

  const inputStyle = {
    label: "font-bold",
    helperWrapper: "h-6",
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
            <ModalHeader className="flex flex-col gap-1">
              {type} Instagram Feed
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
                <form.Field
                  name="cover"
                  validators={{
                    onChange: ({ value }) =>
                      !value ? "This field is required" : undefined,
                  }}
                >
                  {(field) => {
                    return (
                      <>
                        <Upload
                          name={field.name}
                          onChange={(value) =>
                            field.handleChange(value as string)
                          }
                          value={field.state.value || ""}
                          path="instagram"
                        />
                        {field.state.meta.errors.map((item, index) => (
                          <p
                            className="text-danger-400 mt-1 text-xs"
                            key={index}
                          >
                            {item}
                          </p>
                        ))}
                      </>
                    );
                  }}
                </form.Field>
                <div className="flex mb-8 mt-4 justify-end gap-x-4">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" type="submit" isLoading={false}>
                    Submit
                  </Button>
                </div>
              </form>
            </ModalBody>
            {/* <ModalFooter></ModalFooter> */}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalInstagramAction;
