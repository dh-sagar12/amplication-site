import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ContentManagerWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  section?: StringNullableFilter;
};
