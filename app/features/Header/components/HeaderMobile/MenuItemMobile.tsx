'use client';
import Link from 'next/link';
import classNames from 'classnames';
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
            role='menuitem'
            aria-haspopup={submenu ? 'true' : 'false'}
            aria-expanded={submenu ? isSubmenuActive : undefined}
            className={classNames('menu-item', {'menu-item-submenu': submenu})}
        >
            {url ? (
                <>
                    <Link
                        href={url}
                        aria-label={label}
                        onClick={handleLinkClick}
                        className={classNames({ 'active': isSubmenuActive })}
                    >
                        {label}
                    </Link>
                    {submenu && (
                        <button
                            onClick={handleSubmenuToggle}
                            aria-expanded={isSubmenuActive}
                            className={classNames({ 'active': isSubmenuActive })}
                            aria-label={isSubmenuActive ? 'Collapse submenu' : 'Expand submenu'}
                            aria-controls={`submenu-${label.replace(/\s+/g, '-').toLowerCase()}`}
                        >
                            <SvgArrowDownIcon aria-hidden="true" />
                        </button>
                    )}
                </>
            ) : (
                <>
                    <span
                        aria-label={label}
                        className={classNames({ 'active': isSubmenuActive })}
                    >
                        {label}
                    </span>
                    {submenu && (
                        <button
                            onClick={handleSubmenuToggle}
                            aria-expanded={isSubmenuActive}
                            className={classNames({ 'active': isSubmenuActive })}
                            aria-label={isSubmenuActive ? 'Collapse submenu' : 'Expand submenu'}
                            aria-controls={`submenu-${label.replace(/\s+/g, '-').toLowerCase()}`}
                        >
                            <SvgArrowDownIcon aria-hidden="true" />
                        </button>
                    )}
                </>
            )}
            {submenu && isSubmenuActive && active && (
                <ul
                    role="group"
                    className="submenu"
                    aria-labelledby={label}
                    id={`submenu-${label.replace(/\s+/g, '-').toLowerCase()}`}
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
