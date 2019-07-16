import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class TodoItem {
  @Field(type => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  priority: number;
}
