import { trimQuery } from "@/app/utils/trim-query";
import { blockContentQuery } from "../blocks/block-content-query";

export const articlePageQueryBase = () => {
    return /* groq */ `
        "publishDate": _createdAt,
        name,
        seoInformation,
        "mainBody": mainBody${blockContentQuery()},
        content[],
    `;
};

export const articlePageQuery = ({ slug } /* groq */) =>
    `*[_type == 'article' && seoInformation.slug.current == '${slug}'][0]{
    ${trimQuery(articlePageQueryBase())}
}`;
