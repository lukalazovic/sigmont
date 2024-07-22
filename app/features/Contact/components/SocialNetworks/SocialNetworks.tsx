import { ReactNode } from "react";
import { SvgInstagram } from "../../icons/SvgInstagram";
import { SvgFacebook } from "../../icons/SvgFacebook";
import { SvgTwitter } from "../../icons/SvgTwitter";
import { SvgLinkedin } from "../../icons/SvgLinkedin";
import { SvgTiktok } from "../../icons/SvgTiktok";

type SocialIconMap = {
    instagram: () => ReactNode;
    facebook: () => ReactNode;
    twitter: () => ReactNode;
    linkedin: () => ReactNode;
    tiktok: () => ReactNode;
};

interface SocialNetworksProps {
    links: {
        [key: string]: string;
    };
}
export const SocialNetworks = ({ links }: SocialNetworksProps) => {
    const socialIconMap = {
        facebook: SvgFacebook,
        instagram: SvgInstagram,
        twitter: SvgTwitter,
        linkedin: SvgLinkedin,
        tiktok: SvgTiktok,
    };

    return (
        <div className="content-box my-5">
            <h5 className="element-title text-uppercase fw-bold">
                Social info
            </h5>
            <div className="social-links">
                <ul className="list-unstyled d-flex gap-3 mt-3">
                    {Object.entries(links).map(([key, url]) => {
                        if (key === "_type") return null;

                        const IconComponent =
                            socialIconMap[key as keyof SocialIconMap];

                        if (!IconComponent) return null;

                        return (
                            <li key={key}>
                                <a
                                    className="text-secondary me-3 p-0"
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IconComponent className="social-icon" />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
