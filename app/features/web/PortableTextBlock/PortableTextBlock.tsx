import PortableText from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import { ReactNode } from 'react';
import client from '../../../client';

interface IBlock {
    _type: 'block';
    node: any;
    style?: string;
    children?: ReactNode;
    markDefs?: IMarkDef[];
}

interface IImage {
    node: {
        _type: string;
        _key: string;
        asset: {
            _ref: string;
            _type: string;
        };
        markDefs: any;
    };
    options: {
        hotspot?: boolean;
        imageOptions: any;
        ignoreUnknownTypes: boolean;
    };
    children: React.ReactNode[];
}

interface IMarkDef {
    _type: 'link';
    _key: string;
    href: string;
}

export type BlockContent = Array<IBlock | IImage>;

interface PortableTextProps {
    className?: string;
    content: BlockContent;
    renderInternalLink?: (props: PortableTextElementProps) => JSX.Element;
}

interface PortableTextElementProps {
    mark: IMark;
    type: string;
    children?: ReactNode;
    node?: {
        style?: string;
        imageSrc?: string;
        imageAlt?: string;
    };
}

interface IMark {
    reference?: { _type?: string; type?: string; slug?: string };
    href?: string;
    blank?: string;
    color?: {
        rgb?: {
            r?: string;
            g?: string;
            b?: string;
            a?: string;
        };
    };
}
const builder = imageUrlBuilder(client);

const serializers = () => ({
    types: {
        block: (props: IBlock) => {
            const { node, children } = props;

            switch (node.style) {
                case 'normal':
                    return <p>{children}</p>;
                case 'h1':
                    return <h1 className='h1 font-weight-bold'>{children}</h1>;
                case 'h2':
                    return <h2 className='h2 font-weight-bold'>{children}</h2>;
                case 'h3':
                    return <h3 className='h3 font-weight-bold'>{children}</h3>;
                case 'h4':
                    return <h4 className='h4 font-weight-bold'>{children}</h4>;
                case 'h5':
                    return <h5 className='h5 font-weight-bold'>{children}</h5>;
                case 'h6':
                    return <h6 className='h6 font-weight-bold'>{children}</h6>;
                case 'blockquote':
                    return <blockquote>{children}</blockquote>;
                case 'center':
                    return <div className='text-center'>{children}</div>;
                case 'left':
                    return <div className='text-left'>{children}</div>;
                case 'right':
                    return <div className='text-right'>{children}</div>;
                default:
                    console.warn(`Unknown block type: ${node.style}`);
                    return <div>{children}</div>;
            }
        },
        image: (props: IImage) => {
            const { node, options } = props;

            if (!node || !node.asset || !node.asset._ref) {
                console.error('Invalid image block:', props);
                return <img src="fallback-image-url.jpg" alt="Fallback Image" />;
            }

            const imageUrl = builder.image(node.asset).url();

            return (
                <img
                    src={imageUrl}
                    className='img-fluid mb-3'
                    style={{ maxHeight: '500px' }}
                    alt={options?.hotspot ? 'Image with hotspot' : 'Image'}
                />
            );
        },
    },
    marks: {
        link: ({ mark, children }: PortableTextElementProps) => {
            const { href, blank } = mark;
            return blank ? (
                <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            ) : (
                <a href={href}>{children}</a>
            );
        },
        color: ({ mark, children }: PortableTextElementProps) => {
            if (!mark?.color?.rgb) {
                return <span>{children}</span>;
            }

            const { r, g, b, a } = mark.color.rgb;
            return <span style={{ color: `rgba(${r}, ${g}, ${b}, ${a})` }}>{children}</span>;
        },
        strong: ({ children }: PortableTextElementProps) => <strong>{children}</strong>,
        em: ({ children }: PortableTextElementProps) => <em>{children}</em>,
    },
});

export const PortableTextContent = ({ content, className }: PortableTextProps) => {
    return <div className={`${className ? className : ''} container mt-5 mb-3`}>
        <div className='row'>
            <div className='col-lg-12'>
                <PortableText blocks={content} serializers={serializers()} />
            </div>
        </div>
    </div>;
};

