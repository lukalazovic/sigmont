export interface IHeroImageProps {
    title: string;
    imageSrc: string;
    imageAlt: string;
    ctaLabel: string;
    ctaLink: {
        type: string;
        slug: string;
    };
    className?: string;
    isFullHeight?: boolean;
    isFullHeader?: boolean;
}