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
                },
                isFullHeight
            },
            contacts,
            showSocialLinks,
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
            mainNavigation[]{
                    reference->{
                        "pageType": _type,
                        "slug": seoInformation.slug.current,
                        "label": seoInformation.title
                    }
            },
        },
        siteHeaderSettings{
            "ctaLink": {
                "label": ctaLink.label,
                "externalLink": ctaLink.externalLink,
                "internalLink": ctaLink.internalLink-> {
                    "pageType": _type,
                    "slug": seoInformation.slug.current
                }
            },
            showPhone,
            menuSlideDirection,
            mobileHeaderPosition,
            mainNavigation[]{
                itemLink{
                    reference->{
                    "pageType": _type,
                    "slug": seoInformation.slug.current,
                    "label": seoInformation.title
                    }
                },
                linkCollections[]{
                    itemLink{
                        reference->{
                            "pageType": _type,
                            "slug": seoInformation.slug.current,
                            "label": seoInformation.title
                        }
                    },
                    linkCollections[]{
                        itemLink{
                            reference->{
                                "pageType": _type,
                                "slug": seoInformation.slug.current,
                                "label": seoInformation.title
                        }
                    },
                        linkCollections[]{
                            itemLink{
                                reference->{
                                    "pageType": _type,
                                    "slug": seoInformation.slug.current,
                                    "label": seoInformation.title
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
