import { unstable_noStore as noStore } from 'next/cache';
import client from "@/app/client";
import { ContactInfo } from "@/app/features/Contact/components/ContactInfo/ContactInfo";
import { ContactForm } from "@/app/features/Contact/components/ContactForm/ContactForm";
import { siteSettingsPageQuery } from "@/app/groq/siteSettings/siteSettings";
import { HeroImage } from "@/app/components/HeroImage/HeroImage";

export default async function Contact() {
    noStore();
    
    const {
        contactPageSettings: {
            heading,
            mainIntro,
            heroImage,
            contacts,
            contactFormSettings,
            displayContactForm,
            showSocialLinks,
        },
        siteEmailSettings,
        globalSettings: { socialNetworks },
    } = await client.fetch(siteSettingsPageQuery());

    return (
        <main>
            <HeroImage {...heroImage} />
            <div className="container mt-5 mb-5">
                <div className="row">
                    <ContactInfo
                        heading={heading}
                        mainIntro={mainIntro}
                        contacts={contacts}
                        showForm={displayContactForm}
                        showSocialLinks={showSocialLinks}
                        socialNetworks={socialNetworks}
                    />
                    <ContactForm
                        {...contactFormSettings}
                        {...siteEmailSettings}
                        showForm={displayContactForm}
                    />
                </div>
            </div>
        </main>
    );
}
