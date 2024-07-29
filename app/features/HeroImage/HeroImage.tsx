'use client';
import Link from 'next/link';
import classNames from 'classnames';
import { urlFor } from '@/app/utils/imageBuilder';
import { IHeroImageProps } from './types/heroImageType';

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

    const desktopImageSrc = imageSrc ? urlFor(imageSrc, 1900, 500) : 'none';
    const mobileImageSrc = imageSrc ? urlFor(imageSrc, 400, 400) : 'none';

    return (
        <>
            <link rel='preload' as='image' href={mobileImageSrc} />
            <link rel='preload' as='image' href={desktopImageSrc} />
            <section className={heroImageClassName} aria-label={imageAlt}>
                <picture>
                    <source srcSet={mobileImageSrc} media='(max-width: 991px)' />
                    <source srcSet={desktopImageSrc} media='(min-width: 992px)' />
                    <img
                        loading='lazy'
                        aria-hidden={true}
                        className='bgImage'
                        src={desktopImageSrc}
                        alt={imageAlt || 'Hero background image'}
                    />
                </picture>
                <div className='container'>
                    <div className='row'>
                        <div className='d-flex flex-wrap flex-column justify-content-center align-items-center p-4 text-white'>
                            <h2 className='text-white fw-bold'>
                                {title}
                            </h2>
                            {ctaLabel && ctaLink && (
                                <Link
                                    aria-label={ctaLabel}
                                    className='btn btn-primary mb-2'
                                    href={`${ctaLink.type}/${ctaLink.slug}`}
                                >
                                    {ctaLabel}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
