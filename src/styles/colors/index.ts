import { css } from "@emotion/react";

// use this colors only if necessary - use Theme for colors
export const Colors = {
    primary: "#0f172a", // dark background
    secondary: "#f8fafc", // light text
    tertiary: "#1e40af", // corporate blue
};

export const ThemeVar = css`
    :root {
        --primary: ${Colors.primary};
        --secondary: ${Colors.secondary};
        --tertiary: ${Colors.tertiary};
    }
`;

// use this for colors
export const Theme = {
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    tertiary: "var(--tertiary)",
};
