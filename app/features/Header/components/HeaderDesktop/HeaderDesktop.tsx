import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuItemDesktop } from './MenuItemDesktop';
import { IHeadersProps } from '../../types/HeaderType';

export const HeaderDesktop = ({ logoUrl, menuItems }: IHeadersProps) => {
    return (
        <header className="headerDesktop mobileNone">
            <div className="wrapper">
                <Link className="logo" href="/">
                    <Image src={logoUrl} alt="Logo" width={50} height={50} />
                </Link>
                <ul className="navigation">
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
