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

export interface IHeadersProps {
    logoUrl: string;
    showCTA?: boolean;
    ctaLabel?: string;
    showPhoneNumber?: boolean;
    menuItems: IMenuItemProps[];
    mobileMenuSlideIn?: 'left' | 'right';
    mobileHeaderPosition?: 'top' | 'bottom';
}

export interface IHeaderMobileProps extends IHeadersProps {
    active: boolean;
    onLinkClick: () => void;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IHeaderTemplateProps {
    showCTA?: boolean;
    ctaLabel?: string;
    logoMobileUrl?: string;
    logoDesktopUrl: string;
    showPhoneNumber?: boolean;
    menuItems: IMenuItemProps[];
    mobileMenuSlideIn?: 'left' | 'right';
    mobileHeaderPosition?: 'top' | 'bottom';
}