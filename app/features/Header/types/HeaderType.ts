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
    menuItems: IMenuItemProps[];
    mobileMenuSlideIn?: 'left' | 'right';
}

export interface IHeaderMobileProps extends IHeadersProps {
    active: boolean;
    onLinkClick: () => void;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IHeaderTemplateProps {
    logoMobileUrl?: string;
    logoDesktopUrl: string;
    menuItems: IMenuItemProps[];
    mobileMenuSlideIn?: 'left' | 'right';
}