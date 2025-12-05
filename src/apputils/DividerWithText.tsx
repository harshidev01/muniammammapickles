interface DividerProps {
    title: string;
  }
  function DividerWithText({ title }: DividerProps) {
    return (
      <div className="flex items-center justify-center my-4">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="px-3 text-xs text-gray-500 font-medium">{title}</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>
    );
  }
  
  export default DividerWithText;