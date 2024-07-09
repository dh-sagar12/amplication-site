import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BlogPostWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  publishDate?: DateTimeNullableFilter;
  author?: StringNullableFilter;
  content?: StringNullableFilter;
};
