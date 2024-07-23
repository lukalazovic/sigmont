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
    ctaType,
    ctaLink,
    setActive,
    phoneNumber,
    ctaBtnLabel,
    onLinkClick,
    showPhoneNumber,
    mobileMenuSlideIn,
    mobileHeaderPosition = 'top',
    navigationItems
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
        <>
            <header className={
                classNames(`headerMobile desktopHidden ${mobileMenuSlideIn}`,
                    {
                        'headerMobileBottom': mobileHeaderPosition === 'bottom'
                    }
                )}
            >
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
                            {delayedActive && navigationItems?.map(({ itemLink, linkCollections }, idx) => (
                                <MenuItemMobile
                                    key={idx}
                                    itemLink={itemLink}
                                    setActive={setActive}
                                    active={delayedActive}
                                    onLinkClick={onLinkClick}
                                    linkCollections={linkCollections}
                                />
                            ))}
                        </ul>
                        {(showPhoneNumber || !!ctaType) &&
                            <div className='cta-wrapper'>
                                {showPhoneNumber && (
                                    <a
                                        className='phone'
                                        onClick={handleLinkClick}
                                        href={`tel:${phoneNumber}`}
                                        aria-label={`Call ${phoneNumber}`}
                                    >
                                        <SvgPhoneIcon />
                                        {phoneNumber}
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
                                            onClick={handleLinkClick}
                                            aria-label={ctaLink?.label}
                                            className='cta btn btn-primary'
                                            target={ctaLink?.isLinkExternal ? '_blank' : '_self'}
                                            href={`${ctaLink?.externalLink || ctaLink?.internalLink?.pageType}/${ctaLink?.internalLink?.slug}`}
                                        >
                                            {ctaLink?.label}
                                        </a>
                                    )}
                            </div>
                        }
                    </div>
                </div>
            </header>
            <button onClick={handleLinkClick} className={classNames(`backdrop ${mobileMenuSlideIn}`, { 'active': active })} />
        </>
    );
};
