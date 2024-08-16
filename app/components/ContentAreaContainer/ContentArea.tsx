import { ReactNode } from 'react';

import { IRenderContentAreaItemProps } from '../ContentAreaItemContainer/ContentAreaItemContainer';
import { IContentAreaItem } from './ContentAreaContainer';

export interface IContentAreaProps {
    className?: string;
    contentAreaItems: IContentAreaItem[];
    renderContentAreaItem: (key: string, props: IRenderContentAreaItemProps) => ReactNode;
    as?: keyof JSX.IntrinsicElements;
}

export function ContentArea({
    renderContentAreaItem,
    contentAreaItems,
    as: Tag = 'div',
}: IContentAreaProps) {

    if (!contentAreaItems?.length) {
        return null;
    }

            return (
                <Tag>
                    {contentAreaItems.map((v, i) =>
                        renderContentAreaItem(`content-area-item--${i}`, {
                            item: v,
                        })
                    )}
                </Tag>
            );
}
