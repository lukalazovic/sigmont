import { IMetaImageProps } from "./MetaImageProps";
import { ISlugProps } from "./SlugProps";

export interface ISeoInformation {
    _type: string;
    metaImage: IMetaImageProps | undefined;
    title: string | undefined;
    metaDescription: string | undefined;
    slug: ISlugProps;
}