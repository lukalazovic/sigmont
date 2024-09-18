import { heroImageQuery } from "../../blocks/heroImage";

export const landingPageQuery = (slug: string) => `
    *[_type == 'landing' && seoInformation.slug.current == '${slug}'][0]{
        name,
        seoInformation,
        ${heroImageQuery()},
        content
    }
`;