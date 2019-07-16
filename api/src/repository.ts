import { TodoList } from "./models/todoList";
import fs from "fs";

const STATE_FILE = "./data/state.json";

export async function readFile(filename: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) reject(err);
      resolve(data.toString());
    });
  });
}

export async function getAllLists(): Promise<TodoList[]> {
  const fileString = await readFile(STATE_FILE);
  const lists = JSON.parse(fileString);
  console.log(lists);
  return lists;
}
