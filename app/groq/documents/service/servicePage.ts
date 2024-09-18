import { trimQuery } from "@/app/shared/utils/trim-query";
import { blockContentQuery } from "../../blocks/block-content-query";

export const servicePageQueryBase = () => {
    return /* groq */ `
        "publishDate": _createdAt,
        name,
        seoInformation,
        "mainBody": mainBody${blockContentQuery()},
        content[],
    `;
};

export const servicePageQuery = ({ slug } /* groq */) =>
    `*[_type == 'service' && seoInformation.slug.current == '${slug}'][0]{
    ${trimQuery(servicePageQueryBase())}
}`;
