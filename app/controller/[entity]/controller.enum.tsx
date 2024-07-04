import ButtonAddPost from "./components/post/ButtonAddPost";

export const ENUMS = [
  {
    key: "post",
    label: "Post",
    extendButton: <ButtonAddPost />,
    columns: [
      {
        key: "title",
        label: "Title",
      },
      {
        key: "author",
        label: "Author",
      },
      {
        key: "status",
        label: "Status",
      },
      {
        key: "created_at",
        label: "Created Date",
      },
      {
        key: "action",
        label: "Action",
      },
    ],
  },
  {
    key: "users",
    label: "Users",
    columns: [
      {
        key: "username",
        label: "Username",
      },
      {
        key: "role",
        label: "Role",
      },
      {
        key: "action",
        label: "Action",
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
