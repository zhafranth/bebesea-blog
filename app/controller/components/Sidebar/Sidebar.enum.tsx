import { FaUsers, FaYoutube } from "react-icons/fa";
import { SiGitbook } from "react-icons/si";

export const SIDEBAR_ENUM = [
  {
    path: "post",
    label: "Post",
    icon: <SiGitbook />,
  },
  {
    path: "users",
    label: "Users",
    icon: <FaUsers />,
  },
  {
    path: "videos",
    label: "Youtube Videos",
    icon: <FaYoutube />,
  },
];
