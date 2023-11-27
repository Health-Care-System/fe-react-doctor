import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

export const Editor = ({content , setContent}) => {

  return (
    <>
      <div data-color-mode="light">
        <MDEditor
          value={content}
          className="bg-light"
          onChange={setContent}
          height={800}
          maxHeight={1200}
          textareaProps={{ rows: 100 }}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]],
          }}
        />
      </div>
    </>

  )
}
