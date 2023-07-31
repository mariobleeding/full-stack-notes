import axios from "axios";

const BASE_URL = "/api/notes";

function getNotes() {
  return axios.get(BASE_URL);
}

function createNote(title, content) {
  return axios.post(BASE_URL, { title, content });
}

export { getNotes, createNote };
