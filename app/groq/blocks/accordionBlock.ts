export const accordionBlockQuery = () => {
    return /* groq */ `
        title,
        mainIntro,
        items[]{
            title,
            content
        }
    `;
};