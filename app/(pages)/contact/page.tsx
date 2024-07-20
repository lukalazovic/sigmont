export const revalidate = 30;

import client from "@/app/client";
import { ContactInfo } from "@/app/features/Contact/components/ContactInfo/ContactInfo";
import { ContactForm } from "@/app/features/Contact/components/ContactForm/ContactForm";
import { siteSettingsPageQuery } from "@/app/groq/siteSettings/siteSettings";

export default async function Contact() {
    const {
        contactPageSettings: {
            heading,
            mainIntro,
            contacts,
            contactFormSettings,
            displayContactForm,
        },
        siteEmailSettings,
        globalSettings: { socialNetworks },
    } = await client.fetch(siteSettingsPageQuery());

    return (
        <main>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <ContactInfo
                        heading={heading}
                        mainIntro={mainIntro}
                        contacts={contacts}
                        showForm={displayContactForm}
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
