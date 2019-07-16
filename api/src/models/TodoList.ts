import { ObjectType, Field, ID } from "type-graphql";
import { TodoItem } from "./TodoItem";

@ObjectType()
export class TodoList {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field(type => [TodoItem])
  items: TodoItem[];
}
