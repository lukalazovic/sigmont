export const heroImageQuery = () => {
    return /* groq */ `
    heroImage {
        heading,
        subHeading,
        "imageSrc": image.asset->url
    }
    `;
};