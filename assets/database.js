import { openDB } from "idb";

const initdb = async () =>
  openDB("textEditorDB", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("textEditorDB")) {
        console.log("textEditorDB already exists");
        return;
      }
      db.createObjectStore("textEditorDB", {
        keyPath: "id",
        autoIncrement: true,
      });
      console.log("textEditorDB created");
    },
  });

initdb();
