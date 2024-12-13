import useProfile from "@/utils/hooks/useProfile";
import { STATUS_OPTIONS } from "../create-post/enums";

export const useStatusOptions = () => {
  const { user } = useProfile();
  const { role = "ADMIN" } = user ?? {};

  return role === "ADMIN"
    ? STATUS_OPTIONS
    : STATUS_OPTIONS.filter((item) => item.key !== "publish");
};
