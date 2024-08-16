//TODO Develop landing page

import client from "@/app/client";
import { ContentAreaContainer } from "@/app/components/ContentAreaContainer/ContentAreaContainer";
import { landingPageQuery } from "@/app/groq/landing/landingPage";
import { PageProps } from "@/app/types/web/PageProps";

interface ILandingProps {
    params: PageProps;
}
export default async function Landing({ params }: ILandingProps) {
    const { slug } = params;
    
    const data = await client.fetch(landingPageQuery())

    console.log(data)
    return (
        <main>
            <div className="container mt-5">
                <h1>{slug}</h1>
                <ContentAreaContainer items={data} />
            </div>
        </main>
    )
}