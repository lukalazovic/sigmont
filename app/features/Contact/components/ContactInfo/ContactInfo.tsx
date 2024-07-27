import React from 'react';
import classNames from 'classnames';
import { Address } from "@/app/features/Address/Address";
import { SocialNetworksType } from "../../types/socialNetworks";
import { IAddressType } from "@/app/features/Address/types/address";
import { SocialNetworks } from "@/app/features/SocialNetworks/SocialNetworks";

interface IContactInfoProps {
    heading: string;
    mainIntro: string;
    showForm: boolean;
    showSocialLinks: boolean;
    addresses: IAddressType[];
    socialNetworks: SocialNetworksType;
}

export const ContactInfo = ({
    heading,
    showForm,
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
        'col-md-6': showForm,
        'col-md-4': !showForm && addressesCount > 1,
        'd-flex justify-content-center': !showForm && addressesCount === 1,
        'border-end': !showForm && addressesCount > 1 && i < addressesCount - 1
    });

    return (
        <div className={classNames('contact-info', { 'col-md-6': showForm, 'contact-list pb-5': !showForm })}>
            <div className={classNames({ 'page-content': showForm, 'container': !showForm })}>
                <h2 className='fs-3 text-uppercase mb-4'>{heading}</h2>
                <p className='mb-4 pb-3'>{mainIntro}</p>
                <div className={classNames({ 'row': !showForm })}>
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
    );
};
