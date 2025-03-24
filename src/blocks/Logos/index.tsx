import { Container } from "@components/Container";
import { Image, type ImageProps } from "@static/images";
import { type FC } from "react";

type LogosProps = {
    data: {
        title: string;
        logos: ImageProps["srcLocal"][];
    };
};

export const Logos: FC<LogosProps> = ({ data: { logos, title } }) => {
    // Do not render if there are no elements
    if (!logos.length) {
        return null;
    }

    return (
        <section className="my-24 sm:my-32">
            <Container>
                {title && (
                    <h2
                        className="text-center text-h3 mb-20 font-semibold  text-secondary"
                        data-animate
                    >
                        {title}
                    </h2>
                )}
                <div
                    className="mx-auto flex items-center justify-center space-x-8 sm:space-x-12"
                    data-animate
                >
                    {logos.map((logo, index) => (
                        <figure key={index}>
                            <Image
                                srcLocal={logo}
                                alt="company logo"
                                className="max-h-12 w-full object-contain filter grayscale hover:grayscale-0 transition-all"
                            />
                        </figure>
                    ))}
                </div>
            </Container>
        </section>
    );
};
