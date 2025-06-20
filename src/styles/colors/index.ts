import { css } from "@emotion/react";

// use this colors only if necessary - use Theme for colors
export const Colors = {
    primary: "#ffffff", // light background
    secondary: "#1f2937", // dark text
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
