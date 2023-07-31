export default function NoteItem({ important, title, content, id }) {
  return (
    <div
      className={`rounded-lg p-4 m-1 flex flex-col max-w-auto ${
        important
          ? "bg-gradient-to-tr from-rose-50 to-red-100"
          : "bg-gradient-to-tr from-sky-50 to-sky-100"
      }`}
    >
      <h1 className="text-sm text-neutral-800">{title}</h1>
      <h1 className="text-base text-neutral-900">{content}</h1>
      <div className="flex-grow"></div>{" "}
      <div className="flex justify-between items-center pt-3">
        <span className="text-xs text-neutral-600">{id}</span>
        <i className="text-[#1e1e1e] text-sm cursor-pointer fa-solid fa-trash-can"></i>
      </div>
    </div>
  );
}
