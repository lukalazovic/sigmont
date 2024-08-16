import { FC, useMemo } from "react";
import { IContentAreaItem } from "./ContentAreaContainer";

export const useContentArea = (items: IContentAreaItem[], blocks: { [key: string]: FC<never> }) => {
    const contentAreaItems = useMemo(
        () => items?.filter((x) => !!x._type && typeof blocks[x._type] !== 'undefined'),
        [items, blocks]
    );

    return {
        contentAreaItems,
    };
};