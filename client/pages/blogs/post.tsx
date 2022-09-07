import JoditEditor from "jodit-react";
import config from "next/config";
import React, { useRef, useState } from "react";

const Post = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <>
      <input type="text" />
      {/* <JoditEditor
        ref={editor}
        value={content}
        config={{
          readonly: false,
          placeholder: "Start typings...",
        }}
        // tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      /> */}
    </>
  );
};

export default Post;
