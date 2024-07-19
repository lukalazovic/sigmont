'use client';
import React, { useState } from 'react';
import { IHeaderTemplateProps } from './types/HeaderType';
import { HeaderMobile } from './components/HeaderMobile/HeaderMobile';
import { HeaderDesktop } from './components/HeaderDesktop/HeaderDesktop';

export const HeaderTemplate = ({
    showCTA,
    ctaLabel,
    menuItems,
    logoMobileUrl,
    logoDesktopUrl,
    showPhoneNumber,
    mobileMenuSlideIn
}: IHeaderTemplateProps) => {
    const [active, setActive] = useState(false);

    return (
        <>
            <HeaderDesktop
                showCTA={showCTA}
                ctaLabel={ctaLabel}
                menuItems={menuItems}
                logoUrl={logoDesktopUrl}
                showPhoneNumber={showPhoneNumber}
            />
            <HeaderMobile
                active={active}
                showCTA={showCTA}
                ctaLabel={ctaLabel}
                setActive={setActive}
                menuItems={menuItems}
                showPhoneNumber={showPhoneNumber}
                onLinkClick={() => setActive(false)}
                mobileMenuSlideIn={mobileMenuSlideIn}
                logoUrl={logoMobileUrl || logoDesktopUrl}
            />
        </>
    );
};
