import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuItemDesktop } from './MenuItemDesktop';
import { IHeadersProps } from '../../types/HeaderType';
import { SvgPhoneIcon } from '../../icons/SvgPhoneIcon';

export const HeaderDesktop = ({
    logoUrl,
    showCTA,
    ctaLabel,
    menuItems,
    showPhoneNumber
}: IHeadersProps) => {
    // add here usesite settings hook to get number from global settings
    return (
        <header className='headerDesktop mobileNone'>
            {(showPhoneNumber || showCTA) &&
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
                        {showCTA && (
                            <button
                                aria-label={ctaLabel}
                                className='btn btn-primary'
                            >
                                {ctaLabel}
                            </button>
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
