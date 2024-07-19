'use client';
import React, { useState } from 'react';
import { IHeaderTemplateProps } from './types/HeaderType';
import { HeaderMobile } from './components/HeaderMobile/HeaderMobile';
import { HeaderDesktop } from './components/HeaderDesktop/HeaderDesktop';

export const HeaderTemplate = ({
    ctaType,
    ctaLink,
    menuItems,
    ctaBtnLabel,
    logoMobileUrl,
    logoDesktopUrl,
    showPhoneNumber,
    mobileMenuSlideIn,
    mobileHeaderPosition
}: IHeaderTemplateProps) => {
    const [active, setActive] = useState(false);

    return (
        <>
            <HeaderDesktop
                ctaLink={ctaLink}
                ctaType={ctaType}
                ctaBtnLabel={ctaBtnLabel}
                menuItems={menuItems}
                logoUrl={logoDesktopUrl}
                showPhoneNumber={showPhoneNumber}
            />
            <HeaderMobile
                ctaLink={ctaLink}
                active={active}
                ctaType={ctaType}
                ctaBtnLabel={ctaBtnLabel}
                setActive={setActive}
                menuItems={menuItems}
                showPhoneNumber={showPhoneNumber}
                onLinkClick={() => setActive(false)}
                mobileMenuSlideIn={mobileMenuSlideIn}
                logoUrl={logoMobileUrl || logoDesktopUrl}
                mobileHeaderPosition={mobileHeaderPosition}
            />
        </>
    );
};
