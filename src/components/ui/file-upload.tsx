import { useState, useRef } from "react";
import { FaUpload } from "react-icons/fa";
import { LuAsterisk } from "react-icons/lu";

interface FileUploadInterface {
  mandatory?: boolean;
  onSelectFile: (file: File) => void;
}

export default function FileUpload({ mandatory, onSelectFile }: FileUploadInterface) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(file: File) {
    setSelectedFile(file);
    onSelectFile(file);
  }

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  }

  function onDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragActive(true);
  }

  function onDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragActive(false);
  }

  function onDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      handleFile(file);
    }
  }

  function openFileDialog() {
    inputRef.current?.click();
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="file-upload" className="font-medium flex items-center gap-1 select-none">
        Select image
        {mandatory && <LuAsterisk className="text-destructive w-3 h-3" />}
      </label>

      {/* Hidden native file input */}
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={onChangeHandler}
        className="hidden"
      />

      {/* Custom upload area */}
      <div
        role="button"
        tabIndex={0}
        onClick={openFileDialog}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openFileDialog()}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={`
          border-2 border-dashed rounded-md p-2 flex flex-col items-center justify-center text-center
          cursor-pointer
          transition-colors duration-200
          ${
            dragActive
              ? "border-primary-500 bg-primary-50"
              : "border-gray-300 hover:border-primary-400"
          }
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        `}
      >
        {!selectedFile && (
          <>
            <FaUpload
              className={`text-primary-600 mb-3 w-5 h-5 animate-bounce-slow`}
              aria-hidden="true"
            />
            <p className="text-gray-600">
              Drag & drop an image here, or click to select one
            </p>
          </>
        )}

        {selectedFile && (
          <div className="flex flex-col items-center space-y-2">
            <img
              src={URL.createObjectURL(selectedFile)}
              alt={selectedFile.name}
              className="max-h-32 rounded-md object-contain"
              onLoad={(e) => URL.revokeObjectURL((e.target as HTMLImageElement).src)}
            />
            <p className="text-gray-800 font-medium">{selectedFile.name}</p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedFile(null);
                onSelectFile(null as any);
                inputRef.current!.value = "";
              }}
              className="text-sm text-red-600 hover:underline focus:outline-none"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
