import classNames from 'classnames';
import { urlFor } from '@/app/shared/utils/imageBuilder';
import { ITextAndImageProps } from './types/textAndImageType';

export const TextAndImage = ({
    text,
    title,
    imageSrc,
    imagePosition = 'left'
}: ITextAndImageProps) => {

    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className="image-holder">
                        {/* <img src="images/blog5.jpg" alt="about-us" className="img-fluid"> */}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="section-element p-5">
                        <h2 className="element-title text-uppercase mb-4">{title}</h2>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
