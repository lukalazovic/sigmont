import { accordionBlockQuery, galleryBlockQuery, textAndImageBlockQuery } from "@/app/groq";

export const blockQueryMap = {
    accordionBlock: accordionBlockQuery,
    textAndImageBlock: textAndImageBlockQuery,
    galleryBlock: galleryBlockQuery,
    // blockContentBlock: blockContentQuery,
}