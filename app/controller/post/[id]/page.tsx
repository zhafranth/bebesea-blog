"use client";

import React, { useMemo } from "react";
import Editor from "../../components/Editor";
import {
  Button,
  DatePicker,
  DateValue,
  Input,
  Select,
  SelectItem,
  Switch,
} from "@nextui-org/react";
import { CATEGORY_OPTIONS, STATUS_OPTIONS } from "../create-post/enums";
import { useForm } from "@tanstack/react-form";
import Header from "../../components/Header/Header";
import dayjs from "dayjs";
import { parseDate } from "@internationalized/date";
import { useGetPost, useGetUsers, usePost } from "../../actions/hooks";
import { PostPayload } from "../../actions/interface";
import { useParams, useRouter } from "next/navigation";
import Upload from "@/components/molecules/Upload";

const Detail = () => {
  const { data } = useGetUsers();
  const { data: users = [] } = data ?? {};

  const { id } = useParams();
  const { data: detail, isLoading } = useGetPost(id as string);
  const {
    title,
    category,
    status,
    is_comment,
    date,
    tags,
    authorId,
    cover,
    content,
  } = detail ?? {};

  const { mutateUpdatePost, pendingUpdate } = usePost();

  const router = useRouter();

  const USERS_OPTIONS = useMemo(() => {
    return users?.map((item) => ({ key: item.id, label: item.name }));
  }, [users]);

  const form = useForm<{
    title?: string;
    status?: string;
    date?: DateValue;
    tags?: string;
    category?: string;
    is_comment?: boolean;
    author?: string;
    content?: string;
    cover?: string;
  }>({
    defaultValues: {
      status,
      date: date ? parseDate(date) : undefined,
      is_comment,
      title,
      category,
      author: authorId,
      tags,
      cover: cover ?? "",
      content: content ?? "",
    },

    onSubmit: async ({ value }) => {
      const { date, author, ...restValue } = value;
      const payload = {
        date: dayjs(date as unknown as string).format("YYYY-MM-DD"),
        authorId: author,
        ...restValue,
      };
      mutateUpdatePost(
        { data: payload as PostPayload, id: id as string },
        {
          onSuccess: () => router.back(),
        }
      );
    },
  });

  const inputStyle = {
    label: "font-bold",
    helperWrapper: "h-6",
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="p-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <Header
          label="Edit Post"
          extendButton={
            <Button
              color="primary"
              size="sm"
              radius="sm"
              type="submit"
              isLoading={pendingUpdate}
            >
              Submit
            </Button>
          }
        />
        <div className="mt-12 flex flex-col gap-y-4">
          <form.Field
            name="title"
            validators={{
              onChange: ({ value }) =>
                !value ? "This field is required" : undefined,
            }}
          >
            {(field) => {
              return (
                <Input
                  name={field.name}
                  value={field.state.value as string}
                  label="Title"
                  placeholder="Input Title"
                  labelPlacement="outside"
                  classNames={inputStyle}
                  radius="sm"
                  isInvalid={field.state.meta.errors.length > 0}
                  errorMessage={field.state.meta.errors}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              );
            }}
          </form.Field>
          <div className="flex gap-x-4">
            <form.Field
              name="category"
              validators={{
                onChange: ({ value }) =>
                  !value ? "This field is required" : undefined,
              }}
            >
              {(field) => {
                return (
                  <Select
                    name={field.name}
                    selectedKeys={[field.state.value] as string[]}
                    label="Category"
                    className="w-[40%]"
                    labelPlacement="outside"
                    placeholder="Select Category"
                    items={CATEGORY_OPTIONS}
                    classNames={inputStyle}
                    radius="sm"
                    onChange={(event) => field.handleChange(event.target.value)}
                    isInvalid={field.state.meta.errors.length > 0}
                    errorMessage={field.state.meta.errors}
                    // fullWidth
                  >
                    {CATEGORY_OPTIONS.map((category) => (
                      <SelectItem key={category.key} value={category.key}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </Select>
                );
              }}
            </form.Field>
            <form.Field
              name="tags"
              validators={{
                onChange: ({ value }) =>
                  !value ? "This field is required" : undefined,
              }}
            >
              {(field) => {
                return (
                  <Input
                    name={field.name}
                    value={field.state.value as string}
                    label="Tags"
                    placeholder="Separate tags with commas Ex: Culture, Economics"
                    labelPlacement="outside"
                    classNames={inputStyle}
                    radius="sm"
                    onChange={(event) => field.handleChange(event.target.value)}
                    isInvalid={field.state.meta.errors.length > 0}
                    errorMessage={field.state.meta.errors}
                  />
                );
              }}
            </form.Field>
          </div>
          <div className="flex gap-x-4">
            <form.Field
              name="author"
              validators={{
                onChange: ({ value }) =>
                  !value ? "This field is required" : undefined,
              }}
            >
              {(field) => {
                return (
                  <Select
                    name={field.name}
                    selectedKeys={[field.state.value] as string[]}
                    label="Author"
                    labelPlacement="outside"
                    placeholder="Select Author"
                    items={USERS_OPTIONS}
                    classNames={inputStyle}
                    radius="sm"
                    fullWidth
                    onChange={(event) => field.handleChange(event.target.value)}
                    isInvalid={field.state.meta.errors.length > 0}
                    errorMessage={field.state.meta.errors}
                  >
                    {USERS_OPTIONS.map((user) => (
                      <SelectItem key={user.key} value={user.key}>
                        {user.label}
                      </SelectItem>
                    ))}
                  </Select>
                );
              }}
            </form.Field>
            <form.Field
              name="date"
              validators={{
                onChange: ({ value }) =>
                  !value ? "This field is required" : undefined,
              }}
            >
              {(field) => {
                return (
                  <DatePicker
                    name={field.name}
                    value={field.state.value as DateValue}
                    labelPlacement="outside"
                    label="Date"
                    dateInputClassNames={inputStyle}
                    radius="sm"
                    onChange={(value) => field.handleChange(value)}
                    isInvalid={field.state.meta.errors.length > 0}
                    errorMessage={field.state.meta.errors}
                    className="pb-0"
                    classNames={{
                      base: "!pb-0",
                      calendar: "pb-0",
                      inputWrapper: "pb-0",
                    }}
                  />
                );
              }}
            </form.Field>
            <form.Field name="status">
              {(field) => {
                return (
                  <Select
                    name={field.name}
                    selectedKeys={[field.state.value] as string[]}
                    label="Status"
                    labelPlacement="outside"
                    placeholder="Select Status"
                    items={STATUS_OPTIONS}
                    classNames={inputStyle}
                    radius="sm"
                    fullWidth
                    onChange={(event) => field.handleChange(event.target.value)}
                    isInvalid={field.state.meta.errors.length > 0}
                    errorMessage={field.state.meta.errors}
                  >
                    {STATUS_OPTIONS.map((status) => (
                      <SelectItem key={status.key} value={status.key}>
                        {status.label}
                      </SelectItem>
                    ))}
                  </Select>
                );
              }}
            </form.Field>
            <form.Field name="is_comment">
              {(field) => {
                return (
                  <div className="w-[40%]">
                    <p className="font-bold text-sm mb-3">Allow Comments</p>
                    <div className="flex items-center">
                      <Switch
                        name="is_comment"
                        isSelected={field.state.value as boolean}
                        onValueChange={(value) => field.handleChange(value)}
                      />
                      <p className="text-sm">
                        {field.state.value ? "Show" : "Hide"}
                      </p>
                    </div>
                  </div>
                );
              }}
            </form.Field>
          </div>
        </div>
        <div className="my-2">
          <form.Field
            name="cover"
            validators={{
              onChange: ({ value }) =>
                !value ? "This field is required" : undefined,
            }}
          >
            {(field) => {
              return (
                <div className="w-[100%] mb-5">
                  <p className="text-sm font-bold mb-2">Upload Cover</p>
                  <Upload
                    name={field.name}
                    onChange={(value) => field.handleChange(value as string)}
                    value={field.state.value || ""}
                    path="cover"
                  />
                  {field.state.meta.errors.map((item, index) => (
                    <p className="text-danger-400 mt-1 text-xs" key={index}>
                      {item}
                    </p>
                  ))}
                </div>
              );
            }}
          </form.Field>
        </div>
        <div>
          <form.Field name="content">
            {(field) => {
              return (
                <>
                  <p className="font-bold text-sm">Content</p>
                  <Editor
                    name="content"
                    value={field.state.value as string}
                    onChange={(value) => field.handleChange(value)}
                  />
                </>
              );
            }}
          </form.Field>
        </div>
      </form>
    </main>
  );
};

export default Detail;
