import React from 'react';
import classNames from 'classnames';
import { Address } from "@/app/features/Address/Address";
import { SocialNetworksType } from "../../types/socialNetworks";
import { IAddressType } from "@/app/features/Address/types/address";
import { SocialNetworks } from "@/app/features/SocialNetworks/SocialNetworks";

interface IContactInfoProps {
    heading: string;
    mainIntro: string;
    showSocialLinks: boolean;
    addresses: IAddressType[];
    socialNetworks: SocialNetworksType;
}

export const ContactInfo = ({
    heading,
    mainIntro,
    addresses,
    socialNetworks,
    showSocialLinks
}: IContactInfoProps) => {
    const addressesCount = addresses.length;

    if (addressesCount < 1) {
        return null;
    }

    const addressClasses = (i: number) => classNames({
        'col-md-4': addressesCount > 1,
        'd-flex justify-content-center': addressesCount === 1,
        'border-end': addressesCount > 1 && i < addressesCount - 1
    });

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="contact-info col-md-12">
                    <div className="container">
                        <h2 className='fs-3 text-uppercase mb-4'>{heading}</h2>
                        <p className='mb-4 pb-3'>{mainIntro}</p>
                        <div className="row">
                            {addresses.map(({ title, email, phone, address }, i) => (
                                <Address
                                    key={i}
                                    title={title}
                                    email={email}
                                    phone={phone}
                                    address={address}
                                    className={addressClasses(i)}
                                />
                            ))}
                        </div>
                        {showSocialLinks && <SocialNetworks links={socialNetworks} />}
                    </div>
                </div>
            </div>
        </div>
    );
};
