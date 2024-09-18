//TODO: This is also landing type but hardcoded

import client from "@/app/client";
import { PageProps } from "@/app/shared";
import { landingPageQuery } from "@/app/groq";
import { ContentAreaContainer, HeroImage } from "@/app/features";

interface ILandingProps {
    params: PageProps;
}

export default async function Landing({ params }: ILandingProps) {
    const { slug } = params;

    const data = await client.fetch(landingPageQuery(slug));

    const { blocks, heroImage } = data;

    if (!data) return null;

    return (
        <main>
            <HeroImage {...heroImage} />
            <ContentAreaContainer items={blocks} />
        </main>
    )
}