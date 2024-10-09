export interface IGalleryProps {
    title: string;
    subTitle?: string;
    items: {
        _key: string;
        altText: string;
        mediaType: 'image' | 'video';
        image?: {
            asset: {
                url: string;
            };
        };
        videoFile?: {
            asset: {
                url: string;
            };
        };
    }[];
    className?: string;
}