import { FaUsers, FaYoutube } from "react-icons/fa";
import { FaPodcast } from "react-icons/fa6";
import { SiGitbook } from "react-icons/si";

export const SIDEBAR_ENUM = [
  {
    path: "post",
    label: "Post",
    adminOnly: false,
    icon: <SiGitbook />,
  },
  {
    path: "users",
    label: "Users",
    adminOnly: true,
    icon: <FaUsers />,
  },
  {
    path: "videos",
    label: "Youtube Videos",
    adminOnly: true,
    icon: <FaYoutube />,
  },
  {
    path: "podcast",
    label: "Podcast",
    adminOnly: true,
    icon: <FaPodcast />,
  },
];
