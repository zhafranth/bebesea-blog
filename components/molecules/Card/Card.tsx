"use client";

import React from "react";
import {
  CardHeader,
  Card as CardUI,
  CardBody,
  Chip,
  Tooltip,
} from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Post } from "@prisma/client";
import dayjs from "dayjs";
import htmlParser, {
  domToReact,
  HTMLReactParserOptions,
  Element,
  DOMNode,
} from "html-react-parser";

const Card = ({ data }: { data: Post }) => {
  const { title, category, cover, date, content, id } = data ?? {};
  const router = useRouter();

  const hasImage = (node: Element) => {
    const stack: Element[] = [node];

    while (stack.length > 0) {
      const { name, children } = stack.pop() ?? {};
      if (name === "img" || name === "br") return true;
      if (children) stack.push(...(children as any));
    }

    return false;
  };

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      const node = domNode as Element;
      if (node.attribs?.dir === "ltr") {
        return <p>{domToReact(node.children as DOMNode[], options)}</p>;
      }
      if ((domNode as Element).name === "span") {
        return (
          <span>
            {domToReact((domNode as Element).children as DOMNode[], options)}
          </span>
        );
      }
      if (hasImage(domNode as Element)) {
        return <></>;
      }
    },
  };

  return (
    <CardUI
      className="sm:w-[30%] w-[95%] cursor-pointer"
      shadow="none"
      isPressable
      onClick={() => router.push(`/${category}/${id}`)}
    >
      <CardHeader>
        <div className="w-full bg-neutral-200 h-[180px] rounded-md overflow-hidden">
          <Image
            // radius="none"
            width={2262}
            height={1509}
            src={cover || "/images/sample-cover-card.jpeg"}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex justify-between mb-4">
          <p className="text-[12px] text-neutral-500">
            {dayjs(date).format("DD MMM YYYY")}
          </p>
          <Chip color="warning" variant="flat" size="sm" className="capitalize">
            {category}
          </Chip>
        </div>
        <Tooltip content={title}>
          <p className="text-lg font-semibold mb-3 line-clamp-2">{title}</p>
        </Tooltip>
        <p className="text-sm text-neutral-500 line-clamp-2">
          {htmlParser(content, options)}
        </p>
      </CardBody>
    </CardUI>
  );
};

export default Card;
