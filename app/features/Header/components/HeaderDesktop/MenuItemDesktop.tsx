import React from 'react';
import Link from 'next/link';
import { IMenuItemProps } from '../../types/HeaderType';
import { SvgArrowDownIcon } from '../../icons/SvgArrowDownIcon';

export const MenuItemDesktop = ({ url, label, submenu }: IMenuItemProps) => {
    return (
        <li className="menu-item">
            {url ? (
                <Link href={url}>
                        {label}
                        {submenu && <SvgArrowDownIcon />}
                </Link>
            ) : (
                <span>
                    {label}
                    {submenu && <SvgArrowDownIcon />}
                </span>
            )}
            {submenu && (
                <ul className="submenu">
                    {submenu.map(({url, label, submenu}, idx) => (
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
