import client from "@/app/client";
import { PageProps } from "@/app/shared";
import { landingPageQuery } from "@/app/groq";
import { ContentAreaContainer, HeroImage } from "@/app/features";

interface ILandingProps {
    params: PageProps;
}

export default async function Landing({ params }: ILandingProps) {
    const { slug } = params;

    const query = landingPageQuery(slug);
    const data = await client.fetch(query);

    const { content: items, heroImage } = data;

    if (!data) return null;

    return (
        <main>
            <HeroImage {...heroImage} />
            <ContentAreaContainer items={items} />
        </main>
    )
}