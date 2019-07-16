import { Query, Mutation, Arg } from "type-graphql";
import { getAllLists } from "../repository";
import { TodoList } from "./todoList";
import { TodoItem } from "./TodoItem";
import { NewItemInput } from "./NewItemInput";
import {
  addItem as addTodoItem,
  completeItem as completeTodoItem
} from "../repository";

export class TodoListResolver {
  @Query(returns => [TodoList])
  public async allLists(): Promise<TodoList[]> {
    return await getAllLists();
  }

  @Mutation(returns => TodoItem)
  public async addItem(@Arg("input") input: NewItemInput) {
    return await addTodoItem(input);
  }

  @Mutation(returns => TodoItem)
  public async completeItem(
    @Arg("listId") listId: string,
    @Arg("itemId") itemId: string
  ) {
    return await completeTodoItem(listId, itemId);
  }
}
