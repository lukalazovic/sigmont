import classNames from "classnames";
import { IHeroImageProps } from "./types/heroImageType";

export const HeroImage = ({
    title,
    ctaLink,
    imageSrc,
    imageAlt,
    ctaLabel,
    className,
    isFullHeader,
    isFullHeight,
}: IHeroImageProps) => {

    const heroImageClassName = classNames(className, 'hero-image', 
        {
            'hero-image-no-full-height': !isFullHeight,
            'hero-image-fullheader-height': isFullHeader
        }
    );

    return (
        <section className={heroImageClassName} style={{ backgroundImage: `url(${imageSrc || "none"})` }} aria-label={imageAlt}>
            <div className="container">
                <div className="row">
                    <div className="d-flex flex-wrap flex-column justify-content-center align-items-center p-4 text-white">
                        <h2 className="text-white fw-bold display-2">
                            {title}
                        </h2>
                        {ctaLabel && ctaLink && (
                            <a href={`${ctaLink.type}/${ctaLink.slug}`} className="btn btn-primary mb-2">
                                {ctaLabel}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
