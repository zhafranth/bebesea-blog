import { Button } from "@nextui-org/react";
import React, { useCallback, useRef, useState } from "react";
import { BsUpload } from "react-icons/bs";
import { useUpload } from "./hooks";
import { FaX } from "react-icons/fa6";

const Upload = ({
  onChange,
  name,
  value,
}: {
  onChange: (e: string | null) => void;
  name: string;
  value?: string;
}) => {
  const { mutateUpload, mutateRemove } = useUpload();
  const inputFileReference = useRef<HTMLInputElement>(null);

  const clearInputFile = () => {
    if (inputFileReference.current) {
      inputFileReference.current.value = "";
    }
  };

  const onButtonClick = useCallback(() => {
    if (inputFileReference.current) {
      inputFileReference.current.click();
    }
  }, []);

  const handleImport = useCallback(
    async (event_: React.ChangeEvent<HTMLInputElement>) => {
      const data = new FormData();
      const rawFile = event_.target.files && event_.target.files[0];
      data.set("file", rawFile as File);

      mutateUpload(data, {
        onSuccess(data) {
          onChange(data?.data as unknown as string);
        },
      });
    },
    [mutateUpload, onChange]
  );

  const onRemoveFile = useCallback(() => {
    mutateRemove(value as string, {
      onSuccess: () => {
        clearInputFile();
        onChange(null);
      },
    });
  }, [mutateRemove, onChange, value]);

  return (
    <div className="flex gap-x-3 items-center">
      <input
        type="file"
        name={name}
        accept={".png, .jpg, .jpeg"}
        ref={inputFileReference}
        className="hidden"
        onChange={handleImport}
        data-testid="input-button-import"
      />
      <Button
        color="primary"
        radius="full"
        size="sm"
        className="w-44"
        startContent={<BsUpload />}
        onPress={onButtonClick}
        isDisabled={!!value}
      >
        Upload
      </Button>
      {!!value && (
        <>
          <p>{value || ""}</p>
          <Button
            isIconOnly
            variant="flat"
            size="sm"
            radius="full"
            color="danger"
            onPress={onRemoveFile}
          >
            <FaX />
          </Button>
        </>
      )}
    </div>
  );
};

export default Upload;
