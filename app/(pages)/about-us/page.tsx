import client from "@/app/client";
import { ContentAreaContainer } from "@/app/features/web/ContentAreaContainer/ContentAreaContainer";
import { landingPageQuery } from "@/app/groq/documents/landing/landingPage";
import { PageProps } from "@/app/shared/types/PageProps";

interface ILandingProps {
    params: PageProps;
}
export default async function Landing({ params }: ILandingProps) {
    const { slug } = params;
    
    const {data, heroImage = data?.heroImage} = await client.fetch(landingPageQuery(slug))
    return (
        <main>
            <div className="container mt-5">
                <h1>{slug}</h1>
                <ContentAreaContainer items={data} />
            </div>
        </main>
    )
}