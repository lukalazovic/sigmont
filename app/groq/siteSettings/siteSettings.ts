export const siteSettingsPageQuery = () => /* groq */ `
    *[_type == 'siteSettings'][0]{
        contactPageSettings{
            heading,
            contacts,
            mainIntro,
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
        siteHeaderSettings{
            ctaType,
            "ctaLink": {
                "label": ctaLink.label,
                "externalLink": ctaLink.externalLink,
                "isLinkExternal": ctaLink.isLinkExternal,
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
                    isLinkExternal
                },
                linkCollections[]{
                    itemLink {
                        label,
                        "internalLink": internalLink-> {
                            "pageType": _type,
                            "slug": seoInformation.slug.current
                        },
                        "externalLink": externalLink,
                        isLinkExternal
                    },
                    linkCollections[]{
                        itemLink {
                            label,
                            "internalLink": internalLink-> {
                                "pageType": _type,
                                "slug": seoInformation.slug.current
                            },
                            "externalLink": externalLink,
                            isLinkExternal
                        },
                        linkCollections[]{
                            itemLink {
                                label,
                                "internalLink": internalLink-> {
                                    "pageType": _type,
                                    "slug": seoInformation.slug.current
                                },
                                "externalLink": externalLink,
                                isLinkExternal
                            },
                            linkCollections[]{
                                itemLink {
                                    label,
                                    "internalLink": internalLink-> {
                                        "pageType": _type,
                                        "slug": seoInformation.slug.current
                                    },
                                    "externalLink": externalLink,
                                    isLinkExternal
                                },
                                linkCollections[]{
                                    itemLink {
                                        label,
                                        "internalLink": internalLink-> {
                                            "pageType": _type,
                                            "slug": seoInformation.slug.current
                                        },
                                        "externalLink": externalLink,
                                        isLinkExternal
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
