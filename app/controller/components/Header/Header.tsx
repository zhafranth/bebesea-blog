import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const Header = ({
  label,
  extendButton,
}: {
  label: string;
  extendButton?: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <div className="flex gap-x-4 items-center">
      <Button
        isIconOnly
        radius="full"
        variant="light"
        onPress={() => router.back()}
      >
        <FaArrowLeft />
      </Button>
      <p className="font-bold text-4xl">{label}</p>
      <div className="ml-auto">{extendButton}</div>
    </div>
  );
};

export default Header;
