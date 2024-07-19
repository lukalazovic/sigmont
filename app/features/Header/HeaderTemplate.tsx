'use client';
import React, { useState } from 'react';
import { IHeaderTemplateProps } from './types/HeaderType';
import { HeaderMobile } from './components/HeaderMobile/HeaderMobile';
import { HeaderDesktop } from './components/HeaderDesktop/HeaderDesktop';

export const HeaderTemplate = ({
    menuItems,
    logoMobileUrl,
    logoDesktopUrl,
    mobileMenuSlideIn
}: IHeaderTemplateProps) => {
    const [active, setActive] = useState(false);

    return (
        <>
            <HeaderDesktop
                menuItems={menuItems}
                logoUrl={logoDesktopUrl}
            />
            <HeaderMobile
                active={active}
                setActive={setActive}
                menuItems={menuItems}
                onLinkClick={() => setActive(false)}
                mobileMenuSlideIn={mobileMenuSlideIn}
                logoUrl={logoMobileUrl || logoDesktopUrl}
            />
        </>
    );
};
