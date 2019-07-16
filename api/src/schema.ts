import { buildSchema } from "type-graphql";
import { TodoItemResolver } from "./models/TodoItemResolver";

export async function buildAppSchema() {
  return await buildSchema({
    resolvers: [TodoItemResolver]
  });
}
