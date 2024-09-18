import { FC } from 'react';

import { IContentAreaItem } from '../ContentAreaContainer/ContentAreaContainer';
import { ContentAreaItem } from './ContentAreaItem';

export interface IRenderContentAreaItemProps {
    item: IContentAreaItem;
}


export interface IContentAreaItemContainerProps extends IRenderContentAreaItemProps {
    className?: string;
    blocks: { [key: string]: FC<any> };
}

export function ContentAreaItemContainer({
    blocks,
    className,
    item,
}: IContentAreaItemContainerProps) {
    return (
        <ContentAreaItem
            blocks={blocks}
            className={className}
            {...item}
        />
    );
}