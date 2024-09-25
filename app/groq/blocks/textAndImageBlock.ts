export const textAndImageBlockQuery = () => {
    return /* groq */ `
        text,
        title,
        imagePosition,
        "imageSrc": image.asset->url
    `;
};