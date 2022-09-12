import EditorComponent from "../../elements/ReactQuill";
import config from "next/config";
import React, { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Post = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const onBlurTittle = () => {};

  const onBlurContent = (content: string) => {
    setContent(content);
    console.log(content);
  };

  // const modules = useMemo(() => ({
  //   toolbar: {
  //     container: [
  //       [{ 'header': [1, 2, false] }],
  //       ['bold', 'italic', 'underline','strike', 'blockquote'],
  //       [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
  //       ['link', 'image'],
  //       ['clean']
  //     ],
  //     handlers: { image: imageHandler }
  //   }
  // }), []);

  return (
    <div className="space-y-3">
      <label
        className="block text-grey-darker text-sm font-bold mb-2"
        htmlFor="title"
      >
        {"title"}
      </label>
      <input
        name="title"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        id="email"
        type="text"
        placeholder="title"
        onBlur={onBlurTittle}
      />
      {/* <ReactQuill modules={modules} theme="snow" value={content} onChange={setContent} /> */}
      <EditorComponent />
    </div>
  );
};

export default Post;
