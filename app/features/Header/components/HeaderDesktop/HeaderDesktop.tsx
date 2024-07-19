import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuItemDesktop } from './MenuItemDesktop';
import { SvgPhoneIcon } from '../../icons/SvgPhoneIcon';
import { IBaseHeaderProps } from '../../types/HeaderType';

export const HeaderDesktop = ({
    logoUrl,
    ctaType,
    ctaLink,
    ctaBtnLabel,
    menuItems,
    showPhoneNumber
}: IBaseHeaderProps) => {
    // add here usesite settings hook to get number from global settings
    return (
        <header className='headerDesktop mobileNone'>
            {(showPhoneNumber || !!ctaType) &&
                <div className='top-wrapper'>
                    <div className='inner'>
                        {showPhoneNumber && (
                            <a
                                className='phone'
                                href='tel:+381652626262'
                                aria-label='Call +381652626262'
                            >
                                <SvgPhoneIcon />
                                +381652626262
                            </a>
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
                                <a
                                            href='/link'
                                            aria-label='cta label'
                                            className='cta btn btn-primary'
                                        >
                                            cta label
                                        </a>
                            )}
                    </div>
                </div>
            }
            <div className='wrapper'>
                <Link className='logo' href='/'>
                    <Image src={logoUrl} alt='Logo' width={50} height={50} />
                </Link>
                <ul className='navigation'>
                    {menuItems.map(({ url, label, submenu }, idx) => (
                        <MenuItemDesktop
                            key={idx}
                            url={url}
                            label={label}
                            submenu={submenu}
                        />
                    ))}
                </ul>
            </div>
        </header>
    );
};
