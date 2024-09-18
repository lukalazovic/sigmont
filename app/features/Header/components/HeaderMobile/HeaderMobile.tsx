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
    ctaLink,
    setActive,
    phoneNumber,
    onLinkClick,
    navigationItems,
    showPhoneNumber,
    mobileMenuSlideIn,
    mobileHeaderPosition = 'top'
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <header
                role="banner"
                className={classNames(
                    `headerMobile desktopHidden ${mobileMenuSlideIn}`,
                    { 'headerMobileBottom': mobileHeaderPosition === 'bottom' }
                )}
            >
                <div className="wrapper">
                    <Link href="/" onClick={handleLinkClick} aria-label='Go to homepage'>
                        <Image
                            width={50}
                            height={50}
                            src={logoUrl}
                            priority={true}
                            className="logo"
                            alt="Company Logo"
                        />
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
                    <div
                        id="mobile-menu"
                        role="navigation"
                        aria-label='Mobile menu'
                        className={classNames('drawer', `drawer-${mobileMenuSlideIn}`, { 'active': active })}
                    >
                        <ul className='navigation'>

                            <li role='menuitem' aria-haspopup={false} className={'menu-item'}>
                                <Link
                                    href={'/'}
                                    target={'_self'}
                                    aria-label='Početna'
                                    onClick={handleLinkClick}
                                >
                                    Početna
                                </Link>
                            </li>
                            <li role='menuitem' aria-haspopup={false} className={'menu-item'}>
                                <Link
                                    href={'/usluge'}
                                    target={'_self'}
                                    aria-label='Usluge'
                                    onClick={handleLinkClick}
                                >
                                    Usluge
                                </Link>
                            </li>
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
                            <li role='menuitem' aria-haspopup={false} className={'menu-item'}>
                                <Link
                                    href={'/kontakt'}
                                    target={'_self'}
                                    aria-label='Kontakt'
                                    onClick={handleLinkClick}
                                >
                                    Kontakt
                                </Link>
                            </li>
                        </ul>
                        {(showPhoneNumber || ctaLink) &&
                            <div className='cta-wrapper'>
                                {showPhoneNumber && (
                                    <Link
                                        className='phone'
                                        onClick={handleLinkClick}
                                        href={`tel:${phoneNumber}`}
                                        aria-label={`Call ${phoneNumber}`}
                                    >
                                        <SvgPhoneIcon aria-hidden="true" />
                                        {phoneNumber}
                                    </Link>
                                )}
                                {ctaLink && (
                                    <Link
                                        onClick={handleLinkClick}
                                        aria-label={ctaLink.label}
                                        className='cta btn btn-primary'
                                        target={ctaLink.externalLink ? '_blank' : '_self'}
                                        rel={ctaLink.externalLink ? 'noopener noreferrer' : undefined}
                                        href={`${ctaLink.externalLink || `/${ctaLink.internalLink?.pageType}/${ctaLink.internalLink?.slug}`}`}
                                    >
                                        {ctaLink.label}
                                    </Link>
                                )}
                            </div>
                        }
                    </div>
                </div>
            </header>
            <button
                onClick={handleLinkClick}
                aria-label="Close mobile menu"
                className={classNames(`backdrop ${mobileMenuSlideIn}`, { 'active': active })}
            />
        </>
    );
};
