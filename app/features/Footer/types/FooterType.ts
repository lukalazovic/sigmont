import { IAddressType } from "../../Address/types/address";
import { SocialNetworksType } from "../../Contact/types/socialNetworks";

export interface ICTALinkProps {
    label: string;
    internalLink?: {
        slug: string;
        pageType: string;
    };
    externalLink?: string;
}

export interface IInternalLinkProps {
    slug: string;
    pageType: string;
    label: string;
}

export interface IItemLinkProps {
    reference?: any;
    itemLink: {
        reference: IInternalLinkProps;
    }
    linkCollections?: IItemLinkProps[];
}

export interface IFooterProps {
    desc?: string;
    logoUrl: string;
    subFooter?: string;
    showLogo?: boolean;
    navHeading?: string;
    showSocial?: boolean;
    mobileLogoUrl?: string;
    showAddress?: boolean;
    addressInfo: IAddressType;
    socialNetworks: SocialNetworksType;
    navigationItems?: IItemLinkProps[];
}
