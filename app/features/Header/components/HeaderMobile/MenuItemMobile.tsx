'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { IMenuItemMobileProps } from '../../types/HeaderType';
import { SvgArrowDownIcon } from '../../icons/SvgArrowDownIcon';

export const MenuItemMobile = ({
    url,
    label,
    active,
    submenu,
    setActive,
    onLinkClick
}: IMenuItemMobileProps) => {
    const [isSubmenuActive, setIsSubmenuActive] = useState(false);

    const handleSubmenuToggle = () => {
        setIsSubmenuActive(!isSubmenuActive);
    };

    const handleLinkClick = () => {
        onLinkClick();
        setActive(false);
    };

    return (
        <li className={`menu-item ${submenu ? 'menu-item-submenu' : ''}`}>
            {url ? (
                <>
                    <Link href={url} onClick={handleLinkClick}>
                        {label}
                    </Link>
                    {submenu && (
                        <button
                            onClick={handleSubmenuToggle}
                            className={`${isSubmenuActive ? 'active' : ''}`}
                        >
                            <SvgArrowDownIcon />
                        </button>
                    )}
                </>
            ) : (
                <>
                    <span>{label}</span>
                    {submenu && (
                        <button
                            onClick={handleSubmenuToggle}
                            className={`${isSubmenuActive ? 'active' : ''}`}
                        >
                            <SvgArrowDownIcon />
                        </button>
                    )}
                </>
            )}
            {submenu && isSubmenuActive && active && (
                <ul className="submenu">
                    {submenu.map(({ url, label, submenu }, idx) => (
                        <MenuItemMobile
                            key={idx}
                            url={url}
                            label={label}
                            active={active}
                            submenu={submenu}
                            setActive={setActive}
                            onLinkClick={onLinkClick}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};