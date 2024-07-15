export const WINDOW_LOCALE_KEY = 'WINDOW_LOCALE_KEY';

const validateSeoInfo = (info: any, context: any)=> {
    if (typeof context.document.seoInformation === 'undefined') return 'Empty SEO info';

    const title = context.document.seoInformation.title;
    const slug = context.document.seoInformation.slug.current;

    if (typeof title === 'undefined') return 'A title of min. 5 characters is required';

    const locale = (window as Record<string, any>)[WINDOW_LOCALE_KEY] ?? 'default';

    if (typeof slug === 'undefined') return "Click on 'GENERATE' to create slug";

    return title.length < 5 ? 'A title of min. 5 characters is required' : true;
};

export { validateSeoInfo }