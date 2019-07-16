import { Query } from "type-graphql";
import { TodoItem } from "./todoItem";
import { getAllLists } from "../repository";

export class TodoItemResolver {
  @Query(returns => [TodoItem])
  public async allItems(): Promise<TodoItem[]> {
    await getAllLists();
    return [];
  }
}
