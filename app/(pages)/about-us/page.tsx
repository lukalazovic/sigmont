import client from "@/app/client";
import { notFound } from "next/navigation";
import { aboutUsPageQuery } from "@/app/groq";
import { ContentAreaContainer, HeroImage } from "@/app/features";

export default async function AboutUs() {
    const query = aboutUsPageQuery();
    const data = await client.fetch(query);
    
    if (!data || Object.keys(data).length === 0) return notFound();
    
    const { content: items, heroImage } = data[0];

    return (
        <main>
            <HeroImage {...heroImage} />
            <ContentAreaContainer items={items} />
        </main>
    )
}