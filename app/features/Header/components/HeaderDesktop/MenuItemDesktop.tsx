import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { IItemLinkProps } from '../../types/HeaderType';
import { SvgArrowDownIcon } from '../../icons/SvgArrowDownIcon';

export const MenuItemDesktop = ({
    linkCollections,
    itemLink: { label, internalLink, externalLink, isLinkExternal }
}: IItemLinkProps) => {
    const hasSubmenu = linkCollections && linkCollections.length > 0;

    const renderLink = (
        href: string,
        isExternal = false
    ) => (
        <Link
            href={href}
            aria-label={label}
            className='menu-link'
            target={isExternal ? '_blank' : '_self'}
            rel={isExternal ? 'noopener noreferrer' : undefined}
        >
            {label}
            {hasSubmenu && <SvgArrowDownIcon aria-hidden="true" />}
        </Link>
    );

    const renderSpan = () => (
        <span
            aria-label={label}
            className={'menu-item-label'}
        >
            {label}
            {hasSubmenu && <SvgArrowDownIcon aria-hidden="true" />}
        </span>
    );

    return (
        <li
            role='none'
            className={classNames('menu-item', { 'has-submenu': hasSubmenu })}
        >
            {internalLink && renderLink(`/${internalLink.pageType}/${internalLink.slug}`)}
            {!internalLink && isLinkExternal && externalLink && renderLink(externalLink, true)}
            {!internalLink && !isLinkExternal && renderSpan()}
            {hasSubmenu && (
                <ul
                    role='menu'
                    className='submenu'
                    aria-label={`${label} submenu`}
                >
                    {linkCollections?.map((item, idx) => (
                        <MenuItemDesktop
                            key={idx}
                            itemLink={item.itemLink}
                            linkCollections={item.linkCollections}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};
