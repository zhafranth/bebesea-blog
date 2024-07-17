import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createPost,
  createUser,
  delPost,
  getPost,
  getPosts,
  getUsers,
  updatePost,
} from "../networks";
import { PostPayload, UserPayload } from "../interface";

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};

export const useUser = () => {
  const queryClient = useQueryClient();

  const { mutate: mutateCreateUser, isPending: pendingCreate } = useMutation({
    mutationFn: (data: UserPayload) => createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["table-list", "users"] });
    },
  });

  // const { mutate: mutateDeletePost, isPending: pendingDelete } = useMutation({
  //   mutationFn: (id: string) => delPost(id),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["table-list"] });
  //   },
  // });

  return { mutateCreateUser, pendingCreate };
};

export const usePost = () => {
  const queryClient = useQueryClient();

  const { mutate: mutateCreatePost, isPending: pendingCreate } = useMutation({
    mutationFn: (data: PostPayload) => createPost(data),
  });

  const { mutate: mutateUpdatePost, isPending: pendingUpdate } = useMutation({
    mutationFn: ({ data, id }: { data: PostPayload; id: string }) =>
      updatePost(data, id),
  });

  const { mutate: mutateDeletePost, isPending: pendingDelete } = useMutation({
    mutationFn: (id: string) => delPost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["table-list"] });
    },
  });

  return {
    mutateCreatePost,
    pendingCreate,
    mutateDeletePost,
    pendingDelete,
    mutateUpdatePost,
    pendingUpdate,
  };
};

export const useGetPosts = (params?: {
  page: number;
  search: string;
  status: string;
}) => {
  return useQuery({
    queryKey: ["posts", params],
    queryFn: () => getPosts(params),
  });
};

export const useGetPost = (id?: string) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
    enabled: !!id,
  });
};

export const useGetTableList = (
  entity: string,
  params?: { page: number; search: string; status: string }
) => {
  return useQuery({
    queryKey: ["table-list", entity, params],
    queryFn: () => {
      if (entity === "post") {
        return getPosts(params);
      }
      if (entity === "users") {
        return getUsers();
      }
      // return [];
    },
    enabled: !(entity === "videos"),
  });
};
