//TODO Develop article page

import client from "@/app/client";
import { unstable_noStore as noStore } from 'next/cache';

import { PortableTextContent } from "@/app/components/PortableTextBlock/PortableTextBlock";
import { articlePageQuery } from "@/app/groq/article/article";
import { PageProps } from "@/app/types/web/PageProps";

import { ContentAreaContainer } from "@/app/components/ContentAreaContainer/ContentAreaContainer";
import { ISeoInformation } from "@/app/types/web/SeoInformationProps";

interface IArticleProps {
    params: PageProps;
}

export interface IArticlePageResponse {
    publishDate: string;
    name: string;
    mainBody: any;
    seoInformation: ISeoInformation;
    content: any;
}
export default async function Article({ params }: IArticleProps) {
    noStore();
    const { slug } = params;

    const data: IArticlePageResponse = await client.fetch(articlePageQuery({ slug }))

    return (
        <main>
            <div className="container mt-5">
                <h1>{slug}</h1>
                {
                    data.mainBody &&
                        <PortableTextContent content={data.mainBody}/>
                }

                {data.content && <ContentAreaContainer items={data.content} />}
            </div>
        </main>
    )
}