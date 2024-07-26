import classNames from "classnames";

interface IHeroImageProps {
    title: string;
    className?: string;
    imageSrc: string;
    imageAlt: string;
    ctaLabel: string;
    ctaLink: {
        type: string;
        slug: string;
    };
    fullHeight: boolean;
}
export const HeroImage = ({
    title,
    imageSrc,
    imageAlt,
    ctaLabel,
    ctaLink,
    className,
    fullHeight = true,
}: IHeroImageProps) => {
    const heroImageClassName = classNames(
        className,
        "site-blocks-cover overlay",
        {
            ["site-blocks-no-full-height"]: !fullHeight,
        }
    );
    return (
        <section className={heroImageClassName} style={{ backgroundImage: `url(${imageSrc || "none"})` }} aria-label={imageAlt}>
            <div className="container">
                <div className="row py-5 mt-5">
                    <div className="d-flex flex-wrap flex-column justify-content-center align-items-center my-5 py-5 text-white">
                        <h2 className="text-white fw-bold display-2 mt-5">
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
