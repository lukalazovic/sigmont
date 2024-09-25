import { accordionBlockQuery, blockContentQuery, textAndImageBlockQuery } from "@/app/groq";

export const blockQueryMap = {
    accordionBlock: accordionBlockQuery,
    textAndImageBlock: textAndImageBlockQuery,
    // blockContentBlock: blockContentQuery,
}