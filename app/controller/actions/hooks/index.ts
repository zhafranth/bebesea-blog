import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createComment,
  createInstagram,
  createPost,
  createUser,
  createVideo,
  delComment,
  delPost,
  delVideo,
  getInstagram,
  getPodcast,
  getPost,
  getPosts,
  getProfile,
  getUsers,
  getVideos,
  updatePost,
  updateVideo,
} from "../networks";
import {
  CommentPayload,
  InstagramPayload,
  PodcastPayload,
  PostPayload,
  UserPayload,
  VideoPayload,
} from "../interface";
import { toast } from "react-toastify";
import { actionUpdatePodcast } from "..";

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
    onSuccess: ({ message }) => {
      toast.success(message);
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  const { mutate: mutateUpdatePost, isPending: pendingUpdate } = useMutation({
    mutationFn: ({ data, id }: { data: PostPayload; id: string }) =>
      updatePost(data, id),
    onSuccess: ({ message }) => {
      toast.success(message);
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  const { mutate: mutateDeletePost, isPending: pendingDelete } = useMutation({
    mutationFn: (id: string) => delPost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["table-list"] });
    },
    onError: ({ message }) => {
      toast.error(message);
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
  params?: { page: number; search?: string; status?: string }
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
      if (entity === "videos") {
        return getVideos(params);
      }
      if (entity === "instagram") {
        return getInstagram(params);
      }
    },
  });
};

export const useComment = () => {
  const queryClient = useQueryClient();
  const { mutate: mutateCreateComment, isPending: pendingCreateComment } =
    useMutation({
      mutationFn: (data: CommentPayload) => createComment(data),
    });

  const { mutate: mutateDeleteComment, isPending: pendingDeleteComment } =
    useMutation({
      mutationFn: (id: string) => delComment(id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["table-list"] });
      },
    });

  return {
    mutateCreateComment,
    pendingCreateComment,
    mutateDeleteComment,
    pendingDeleteComment,
  };
};

export const useGetVideos = (params?: { page?: number; limit?: number }) => {
  return useQuery({
    queryKey: ["videos", params],
    queryFn: () => getVideos(params),
  });
};

export const useVideo = () => {
  const queryClient = useQueryClient();
  const { mutate: mutateCreateVideo, isPending: pendingCreateVideo } =
    useMutation({
      mutationFn: (data: VideoPayload) => createVideo(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["table-list"] });
      },
    });

  const { mutate: mutateUpdateVideo, isPending: pendingUpdateVideo } =
    useMutation({
      mutationFn: ({ data, id }: { data: VideoPayload; id: string }) =>
        updateVideo(data, id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["table-list"] });
      },
    });

  const { mutate: mutateDeleteVideo, isPending: pendingDeleteVideo } =
    useMutation({
      mutationFn: (id: string) => delVideo(id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["table-list"] });
      },
    });

  return {
    mutateCreateVideo,
    pendingCreateVideo,
    mutateUpdateVideo,
    pendingUpdateVideo,
    mutateDeleteVideo,
    pendingDeleteVideo,
  };
};

export const useGetPodcast = () => {
  return useQuery({
    queryKey: ["podcast"],
    queryFn: () => getPodcast(),
  });
};

export const usePodcast = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: PodcastPayload) => actionUpdatePodcast(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["podcast"] });
    },
  });
};

export const useFetchProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
  });
};

export const useGetInstagram = (params?: { page?: number; limit?: number }) => {
  return useQuery({
    queryKey: ["instagram", params],
    queryFn: () => getInstagram(params),
  });
};

export const useInstagram = () => {
  const queryClient = useQueryClient();

  const { mutate: mutateCreateInstagram, isPending: pendingCreateInstagram } =
    useMutation({
      mutationFn: (data: InstagramPayload) => createInstagram(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["table-list"] });
      },
    });

  // const { mutate: mutateUpdateVideo, isPending: pendingUpdateVideo } =
  //   useMutation({
  //     mutationFn: ({ data, id }: { data: VideoPayload; id: string }) =>
  //       updateVideo(data, id),
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({ queryKey: ["table-list"] });
  //     },
  //   });

  // const { mutate: mutateDeleteVideo, isPending: pendingDeleteVideo } =
  //   useMutation({
  //     mutationFn: (id: string) => delVideo(id),
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({ queryKey: ["table-list"] });
  //     },
  //   });

  return {
    mutateCreateInstagram,
    pendingCreateInstagram,
    // mutateUpdateVideo,
    // pendingUpdateVideo,
    // mutateDeleteVideo,
    // pendingDeleteVideo,
  };
};
