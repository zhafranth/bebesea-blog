import dayjs from "dayjs";
import TagComment from "./components/TagComment";
import TagStatus from "./components/TagStatus";
import ButtonAddPost from "./components/post/ButtonAddPost";
import type { User, Post } from "@prisma/client";
import ActionPost from "./components/post/ActionPost";
import TagRole from "./components/TagRole";
import ButtonAddUser from "./components/users/ButtonAddUser";
import ActionUser from "./components/users/ActionUser";
import FilterStatus from "./components/post/FilterStatus";
import SearchPost from "./components/post/SearchPost";

export const ENUMS = [
  {
    key: "post",
    label: "Post",
    extendButton: <ButtonAddPost />,
    topComponents: (
      <div className="flex gap-x-2 items-center">
        <SearchPost />
        <FilterStatus />
      </div>
    ),
    columns: [
      {
        key: "title",
        label: "Title",
      },
      {
        key: "category",
        label: "Category",
        render: ({ category }: Post) => (
          <p className="text-xs capitalize">{category}</p>
        ),
      },
      {
        key: "author",
        label: "Author",
        render: (data: { author: User }) => (
          <p className="text-xs">{data?.author?.name}</p>
        ),
      },
      {
        key: "status",
        label: "Status",
        render: (data: Post) => <TagStatus value={data?.status} />,
      },
      {
        key: "is_comment",
        label: "Comment",
        render: ({ is_comment }: Post) => <TagComment value={is_comment} />,
      },
      {
        key: "created_at",
        label: "Created Date",
        render: ({ createdAt }: Post) => (
          <p className="text-xs">
            {dayjs(createdAt).format("MMM D, YYYY HH:mm")}
          </p>
        ),
      },
      {
        key: "action",
        label: "Action",
        render: (data: Post) => <ActionPost data={data} />,
      },
    ],
  },
  {
    key: "users",
    label: "Users",
    extendButton: <ButtonAddUser />,
    columns: [
      {
        key: "name",
        label: "Name",
      },
      {
        key: "username",
        label: "Username",
      },
      {
        key: "role",
        label: "Role",
        render: ({ role }: User) => <TagRole value={role} />,
      },
      {
        key: "action",
        label: "Action",
        render: (data: User) => <ActionUser data={data} />,
      },
    ],
  },
  {
    key: "videos",
    label: "Youtube Videos",
    columns: [
      {
        key: "title",
        label: "Title",
      },
      {
        key: "url",
        label: "URL",
      },
      {
        key: "action",
        label: "Action",
      },
    ],
  },
];