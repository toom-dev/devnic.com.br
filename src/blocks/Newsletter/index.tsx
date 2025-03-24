import { type FC, useEffect, useState } from "react";
import { Icon } from "@static/icons";
import { Container } from "@components/Container";
import { Button } from "@components/Button";

type NewsletterProps = {
    data: {
        title: string;
        button: {
            label: string;
            link: string;
        };
    };
};

export const Newsletter: FC<NewsletterProps> = ({
    data: { button, title },
}) => {
    // Estado local para controlar se há erro
    const [error, setError] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const error = params.get("error");
        setError(error === "true");
    }, [error]);
    

    // Do not render if there are no elements
    if (!title) {
        return null;
    }

    return (
        <section className="my-24 sm:my-48" data-animate id="contato">
            <Container>
                <div className="relative isolate flex flex-col gap-10 overflow-hidden bg-gray-900 px-6 py-10 shadow-2xl rounded-3xl lg:px-24 xl:flex-row xl:items-center xl:py-32">
                    <h2 className="max-w-2xl text-h2-md font-bold tracking-tight text-primary xl:max-w-none xl:flex-auto">
                        {title}
                    </h2>
                    {button && (
                        <form
                            className="w-full max-w-md space-y-3"
                            action="/api/send-lead"
                            method="POST"
                            content="application/json"
                        >
                            <div className="flex gap-x-4">
                                <label
                                    htmlFor="name"
                                    className="sr-only"
                                >
                                    Nome
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="min-w-0 flex-auto rounded-md border-0 bg-primary/5 px-3.5 py-2 text-primary shadow-sm ring-1 ring-inset ring-primary/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-p-md sm:leading-6"
                                    placeholder="Nome Completo"
                                />
                            </div>
                            <div className="flex gap-x-4">
                                <label
                                    htmlFor="email-address"
                                    className="sr-only"
                                >Emal</label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="min-w-0 flex-auto rounded-md border-0 bg-primary/5 px-3.5 py-2 text-primary shadow-sm ring-1 ring-inset ring-primary/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-p-md sm:leading-6"
                                    placeholder="Informe seu e-mail"
                                />
                            </div>
                            <div className="flex gap-x-4">
                                <label
                                    htmlFor="phone"
                                    className="sr-only"
                                >Telefone</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    autoComplete="phone"
                                    required
                                    className="min-w-0 flex-auto rounded-md border-0 bg-primary/5 px-3.5 py-2 text-primary shadow-sm ring-1 ring-inset ring-primary/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-p-md sm:leading-6"
                                    placeholder="(11) 99999-9999"
                                />
                            </div>
                            <Button
                                asButton
                                type="submit"
                                variant="secondary"
                            >
                                {button.label}
                            </Button>
                        </form>
                    )}
                    <Icon
                        name="gradient"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                    />
                </div>
            </Container>
        </section>
    );
};
