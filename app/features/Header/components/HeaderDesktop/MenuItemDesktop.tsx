import React from 'react';
import Link from 'next/link';
import { IMenuItemProps } from '../../types/HeaderType';
import { SvgArrowDownIcon } from '../../icons/SvgArrowDownIcon';

export const MenuItemDesktop = ({ url, label, submenu }: IMenuItemProps) => {
    const hasSubmenu = submenu && submenu.length > 0;
    return (
        <li className="menu-item" role='menuitem' aria-haspopup={hasSubmenu ? 'true' : 'false'}>
            {url ? (
                <Link href={url}>
                    {label}
                    {hasSubmenu && <SvgArrowDownIcon aria-hidden="true" />}
                </Link>
            ) : (
                <span>
                    {label}
                    {hasSubmenu && <SvgArrowDownIcon aria-hidden="true" />}
                </span>
            )}
            {hasSubmenu && (
                <ul className="submenu" role="menu" aria-label={`${label} submenu`}>
                    {submenu.map(({ url, label, submenu }, idx) => (
                        <MenuItemDesktop
                            key={idx}
                            url={url}
                            label={label}
                            submenu={submenu}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};
