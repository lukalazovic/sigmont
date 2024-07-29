import Link from "next/link";
import { ReactNode } from "react";
import { SvgXIcon } from "./icons/SvgXIcon";
import { SvgTiktokIcon } from "./icons/SvgTiktokIcon";
import { SvgLinkedinIcon } from "./icons/SvgLinkedinIcon";
import { SvgFacebookIcon } from "./icons/SvgFacebookIcon";
import { SvgInstagramIcon } from "./icons/SvgInstagramIcon";

type SocialIconMap = {
    x: () => ReactNode;
    tiktok: () => ReactNode;
    facebook: () => ReactNode;
    linkedin: () => ReactNode;
    instagram: () => ReactNode;
};

interface SocialNetworksProps {
    links: {
        [key: string]: string;
    };
}
export const SocialNetworks = ({ links }: SocialNetworksProps) => {
    const socialIconMap = {
        x: SvgXIcon,
        tiktok: SvgTiktokIcon,
        facebook: SvgFacebookIcon,
        linkedin: SvgLinkedinIcon,
        instagram: SvgInstagramIcon,
    };

    return (
        <div className="socialNetworks-wrapper">
            <h5 className="socialNetworks-heading">
                Social info
            </h5>
            <ul className="socialNetworks-list">
                {Object.entries(links).map(([key, url]) => {
                    if (key === "_type") return null;

                    const IconComponent =
                        socialIconMap[key as keyof SocialIconMap];

                    if (!IconComponent) return null;

                    return (
                        <li key={key}>
                            <Link
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit our ${key} page`}
                            >
                                <IconComponent />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
