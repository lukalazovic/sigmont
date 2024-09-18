import { heroImageQuery } from "../../blocks/heroImage";
import { trimQuery } from "@/app/shared/utils/trim-query";
import { blockContentQuery } from "../../blocks/block-content-query";

export const landingPageQueryBase = () => {
    return /* groq */ `
        name,
        seoInformation,
        "blocks": content[],
        ${heroImageQuery()},
        "publishDate": _createdAt,
        "mainBody": mainBody${blockContentQuery()},
    `;
};

export const landingPageQuery = (slug: string) => `
    *[_type == 'landing' && seoInformation.slug.current == '${slug}'][0]{
        ${trimQuery(landingPageQueryBase())}
    }
`;