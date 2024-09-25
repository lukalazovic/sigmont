export const heroImageQuery = () => {
    return /* groq */ `
    heroImage {
        heading,
        subHeading,
        fullheight,
        "imageSrc": image.asset->url
    }
    `;
};