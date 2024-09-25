import classNames from 'classnames';
import { urlFor } from '@/app/shared/utils/imageBuilder';
import { IHeroImageProps } from './types/heroImageType';

export const HeroImage = ({
    heading,
    imageSrc,
    className,
    subHeading,
    fullHeight,
}: IHeroImageProps) => {
    const heroImageClassName = classNames(
        className,
        'hero-image',
        {'hero-image-no-full-height': !fullHeight}
    );

    const desktopImageSrc = imageSrc ? urlFor(imageSrc, 1900, 500) : 'none';
    const mobileImageSrc = imageSrc ? urlFor(imageSrc, 400, 400) : 'none';

    return (
        <>
            <link rel='preload' as='image' href={mobileImageSrc} />
            <link rel='preload' as='image' href={desktopImageSrc} />
            <section className={heroImageClassName} aria-label={`Hero image for page: "${heading}"`}>
                <picture>
                    <source srcSet={mobileImageSrc} media='(max-width: 991px)' />
                    <source srcSet={desktopImageSrc} media='(min-width: 992px)' />
                    <img
                        loading='lazy'
                        aria-hidden={true}
                        className='bgImage'
                        src={desktopImageSrc}
                        alt={`Hero background image for page: "${heading}"`}
                    />
                </picture>
                <div className="container">
                    <div className="row">
                        <div className="d-flex flex-wrap flex-column justify-content-center align-items-center">
                            <h2 className="fw-bold display-2 text-white">{heading}</h2>
                            {subHeading && <p className="text-white mt-1">{subHeading}</p>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
