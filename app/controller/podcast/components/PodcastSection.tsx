"use client";

import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useGetPodcast, usePodcast } from "../../actions/hooks";
import { useForm } from "@tanstack/react-form";
import { PodcastPayload } from "../../actions/interface";

const PodcastSection = () => {
  const { mutate } = usePodcast();
  const { data } = useGetPodcast();

  const form = useForm<PodcastPayload>({
    defaultValues: {
      title: data?.title ?? "",
      url: data?.url ?? "",
    },
    onSubmit: async ({ value }) => {
      mutate(value as PodcastPayload);
    },
  });
  return (
    <div>
      <h4 className="text-2xl font-semibold mb-12">Podcast</h4>
      <div className="flex gap-x-6">
        <div className="flex-1 flex flex-col gap-y-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
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
                    radius="sm"
                    isInvalid={field.state.meta.errors.length > 0}
                    errorMessage={field.state.meta.errors}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                );
              }}
            </form.Field>
            <form.Field
              name="url"
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
                    label="URL"
                    placeholder="Input URL"
                    labelPlacement="outside"
                    radius="sm"
                    isInvalid={field.state.meta.errors.length > 0}
                    errorMessage={field.state.meta.errors}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                );
              }}
            </form.Field>
            <Button type="submit" color="primary">
              Save
            </Button>
          </form>
        </div>
        <div className="flex-1">
          <iframe
            style={{
              borderRadius: "12px",
            }}
            src={form.getFieldValue("url")}
            width="100%"
            height="280"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PodcastSection;
