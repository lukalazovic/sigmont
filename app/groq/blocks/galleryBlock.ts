export const galleryBlockQuery = () => {
    return /* groq */ `
        title,
        subTitle,
        items[] {
            altText,
            category,
            mediaType,
            image {
                asset->{
                    _id,
                    url
                }
            },
            videoFile {
                asset->{
                    _id,
                    url
                }
            }
        }
    `;
};