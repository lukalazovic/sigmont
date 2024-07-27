import React from 'react';
import { IFooterProps, IItemLinkProps } from './types/FooterType';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';
import { Address } from '../Address/Address';

export const Footer = ({
    desc,
    logoUrl,
    subFooter,
    navHeading,
    addressInfo,
    socialNetworks,
    showLogo = true,
    showSocial = true,
    showAddress = true,
    navigationItems = [],
}: IFooterProps) => {

    const renderLink = (
        href: string,
        label: string,
        isExternal = false
    ) => (
        <Link
            href={href}
            className='link'
            aria-label={label}
            target={isExternal ? '_blank' : '_self'}
            rel={isExternal ? 'noopener noreferrer' : undefined}
        >
            {label}
        </Link>
    );

    const divideIntoColumns = (items: IItemLinkProps[], itemsPerColumn: number): IItemLinkProps[][] => {
        const columns: IItemLinkProps[][] = [];
        for (let i = 0; i < items.length; i += itemsPerColumn) {
            columns.push(items.slice(i, i + itemsPerColumn));
        }
        return columns;
    };

    const columns = divideIntoColumns(navigationItems, 5);

    return (
        <footer className='footer border-top'>
            <div className='inner'>
                <div className={classNames('top', { 'border-bottom-full-width': subFooter })}>
                    <div className='left'>
                        {showLogo &&
                            <Link className='logo' href='/'>
                                <Image
                                    alt='Logo'
                                    width={50}
                                    height={50}
                                    src={logoUrl}
                                    priority={true}
                                />
                            </Link>
                        }
                        {desc &&
                            <p className='short-desc'>{desc}</p>
                        }
                        {showAddress && 
                            <Address {...addressInfo} />
                        }
                        {showSocial &&
                            <SocialNetworks links={socialNetworks} />
                        }
                    </div>
                    <div className='right'>
                        {navHeading && <h3>{navHeading}</h3>}
                        <div className='navigation-columns'>
                            {columns.map((column, columnIndex) => (
                                <ul key={columnIndex}>
                                    {column.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            {item.itemLink.internalLink ? (
                                                renderLink(`/${item.itemLink.internalLink.pageType}/${item.itemLink.internalLink.slug}`, item.itemLink.label)
                                            ) : (
                                                item.itemLink.externalLink ? (
                                                    renderLink(item.itemLink.externalLink, item.itemLink.label, true)
                                                ) : (
                                                    <span className='link'>{item.itemLink.label}</span>
                                                )
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
                {subFooter &&
                    <div className='bottom'>
                        {subFooter}
                    </div>
                }
            </div>
        </footer>
    )
}
