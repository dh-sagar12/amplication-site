import { ContentManagerWhereInput } from "./ContentManagerWhereInput";
import { ContentManagerOrderByInput } from "./ContentManagerOrderByInput";

export type ContentManagerFindManyArgs = {
  where?: ContentManagerWhereInput;
  orderBy?: Array<ContentManagerOrderByInput>;
  skip?: number;
  take?: number;
};
