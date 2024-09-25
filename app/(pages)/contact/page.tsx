// //TODO: This is also landing type but hardcoded

// import { unstable_noStore as noStore } from 'next/cache';
// import client from "@/app/client";
// import { ContactInfo } from "@/app/features/web/Contact/components/ContactInfo/ContactInfo";
// import { siteSettingsPageQuery } from "@/app/groq/documents/siteSettings/siteSettings";
// import { HeroImage } from '@/app/features/web/HeroImage/HeroImage';

// export default async function Contact() {
//     noStore();

//     const {
//         contactPageSettings: {
//             heading,
//             contacts,
//             mainIntro,
//             heroImage,
//             showSocialLinks,
//         },
//         globalSettings: { socialNetworks },
//     } = await client.fetch(siteSettingsPageQuery());

//     return (
//         <main>
//             <HeroImage {...heroImage} />
//             <ContactInfo
//                 heading={heading}
//                 addresses={contacts}
//                 mainIntro={mainIntro}
//                 socialNetworks={socialNetworks}
//                 showSocialLinks={showSocialLinks}
//             />
//         </main>
//     );
// }


import client from "@/app/client";
import { contactPageQuery } from "@/app/groq";
import { ContentAreaContainer, HeroImage } from "@/app/features";

export default async function Contact() {

    const query = contactPageQuery();
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