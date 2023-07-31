import NoteGrid from "./components/NoteGrid";
import Switcher from "./components/Switcher";

import { getNotes } from "./api/notes";
import { useState, useEffect } from "react";
import NoteInput from "./components/NoteInput";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      console.log("fetching notes");
      try {
        const result = getNotes();
        result.then((res) => setNotes(res.data));
      } catch {
        console.error("Error fetching notes: ", error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <section className="mx-[5%] my-[2%] font-inter">
      <div className="flex justify-between">
        <h1 className="text-lg text-bold">Express Notes</h1>
        <Switcher />
      </div>
      <NoteInput />
      <NoteGrid notes={notes} />
    </section>
  );
}

export default App;
