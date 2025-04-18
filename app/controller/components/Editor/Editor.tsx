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
        "bold,italic,underline,strikethrough,eraser,ul,ol,fontsize,paragraph,lineHeight,classSpan,image,copy,paste,selectall,copyformat,hr,link,symbols,align,font,preview",
      controls: {
        font: {
          list: {
            "__Poppins_1ba102, __Poppins_Fallback_1ba102, __Poppins_9cc309, __Poppins_Fallback_9cc309":
              "Poppins",
            "__Open_Sans_ea17e2, __Open_Sans_Fallback_ea17e2": "Open Sans",
          },
        },
      },
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
