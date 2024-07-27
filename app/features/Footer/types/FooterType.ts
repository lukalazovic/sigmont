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

export interface IItemLinkProps {
    heading?: string;
    itemLink: ICTALinkProps;
}

export interface IFooterProps {
    desc?: string;
    logoUrl: string;
    subFooter?: string;
    showLogo?: boolean;
    navHeading?: string;
    showSocial?: boolean;
    showAddress?: boolean;
    addressInfo: IAddressType;
    socialNetworks: SocialNetworksType;
    navigationItems?: IItemLinkProps[];
}
