import Editor from "@monaco-editor/react";

interface MonacoEditorProps {
  language: string;
  value: string;
  onChange: (value: string | undefined) => void;
}

const MonacoEditor = ({ language, value, onChange }: MonacoEditorProps) => {
  return (
    <Editor
      className={
        "bg-black/90 outline-none w-full h-full resize-none text-white p-2 hover:opacity-95 transition-all rounded-lg"
      }
      language={language}
      value={value}
      onChange={onChange}
      theme="vs-dark"
    />
  );
};

export default MonacoEditor;
