'use client';

import Link from 'next/link';
import classNames from 'classnames';
import React, { useState } from 'react';
import { IMenuItemMobileProps } from '../../types/HeaderType';
import { SvgArrowDownIcon } from '../../icons/SvgArrowDownIcon';

export const MenuItemMobile = ({
    active,
    itemLink,
    setActive,
    onLinkClick,
    linkCollections,
}: IMenuItemMobileProps) => {
    const [isSubmenuActive, setIsSubmenuActive] = useState(false);

    const handleSubmenuToggle = () => {
        setIsSubmenuActive(!isSubmenuActive);
    };

    const handleLinkClick = () => {
        onLinkClick();
        setActive(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderLink = (
        label: string,
        href: string,
    ) => (
        <Link
            href={href}
            target={'_self'}
            aria-label={label}
            onClick={handleLinkClick}
            className={classNames({ 'active': isSubmenuActive })}
        >
            {label}
        </Link>
    );

    const renderButton = () => (
        <button
            aria-haspopup="true"
            onClick={handleSubmenuToggle}
            aria-expanded={isSubmenuActive}
            className={classNames({ 'active': isSubmenuActive })}
            aria-controls={`submenu-${itemLink.reference.label?.replace(/\s+/g, '-').toLowerCase()}`}
            aria-label={isSubmenuActive ? `Collapse ${itemLink.reference.label} submenu` : `Expand ${itemLink.reference.label} submenu`}
        >
            <SvgArrowDownIcon aria-hidden="true" />
        </button>
    );

    return (
        <li
            role='menuitem'
            aria-haspopup={linkCollections ? 'true' : 'false'}
            aria-expanded={linkCollections ? isSubmenuActive : undefined}
            className={classNames('menu-item', { 'menu-item-submenu': linkCollections })}
        >
            {itemLink && renderLink(itemLink.reference.label, `/${itemLink.reference.pageType}/${itemLink.reference.slug}`)}
            {linkCollections && renderButton()}
            {linkCollections && isSubmenuActive && active && (
                <ul
                    role="group"
                    className="submenu"
                    id={`submenu-${itemLink.reference.label?.replace(/\s+/g, '-').toLowerCase()}`}
                    aria-labelledby={`submenu-${itemLink.reference.label?.replace(/\s+/g, '-').toLowerCase()}`}
                >
                    {linkCollections?.map(({ itemLink, linkCollections }, idx) => (
                        <MenuItemMobile
                            key={idx}
                            active={active}
                            itemLink={itemLink}
                            setActive={setActive}
                            onLinkClick={onLinkClick}
                            linkCollections={linkCollections}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};
