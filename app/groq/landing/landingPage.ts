//TODO Proper query

export const landingPageQuery = () => 
    `*[_type == 'landing' && seoInformation.slug.current == 'luka-test-page'][0].content`