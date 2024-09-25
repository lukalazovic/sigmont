import { heroImageQuery } from "../../blocks/heroImage";
import { trimQuery } from "@/app/shared/utils/trim-query";
import { blockContentQuery } from "../../blocks/block-content-query";
import { blockQueryMap } from "@/app/shared/constants/block-query-map";

export const contactPageQuery = () => /* groq */ `
    *[_type == 'contact']{
        ${trimQuery(/* groq */ `
            ${heroImageQuery()},
            content[]{
                _key,
                _type,
                ${Object.entries(blockQueryMap).map(([type, query]) => `
                    _type == '${type}' => {${query()}}
                `).join(',')}
            },
            "publishDate": _createdAt,
            "mainBody": mainBody${blockContentQuery()}
        `)}
    }
`;