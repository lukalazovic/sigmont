export const heroImageQuery = () => {
    return /* groq */ `
        heroImage {
            heading,
            subHeading,
            fullHeight,
            "imageSrc": image.asset->url
        }
    `;
};