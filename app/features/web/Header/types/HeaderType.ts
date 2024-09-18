export interface IMenuItemMobileProps extends IItemLinkProps {
    active: boolean;
    onLinkClick: () => void;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICTALinkProps {
    label?: string;
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
    itemLink: {
        reference: IInternalLinkProps;
    }
    linkCollections?: IItemLinkProps[];
}

export interface IBaseHeaderProps {
    phoneNumber?: string;
    ctaLink?: ICTALinkProps;
    showPhoneNumber?: boolean;
    navigationItems?: IItemLinkProps[];
    mobileMenuSlideIn?: 'left' | 'right';
    mobileHeaderPosition?: 'top' | 'bottom';
}

export interface IHeaderDesktopProps extends IBaseHeaderProps {
    logoUrl: string;
}

export interface IHeaderMobileProps extends IBaseHeaderProps {
    logoUrl: string;
    active: boolean;
    onLinkClick: () => void;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IHeaderProps extends IBaseHeaderProps {
    logoMobileUrl?: string;
    logoDesktopUrl: string;
}
