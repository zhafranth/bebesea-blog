import TitleSection from "@/components/molecules/TitleSection";
import Image from "next/image";
import React from "react";

const Region = () => {
  return (
    <main className="container">
      <TitleSection isCenter label="Regions" />
      <div className="flex gap-4 items-center sm:flex-row flex-col-reverse">
        <div className="flex-1">
          <p className="leading-8 text-right text-slate-600">
            Brunei / Cambodia / Indonesia / Laos / Malaysia / Myanmar <br />
            Philippines / Singapore / Thailand / Timor Leste / Vietnam
          </p>
        </div>
        <div className="flex-1">
          <div className="h-[300px] w-full overflow-hidden rounded-lg">
            <Image
              // radius="none"
              width={2262}
              height={1509}
              src="/images/region-southease-asia.jpg"
              alt="About Page"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center mt-4 text-3xl font-semibold text-slate-700 ">
            Southeast Asia
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center  sm:flex-row-reverse flex-col-reverse">
        <div className="flex-1">
          <p className="leading-8 text-slate-600">
            Brunei / Cambodia / Indonesia / Laos / Malaysia / Myanmar <br />
            Philippines / Singapore / Thailand / Timor Leste / Vietnam
          </p>
        </div>
        <div className="flex-1">
          <div className="h-[300px] w-full overflow-hidden rounded-lg">
            <Image
              // radius="none"
              width={2262}
              height={1509}
              src="/images/region-east-asia.jpg"
              alt="About Page"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center mt-4 text-3xl font-semibold text-slate-700">
            East Asia
          </p>
        </div>
      </div>
    </main>
  );
};

export default Region;
