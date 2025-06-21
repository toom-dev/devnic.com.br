import { type FC } from "react";
import PreviewPng from "./preview.webp";
import HeroImg from "./hero-img.webp";
import about from "./about.webp";
import partner from "./partner.webp";
import Logo from "./logo.webp";
import automacao from "./automacoes/automacao.jpg";

import Logo1 from "./logos/logo1.webp";
import Logo2 from "./logos/logo2.webp";

export const images = {
    preview: PreviewPng,
    heroImg: HeroImg,
    logo: Logo,
    logo1: Logo1,
    logo2: Logo2,
    about: about,
    partner: partner,
    automacao: automacao,
};

export type ImageProps = React.ImgHTMLAttributes<HTMLElement> & {
    srcLocal?: keyof typeof images;
    src?: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    loading?: "lazy" | "eager";
};

/**
 * @example
 * <Image src="logo" alt="logo" width="50px" height="50px" />
 */
export const Image: FC<ImageProps> = ({
    alt,
    srcLocal,
    height,
    width,
    src,
    loading,
    ...rest
}) => {
    /**
     * If srcLocal or src is not provided throw an error
     */
    if (!srcLocal && !src) {
        throw new Error("srcLocal or src is required");
    }

    /**
     * this component should be able to use local images or images from external sources
     */
    const image = srcLocal ? images[srcLocal] : { src, width, height };

    return (
        <img
            src={image.src}
            alt={alt}
            width={width ? width : image.width}
            height={height ? height : image.height}
            loading={loading}
            {...rest}
        />
    );
};

// default export of the images
export { PreviewPng };
