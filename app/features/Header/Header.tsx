'use client';
import React, { useState } from 'react';
import { IHeaderProps } from './types/HeaderType';
import { HeaderMobile } from './components/HeaderMobile/HeaderMobile';
import { HeaderDesktop } from './components/HeaderDesktop/HeaderDesktop';

export const Header = ({
    ctaLink,
    phoneNumber,
    logoMobileUrl,
    logoDesktopUrl,
    navigationItems,
    showPhoneNumber,
    mobileMenuSlideIn,
    mobileHeaderPosition
}: IHeaderProps) => {
    const [active, setActive] = useState(false);

    return (
        <>
            <HeaderDesktop
                ctaLink={ctaLink}
                logoUrl={logoDesktopUrl}
                phoneNumber={phoneNumber}
                showPhoneNumber={showPhoneNumber}
                navigationItems={navigationItems}
            />
            <HeaderMobile
                active={active}
                ctaLink={ctaLink}
                setActive={setActive}
                phoneNumber={phoneNumber}
                showPhoneNumber={showPhoneNumber}
                navigationItems={navigationItems}
                onLinkClick={() => setActive(false)}
                mobileMenuSlideIn={mobileMenuSlideIn}
                logoUrl={logoMobileUrl || logoDesktopUrl}
                mobileHeaderPosition={mobileHeaderPosition}
            />
        </>
    );
};
