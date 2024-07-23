'use client';

import Link from 'next/link';
import classNames from 'classnames';
import React, { useState } from 'react';
import { IMenuItemMobileProps } from '../../types/HeaderType';
import { SvgArrowDownIcon } from '../../icons/SvgArrowDownIcon';

export const MenuItemMobile = ({
    active,
    setActive,
    onLinkClick,
    linkCollections,
    itemLink: { label, internalLink, externalLink, isLinkExternal }
}: IMenuItemMobileProps) => {
    const [isSubmenuActive, setIsSubmenuActive] = useState(false);

    const handleSubmenuToggle = () => {
        setIsSubmenuActive(!isSubmenuActive);
    };

    const handleLinkClick = () => {
        onLinkClick();
        setActive(false);
    };

    const renderLink = (
        href: string,
        isExternal = false
    ) => (
        <Link
            href={href}
            aria-label={label}
            onClick={handleLinkClick}
            target={isExternal ? '_blank' : '_self'}
            className={classNames({ 'active': isSubmenuActive })}
        >
            {label}
        </Link>
    );

    const renderButton = () => (
        <button
            onClick={handleSubmenuToggle}
            aria-expanded={isSubmenuActive}
            aria-haspopup="true"
            className={classNames({ 'active': isSubmenuActive })}
            aria-controls={`submenu-${label?.replace(/\s+/g, '-').toLowerCase()}`}
            aria-label={isSubmenuActive ? `Collapse ${label} submenu` : `Expand ${label} submenu`}
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
            {internalLink && renderLink(`/${internalLink.pageType}/${internalLink.slug}`)}
            {!internalLink && isLinkExternal && externalLink && renderLink(externalLink, true)}
            {!internalLink && (!isLinkExternal || !externalLink) && (
                <span
                    aria-label={label}
                    className={classNames({ 'active': isSubmenuActive })}
                >
                    {label}
                </span>
            )}
            {linkCollections && renderButton()}
            {linkCollections && isSubmenuActive && active && (
                <ul
                    role="group"
                    className="submenu"
                    id={`submenu-${label?.replace(/\s+/g, '-').toLowerCase()}`}
                    aria-labelledby={`submenu-${label?.replace(/\s+/g, '-').toLowerCase()}`}
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
