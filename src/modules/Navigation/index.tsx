import { type FC } from "react";
import { Button } from "@components/Button";

export const Navigation: FC = () => {
    return (
        <nav className="md:flex  md:grow">
            {/* Desktop sign in links */}
            <div className="flex items-center justify-end flex-wrap grow gap-2 lg:gap-5">
                <Button link="#contato" variant="primary">
                    Contato
                </Button>
            </div>
        </nav>
    );
};
