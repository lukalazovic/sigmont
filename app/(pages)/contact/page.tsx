import { unstable_noStore as noStore } from 'next/cache';
import client from "@/app/client";
import { ContactInfo } from "@/app/features/web/Contact/components/ContactInfo/ContactInfo";
import { siteSettingsPageQuery } from "@/app/groq/documents/siteSettings/siteSettings";
import { HeroImage } from '@/app/features/web/HeroImage/HeroImage';

export default async function Contact() {
    noStore();

    const {
        contactPageSettings: {
            heading,
            contacts,
            mainIntro,
            heroImage,
            showSocialLinks,
        },
        globalSettings: { socialNetworks },
        siteHeaderSettings: {
            ctaType,
            showPhone,
        }
    } = await client.fetch(siteSettingsPageQuery());

    return (
        <main>
            <HeroImage
                isFullHeader={ctaType || showPhone}
                {...heroImage}
            />
            <ContactInfo
                heading={heading}
                addresses={contacts}
                mainIntro={mainIntro}
                socialNetworks={socialNetworks}
                showSocialLinks={showSocialLinks}
            />
        </main>
    );
}
