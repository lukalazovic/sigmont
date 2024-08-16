import imageUrlBuilder from '@sanity/image-url';
import client from "@/app/client";

const builder = imageUrlBuilder(client);

export function urlFor(
    source: string,
    width: number,
    height: number
) {
    return builder.image(source).width(width).height(height).format('webp').url();
}
