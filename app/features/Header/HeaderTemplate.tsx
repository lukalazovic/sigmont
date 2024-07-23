'use client';
import React, { useState } from 'react';
import { IHeaderTemplateProps } from './types/HeaderType';
import { HeaderMobile } from './components/HeaderMobile/HeaderMobile';
import { HeaderDesktop } from './components/HeaderDesktop/HeaderDesktop';

export const HeaderTemplate = ({
    ctaType,
    ctaLink,
    phoneNumber,
    ctaBtnLabel,
    logoMobileUrl,
    logoDesktopUrl,
    navigationItems,
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
                logoUrl={logoDesktopUrl}
                ctaBtnLabel={ctaBtnLabel}
                phoneNumber={phoneNumber}
                showPhoneNumber={showPhoneNumber}
                navigationItems={navigationItems}
            />
            <HeaderMobile
                active={active}
                ctaLink={ctaLink}
                ctaType={ctaType}
                setActive={setActive}
                phoneNumber={phoneNumber}
                ctaBtnLabel={ctaBtnLabel}
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
