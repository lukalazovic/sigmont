import client from "@/app/client";
import { ContentAreaContainer } from "@/app/features/web/ContentAreaContainer/ContentAreaContainer";
import { HeroImage } from "@/app/features/web/HeroImage/HeroImage";
import { landingPageQuery } from "@/app/groq/documents/landing/landingPage";
import { PageProps } from "@/app/shared/types/PageProps";

interface ILandingProps {
    params: PageProps;
}
export default async function Landing({ params }: ILandingProps) {
    const { slug } = params;

    const { data, heroImage = data.heroImage } = await client.fetch(landingPageQuery(slug));

    return (
        <main>
            <HeroImage {...heroImage} />
            <ContentAreaContainer items={data} />
        </main>
    )
}