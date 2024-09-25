import classNames from 'classnames';
import Image from 'next/image';
import { ITextAndImageProps } from './types/textAndImageType';
import imageUrlBuilder from '@sanity/image-url';
import client from '@/app/client';

export const TextAndImage = ({
    text,
    title,
    imageSrc,
    imagePosition = 'left'
}: ITextAndImageProps) => {
    const rowClass = classNames('row d-flex align-items-center', {
        'flex-row-reverse': imagePosition === 'right'
    });
    return (
        <div className="container text-and-image-wrapper mb-5">
            <div className={rowClass}>
                <div className="col-md-6">
                    <div className="image-holder border">
                        <Image
                            width={636}
                            height={477}
                            src={imageSrc}
                            loading='lazy'
                            className='img-fluid'
                            alt={`Image for "${title}" block.`}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="section-element">
                        <h2 className="element-title text-uppercase mb-4">{title}</h2>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
