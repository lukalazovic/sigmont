export const textAndImageQuery = () => {
    return /* groq */ `
    textAndImage {
        text,
        title,
        imagePosition,
        "imageSrc": image.asset->url
    }
    `;
};