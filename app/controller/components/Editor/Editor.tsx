"use client";
import React, { useMemo, useRef } from "react";
import JoditEditor from "jodit-react";

const Editor = ({
  value,
  onChange,
  name,
}: {
  name: React.Key;
  value: string;
  onChange: (v: string) => void;
}) => {
  const editor = useRef(null);

  const config = useMemo(() => {
    return {
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: "",
      buttons:
        "bold,italic,underline,strikethrough,eraser,ul,ol,fontsize,paragraph,lineHeight,classSpan,image,copy,paste,selectall,copyformat,hr,link,symbols",
    };
  }, []);

  return (
    <div>
      <JoditEditor
        key={name}
        value={value}
        ref={editor}
        onChange={(newContent) => onChange(newContent)}
        config={config}
      />
    </div>
  );
};

export default Editor;
