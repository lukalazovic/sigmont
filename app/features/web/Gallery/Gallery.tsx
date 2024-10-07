'use client';
import { useState, useMemo } from 'react';
import classNames from 'classnames';
import ResponsiveGallery from 'react-responsive-gallery';
import { IGalleryProps } from './types/galleryType';

export const Gallery = ({ title, subTitle, items }: IGalleryProps) => {
    const [activeTab, setActiveTab] = useState<'image' | 'video'>('image');
    const [activeTag, setActiveTag] = useState<string>('sve');

    const hasImages = useMemo(() => items.some(item => item.mediaType === 'image' && (activeTag === 'sve' || item.category === activeTag)), [items, activeTag]);
    const hasVideos = useMemo(() => items.some(item => item.mediaType === 'video' && (activeTag === 'sve' || item.category === activeTag)), [items, activeTag]);

    const allTags = useMemo(() => {
        const tags = items.reduce((acc, item) => {
            if (item.mediaType === activeTab) {
                acc.add(item.category);
            }
            return acc;
        }, new Set<string>(['sve']));
        return Array.from(tags);
    }, [items, activeTab]);

    const filteredMedia = useMemo(() => {
        return items.filter(item => {
            const isTypeMatch = item.mediaType === activeTab;
            const isTagMatch = activeTag === 'sve' || item.category === activeTag;
            return isTypeMatch && isTagMatch;
        });
    }, [items, activeTab, activeTag]);

    return (
        <section className="container mb-5">
            {subTitle && <h6 className="text-center">{subTitle}</h6>}
            {title && <h2 className="text-center fw-bold display-5 mb-3">{title}</h2>}

            <h6 className="text-center mb-1 category-title">Kategorije</h6>
            <div className="tag-filters mb-3">
                {allTags.map(tag => (
                    <button
                        key={tag}
                        className={classNames('filter-button gallery-btn', { active: activeTag === tag })}
                        onClick={() => setActiveTag(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {hasImages || hasVideos ? (
                <div className="gallery-tabs">
                    {hasImages && (
                        <button
                            className={classNames('filter-button gallery-btn', { active: activeTab === 'image' })}
                            onClick={() => setActiveTab('image')}
                        >
                            Galerija slika
                        </button>
                    )}
                    {hasVideos && (
                        <button
                            className={classNames('filter-button gallery-btn', { active: activeTab === 'video' })}
                            onClick={() => setActiveTab('video')}
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
                        media={filteredMedia
                            .filter(item => item.mediaType === 'image' && item.image)
                            .map(item => ({
                                src: item.image?.asset.url || '',
                                alt: item.altText,
                            }))} 
                    />
                )}

                {activeTab === 'video' && hasVideos && (
                    <div className="video-gallery">
                        {filteredMedia
                            .filter(item => item.mediaType === 'video' && item.videoFile)
                            .map((item, index) => (
                                <div key={index} className="video-item mb-3">
                                    <video controls width="100%">
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
