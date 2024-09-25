import { accordionBlockQuery, textAndImageBlockQuery } from "@/app/groq";

export const blockQueryMap = {
    textAndImageBlock: textAndImageBlockQuery,
    accordionBlock: accordionBlockQuery,
}