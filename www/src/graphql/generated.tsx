import gql from "graphql-tag";
import * as ReactApollo from "react-apollo";
import * as React from "react";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: "Mutation";
  addList: TodoList;
  addItem: TodoItem;
  setItemDone: TodoItem;
};

export type MutationAddListArgs = {
  name: Scalars["String"];
};

export type MutationAddItemArgs = {
  input: NewItemInput;
};

export type MutationSetItemDoneArgs = {
  done: Scalars["Boolean"];
  itemId: Scalars["String"];
  listId: Scalars["String"];
};

/** Input type for new TODO item */
export type NewItemInput = {
  listId: Scalars["String"];
  name: Scalars["String"];
  description: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  allLists: Array<TodoList>;
};

export type TodoItem = {
  __typename?: "TodoItem";
  id: Scalars["ID"];
  name: Scalars["String"];
  description: Scalars["String"];
  priority: Scalars["Float"];
  done: Scalars["Boolean"];
};

export type TodoList = {
  __typename?: "TodoList";
  id: Scalars["ID"];
  name: Scalars["String"];
  items: Array<TodoItem>;
};
export type AddNewItemMutationVariables = {
  input: NewItemInput;
};

export type AddNewItemMutation = { __typename?: "Mutation" } & {
  addItem: { __typename?: "TodoItem" } & Pick<
    TodoItem,
    "id" | "name" | "description" | "done"
  >;
};

export type AddNewListMutationVariables = {
  name: Scalars["String"];
};

export type AddNewListMutation = { __typename?: "Mutation" } & {
  addList: { __typename?: "TodoList" } & Pick<TodoList, "id" | "name">;
};

export type GetAllListsQueryVariables = {};

export type GetAllListsQuery = { __typename?: "Query" } & {
  allLists: Array<{ __typename?: "TodoList" } & FullListDetailsFragment>;
};

export type FullListDetailsFragment = { __typename?: "TodoList" } & Pick<
  TodoList,
  "id" | "name"
> & { items: Array<{ __typename?: "TodoItem" } & FullItemDetailsFragment> };

export type FullItemDetailsFragment = { __typename?: "TodoItem" } & Pick<
  TodoItem,
  "id" | "name" | "description" | "done"
>;

export type SetItemDoneMutationVariables = {
  done: Scalars["Boolean"];
  listId: Scalars["String"];
  itemId: Scalars["String"];
};

export type SetItemDoneMutation = { __typename?: "Mutation" } & {
  setItemDone: { __typename?: "TodoItem" } & FullItemDetailsFragment;
};
export const FullItemDetailsFragmentDoc = gql`
  fragment FullItemDetails on TodoItem {
    id
    name
    description
    done
  }
`;
export const FullListDetailsFragmentDoc = gql`
  fragment FullListDetails on TodoList {
    id
    name
    items {
      ...FullItemDetails
    }
  }
  ${FullItemDetailsFragmentDoc}
`;
export const AddNewItemDocument = gql`
  mutation AddNewItem($input: NewItemInput!) {
    addItem(input: $input) {
      id
      name
      description
      done
    }
  }
`;
export type AddNewItemMutationFn = ReactApollo.MutationFn<
  AddNewItemMutation,
  AddNewItemMutationVariables
>;
export type AddNewItemComponentProps = Omit<
  ReactApollo.MutationProps<AddNewItemMutation, AddNewItemMutationVariables>,
  "mutation"
>;

export const AddNewItemComponent = (props: AddNewItemComponentProps) => (
  <ReactApollo.Mutation<AddNewItemMutation, AddNewItemMutationVariables>
    mutation={AddNewItemDocument}
    {...props}
  />
);

export type AddNewItemProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<AddNewItemMutation, AddNewItemMutationVariables>
> &
  TChildProps;
export function withAddNewItem<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    AddNewItemMutation,
    AddNewItemMutationVariables,
    AddNewItemProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    AddNewItemMutation,
    AddNewItemMutationVariables,
    AddNewItemProps<TChildProps>
  >(AddNewItemDocument, {
    alias: "withAddNewItem",
    ...operationOptions
  });
}
export const AddNewListDocument = gql`
  mutation AddNewList($name: String!) {
    addList(name: $name) {
      id
      name
    }
  }
`;
export type AddNewListMutationFn = ReactApollo.MutationFn<
  AddNewListMutation,
  AddNewListMutationVariables
>;
export type AddNewListComponentProps = Omit<
  ReactApollo.MutationProps<AddNewListMutation, AddNewListMutationVariables>,
  "mutation"
>;

export const AddNewListComponent = (props: AddNewListComponentProps) => (
  <ReactApollo.Mutation<AddNewListMutation, AddNewListMutationVariables>
    mutation={AddNewListDocument}
    {...props}
  />
);

export type AddNewListProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<AddNewListMutation, AddNewListMutationVariables>
> &
  TChildProps;
export function withAddNewList<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    AddNewListMutation,
    AddNewListMutationVariables,
    AddNewListProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    AddNewListMutation,
    AddNewListMutationVariables,
    AddNewListProps<TChildProps>
  >(AddNewListDocument, {
    alias: "withAddNewList",
    ...operationOptions
  });
}
export const GetAllListsDocument = gql`
  query GetAllLists {
    allLists {
      ...FullListDetails
    }
  }
  ${FullListDetailsFragmentDoc}
`;
export type GetAllListsComponentProps = Omit<
  ReactApollo.QueryProps<GetAllListsQuery, GetAllListsQueryVariables>,
  "query"
>;

export const GetAllListsComponent = (props: GetAllListsComponentProps) => (
  <ReactApollo.Query<GetAllListsQuery, GetAllListsQueryVariables>
    query={GetAllListsDocument}
    {...props}
  />
);

export type GetAllListsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetAllListsQuery, GetAllListsQueryVariables>
> &
  TChildProps;
export function withGetAllLists<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GetAllListsQuery,
    GetAllListsQueryVariables,
    GetAllListsProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    GetAllListsQuery,
    GetAllListsQueryVariables,
    GetAllListsProps<TChildProps>
  >(GetAllListsDocument, {
    alias: "withGetAllLists",
    ...operationOptions
  });
}
export const SetItemDoneDocument = gql`
  mutation SetItemDone($done: Boolean!, $listId: String!, $itemId: String!) {
    setItemDone(done: $done, listId: $listId, itemId: $itemId) {
      ...FullItemDetails
    }
  }
  ${FullItemDetailsFragmentDoc}
`;
export type SetItemDoneMutationFn = ReactApollo.MutationFn<
  SetItemDoneMutation,
  SetItemDoneMutationVariables
>;
export type SetItemDoneComponentProps = Omit<
  ReactApollo.MutationProps<SetItemDoneMutation, SetItemDoneMutationVariables>,
  "mutation"
>;

export const SetItemDoneComponent = (props: SetItemDoneComponentProps) => (
  <ReactApollo.Mutation<SetItemDoneMutation, SetItemDoneMutationVariables>
    mutation={SetItemDoneDocument}
    {...props}
  />
);

export type SetItemDoneProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<SetItemDoneMutation, SetItemDoneMutationVariables>
> &
  TChildProps;
export function withSetItemDone<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    SetItemDoneMutation,
    SetItemDoneMutationVariables,
    SetItemDoneProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    SetItemDoneMutation,
    SetItemDoneMutationVariables,
    SetItemDoneProps<TChildProps>
  >(SetItemDoneDocument, {
    alias: "withSetItemDone",
    ...operationOptions
  });
}
