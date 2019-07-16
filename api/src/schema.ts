import { buildSchema } from "type-graphql";
import { TodoItemResolver } from "./models/TodoItemResolver";
import { TodoListResolver } from "./models/TodoListResolver";

export async function buildAppSchema() {
  return await buildSchema({
    resolvers: [TodoItemResolver, TodoListResolver],
    validate: false
  });
}
