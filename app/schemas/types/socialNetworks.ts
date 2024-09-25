// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'socialNetworks',
    title: 'Društvene mreže',
    type: 'object',
    fields: [
        {
            name: 'facebook',
            title: 'Facebook URL',
            type: 'url',
            description: 'URL vašeg Facebook naloga.',
        },
        {
            name: 'instagram',
            title: 'Instagram URL',
            type: 'url',
            description: 'URL vašeg Instagram naloga.',
        },
        {
            name: 'twitter',
            title: 'X (Twitter) URL',
            type: 'url',
            description: 'URL vašeg X (Twitter) naloga.',
        },
        {
            name: 'linkedin',
            title: 'LinkedIn URL',
            type: 'url',
            description: 'URL vašeg LinkedIn naloga.',
        },
        {
            name: 'tiktok',
            title: 'TikTok URL',
            type: 'url',
            description: 'URL vašeg TikTok naloga.',
        },
    ]
}