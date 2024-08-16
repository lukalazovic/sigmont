import { unstable_noStore as noStore } from 'next/cache';
import client from "@/app/client";
import { ContactInfo } from "@/app/features/Contact/components/ContactInfo/ContactInfo";
import { ContactForm } from "@/app/features/Contact/components/ContactForm/ContactForm";
import { siteSettingsPageQuery } from "@/app/groq/siteSettings/siteSettings";
import { HeroImage } from '@/app/features/HeroImage/HeroImage';

export default async function Contact() {
    noStore();
    
    const {
        contactPageSettings: {
            heading,
            contacts,
            mainIntro,
            heroImage,
            showSocialLinks,
            displayContactForm,
            contactFormSettings,
        },
        siteEmailSettings,
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
            <div className="container mt-5 mb-5">
                <div className="row">
                    <ContactInfo
                        heading={heading}
                        addresses={contacts}
                        mainIntro={mainIntro}
                        showForm={displayContactForm}
                        socialNetworks={socialNetworks}
                        showSocialLinks={showSocialLinks}
                    />
                    <ContactForm
                        {...siteEmailSettings}
                        {...contactFormSettings}
                        showForm={displayContactForm}
                    />
                </div>
            </div>
        </main>
    );
}
