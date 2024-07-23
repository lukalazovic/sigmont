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
    isLinkExternal?: string;
}

export interface IItemLinkProps {
    itemLink: ICTALinkProps;
    linkCollections?: IItemLinkProps[];
}

export interface IBaseHeaderProps {
    ctaBtnLabel?: string;
    phoneNumber?: string;
    ctaLink?: ICTALinkProps;
    showPhoneNumber?: boolean;
    ctaType?: 'button' | 'link';
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

export interface IHeaderTemplateProps extends IBaseHeaderProps {
    logoMobileUrl?: string;
    logoDesktopUrl: string;
}
