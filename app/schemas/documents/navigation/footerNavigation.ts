import { MdMenu } from 'react-icons/md';

export default {
    name: 'footerNavigation',
    type: 'document',
    title: 'Navigation',
    icon: MdMenu,
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'navigationItems',
            type: 'array',
            title: 'Menu categories',
            of: [{ type: 'footerNavigationItem'}]
        }
    ]
}