'use client';
import { useState, useMemo } from 'react';
import classNames from 'classnames';
import ResponsiveGallery from 'react-responsive-gallery';
import { IGalleryProps } from './types/galleryType';
import { SvgPlayIcon } from '@/app/assets/icons/SvgPlayIcon';

export const Gallery = ({ title, subTitle, items }: IGalleryProps) => {
    const [isPlaying, setIsPlaying] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<'image' | 'video'>('image');

    const hasImages = useMemo(() => items.some(item => item.mediaType === 'image'), [items]);
    const hasVideos = useMemo(() => items.some(item => item.mediaType === 'video'), [items]);

    const filteredMedia = useMemo(() => {
        return items.filter(item => item.mediaType === activeTab);
    }, [items, activeTab]);

    const handlePlay = (index: number) => {
        setIsPlaying(index);
    };

    return (
        <section className="container mb-5">
            {subTitle && <h6 className="text-center">{subTitle}</h6>}
            {title && <h2 className="text-center fw-bold display-5 mb-3">{title}</h2>}

            {hasImages || hasVideos ? (
                <div className="gallery-tabs">
                    {hasImages && (
                        <button
                            className={classNames('filter-button gallery-btn', { active: activeTab === 'image' })}
                            onClick={() => {setActiveTab('image'); setIsPlaying(null)}}
                        >
                            Galerija slika
                        </button>
                    )}
                    {hasVideos && (
                        <button
                            className={classNames('filter-button gallery-btn', { active: activeTab === 'video' })}
                            onClick={() => {setActiveTab('video'); setIsPlaying(null)}}
                        >
                            Galerija videa
                        </button>
                    )}
                </div>
            ) : null}

            <div className="gallery-content">
                {activeTab === 'image' && hasImages && (
                    <ResponsiveGallery
                        useLightBox={true}
                        media={filteredMedia.map(item => ({
                            src: item.image?.asset.url || '',
                            alt: item.altText,
                        }))} 
                    />
                )}

                {activeTab === 'video' && hasVideos && (
                    <div className="video-gallery">
                        {filteredMedia.map((item, index) => (
                            <div
                                key={index}
                                className={classNames('video-item mb-3', {
                                    'video-playing': isPlaying === index,
                                })}
                            >
                                <div className='placeholder'>
                                    <SvgPlayIcon />
                                </div>
                                <video controls width="100%" onPlay={() => handlePlay(index)} onPause={() => setIsPlaying(null)}>
                                    <source src={item.videoFile?.asset.url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <p>{item.altText}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
