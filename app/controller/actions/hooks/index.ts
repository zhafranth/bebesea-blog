import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createPost,
  createUser,
  delPost,
  getPosts,
  getUsers,
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

  const { mutate: mutateDeletePost, isPending: pendingDelete } = useMutation({
    mutationFn: (id: string) => delPost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["table-list"] });
    },
  });

  return { mutateCreatePost, pendingCreate, mutateDeletePost, pendingDelete };
};

export const useGetPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};

export const useGetTableList = (entity: string) => {
  return useQuery({
    queryKey: ["table-list", entity],
    queryFn: () => {
      if (entity === "post") {
        return getPosts();
      }
      if (entity === "users") {
        return getUsers();
      }
      // return [];
    },
    enabled: !(entity === "videos"),
  });
};
