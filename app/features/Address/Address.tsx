import React from 'react';
import Link from "next/link";
import { IAddressType } from "./types/address";
import { SvgLocationPinIcon } from './icons/SvgLocationPinIcon';
import { SvgPhoneIcon } from '../Header/icons/SvgPhoneIcon';
import { SvgEnvelopeIcon } from './icons/SvgEnvelopeIcon';
import classNames from 'classnames';

export const Address = ({
    title,
    email,
    phone,
    address,
    className,
}: IAddressType) => {
    return (
        <div className={classNames('address-wrapper', className)}>
            <h5 className='element-title text-uppercase fw-bold' role='heading' aria-level={5}>
                {title}
            </h5>
            <address className='address-item'>
                <SvgLocationPinIcon />
                <p className='m-0'>{address}</p>
            </address>
            {phone.map((p, i) => (
                <div key={i} className='address-item'>
                    <SvgPhoneIcon />
                    <Link
                        href={`tel:${p}`}
                        className='d-block'
                        aria-label={`Call ${p}`}
                    >
                        {p}
                    </Link>
                </div>
            ))}
            <div className='address-item'>
                <SvgEnvelopeIcon />
                <a href={`mailto:${email}`} aria-label={`Email ${email}`}>
                    {email}
                </a>
            </div>
        </div>
    );
};
