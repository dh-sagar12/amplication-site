import { ContentManager as TContentManager } from "../api/contentManager/ContentManager";

export const CONTENTMANAGER_TITLE_FIELD = "section";

export const ContentManagerTitle = (record: TContentManager): string => {
  return record.section?.toString() || String(record.id);
};
