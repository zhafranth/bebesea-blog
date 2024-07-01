"use client";

import { useParams } from "next/navigation";
import React from "react";

const ControllerPage = () => {
  const params = useParams<{ entity: string }>();
  return <div>{params.entity} Page</div>;
};

export default ControllerPage;
