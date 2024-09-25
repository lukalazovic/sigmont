export interface IMetaImageProps {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
}
export interface ISlugProps {
    _type: string;
    current: string;
}

export interface ISeoInformation {
    _type: string;
    metaImage: IMetaImageProps | undefined;
    title: string | undefined;
    metaDescription: string | undefined;
    slug: ISlugProps;
}