import { ObjectType, Field, ID } from "type-graphql";
import { TodoItem } from "./TodoItem";
import { getAllLists } from "src/repository";

@ObjectType()
export class TodoList {
  @Field(type => ID)
  id: number;

  @Field()
  title: string;

  // itemIds: string[] = [];

  items: TodoItem[];

  @Field(type => TodoItem, { name: "items" })
  public getItems() {
    return;
  }
}
