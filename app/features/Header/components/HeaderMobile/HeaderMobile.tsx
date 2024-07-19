'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuItemMobile } from './MenuItemMobile';
import { IHeaderMobileProps } from '../../types/HeaderType';

export const HeaderMobile = ({
    active,
    logoUrl,
    menuItems,
    setActive,
    onLinkClick,
    mobileMenuSlideIn,
}: IHeaderMobileProps) => {

    const handleLinkClick = () => {
        onLinkClick();
        setActive(false);
    };

    return (
        <header className="headerMobile desktopHidden">
            <div className="wrapper">
                <Link href="/" onClick={handleLinkClick}>
                    <Image src={logoUrl} alt="Logo" className="logo" width={50} height={50} />
                </Link>
                <button
                    aria-expanded={active}
                    aria-controls="mobile-menu"
                    onClick={() => setActive(!active)}
                    aria-label={active ? 'Close menu' : 'Open menu'}
                >
                    <label className={`menuIcon ${active ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </button>
                <ul className={`navigation navigation-${mobileMenuSlideIn} ${active ? 'active' : ''}`}>
                    {active && menuItems.map(({ url, label, submenu }, idx) => (
                        <MenuItemMobile
                            key={idx}
                            url={url}
                            label={label}
                            active={active}
                            submenu={submenu}
                            setActive={setActive}
                            onLinkClick={onLinkClick}
                        />
                    ))}
                </ul>
            </div>
        </header>
    );
};
