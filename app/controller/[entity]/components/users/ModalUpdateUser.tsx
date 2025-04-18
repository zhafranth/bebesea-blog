import { useUser } from "@/app/controller/actions/hooks";
import { UserPayload } from "@/app/controller/actions/interface";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useForm } from "@tanstack/react-form";
import { Role, User } from "@prisma/client";
import React from "react";

const ModalUpdateUser = ({
  toggle,
  data,
}: {
  toggle: () => void;
  data?: User;
}) => {
  const { mutateUpdateUser, pendingUpdate } = useUser();

  const form = useForm({
    defaultValues: {
      name: data?.name,
      username: data?.username,
      role: data?.role,
    },
    onSubmit: async ({ value }) => {
      mutateUpdateUser(
        {
          id: data?.id as string,
          data: value as UserPayload,
        },
        {
          onSuccess: toggle,
        }
      );
    },
  });

  const inputStyle = {
    label: "font-bold",
    helperWrapper: "h-6",
  };

  const ROLE_OPTIONS = [
    {
      key: "ADMIN",
      label: "ADMIN",
    },
    {
      key: "USER",
      label: "USER",
    },
  ];

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
              Update User
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
                  name="username"
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
                        label="Username"
                        placeholder="Input Username"
                        labelPlacement="outside"
                        classNames={inputStyle}
                        radius="sm"
                        isInvalid={field.state.meta.errors.length > 0}
                        errorMessage={field.state.meta.errors}
                        onChange={(e) => field.handleChange(e.target.value)}
                        isDisabled
                      />
                    );
                  }}
                </form.Field>
                <form.Field
                  name="role"
                  validators={{
                    onChange: ({ value }) =>
                      !value ? "This field is required" : undefined,
                  }}
                >
                  {(field) => {
                    return (
                      <Select
                        name={field.name}
                        selectedKeys={[field.state.value] as string[]}
                        label="Role"
                        labelPlacement="outside"
                        placeholder="Select Role"
                        items={ROLE_OPTIONS}
                        classNames={inputStyle}
                        radius="sm"
                        fullWidth
                        onChange={(event) =>
                          field.handleChange(event.target.value as Role)
                        }
                        isInvalid={field.state.meta.errors.length > 0}
                        errorMessage={field.state.meta.errors}
                      >
                        {ROLE_OPTIONS.map((user) => (
                          <SelectItem key={user.key} value={user.key}>
                            {user.label}
                          </SelectItem>
                        ))}
                      </Select>
                    );
                  }}
                </form.Field>
                <div className="flex mb-8 mt-4 justify-end gap-x-4">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    color="primary"
                    type="submit"
                    isLoading={pendingUpdate}
                  >
                    Submit
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

export default ModalUpdateUser;
