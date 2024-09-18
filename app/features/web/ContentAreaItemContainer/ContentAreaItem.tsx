import { FC } from 'react';

import { IContentAreaItem } from '../ContentAreaContainer/ContentAreaContainer';

export interface IBlockProps {
    [key: string]: unknown;
}

export interface IContentAreaItemProps extends IContentAreaItem {
    blocks: { [key: string]: FC<IBlockProps> };
    blockStyles?: { readonly [key: string]: string };
    className?: string;
}

export function ContentAreaItem({
    blocks,
    item,
    _type,
}: IContentAreaItemProps) {
    if (!item._type) {
        console.error(`Type is not passed to ContentAreaItem`);
        return null;
    }

    const Component = blocks[item._type] as any;

    if (!Component) {
        console.error(
            `Block of type ${item._type} does not exist in blocks object passed to ContentAreaItem`
        );
        return null;
    }

    return (
        <div>
            <Component
                {...item}
            />
        </div>
    );
}
