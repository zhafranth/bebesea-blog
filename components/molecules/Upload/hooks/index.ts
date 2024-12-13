import { useMutation } from "@tanstack/react-query";
import { uploadCover, removeCover } from "../Upload.action";

export const postUploadCover = async (data: FormData) => {
  const response = await uploadCover(data);
  return response;
};

export const useUpload = () => {
  const { mutate: mutateUpload, isPending: loadingUpload } = useMutation({
    mutationFn: (data: FormData) => postUploadCover(data),
  });
  const { mutate: mutateRemove, isPending: loadingRemove } = useMutation({
    mutationFn: (url: string) => removeCover(url),
  });

  return { mutateUpload, loadingUpload, mutateRemove, loadingRemove };
};
