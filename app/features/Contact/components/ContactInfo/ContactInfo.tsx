import { Contacts } from "../../types/contacts";
import { SocialNetworksType } from "../../types/socialNetworks";
import { SocialNetworks } from "../SocialNetworks/SocialNetworks";

interface IContactInfoProps {
    heading: string;
    mainIntro: string;
    contacts: Contacts[];
    showForm: boolean;
    showSocialLinks: boolean;
    socialNetworks: SocialNetworksType;
}

export const ContactInfo = ({
    heading,
    mainIntro,
    contacts,
    showForm,
    showSocialLinks,
    socialNetworks,
}: IContactInfoProps) => {
    const contactCount = contacts.length;

    if (contactCount < 1) {
        return null;
    }

    if (showForm) {
        return (
            <div className="contact-info col-md-6">
                <div className="page-content">
                    <h2 className="fs-3 text-uppercase mb-4">{heading}</h2>
                    <p>{mainIntro}</p>
                    {contacts.map((c, i) => (
                        <div key={i} className="col-md-6">
                            <div className="content-box my-5">
                                <h5 className="element-title text-uppercase fw-bold">
                                    {c.title}
                                </h5>
                                <div className="contact-address">
                                    <p>{c.address}</p>
                                </div>
                                <div className="contact-number">
                                    {c.phone.map((p, i: number) => (
                                        <a
                                            key={i}
                                            className="d-block"
                                            href={`tel:${p}`}
                                        >
                                            {p}
                                        </a>
                                    ))}
                                </div>
                                <div className="email-address mt-2">
                                    <a href={`mailto:${c.email}`}>{c.email}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {showSocialLinks && <SocialNetworks links={socialNetworks} />}
            </div>
        );
    }

    return (
        <div className="contact-list pb-5">
            <div className="container">
                <div className="row">
                    <h2 className="d-flex justify-content-center fs-3 text-uppercase mb-4">{heading}</h2>
                    <p>{mainIntro}</p>
                    {contacts.map((c, index) => (
                        <div
                            key={index}
                            className={`col-md-${contactCount === 1 ? "12" : "4"} 
                            ${contactCount > 1 && index < contactCount - 1 ? "border-end" : ""} 
                            ${contactCount === 1 ? "d-flex justify-content-center" : ""}`}
                        >
                            <div className="content-box ps-3 my-4">
                                <h5 className="element-title text-uppercase">
                                    {c.title}
                                </h5>
                                <div className="contact-address">
                                    <p>{c.address}</p>
                                </div>
                                <div className="contact-number">
                                    {c.phone.map((p, i: number) => (
                                        <a
                                            key={i}
                                            className="d-block"
                                            href={`tel:${p}`}
                                        >
                                            {p}
                                        </a>
                                    ))}
                                </div>
                                <div className="email-address mt-2">
                                    <a href={`mailto:${c.email}`}>{c.email}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                    <SocialNetworks links={socialNetworks} />
                </div>
            </div>
        </div>
    );
};
