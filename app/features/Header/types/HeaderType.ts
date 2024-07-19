export interface IMenuItemProps {
    url?: string;
    label: string;
    submenu?: IMenuItemProps[];
}

export interface IMenuItemMobileProps extends IMenuItemProps {
    active: boolean;
    onLinkClick: () => void;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICTALinkProps {
    url?: string;
    label: string;
}

export interface IBaseHeaderProps {
    logoUrl: string;
    ctaLink?: ICTALinkProps;
    ctaBtnLabel?: string;
    showPhoneNumber?: boolean;
    menuItems: IMenuItemProps[];
    ctaType?: 'button' | 'link';
    mobileMenuSlideIn?: 'left' | 'right';
    mobileHeaderPosition?: 'top' | 'bottom';
}

export interface IHeaderMobileProps extends IBaseHeaderProps {
    active: boolean;
    onLinkClick: () => void;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IHeaderTemplateProps extends IBaseHeaderProps {
    logoMobileUrl?: string;
    logoDesktopUrl: string;
}
