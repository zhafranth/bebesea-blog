import { useQuery } from "@tanstack/react-query";
import { getPostsList } from "../networks";
import { ParamsPosts } from "../interface";

export const useGetPostsList = (params?: ParamsPosts) => {
  return useQuery({
    queryKey: ["posts-list", params],
    queryFn: () => getPostsList(params),
  });
};
