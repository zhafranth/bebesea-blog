"use client";

import React from "react";
import { CardHeader, Card as CardUI, CardBody, Chip } from "@nextui-org/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Card = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <CardUI
      className="sm:w-[30%] w-[95%] cursor-pointer"
      shadow="none"
      isPressable
      onClick={() => router.push(`${pathname}/1230oiqjweoqjwe123`)}
    >
      <CardHeader>
        <div className="w-full bg-neutral-200 h-[180px] rounded-md overflow-hidden">
          <Image
            // radius="none"
            width={2262}
            height={1509}
            src="/images/sample-cover-card.jpeg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex justify-between mb-4">
          <p className="text-[12px] text-neutral-500">24 Nov 2024</p>
          <Chip color="warning" variant="flat" size="sm">
            Article
          </Chip>
        </div>
        <p className="text-lg font-semibold mb-3 line-clamp-2">
          Strategic Cross-Regional Joint Advocacy & Multi-Stakeholder Engagement
          for Better Protection of the Rights of Migrants{" "}
        </p>
        <p className="text-sm text-neutral-500 line-clamp-2">
          We are pleased to publish our annual report covering the period from
          April 2023 to March 2024. This report covers various activities we
          conducted with our aim to develop collective knowledge and campaigning
          work, build solidarity and strength networks, influence policies, and
          improve the capacity of multi-stakeholders for better protection of
          the rights of migrants and advocacy on intersectional human rights
          issues cross-regionally.{" "}
        </p>
      </CardBody>
    </CardUI>
  );
};

export default Card;
