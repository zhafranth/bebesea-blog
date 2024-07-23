import { FaUsers, FaYoutube } from "react-icons/fa";
import { FaPodcast } from "react-icons/fa6";
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
  {
    path: "podcast",
    label: "Podcast",
    icon: <FaPodcast />,
  },
];
