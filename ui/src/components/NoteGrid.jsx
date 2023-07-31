import NoteItem from "./NoteItem";

export default function NoteGrid({ notes }) {
  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 grid-cols-2 mt-10">
      {notes.map((note) => (
        <NoteItem {...note} key={note.id} />
      ))}
    </div>
  );
}
