import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { IMenuItemProps } from '../../types/HeaderType';
import { SvgArrowDownIcon } from '../../icons/SvgArrowDownIcon';

export const MenuItemDesktop = ({ url, label, submenu }: IMenuItemProps) => {
    const hasSubmenu = submenu && submenu.length > 0;

    return (
        <li
            role='none'
            className={classNames('menu-item', { 'has-submenu': hasSubmenu })}
        >
            {url ? (
                <Link
                    href={url}
                    aria-label={label}
                >
                    {label}
                    {hasSubmenu && <SvgArrowDownIcon aria-hidden='true' />}
                </Link>
            ) : (
                <span>
                    {label}
                    {hasSubmenu && <SvgArrowDownIcon aria-hidden='true' />}
                </span>
            )}
            {hasSubmenu && (
                <ul
                    role='menu'
                    className='submenu'
                    aria-label={`${label} submenu`}
                >
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
