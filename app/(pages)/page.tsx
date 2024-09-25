import client from "@/app/client";
import { homePageQuery } from "@/app/groq";
import { ContentAreaContainer, HeroImage } from "@/app/features";

export default async function Home() {

    const query = homePageQuery();
    const data = await client.fetch(query);
    
    if (!data || data.length === 0) return null;
    
    const { content: items, heroImage } = data[0];

    return (
        <main>
            <HeroImage {...heroImage} />
            <ContentAreaContainer items={items} />
        </main>
    )
}