import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { IItemLinkProps } from '../../types/HeaderType';
import { SvgArrowDownIcon } from '../../icons/SvgArrowDownIcon';

export const MenuItemDesktop = ({
    itemLink,
    linkCollections
}: IItemLinkProps) => {
    const hasSubmenu = linkCollections && linkCollections.length > 0;

    const renderLink = (
        label: string,
        href: string,
    ) => (
        <Link
            href={href}
            target={'_self'}
            aria-label={label}
            className='menu-link'
        >
            {label}
            {hasSubmenu && <SvgArrowDownIcon aria-hidden="true" />}
        </Link>
    );

    return (
        <li
            role='none'
            className={classNames('menu-item', { 'has-submenu': hasSubmenu })}
        >
            {itemLink && renderLink(itemLink.reference.label,`/${itemLink.reference.pageType}/${itemLink.reference.slug}`)}
            {hasSubmenu && (
                <ul
                    role='menu'
                    className='submenu'
                    aria-label={`${itemLink.reference.label} submenu`}
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
