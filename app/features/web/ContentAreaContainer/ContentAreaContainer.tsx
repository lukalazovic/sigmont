import { ContentAreaItemContainer, IRenderContentAreaItemProps } from '../ContentAreaItemContainer/ContentAreaItemContainer';
import { ContentArea } from './ContentArea';
import { contentAreaMap } from '@/app/shared/constants/content-area-map';
import { useContentArea } from './usecontentarea';

export interface IContentAreaItem {
    _type?: string;
    item?: any;
}

export interface IContentAreaContainerProps {
    items: IContentAreaItem[];
}

export function ContentAreaContainer({
    items,
}: IContentAreaContainerProps) {
    const props = useContentArea(items, contentAreaMap);

    return (
        <ContentArea
            contentAreaItems={props.contentAreaItems}
            renderContentAreaItem={(key: string, itemProps: IRenderContentAreaItemProps) => (
                <ContentAreaItemContainer key={key} blocks={contentAreaMap} item={itemProps} />
            )}
        />
    );
}
