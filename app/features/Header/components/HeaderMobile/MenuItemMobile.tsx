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
        <li
            className={`menu-item ${submenu ? 'menu-item-submenu' : ''}`}
            role={submenu ? 'menuitem' : 'listitem'}
        >
            {url ? (
                <>
                    <Link
                        href={url}
                        onClick={handleLinkClick}
                        className={`${isSubmenuActive ? 'active' : ''}`}
                    >
                        {label}
                    </Link>
                    {submenu && (
                        <button
                            onClick={handleSubmenuToggle}
                            aria-expanded={isSubmenuActive}
                            className={`${isSubmenuActive ? 'active' : ''}`}
                            aria-label={isSubmenuActive ? 'Collapse submenu' : 'Expand submenu'}
                            aria-controls={`submenu-${label.replace(/\s+/g, '-').toLowerCase()}`}
                        >
                            <SvgArrowDownIcon />
                        </button>
                    )}
                </>
            ) : (
                <>
                    <span className={`${isSubmenuActive ? 'active' : ''}`}>{label}</span>
                    {submenu && (
                        <button
                            onClick={handleSubmenuToggle}
                            aria-expanded={isSubmenuActive}
                            className={`${isSubmenuActive ? 'active' : ''}`}
                            aria-label={isSubmenuActive ? 'Collapse submenu' : 'Expand submenu'}
                            aria-controls={`submenu-${label.replace(/\s+/g, '-').toLowerCase()}`}
                        >
                            <SvgArrowDownIcon />
                        </button>
                    )}
                </>
            )}
            {submenu && isSubmenuActive && active && (
                <ul
                    id={`submenu-${label.replace(/\s+/g, '-').toLowerCase()}`}
                    className="submenu"
                    role="group"
                    aria-labelledby={label}
                >
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
