export const siteSettingsPageQuery = () => /* groq */ `
    *[_type == 'siteSettings'][0]{
        contactPageSettings{
            heading,
            mainIntro,
            heroImage {
                title,
                "imageSrc": image.asset->url,
                "imageAlt": alt,
                "ctaLabel": ctaConfiguration.ctaLabel,
                "ctaLink": ctaConfiguration.ctaLinkUrl-> {
                    "type": _type,
                    "slug": seoInformation.slug.current
                }
            },
            contacts,
            showSocialLinks,
            displayContactForm,
            contactFormSettings,
        },
        siteEmailSettings{
            userId,
            serviceId,
            newsletterTemplateId,
            contactFormTemplateId
        },
        globalSettings{
            contactInfo,
            socialNetworks,
            "logo": logo.asset->url,
            "mobileLogo": mobileLogo.asset->url
        },
        siteFooterSettings{
            desc,
            showLogo,
            subFooter,
            showSocial,
            navHeading,
            showAddress,
            showNewsletter,
            "navigationItems": mainNavigation->navigationItems[]{
                itemLink {
                    label,
                    "internalLink": internalLink-> {
                        "pageType": _type,
                        "slug": seoInformation.slug.current
                    },
                    "externalLink": externalLink,
                }
            }
        },
        siteHeaderSettings{
            ctaType,
            "ctaLink": {
                "label": ctaLink.label,
                "externalLink": ctaLink.externalLink,
                "internalLink": ctaLink.internalLink-> {
                    "pageType": _type,
                    "slug": seoInformation.slug.current
                }
            },
            showPhone,
            ctaButtonLabel,
            menuSlideDirection,
            mobileHeaderPosition,
            "navigationItems": mainNavigation->navigationItems[]{
                itemLink {
                    label,
                    "internalLink": internalLink-> {
                        "pageType": _type,
                        "slug": seoInformation.slug.current
                    },
                    "externalLink": externalLink,
                },
                linkCollections[]{
                    itemLink {
                        label,
                        "internalLink": internalLink-> {
                            "pageType": _type,
                            "slug": seoInformation.slug.current
                        },
                        "externalLink": externalLink,
                    },
                    linkCollections[]{
                        itemLink {
                            label,
                            "internalLink": internalLink-> {
                                "pageType": _type,
                                "slug": seoInformation.slug.current
                            },
                            "externalLink": externalLink,
                        },
                        linkCollections[]{
                            itemLink {
                                label,
                                "internalLink": internalLink-> {
                                    "pageType": _type,
                                    "slug": seoInformation.slug.current
                                },
                                "externalLink": externalLink,
                            },
                            linkCollections[]{
                                itemLink {
                                    label,
                                    "internalLink": internalLink-> {
                                        "pageType": _type,
                                        "slug": seoInformation.slug.current
                                    },
                                    "externalLink": externalLink,
                                },
                                linkCollections[]{
                                    itemLink {
                                        label,
                                        "internalLink": internalLink-> {
                                            "pageType": _type,
                                            "slug": seoInformation.slug.current
                                        },
                                        "externalLink": externalLink,
                                    },
                                    linkCollections[]
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
