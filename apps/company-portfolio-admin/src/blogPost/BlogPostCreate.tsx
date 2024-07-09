import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BlogPostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <DateTimeInput label="publishDate" source="publishDate" />
        <TextInput label="author" source="author" />
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Create>
  );
};
