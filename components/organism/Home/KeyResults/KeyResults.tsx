import React from "react";
import Image from "next/image";
import Link from "next/link";

const KeyResults = () => {
  const keyResults = [
    "Migration & Fishery Industry",
    "Social & Health Protection",
    "Migration & Gender",
  ];
  return (
    <main className="container mt-12">
      <p className="text-lg md:text-xl md:leading-10">
        Human rights issues relating to{" "}
        <span className="text-orange-500">
          migration, displacement, and statelessness
        </span>{" "}
        are our key focus. At the same time, we work to address other
        intersectional concerns related to democracy and people’s rights that
        trigger migration and impact their situations.{" "}
      </p>
      <h2 className="my-4 bg-orange-500 text-white inline-block px-4 py-2 rounded-md">
        Key Issues
      </h2>
      <div className="flex h-64 gap-x-4">
        {keyResults.map((item, index) => (
          <Link
            className="flex-1 overflow-hidden relative"
            key={index}
            href={`/articles?tags=${JSON.stringify(
              item.split(" & ").map((item) => item.toLowerCase())
            )}`}
          >
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-yellow-100 to-transparent flex p-5 items-end">
              <p className="text-4xl font-semibold text-green-800">{item}</p>
            </div>

            <Image
              unoptimized
              width={2262}
              height={1509}
              src={`/images/keyresult/kr-${index + 1}.jpg`}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default KeyResults;
