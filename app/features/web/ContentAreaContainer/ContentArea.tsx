import { ReactNode } from 'react';

import { IRenderContentAreaItemProps } from '../ContentAreaItemContainer/ContentAreaItemContainer';
import { IContentAreaItem } from './ContentAreaContainer';

export interface IContentAreaProps {
    contentAreaItems: IContentAreaItem[];
    renderContentAreaItem: (key: string, props: IRenderContentAreaItemProps) => ReactNode;
}

export function ContentArea({
    contentAreaItems,
    renderContentAreaItem,
}: IContentAreaProps) {

    if (!contentAreaItems?.length) {
        return null;
    }

            return (
                <>
                    {contentAreaItems.map((v, i) =>
                        renderContentAreaItem(`content-area-item--${i}`, {
                            item: v,
                        })
                    )}
                </>
            );
}
