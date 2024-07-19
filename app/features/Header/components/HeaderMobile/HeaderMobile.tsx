'use client';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { MenuItemMobile } from './MenuItemMobile';
import React, { useEffect, useState } from 'react';
import { SvgPhoneIcon } from '../../icons/SvgPhoneIcon';
import { IHeaderMobileProps } from '../../types/HeaderType';

export const HeaderMobile = ({
    active,
    logoUrl,
    showCTA,
    ctaLabel,
    menuItems,
    setActive,
    onLinkClick,
    showPhoneNumber,
    mobileMenuSlideIn,
}: IHeaderMobileProps) => {
    const [delayedActive, setDelayedActive] = useState(active);

    useEffect(() => {
        if (!active) {
            const timer = setTimeout(() => {
                setDelayedActive(false);
            }, 400);

            return () => clearTimeout(timer);
        } else {
            setDelayedActive(true);
        }
    }, [active]);

    const handleLinkClick = () => {
        onLinkClick();
        setActive(false);
    };

    return (
        <header className="headerMobile desktopHidden">
            <div className="wrapper">
                <Link href="/" onClick={handleLinkClick} aria-label='Go to homepage'>
                    <Image src={logoUrl} alt="Logo" className="logo" width={50} height={50} />
                </Link>
                <button
                    className='hamburger'
                    aria-expanded={active}
                    aria-controls="mobile-menu"
                    onClick={() => setActive(!active)}
                    aria-label={active ? 'Close menu' : 'Open menu'}
                >
                    <label className={classNames('menuIcon', { 'active': active })}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </button>
                <div className={classNames('drawer', `drawer-${mobileMenuSlideIn}`, { 'active': active })}>
                    <ul className='navigation' aria-label='Mobile menu'>
                        {delayedActive && menuItems.map(({ url, label, submenu }, idx) => (
                            <MenuItemMobile
                                key={idx}
                                url={url}
                                label={label}
                                submenu={submenu}
                                setActive={setActive}
                                active={delayedActive}
                                onLinkClick={onLinkClick}
                            />
                        ))}
                    </ul>
                    {(showPhoneNumber || showCTA) &&
                        <div className='cta-wrapper'>
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
                                <div>
                                    <button
                                        aria-label={ctaLabel}
                                        aria-expanded={active}
                                        onClick={handleLinkClick}
                                        className='btn btn-primary'
                                    >
                                        {ctaLabel}
                                    </button>
                                </div>
                            )}
                        </div>
                    }
                </div>
            </div>
        </header>
    );
};
