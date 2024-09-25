import client from "@/app/client";
import { PageProps } from "@/app/shared";
import { notFound } from "next/navigation";
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

    if (!data || Object.keys(data).length === 0) return notFound();

    return (
        <main>
            <HeroImage {...heroImage} />
            <ContentAreaContainer items={items} />
        </main>
    )
}