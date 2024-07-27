import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuItemDesktop } from './MenuItemDesktop';
import { SvgPhoneIcon } from '../../icons/SvgPhoneIcon';
import { IHeaderDesktopProps } from '../../types/HeaderType';

export const HeaderDesktop = ({
    logoUrl,
    ctaType,
    ctaLink,
    ctaBtnLabel,
    phoneNumber,
    showPhoneNumber,
    navigationItems
}: IHeaderDesktopProps) => {
    return (
        <header className='headerDesktop mobileNone'>
            {(showPhoneNumber || !!ctaType) &&
                <div className='top-wrapper'>
                    <div className='inner'>
                        {showPhoneNumber && (
                            <Link
                                className='phone'
                                href={`tel:${phoneNumber}`}
                                aria-label={`Call ${phoneNumber}`}
                            >
                                <SvgPhoneIcon />
                                {phoneNumber}
                            </Link>
                        )}
                        {ctaType === 'button' &&
                            (
                                <button
                                    aria-label={ctaBtnLabel}
                                    className='btn btn-primary'
                                >
                                    {ctaBtnLabel}
                                </button>
                            )}
                        {ctaType === 'link' &&
                            (
                                <Link
                                    aria-label={ctaLink?.label}
                                    className='cta btn btn-primary'
                                    target={ctaLink?.externalLink ? '_blank' : '_self'}
                                    href={`${ctaLink?.externalLink || ctaLink?.internalLink?.pageType}/${ctaLink?.internalLink?.slug}`}
                                >
                                    {ctaLink?.label}
                                </Link>
                            )}
                    </div>
                </div>
            }
            <div className='wrapper'>
                <Link className='logo' href='/'>
                    <Image
                        alt='Logo'
                        width={50}
                        height={50}
                        src={logoUrl}
                        priority={true}
                    />
                </Link>
                <ul className='navigation'>
                    {navigationItems?.map((item, idx) => (
                        <MenuItemDesktop
                            key={idx}
                            itemLink={item.itemLink}
                            linkCollections={item.linkCollections}
                        />
                    ))}
                </ul>
            </div>
        </header>
    );
};
