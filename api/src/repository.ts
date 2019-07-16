import { TodoList } from "./models/todoList";
import fs from "fs";
import { NewItemInput } from "./models/NewItemInput";
import { TodoItem } from "./models/TodoItem";

const STATE_FILE = "./data/state.json";
let _state: TodoList[] = null;

async function readFile(filename: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) reject(err);
      resolve(data.toString());
    });
  });
}

async function saveChanges() {
  if (_state) {
    const json = JSON.stringify(_state);
    return new Promise((resolve, reject) => {
      fs.writeFile(STATE_FILE, json, err => {
        if (err) reject(err);
        else {
          resolve();
        }
      });
    });
  }
}

export async function getAllLists(): Promise<TodoList[]> {
  if (!_state) {
    _state = JSON.parse(await readFile(STATE_FILE));
  }
  return _state;
}

export async function addItem(itemInput: NewItemInput): Promise<TodoItem> {
  const matchingList = (await getAllLists()).find(
    list => list.id === itemInput.listId
  );

  if (!matchingList) throw "Invalid List ID";
  const newItem = new TodoItem(itemInput);
  matchingList.items.push(newItem);
  await saveChanges();
  return newItem;
}

export async function completeItem(
  listId: string,
  itemId: string
): Promise<TodoItem> {
  const list = (await getAllLists()).find(l => l.id === listId);
  if (!list) throw "Invalid List ID";

  const item = list.items.find(i => i.id === itemId);
  if (!item) throw "Invalid Item ID";

  if (item.done) throw "That item is already complete";
  item.done = true;
  await saveChanges();
  return item;
}
