import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuItemDesktop } from './MenuItemDesktop';
import { SvgPhoneIcon } from '../../icons/SvgPhoneIcon';
import { IHeaderDesktopProps } from '../../types/HeaderType';

export const HeaderDesktop = ({
    logoUrl,
    ctaLink,
    phoneNumber,
    showPhoneNumber,
    navigationItems
}: IHeaderDesktopProps) => {

    return (
        <header className='headerDesktop mobileNone'>
            {(showPhoneNumber || !!ctaLink) &&
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
                        {ctaLink &&
                            (
                                <Link
                                    aria-label={ctaLink?.label}
                                    className='cta btn btn-primary'
                                    target={ctaLink?.externalLink ? '_blank' : '_self'}
                                    href={`${ctaLink?.externalLink || `/${ctaLink?.internalLink?.pageType}/${ctaLink?.internalLink?.slug}`}`}
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
                    <li role='none' className={'menu-item'}>
                        <Link href={'/'} target={'_self'} aria-label={'Početna'} className='menu-link'>Početna</Link>
                    </li>
                    <li role='none' className={'menu-item'}>
                        <Link href={'/services'} target={'_self'} aria-label={'Usluge'} className='menu-link'>Usluge</Link>
                    </li>
                    {navigationItems?.map((item, idx) => (
                        <MenuItemDesktop
                            key={idx}
                            itemLink={item.itemLink}
                            linkCollections={item.linkCollections}
                        />
                    ))}
                    <li role='none' className={'menu-item'}>
                        <Link href={'/landing/about-us'} target={'_self'} aria-label={'O nama'} className='menu-link'>O nama</Link>
                    </li>
                    {/* <li role='none' className={'menu-item'}>
                        <Link href={'/contact'} target={'_self'} aria-label={'Kontakt'} className='menu-link'>Kontakt</Link>
                    </li> */}
                </ul>
            </div>
        </header>
    );
};
