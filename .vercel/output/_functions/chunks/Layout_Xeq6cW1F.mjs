import { ak as cspAlgorithmSchema, al as cspHashSchema, am as allowedDirectivesSchema, a5 as ASTRO_VERSION, A as AstroError, an as UnknownContentCollectionError, n as createAstro, c as createComponent, b as addAttribute, a as renderTemplate, r as renderComponent, ao as renderScript, ap as Fragment$1, aq as defineScriptVars, ar as renderHead, u as unescapeHTML, as as renderSlot } from './astro/server_JMl83RYM.mjs';
import 'kleur/colors';
import { css, keyframes, Global } from '@emotion/react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React__default, { useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import 'clsx';
import { createRequire } from 'node:module';
import { version } from 'vite';
import 'common-ancestor-path';
import 'es-module-lexer';
import './astro-designed-error-pages_WemP2-OH.mjs';
import { syntaxHighlightDefaults, markdownConfigDefaults } from '@astrojs/markdown-remark';
import 'xxhash-wasm';
import 'github-slugger';
import { z, ZodError } from 'zod';
import './index_TUWIZ4ui.mjs';
import 'esbuild';
import { AstroTelemetry } from '@astrojs/telemetry';
import { bundledThemes } from 'shiki';
import 'html-escaper';
import debugPackage from 'debug';
import 'js-yaml';
import 'tsconfck';
import 'zod-to-json-schema';
import '@rollup/pluginutils';
import 'dlv';
import 'dset';
import 'cookie';
import 'prompts';
import '@astrojs/compiler';
import react from '@vitejs/plugin-react';
import { version as version$1 } from 'react-dom';
import CompressionPlugin from 'vite-plugin-compression';
import path, { resolve, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { EnumChangefreq, SitemapAndIndexStream, SitemapStream } from 'sitemap';
import fs, { createWriteStream } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import { Readable, pipeline } from 'node:stream';
import { promisify } from 'node:util';
import replace from 'stream-replace-string';
import svgr from 'vite-plugin-svgr';
import autoprefixerPlugin from 'autoprefixer';
import tailwindPlugin from 'tailwindcss';
import isValidFilename from 'valid-filename';
import { v as vercelAdapter } from './index_Btqg6Wbb.mjs';
/* empty css                                   */

const Container = ({ children, ...rest }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "m-auto px-5 w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-1320px",
      ...rest,
      children
    }
  );
};

const Colors = {
  primary: "#ffffff",
  // light background
  secondary: "#1f2937",
  // dark text
  tertiary: "#1e40af"
  // corporate blue
};
const ThemeVar = css`
    :root {
        --primary: ${Colors.primary};
        --secondary: ${Colors.secondary};
        --tertiary: ${Colors.tertiary};
    }
`;
const Theme = {
  secondary: "var(--secondary)"};

const RobotoBlack = "/_astro/Roboto-Black.tBYbbWl-.woff2";

const RobotoBlackItalic = "/_astro/Roboto-BlackItalic.CxCOE_MU.woff2";

const RobotoBold = "/_astro/Roboto-Bold.OBUL28o9.woff2";

const RobotoBoldItalic = "/_astro/Roboto-BoldItalic.Bbs8lVH2.woff2";

const RobotoItalic = "/_astro/Roboto-Italic.0KLjOP-5.woff2";

const RobotoLight = "/_astro/Roboto-Light.-TzFADkf.woff2";

const RobotoLightItalic = "/_astro/Roboto-LightItalic.DuFP9W7P.woff2";

const RobotoMedium = "/_astro/Roboto-Medium.DRylU_ql.woff2";

const RobotoMediumItalic = "/_astro/Roboto-MediumItalic.CPqftbAj.woff2";

const RobotoRegular = "/_astro/Roboto-Regular.CjbfJjO0.woff2";

const RobotoThin = "/_astro/Roboto-Thin.Df4ydPom.woff2";

const RobotoThinItalic = "/_astro/Roboto-ThinItalic.CI9JpB2v.woff2";

var Fonts = /* @__PURE__ */ ((Fonts2) => {
  Fonts2["primary"] = `"Roboto", sans-serif`;
  return Fonts2;
})(Fonts || {});
const FontFace = css`
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 100;
        src: url(${RobotoThin}) format("woff2");
        font-display: swap;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
            U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 300;
        src: url(${RobotoLight}) format("woff2");
        font-display: swap;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
            U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        src: url(${RobotoRegular}) format("woff2");
        font-display: swap;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
            U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        src: url(${RobotoMedium}) format("woff2");
        font-display: swap;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
            U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        src: url(${RobotoBold}) format("woff2");
        font-display: swap;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
            U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 900;
        src: url(${RobotoBlack}) format("woff2");
        font-display: swap;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
            U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    // italic
    @font-face {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 100;
        src: url(${RobotoThinItalic}) format("woff2");
        font-display: swap;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
            U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 300;
        src: url(${RobotoLightItalic}) format("woff2");
        font-display: swap;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
            U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 400;
        src: url(${RobotoItalic}) format("woff2");
        font-display: swap;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
            U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 500;
        src: url(${RobotoMediumItalic}) format("woff2");
        font-display: swap;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
            U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 700;
        src: url(${RobotoBoldItalic}) format("woff2");
        font-display: swap;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
            U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 900;
        src: url(${RobotoBlackItalic}) format("woff2");
        font-display: swap;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC,
            U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
`;

const Breakpoints = {
  base: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  xxxl: 1920
};
const MediaQuery = {
  /**
   *
   * @param breakpoint MediaQuery.min("md")
   * @returns @media (min-width: 768px)
   */
  min: (breakpoint) => `@media (min-width: ${Breakpoints[breakpoint]}px)`,
  /**
   *
   * @param breakpoint MediaQuery.max("lg")
   * @returns @media (max-width: 991px)
   */
  max: (breakpoint) => `@media (max-width: ${Breakpoints[breakpoint]}px)`,
  /**
   *
   * @param minBreakpoint MediaQuery.between("md", "lg")
   * @returns @media (min-width: 768px) and (max-width: 991px)
   */
  between: (minBreakpoint, maxBreakpoint) => `@media (min-width: ${Breakpoints[minBreakpoint]}px) and (max-width: ${Breakpoints[maxBreakpoint]}px)`
};

const NormalizeCSS = css`
    ${FontFace};
    ${ThemeVar};

    :root {
        color-scheme: light only;
    }

    body,
    html {
        font-family: ${Fonts.primary};
        font-weight: 400;
        font-size: 16px;
        line-height: 1.2;
    }

    * {
        box-sizing: border-box;
    }

    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;

        color: ${Theme.secondary};
    }

    main {
        display: block;
    }

    a {
        background-color: transparent;
    }

    abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        text-decoration: underline dotted;
    }

    img {
        border-style: none;
        object-fit: cover;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    button {
        padding: 0;
    }

    figure {
        margin: 0;
        line-height: 0;
    }

    strong {
        font-weight: 700;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    h1 {
        font-size: 60px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 45px;
        }
    }

    h2 {
        font-size: 60px;
        line-height: 1.2;
        ${MediaQuery.max("lg")} {
            font-size: 40px;
        }
    }

    h3 {
        font-size: 35px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 25px;
        }
    }

    h4 {
        font-size: 25px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 18px;
        }
    }

    h5 {
        font-size: 20px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 18px;
        }
    }

    h6 {
        font-size: 18px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 16px;
        }
    }

    p {
        font-size: 18px;
        line-height: 24px;

        ${MediaQuery.max("lg")} {
            font-size: 16px;
            line-height: 20px;
        }
    }

    [data-animate] {
        transform: translateY(50px);
        opacity: 0.001;
        transition: opacity 0.5s, transform 0.5s;

        &.animate-fade-in {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;

const PreviewPng = new Proxy({"src":"/_astro/preview.D2I8HkEY.webp","width":1613,"height":799,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/static/images/preview.webp";
							}
							
							return target[name];
						}
					});

const HeroImg = new Proxy({"src":"/_astro/hero-img.BfnRRkqo.webp","width":960,"height":539,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/static/images/hero-img.webp";
							}
							
							return target[name];
						}
					});

const about = new Proxy({"src":"/_astro/about.CPG-PfzA.webp","width":2000,"height":1333,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/static/images/about.webp";
							}
							
							return target[name];
						}
					});

const partner = new Proxy({"src":"/_astro/partner.nSPPxOOg.webp","width":4213,"height":3283,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/static/images/partner.webp";
							}
							
							return target[name];
						}
					});

const Logo$1 = new Proxy({"src":"/_astro/logo.BLLvOwki.webp","width":856,"height":256,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/static/images/logo.webp";
							}
							
							return target[name];
						}
					});

const automacao = new Proxy({"src":"/_astro/automacao.DaZMSlsn.jpg","width":3400,"height":3400,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/static/images/automacoes/automacao.jpg";
							}
							
							return target[name];
						}
					});

const expertise = new Proxy({"src":"/_astro/expertise.CQFRgNQ4.png","width":1536,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/static/images/expertise.png";
							}
							
							return target[name];
						}
					});

const Logo1 = new Proxy({"src":"/_astro/logo1.DPIt9Oes.webp","width":381,"height":118,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/static/images/logos/logo1.webp";
							}
							
							return target[name];
						}
					});

const Logo2 = new Proxy({"src":"/_astro/logo2.BmqSmyoV.webp","width":215,"height":65,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/static/images/logos/logo2.webp";
							}
							
							return target[name];
						}
					});

const images = {
  preview: PreviewPng,
  heroImg: HeroImg,
  logo: Logo$1,
  logo1: Logo1,
  logo2: Logo2,
  about,
  partner,
  automacao,
  expertise
};
const Image = ({
  alt,
  srcLocal,
  height,
  width,
  src,
  loading,
  ...rest
}) => {
  if (!srcLocal && !src) {
    throw new Error("srcLocal or src is required");
  }
  const image = srcLocal ? images[srcLocal] : { src, width, height };
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: image.src,
      alt,
      width: width ? width : image.width,
      height: height ? height : image.height,
      loading,
      ...rest
    }
  );
};

const Logo = () => {
  return /* @__PURE__ */ jsx("div", { className: "shrink-0 mr-4", children: /* @__PURE__ */ jsx("a", { href: "/", className: "block", "aria-label": "logo", children: /* @__PURE__ */ jsx(
    Image,
    {
      srcLocal: "logo",
      alt: "logo",
      className: "max-w-20 lg:max-w-28"
    }
  ) }) });
};

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: ${({ $align }) => $align || "flex-start"};
`;
const ButtonLink = styled.a`
    /**
        if needed make custom css for buttons
    */

    /* ${({ $variant }) => $variant === "primary" && PrimaryVariant};
    ${({ $variant }) => $variant === "secondary" && SecondaryVariant}; */
`;
const Button = ButtonLink.withComponent("button");
const PrimaryVariant = css``;
const SecondaryVariant = css``;

const animateFadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const HeaderStyled = styled.header`
    animation: ${animateFadeIn} 1s ease-in-out;
    z-index: 30;
`;

const Header = () => {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigateToSection = (sectionId) => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    if (window.location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        const headerHeight = 80;
        const offsetTop = section.offsetTop - headerHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };
  const navigateToService = (servicePath) => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    window.location.href = servicePath;
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    HeaderStyled,
    {
      className: `fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out bg-white/90 backdrop-blur-xl ${isScrolled ? "border-b border-gray-200 shadow-lg" : ""}`,
      ref: headerRef,
      children: /* @__PURE__ */ jsxs(Container, { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-20", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(Logo, {}) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center space-x-8", children: [
            /* @__PURE__ */ jsxs("nav", { className: "flex items-center space-x-6", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => navigateToSection("home"),
                  className: "font-medium transition-colors duration-200 hover:text-blue-600 cursor-pointer text-gray-700",
                  children: "Início"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => setIsServicesOpen(!isServicesOpen),
                    className: "font-medium transition-colors duration-200 hover:text-blue-600 cursor-pointer text-gray-700 flex items-center gap-1",
                    children: [
                      "Desenvolvimento",
                      /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
                    ]
                  }
                ),
                isServicesOpen && /* @__PURE__ */ jsxs("div", { className: "absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50", children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => navigateToService("/sistemas-web"),
                      className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors",
                      children: "Sistemas Web"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => navigateToService("/apps-mobile"),
                      className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors",
                      children: "Apps Mobile"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => navigateToService("/sistemas-desktop"),
                      className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors",
                      children: "Sistemas Desktop"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => navigateToService("/apis-integracao"),
                      className: "block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors",
                      children: "APIs e Integrações"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => navigateToSection("sobre"),
                  className: "font-medium transition-colors duration-200 hover:text-blue-600 cursor-pointer text-gray-700",
                  children: "Sobre"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "tel:+551198926-6354",
                  className: "text-sm font-medium transition-colors duration-200 hover:text-blue-600 text-gray-600",
                  children: "📞 (11) 98926-6354"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => navigateToSection("contato"),
                  "data-track": "contact",
                  className: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
                  children: "Orçamento Gratuito"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsMenuOpen(!isMenuOpen),
              className: "p-2 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-100",
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: isMenuOpen ? /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) : /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" })
                }
              )
            }
          ) })
        ] }),
        isMenuOpen && /* @__PURE__ */ jsx("div", { className: "lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 space-y-4", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => navigateToSection("home"),
              className: "block w-full text-left text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200",
              children: "Início"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("div", { className: "text-gray-500 text-sm font-medium px-4", children: "Desenvolvimento" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => navigateToService("/sistemas-web"),
                className: "block w-full text-left text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200",
                children: "Sistemas Web"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => navigateToService("/apps-mobile"),
                className: "block w-full text-left text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200",
                children: "Apps Mobile"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => navigateToService("/sistemas-desktop"),
                className: "block w-full text-left text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200",
                children: "Sistemas Desktop"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => navigateToService("/apis-integracao"),
                className: "block w-full text-left text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200",
                children: "APIs e Integrações"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => navigateToSection("sobre"),
              className: "block w-full text-left text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200",
              children: "Sobre"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => navigateToSection("sobre"),
              className: "block w-full text-left text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200",
              children: "Sobre"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-gray-200", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "tel:+551198926-6354",
                className: "block text-gray-600 text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200",
                children: "📞 (11) 98926-6354"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => navigateToSection("contato"),
                "data-track": "contact",
                className: "block w-full mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg",
                children: "Orçamento Gratuito"
              }
            )
          ] })
        ] }) })
      ] })
    }
  );
};

styled.div`
    display: grid;
    grid-template-columns: calc(60% - 80px) 20% 20%;
    gap: 40px;
    margin: 30px 0;

    ${MediaQuery.max("lg")} {
        grid-template-columns: 1fr;
    }
`;

const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-20", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full filter blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full filter blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-200 rounded-full filter blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "py-16 lg:py-20", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl blur-lg opacity-30 animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "relative inline-block bg-gradient-to-br from-white via-blue-50 to-gray-50 rounded-2xl p-6 border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105", children: /* @__PURE__ */ jsx(Logo, {}) })
          ] }) }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-600 text-lg leading-relaxed mb-8 max-w-md", children: [
            "Desenvolvemos sistemas personalizados que ",
            /* @__PURE__ */ jsx("strong", { children: "automatizam seu negócio" }),
            ". Tecnologia moderna, metodologia ágil e suporte técnico especializado."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-6 mb-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-lg", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-900 mb-1", children: "60 dias" }),
              /* @__PURE__ */ jsx("div", { className: "text-gray-600 text-sm", children: "Entrega Média" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-lg", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-900 mb-1", children: "100%" }),
              /* @__PURE__ */ jsx("div", { className: "text-gray-600 text-sm", children: "Código Limpo" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-gray-900 font-semibold mb-4", children: "Siga-nos" }),
            /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#",
                  className: "w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110",
                  "aria-label": "LinkedIn",
                  children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-gray-600", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) })
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://www.instagram.com/devnic_web/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110",
                  "aria-label": "Instagram",
                  children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-white", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }) })
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://wa.me/5511989266354",
                  className: "w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110",
                  "aria-label": "WhatsApp",
                  children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-white", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" }) })
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-gray-900 font-semibold mb-6", children: "Links Rápidos" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#home",
                className: "text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center group cursor-pointer w-full text-left",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-gray-900 transition-colors duration-200" }),
                  "Início"
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#servicos",
                className: "text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center group cursor-pointer w-full text-left",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-gray-900 transition-colors duration-200" }),
                  "Serviços"
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#sobre",
                className: "text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center group cursor-pointer w-full text-left",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-gray-900 transition-colors duration-200" }),
                  "Sobre Nós"
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#contato",
                className: "text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center group cursor-pointer w-full text-left",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-gray-900 transition-colors duration-200" }),
                  "Contato"
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-gray-900 font-semibold mb-6", children: "Contato & Legal" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4 mb-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center text-gray-600", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 mr-3 text-blue-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" }) }),
              /* @__PURE__ */ jsx("a", { href: "tel:+5511989266354", className: "hover:text-gray-900 transition-colors duration-200", children: "(11) 98926-6354" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center text-gray-600", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 mr-3 text-blue-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }),
              /* @__PURE__ */ jsx("a", { href: "mailto:suporte.devnic@gmail.com", className: "hover:text-gray-900 transition-colors duration-200", children: "suporte.devnic@gmail.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h5", { className: "text-gray-900 font-medium mb-4", children: "Informações Legais" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/politica-de-privacidade",
                  className: "text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm",
                  children: "Política de Privacidade"
                }
              ) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/termos-de-uso",
                  className: "text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm",
                  children: "Termos de Uso"
                }
              ) })
            ] })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-gray-200 py-8", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-gray-600 text-sm", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Devnic Web Solutions. Todos os direitos reservados."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-6 text-sm text-gray-600", children: [
          /* @__PURE__ */ jsx("span", { children: "CNPJ: 57.539.291/0001-08" }),
          /* @__PURE__ */ jsx("span", { children: "•" }),
          /* @__PURE__ */ jsx("span", { children: "Feito com ❤️ no Brasil" })
        ] })
      ] }) }) })
    ] })
  ] });
};

const ContactForm = ({ isOpen, onClose, service }) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    problema: "",
    servico: service || "Diagnóstico Geral"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao enviar formulário");
      }
      setIsSuccess(true);
      setTimeout(() => {
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          problema: "",
          servico: service || "Diagnóstico Geral"
        });
        setIsSuccess(false);
        onClose();
      }, 2e3);
    } catch (error2) {
      console.error("Erro ao salvar lead:", error2);
      setError("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl max-w-md w-full p-6 relative", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onClose,
        className: "absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors",
        children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
      }
    ),
    isSuccess ? /* @__PURE__ */ jsxs("div", { className: "text-center py-8", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-green-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Formulário Enviado!" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Entraremos em contato em breve." })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: [
        "Solicitar ",
        service === "Diagnóstico Geral" ? "Diagnóstico" : "Consulta",
        " Gratuita"
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "nome", className: "block text-sm font-medium text-gray-700 mb-1", children: "Nome Completo *" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "nome",
              name: "nome",
              required: true,
              value: formData.nome,
              onChange: handleInputChange,
              className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              placeholder: "Seu nome completo"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-1", children: "E-mail *" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              id: "email",
              name: "email",
              required: true,
              value: formData.email,
              onChange: handleInputChange,
              className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              placeholder: "seu@email.com"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "telefone", className: "block text-sm font-medium text-gray-700 mb-1", children: "Telefone *" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "tel",
              id: "telefone",
              name: "telefone",
              required: true,
              value: formData.telefone,
              onChange: handleInputChange,
              className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              placeholder: "(11) 99999-9999"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "problema", className: "block text-sm font-medium text-gray-700 mb-1", children: "Descreva seu problema ou necessidade *" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "problema",
              name: "problema",
              required: true,
              rows: 4,
              value: formData.problema,
              onChange: handleInputChange,
              className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none",
              placeholder: "Conte-nos sobre seu desafio atual de TI..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "servico", className: "block text-sm font-medium text-gray-700 mb-1", children: "Serviço de Interesse" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "servico",
              name: "servico",
              value: formData.servico,
              onChange: (e) => setFormData((prev) => ({ ...prev, servico: e.target.value })),
              className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              children: [
                /* @__PURE__ */ jsx("option", { value: "Diagnóstico Geral", children: "Diagnóstico Geral" }),
                /* @__PURE__ */ jsx("option", { value: "Transformação Digital", children: "Transformação Digital" }),
                /* @__PURE__ */ jsx("option", { value: "Infraestrutura & Cloud", children: "Infraestrutura & Cloud" }),
                /* @__PURE__ */ jsx("option", { value: "Segurança da Informação", children: "Segurança da Informação" }),
                /* @__PURE__ */ jsx("option", { value: "Otimização de Processos", children: "Otimização de Processos" })
              ]
            }
          )
        ] }),
        error && /* @__PURE__ */ jsx("div", { className: "text-red-600 text-sm bg-red-50 p-3 rounded-lg", children: error }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            className: "w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-3 px-4 rounded-lg font-semibold transition-colors",
            children: isSubmitting ? "Enviando..." : "Enviar Solicitação"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 text-center mt-4", children: "Entraremos em contato em até 24 horas • Consulta 100% gratuita" })
    ] })
  ] }) });
};

const useContactForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Diagnóstico Geral");
  const openForm = (service) => {
    if (service) {
      setSelectedService(service);
    }
    setIsFormOpen(true);
  };
  const closeForm = () => {
    setIsFormOpen(false);
  };
  return {
    isFormOpen,
    selectedService,
    openForm,
    closeForm
  };
};

const PageWrapper = ({ children }) => {
  const { isFormOpen, selectedService, openForm, closeForm } = useContactForm();
  React__default.useEffect(() => {
    window.openContactForm = openForm;
  }, [openForm]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    children,
    /* @__PURE__ */ jsx(
      ContactForm,
      {
        isOpen: isFormOpen,
        onClose: closeForm,
        service: selectedService
      }
    )
  ] });
};

const CONTENT_LAYER_TYPE = "content_layer";

typeof process !== "undefined" && process.platform === "win32";

const entryTypeSchema = z.object({
  id: z.string({
    invalid_type_error: "Content entry `id` must be a string"
    // Default to empty string so we can validate properly in the loader
  })
}).passthrough();
z.union([
  z.array(entryTypeSchema),
  z.record(
    z.string(),
    z.object({
      id: z.string({
        invalid_type_error: "Content entry `id` must be a string"
      }).optional()
    }).passthrough()
  )
]);
const collectionConfigParser = z.union([
  z.object({
    type: z.literal("content").optional().default("content"),
    schema: z.any().optional()
  }),
  z.object({
    type: z.literal("data"),
    schema: z.any().optional()
  }),
  z.object({
    type: z.literal(CONTENT_LAYER_TYPE),
    schema: z.any().optional(),
    loader: z.union([
      z.function(),
      z.object({
        name: z.string(),
        load: z.function(
          z.tuple(
            [
              z.object({
                collection: z.string(),
                store: z.any(),
                meta: z.any(),
                logger: z.any(),
                config: z.any(),
                entryTypes: z.any(),
                parseData: z.any(),
                renderMarkdown: z.any(),
                generateDigest: z.function(z.tuple([z.any()], z.string())),
                watcher: z.any().optional(),
                refreshContextData: z.record(z.unknown()).optional()
              })
            ],
            z.unknown()
          )
        ),
        schema: z.any().optional(),
        render: z.function(z.tuple([z.any()], z.unknown())).optional()
      })
    ]),
    /** deprecated */
    _legacy: z.boolean().optional()
  })
]);
z.object({
  collections: z.record(collectionConfigParser)
});

const LOCAL_PROVIDER_NAME = "local";

const weightSchema = z.union([z.string(), z.number()]);
const styleSchema = z.enum(["normal", "italic", "oblique"]);
const unicodeRangeSchema = z.array(z.string()).nonempty();
const familyPropertiesSchema = z.object({
  /**
   * A [font weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight). If the associated font is a [variable font](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide), you can specify a range of weights:
   *
   * ```js
   * weight: "100 900"
   * ```
   */
  weight: weightSchema.optional(),
  /**
   * A [font style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style).
   */
  style: styleSchema.optional(),
  /**
   * @default `"swap"`
   *
   * A [font display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display).
   */
  display: z.enum(["auto", "block", "swap", "fallback", "optional"]).optional(),
  /**
   * A [font stretch](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-stretch).
   */
  stretch: z.string().optional(),
  /**
   * Font [feature settings](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-feature-settings).
   */
  featureSettings: z.string().optional(),
  /**
   * Font [variation settings](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-variation-settings).
   */
  variationSettings: z.string().optional()
});
const fallbacksSchema = z.object({
  /**
  	 * @default `["sans-serif"]`
  	 *
  	 * An array of fonts to use when your chosen font is unavailable, or loading. Fallback fonts will be chosen in the order listed. The first available font will be used:
  	 *
  	 * ```js
  	 * fallbacks: ["CustomFont", "serif"]
  	 * ```
  	 *
  	 * To disable fallback fonts completely, configure an empty array:
  	 *
  	 * ```js
  	 * fallbacks: []
  	 * ```
  	 *
  
  	 * If the last font in the `fallbacks` array is a [generic family name](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#generic-name), Astro will attempt to generate [optimized fallbacks](https://developer.chrome.com/blog/font-fallbacks) using font metrics will be generated. To disable this optimization, set `optimizedFallbacks` to false.
  	 */
  fallbacks: z.array(z.string()).optional(),
  /**
   * @default `true`
   *
   * Whether or not to enable optimized fallback generation. You may disable this default optimization to have full control over `fallbacks`.
   */
  optimizedFallbacks: z.boolean().optional()
});
const requiredFamilyAttributesSchema = z.object({
  /**
   * The font family name, as identified by your font provider.
   */
  name: z.string(),
  /**
   * A valid [ident](https://developer.mozilla.org/en-US/docs/Web/CSS/ident) in the form of a CSS variable (i.e. starting with `--`).
   */
  cssVariable: z.string()
});
const entrypointSchema = z.union([z.string(), z.instanceof(URL)]);
const fontProviderSchema = z.object({
  /**
   * URL, path relative to the root or package import.
   */
  entrypoint: entrypointSchema,
  /**
   * Optional serializable object passed to the unifont provider.
   */
  config: z.record(z.string(), z.any()).optional()
}).strict();
const localFontFamilySchema = requiredFamilyAttributesSchema.merge(fallbacksSchema).merge(
  z.object({
    /**
     * The source of your font files. Set to `"local"` to use local font files.
     */
    provider: z.literal(LOCAL_PROVIDER_NAME),
    /**
     * Each variant represents a [`@font-face` declaration](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/).
     */
    variants: z.array(
      familyPropertiesSchema.merge(
        z.object({
          /**
           * Font [sources](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src). It can be a path relative to the root, a package import or a URL. URLs are particularly useful if you inject local fonts through an integration.
           */
          src: z.array(
            z.union([
              entrypointSchema,
              z.object({ url: entrypointSchema, tech: z.string().optional() }).strict()
            ])
          ).nonempty(),
          /**
           * A [unicode range](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range).
           */
          unicodeRange: unicodeRangeSchema.optional()
          // TODO: find a way to support subsets (through fontkit?)
        }).strict()
      )
    ).nonempty()
  })
).strict();
const remoteFontFamilySchema = requiredFamilyAttributesSchema.merge(
  familyPropertiesSchema.omit({
    weight: true,
    style: true
  })
).merge(fallbacksSchema).merge(
  z.object({
    /**
     * The source of your font files. You can use a built-in provider or write your own custom provider.
     */
    provider: fontProviderSchema,
    /**
     * @default `[400]`
     *
     * An array of [font weights](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight). If the associated font is a [variable font](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide), you can specify a range of weights:
     *
     * ```js
     * weight: "100 900"
     * ```
     */
    weights: z.array(weightSchema).nonempty().optional(),
    /**
     * @default `["normal", "italic"]`
     *
     * An array of [font styles](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style).
     */
    styles: z.array(styleSchema).nonempty().optional(),
    /**
     * @default `["cyrillic-ext", "cyrillic", "greek-ext", "greek", "vietnamese", "latin-ext", "latin"]`
     *
     * An array of [font subsets](https://knaap.dev/posts/font-subsetting/):
     */
    subsets: z.array(z.string()).nonempty().optional(),
    /**
     * A [unicode range](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range).
     */
    unicodeRange: unicodeRangeSchema.optional()
  })
).strict();

const StringSchema = z.object({
  type: z.literal("string"),
  optional: z.boolean().optional(),
  default: z.string().optional(),
  max: z.number().optional(),
  min: z.number().min(0).optional(),
  length: z.number().optional(),
  url: z.boolean().optional(),
  includes: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional()
});
const NumberSchema = z.object({
  type: z.literal("number"),
  optional: z.boolean().optional(),
  default: z.number().optional(),
  gt: z.number().optional(),
  min: z.number().optional(),
  lt: z.number().optional(),
  max: z.number().optional(),
  int: z.boolean().optional()
});
const BooleanSchema = z.object({
  type: z.literal("boolean"),
  optional: z.boolean().optional(),
  default: z.boolean().optional()
});
const EnumSchema = z.object({
  type: z.literal("enum"),
  values: z.array(
    // We use "'" for codegen so it can't be passed here
    z.string().refine((v) => !v.includes("'"), {
      message: `The "'" character can't be used as an enum value`
    })
  ),
  optional: z.boolean().optional(),
  default: z.string().optional()
});
const EnvFieldType = z.union([
  StringSchema,
  NumberSchema,
  BooleanSchema,
  EnumSchema.superRefine((schema, ctx) => {
    if (schema.default) {
      if (!schema.values.includes(schema.default)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `The default value "${schema.default}" must be one of the specified values: ${schema.values.join(", ")}.`
        });
      }
    }
  })
]);
const PublicClientEnvFieldMetadata = z.object({
  context: z.literal("client"),
  access: z.literal("public")
});
const PublicServerEnvFieldMetadata = z.object({
  context: z.literal("server"),
  access: z.literal("public")
});
const SecretServerEnvFieldMetadata = z.object({
  context: z.literal("server"),
  access: z.literal("secret")
});
const _EnvFieldMetadata = z.union([
  PublicClientEnvFieldMetadata,
  PublicServerEnvFieldMetadata,
  SecretServerEnvFieldMetadata
]);
const EnvFieldMetadata = z.custom().superRefine((data, ctx) => {
  const result = _EnvFieldMetadata.safeParse(data);
  if (result.success) {
    return;
  }
  for (const issue of result.error.issues) {
    if (issue.code === z.ZodIssueCode.invalid_union) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `**Invalid combination** of "access" and "context" options:
  Secret client variables are not supported. Please review the configuration of \`env.schema.${ctx.path.at(-1)}\`.
  Learn more at https://docs.astro.build/en/guides/environment-variables/#variable-types`,
        path: ["context", "access"]
      });
    } else {
      ctx.addIssue(issue);
    }
  }
});
const EnvSchemaKey = z.string().min(1).refine(([firstChar]) => isNaN(Number.parseInt(firstChar)), {
  message: "A valid variable name cannot start with a number."
}).refine((str) => /^[A-Z0-9_]+$/.test(str), {
  message: "A valid variable name can only contain uppercase letters, numbers and underscores."
});
const EnvSchema = z.record(EnvSchemaKey, z.intersection(EnvFieldMetadata, EnvFieldType));

const ASTRO_CONFIG_DEFAULTS = {
  root: ".",
  srcDir: "./src",
  publicDir: "./public",
  outDir: "./dist",
  cacheDir: "./node_modules/.astro",
  base: "/",
  trailingSlash: "ignore",
  build: {
    format: "directory",
    client: "./client/",
    server: "./server/",
    assets: "_astro",
    serverEntry: "entry.mjs",
    redirects: true,
    inlineStylesheets: "auto",
    concurrency: 1
  },
  image: {
    endpoint: { entrypoint: void 0, route: "/_image" },
    service: { entrypoint: "astro/assets/services/sharp", config: {} },
    experimentalDefaultStyles: true
  },
  devToolbar: {
    enabled: true
  },
  compressHTML: true,
  server: {
    host: false,
    port: 4321,
    open: false,
    allowedHosts: []
  },
  integrations: [],
  markdown: markdownConfigDefaults,
  vite: {},
  legacy: {
    collections: false
  },
  redirects: {},
  security: {
    checkOrigin: true
  },
  env: {
    schema: {},
    validateSecrets: false
  },
  experimental: {
    clientPrerender: false,
    contentIntellisense: false,
    responsiveImages: false,
    headingIdCompat: false,
    preserveScriptOrder: false,
    csp: false
  }
};
const highlighterTypesSchema = z.union([z.literal("shiki"), z.literal("prism")]).default(syntaxHighlightDefaults.type);
z.object({
  root: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.root).transform((val) => new URL(val)),
  srcDir: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.srcDir).transform((val) => new URL(val)),
  publicDir: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.publicDir).transform((val) => new URL(val)),
  outDir: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.outDir).transform((val) => new URL(val)),
  cacheDir: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.cacheDir).transform((val) => new URL(val)),
  site: z.string().url().optional(),
  compressHTML: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.compressHTML),
  base: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.base),
  trailingSlash: z.union([z.literal("always"), z.literal("never"), z.literal("ignore")]).optional().default(ASTRO_CONFIG_DEFAULTS.trailingSlash),
  output: z.union([z.literal("static"), z.literal("server")]).optional().default("static"),
  scopedStyleStrategy: z.union([z.literal("where"), z.literal("class"), z.literal("attribute")]).optional().default("attribute"),
  adapter: z.object({ name: z.string(), hooks: z.object({}).passthrough().default({}) }).optional(),
  integrations: z.preprocess(
    // preprocess
    (val) => Array.isArray(val) ? val.flat(Infinity).filter(Boolean) : val,
    // validate
    z.array(z.object({ name: z.string(), hooks: z.object({}).passthrough().default({}) })).default(ASTRO_CONFIG_DEFAULTS.integrations)
  ),
  build: z.object({
    format: z.union([z.literal("file"), z.literal("directory"), z.literal("preserve")]).optional().default(ASTRO_CONFIG_DEFAULTS.build.format),
    client: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.client).transform((val) => new URL(val)),
    server: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.server).transform((val) => new URL(val)),
    assets: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.assets),
    assetsPrefix: z.string().optional().or(z.object({ fallback: z.string() }).and(z.record(z.string())).optional()),
    serverEntry: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.serverEntry),
    redirects: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.build.redirects),
    inlineStylesheets: z.enum(["always", "auto", "never"]).optional().default(ASTRO_CONFIG_DEFAULTS.build.inlineStylesheets),
    concurrency: z.number().min(1).optional().default(ASTRO_CONFIG_DEFAULTS.build.concurrency)
  }).default({}),
  server: z.preprocess(
    // preprocess
    // NOTE: Uses the "error" command here because this is overwritten by the
    // individualized schema parser with the correct command.
    (val) => typeof val === "function" ? val({ command: "error" }) : val,
    // validate
    z.object({
      open: z.union([z.string(), z.boolean()]).optional().default(ASTRO_CONFIG_DEFAULTS.server.open),
      host: z.union([z.string(), z.boolean()]).optional().default(ASTRO_CONFIG_DEFAULTS.server.host),
      port: z.number().optional().default(ASTRO_CONFIG_DEFAULTS.server.port),
      headers: z.custom().optional(),
      allowedHosts: z.union([z.array(z.string()), z.literal(true)]).optional().default(ASTRO_CONFIG_DEFAULTS.server.allowedHosts)
    }).default({})
  ),
  redirects: z.record(
    z.string(),
    z.union([
      z.string(),
      z.object({
        status: z.union([
          z.literal(300),
          z.literal(301),
          z.literal(302),
          z.literal(303),
          z.literal(304),
          z.literal(307),
          z.literal(308)
        ]),
        destination: z.string()
      })
    ])
  ).default(ASTRO_CONFIG_DEFAULTS.redirects),
  prefetch: z.union([
    z.boolean(),
    z.object({
      prefetchAll: z.boolean().optional(),
      defaultStrategy: z.enum(["tap", "hover", "viewport", "load"]).optional()
    })
  ]).optional(),
  image: z.object({
    endpoint: z.object({
      route: z.literal("/_image").or(z.string()).default(ASTRO_CONFIG_DEFAULTS.image.endpoint.route),
      entrypoint: z.string().optional()
    }).default(ASTRO_CONFIG_DEFAULTS.image.endpoint),
    service: z.object({
      entrypoint: z.union([z.literal("astro/assets/services/sharp"), z.string()]).default(ASTRO_CONFIG_DEFAULTS.image.service.entrypoint),
      config: z.record(z.any()).default({})
    }).default(ASTRO_CONFIG_DEFAULTS.image.service),
    domains: z.array(z.string()).default([]),
    remotePatterns: z.array(
      z.object({
        protocol: z.string().optional(),
        hostname: z.string().optional(),
        port: z.string().optional(),
        pathname: z.string().optional()
      })
    ).default([]),
    experimentalLayout: z.enum(["constrained", "fixed", "full-width", "none"]).optional(),
    experimentalObjectFit: z.string().optional(),
    experimentalObjectPosition: z.string().optional(),
    experimentalBreakpoints: z.array(z.number()).optional(),
    experimentalDefaultStyles: z.boolean().default(ASTRO_CONFIG_DEFAULTS.image.experimentalDefaultStyles)
  }).default(ASTRO_CONFIG_DEFAULTS.image),
  devToolbar: z.object({
    enabled: z.boolean().default(ASTRO_CONFIG_DEFAULTS.devToolbar.enabled)
  }).default(ASTRO_CONFIG_DEFAULTS.devToolbar),
  markdown: z.object({
    syntaxHighlight: z.union([
      z.object({
        type: highlighterTypesSchema,
        excludeLangs: z.array(z.string()).optional().default(syntaxHighlightDefaults.excludeLangs)
      }).default(syntaxHighlightDefaults),
      highlighterTypesSchema,
      z.literal(false)
    ]).default(ASTRO_CONFIG_DEFAULTS.markdown.syntaxHighlight),
    shikiConfig: z.object({
      langs: z.custom().array().transform((langs) => {
        for (const lang of langs) {
          if (typeof lang === "object") {
            if (lang.id) {
              lang.name = lang.id;
            }
            if (lang.grammar) {
              Object.assign(lang, lang.grammar);
            }
          }
        }
        return langs;
      }).default([]),
      langAlias: z.record(z.string(), z.string()).optional().default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.langAlias),
      theme: z.enum(Object.keys(bundledThemes)).or(z.custom()).default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.theme),
      themes: z.record(
        z.enum(Object.keys(bundledThemes)).or(z.custom())
      ).default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.themes),
      defaultColor: z.union([z.literal("light"), z.literal("dark"), z.string(), z.literal(false)]).optional(),
      wrap: z.boolean().or(z.null()).default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.wrap),
      transformers: z.custom().array().default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.transformers)
    }).default({}),
    remarkPlugins: z.union([
      z.string(),
      z.tuple([z.string(), z.any()]),
      z.custom((data) => typeof data === "function"),
      z.tuple([z.custom((data) => typeof data === "function"), z.any()])
    ]).array().default(ASTRO_CONFIG_DEFAULTS.markdown.remarkPlugins),
    rehypePlugins: z.union([
      z.string(),
      z.tuple([z.string(), z.any()]),
      z.custom((data) => typeof data === "function"),
      z.tuple([z.custom((data) => typeof data === "function"), z.any()])
    ]).array().default(ASTRO_CONFIG_DEFAULTS.markdown.rehypePlugins),
    remarkRehype: z.custom((data) => data instanceof Object && !Array.isArray(data)).default(ASTRO_CONFIG_DEFAULTS.markdown.remarkRehype),
    gfm: z.boolean().default(ASTRO_CONFIG_DEFAULTS.markdown.gfm),
    smartypants: z.boolean().default(ASTRO_CONFIG_DEFAULTS.markdown.smartypants)
  }).default({}),
  vite: z.custom((data) => data instanceof Object && !Array.isArray(data)).default(ASTRO_CONFIG_DEFAULTS.vite),
  i18n: z.optional(
    z.object({
      defaultLocale: z.string(),
      locales: z.array(
        z.union([
          z.string(),
          z.object({
            path: z.string(),
            codes: z.string().array().nonempty()
          })
        ])
      ),
      domains: z.record(
        z.string(),
        z.string().url(
          "The domain value must be a valid URL, and it has to start with 'https' or 'http'."
        )
      ).optional(),
      fallback: z.record(z.string(), z.string()).optional(),
      routing: z.literal("manual").or(
        z.object({
          prefixDefaultLocale: z.boolean().optional().default(false),
          // TODO: Astro 6.0 change to false
          redirectToDefaultLocale: z.boolean().optional().default(true),
          fallbackType: z.enum(["redirect", "rewrite"]).optional().default("redirect")
        })
      ).optional().default({})
    }).optional()
  ),
  security: z.object({
    checkOrigin: z.boolean().default(ASTRO_CONFIG_DEFAULTS.security.checkOrigin)
  }).optional().default(ASTRO_CONFIG_DEFAULTS.security),
  env: z.object({
    schema: EnvSchema.optional().default(ASTRO_CONFIG_DEFAULTS.env.schema),
    validateSecrets: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.env.validateSecrets)
  }).strict().optional().default(ASTRO_CONFIG_DEFAULTS.env),
  session: z.object({
    driver: z.string(),
    options: z.record(z.any()).optional(),
    cookie: z.object({
      name: z.string().optional(),
      domain: z.string().optional(),
      path: z.string().optional(),
      maxAge: z.number().optional(),
      sameSite: z.union([z.enum(["strict", "lax", "none"]), z.boolean()]).optional(),
      secure: z.boolean().optional()
    }).or(z.string()).transform((val) => {
      if (typeof val === "string") {
        return { name: val };
      }
      return val;
    }).optional(),
    ttl: z.number().optional()
  }).optional(),
  experimental: z.object({
    clientPrerender: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.clientPrerender),
    contentIntellisense: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.contentIntellisense),
    responsiveImages: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.responsiveImages),
    headingIdCompat: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.headingIdCompat),
    preserveScriptOrder: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.preserveScriptOrder),
    fonts: z.array(z.union([localFontFamilySchema, remoteFontFamilySchema])).optional(),
    csp: z.union([
      z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.csp),
      z.object({
        algorithm: cspAlgorithmSchema,
        directives: z.array(allowedDirectivesSchema).optional(),
        styleDirective: z.object({
          resources: z.array(z.string()).optional(),
          hashes: z.array(cspHashSchema).optional()
        }).optional(),
        scriptDirective: z.object({
          resources: z.array(z.string()).optional(),
          hashes: z.array(cspHashSchema).optional(),
          strictDynamic: z.boolean().optional()
        }).optional()
      })
    ]).optional().default(ASTRO_CONFIG_DEFAULTS.experimental.csp)
  }).strict(
    `Invalid or outdated experimental feature.
Check for incorrect spelling or outdated Astro version.
See https://docs.astro.build/en/reference/experimental-flags/ for a list of all current experiments.`
  ).default({}),
  legacy: z.object({
    collections: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.legacy.collections)
  }).default({})
});

z.custom().superRefine((config, ctx) => {
  if (config.build.assetsPrefix && typeof config.build.assetsPrefix !== "string" && !config.build.assetsPrefix.fallback) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "The `fallback` is mandatory when defining the option as an object.",
      path: ["build", "assetsPrefix"]
    });
  }
  for (let i = 0; i < config.image.remotePatterns.length; i++) {
    const { hostname, pathname } = config.image.remotePatterns[i];
    if (hostname && hostname.includes("*") && !(hostname.startsWith("*.") || hostname.startsWith("**."))) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "wildcards can only be placed at the beginning of the hostname",
        path: ["image", "remotePatterns", i, "hostname"]
      });
    }
    if (pathname && pathname.includes("*") && !(pathname.endsWith("/*") || pathname.endsWith("/**"))) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "wildcards can only be placed at the end of a pathname",
        path: ["image", "remotePatterns", i, "pathname"]
      });
    }
  }
  if (config.outDir.toString().startsWith(config.publicDir.toString())) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "The value of `outDir` must not point to a path within the folder set as `publicDir`, this will cause an infinite loop",
      path: ["outDir"]
    });
  }
  if (config.i18n) {
    const { defaultLocale, locales: _locales, fallback, domains } = config.i18n;
    const locales = _locales.map((locale) => {
      if (typeof locale === "string") {
        return locale;
      } else {
        return locale.path;
      }
    });
    if (!locales.includes(defaultLocale)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `The default locale \`${defaultLocale}\` is not present in the \`i18n.locales\` array.`,
        path: ["i18n", "locales"]
      });
    }
    if (fallback) {
      for (const [fallbackFrom, fallbackTo] of Object.entries(fallback)) {
        if (!locales.includes(fallbackFrom)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `The locale \`${fallbackFrom}\` key in the \`i18n.fallback\` record doesn't exist in the \`i18n.locales\` array.`,
            path: ["i18n", "fallbacks"]
          });
        }
        if (fallbackFrom === defaultLocale) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `You can't use the default locale as a key. The default locale can only be used as value.`,
            path: ["i18n", "fallbacks"]
          });
        }
        if (!locales.includes(fallbackTo)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `The locale \`${fallbackTo}\` value in the \`i18n.fallback\` record doesn't exist in the \`i18n.locales\` array.`,
            path: ["i18n", "fallbacks"]
          });
        }
      }
    }
    if (domains) {
      const entries = Object.entries(domains);
      const hasDomains = domains ? Object.keys(domains).length > 0 : false;
      if (entries.length > 0 && !hasDomains) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `When specifying some domains, the property \`i18n.routing.strategy\` must be set to \`"domains"\`.`,
          path: ["i18n", "routing", "strategy"]
        });
      }
      if (hasDomains) {
        if (!config.site) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "The option `site` isn't set. When using the 'domains' strategy for `i18n`, `site` is required to create absolute URLs for locales that aren't mapped to a domain.",
            path: ["site"]
          });
        }
        if (config.output !== "server") {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Domain support is only available when `output` is `"server"`.',
            path: ["output"]
          });
        }
      }
      for (const [domainKey, domainValue] of entries) {
        if (!locales.includes(domainKey)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `The locale \`${domainKey}\` key in the \`i18n.domains\` record doesn't exist in the \`i18n.locales\` array.`,
            path: ["i18n", "domains"]
          });
        }
        if (!domainValue.startsWith("https") && !domainValue.startsWith("http")) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "The domain value must be a valid URL, and it has to start with 'https' or 'http'.",
            path: ["i18n", "domains"]
          });
        } else {
          try {
            const domainUrl = new URL(domainValue);
            if (domainUrl.pathname !== "/") {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: `The URL \`${domainValue}\` must contain only the origin. A subsequent pathname isn't allowed here. Remove \`${domainUrl.pathname}\`.`,
                path: ["i18n", "domains"]
              });
            }
          } catch {
          }
        }
      }
    }
  }
  if (!config.experimental.responsiveImages && (config.image.experimentalLayout || config.image.experimentalObjectFit || config.image.experimentalObjectPosition || config.image.experimentalBreakpoints)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "The `experimentalLayout`, `experimentalObjectFit`, `experimentalObjectPosition` and `experimentalBreakpoints` options are only available when `experimental.responsiveImages` is enabled.",
      path: ["experimental", "responsiveImages"]
    });
  }
  if (config.experimental.fonts && config.experimental.fonts.length > 0) {
    for (let i = 0; i < config.experimental.fonts.length; i++) {
      const { cssVariable } = config.experimental.fonts[i];
      if (!cssVariable.startsWith("--") || cssVariable.includes(" ") || cssVariable.includes(":")) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `**cssVariable** property "${cssVariable}" contains invalid characters for CSS variable generation. It must start with -- and be a valid indent: https://developer.mozilla.org/en-US/docs/Web/CSS/ident.`,
          path: ["fonts", i, "cssVariable"]
        });
      }
    }
  }
});

new AstroTelemetry({
  astroVersion: ASTRO_VERSION,
  viteVersion: version
});

const debuggers = {};
function debug(type, ...messages) {
  const namespace = `astro:${type}`;
  debuggers[namespace] = debuggers[namespace] || debugPackage(namespace);
  return debuggers[namespace](...messages);
}
globalThis._astroGlobalDebug = debug;

new AstroError({
  ...UnknownContentCollectionError,
  message: `Unexpected error while parsing content entry IDs and slugs.`
});

createRequire(import.meta.url);

function defineConfig(config) {
  return config;
}

function getReactMajorVersion() {
  const matches = /\d+\./.exec(version$1);
  if (!matches) {
    return NaN;
  }
  return Number(matches[0]);
}
function isUnsupportedVersion(majorVersion) {
  return majorVersion < 17 || majorVersion > 19 || Number.isNaN(majorVersion);
}
const versionsConfig = {
  17: {
    server: "@astrojs/react/server-v17.js",
    client: "@astrojs/react/client-v17.js",
    externals: ["react-dom/server.js", "react-dom/client.js"]
  },
  18: {
    server: "@astrojs/react/server.js",
    client: "@astrojs/react/client.js",
    externals: ["react-dom/server", "react-dom/client"]
  },
  19: {
    server: "@astrojs/react/server.js",
    client: "@astrojs/react/client.js",
    externals: ["react-dom/server", "react-dom/client"]
  }
};

const FAST_REFRESH_PREAMBLE = react.preambleCode;
function getRenderer(reactConfig) {
  return {
    name: "@astrojs/react",
    clientEntrypoint: reactConfig.client,
    serverEntrypoint: reactConfig.server
  };
}
function optionsPlugin(experimentalReactChildren) {
  const virtualModule = "astro:react:opts";
  const virtualModuleId = "\0" + virtualModule;
  return {
    name: "@astrojs/react:opts",
    resolveId(id) {
      if (id === virtualModule) {
        return virtualModuleId;
      }
    },
    load(id) {
      if (id === virtualModuleId) {
        return {
          code: `export default {
						experimentalReactChildren: ${JSON.stringify(experimentalReactChildren)}
					}`
        };
      }
    }
  };
}
function getViteConfiguration$1({ include, exclude, babel, experimentalReactChildren } = {}, reactConfig) {
  return {
    optimizeDeps: {
      include: [
        reactConfig.client,
        "react",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "react-dom"
      ],
      exclude: [reactConfig.server]
    },
    plugins: [react({ include, exclude, babel }), optionsPlugin(!!experimentalReactChildren)],
    resolve: {
      dedupe: ["react", "react-dom", "react-dom/server"]
    },
    ssr: {
      external: reactConfig.externals,
      noExternal: [
        // These are all needed to get mui to work.
        "@mui/material",
        "@mui/base",
        "@babel/runtime",
        "use-immer",
        "@material-tailwind/react"
      ]
    }
  };
}
function src_default$1({
  include,
  exclude,
  babel,
  experimentalReactChildren
} = {}) {
  const majorVersion = getReactMajorVersion();
  if (isUnsupportedVersion(majorVersion)) {
    throw new Error(`Unsupported React version: ${majorVersion}.`);
  }
  const versionConfig = versionsConfig[majorVersion];
  return {
    name: "@astrojs/react",
    hooks: {
      "astro:config:setup": ({ command, addRenderer, updateConfig, injectScript }) => {
        addRenderer(getRenderer(versionConfig));
        updateConfig({
          vite: getViteConfiguration$1(
            { include, exclude, babel, experimentalReactChildren },
            versionConfig
          )
        });
        if (command === "dev") {
          const preamble = FAST_REFRESH_PREAMBLE.replace(`__BASE__`, "/");
          injectScript("before-hydration", preamble);
        }
      }
    }
  };
}

function parseI18nUrl(url, defaultLocale, locales, base) {
  if (!url.startsWith(base)) {
    return void 0;
  }
  let s = url.slice(base.length);
  if (!s || s === "/") {
    return { locale: defaultLocale, path: "/" };
  }
  if (s[0] !== "/") {
    s = "/" + s;
  }
  const locale = s.split("/")[1];
  if (locale in locales) {
    let path = s.slice(1 + locale.length);
    if (!path) {
      path = "/";
    }
    return { locale, path };
  }
  return { locale: defaultLocale, path: s };
}

function generateSitemap(pages, finalSiteUrl, opts) {
  const { changefreq, priority, lastmod: lastmodSrc, i18n } = opts ?? {};
  const urls = [...pages];
  urls.sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
  const lastmod = lastmodSrc?.toISOString();
  const { defaultLocale, locales } = i18n ?? {};
  let getI18nLinks;
  if (defaultLocale && locales) {
    getI18nLinks = createGetI18nLinks(urls, defaultLocale, locales, finalSiteUrl);
  }
  const urlData = urls.map((url, i) => ({
    url,
    links: getI18nLinks?.(i),
    lastmod,
    priority,
    changefreq
  }));
  return urlData;
}
function createGetI18nLinks(urls, defaultLocale, locales, finalSiteUrl) {
  const parsedI18nUrls = urls.map((url) => parseI18nUrl(url, defaultLocale, locales, finalSiteUrl));
  const i18nPathToLinksCache = /* @__PURE__ */ new Map();
  return (urlIndex) => {
    const i18nUrl = parsedI18nUrls[urlIndex];
    if (!i18nUrl) {
      return void 0;
    }
    const cached = i18nPathToLinksCache.get(i18nUrl.path);
    if (cached) {
      return cached;
    }
    const links = [];
    for (let i = 0; i < parsedI18nUrls.length; i++) {
      const parsed = parsedI18nUrls[i];
      if (parsed?.path === i18nUrl.path) {
        links.push({
          url: urls[i],
          lang: locales[parsed.locale]
        });
      }
    }
    if (links.length <= 1) {
      return void 0;
    }
    i18nPathToLinksCache.set(i18nUrl.path, links);
    return links;
  };
}

const SITEMAP_CONFIG_DEFAULTS = {
  filenameBase: "sitemap",
  entryLimit: 45e3
};

const localeKeySchema = z.string().min(1);
const SitemapOptionsSchema = z.object({
  filenameBase: z.string().optional().default(SITEMAP_CONFIG_DEFAULTS.filenameBase),
  filter: z.function().args(z.string()).returns(z.boolean()).optional(),
  customPages: z.string().url().array().optional(),
  canonicalURL: z.string().url().optional(),
  xslURL: z.string().optional(),
  i18n: z.object({
    defaultLocale: localeKeySchema,
    locales: z.record(
      localeKeySchema,
      z.string().min(2).regex(/^[a-zA-Z\-]+$/gm, {
        message: "Only English alphabet symbols and hyphen allowed"
      })
    )
  }).refine((val) => !val || val.locales[val.defaultLocale], {
    message: "`defaultLocale` must exist in `locales` keys"
  }).optional(),
  entryLimit: z.number().nonnegative().optional().default(SITEMAP_CONFIG_DEFAULTS.entryLimit),
  serialize: z.function().args(z.any()).returns(z.any()).optional(),
  changefreq: z.nativeEnum(EnumChangefreq).optional(),
  lastmod: z.date().optional(),
  priority: z.number().min(0).max(1).optional()
}).strict().default(SITEMAP_CONFIG_DEFAULTS);

const validateOptions$1 = (site, opts) => {
  const result = SitemapOptionsSchema.parse(opts);
  z.object({
    site: z.string().optional(),
    // Astro takes care of `site`: how to validate, transform and refine
    canonicalURL: z.string().optional()
    // `canonicalURL` is already validated in prev step
  }).refine((options) => options.site || options.canonicalURL, {
    message: "Required `site` astro.config option or `canonicalURL` integration option"
  }).parse({
    site,
    canonicalURL: result.canonicalURL
  });
  return result;
};

async function writeSitemap({
  filenameBase,
  hostname,
  sitemapHostname = hostname,
  sourceData,
  destinationDir,
  limit = 5e4,
  publicBasePath = "./",
  xslURL: xslUrl
}, astroConfig) {
  await mkdir(destinationDir, { recursive: true });
  const sitemapAndIndexStream = new SitemapAndIndexStream({
    limit,
    xslUrl,
    getSitemapStream: (i) => {
      const sitemapStream = new SitemapStream({
        hostname,
        xslUrl
      });
      const path = `./${filenameBase}-${i}.xml`;
      const writePath = resolve(destinationDir, path);
      if (!publicBasePath.endsWith("/")) {
        publicBasePath += "/";
      }
      const publicPath = normalize(publicBasePath + path);
      let stream;
      if (astroConfig.trailingSlash === "never" || astroConfig.build.format === "file") {
        const host = hostname.endsWith("/") ? hostname.slice(0, -1) : hostname;
        const searchStr = `<loc>${host}/</loc>`;
        const replaceStr = `<loc>${host}</loc>`;
        stream = sitemapStream.pipe(replace(searchStr, replaceStr)).pipe(createWriteStream(writePath));
      } else {
        stream = sitemapStream.pipe(createWriteStream(writePath));
      }
      return [new URL(publicPath, sitemapHostname).toString(), sitemapStream, stream];
    }
  });
  const src = Readable.from(sourceData);
  const indexPath = resolve(destinationDir, `./${filenameBase}-index.xml`);
  return promisify(pipeline)(src, sitemapAndIndexStream, createWriteStream(indexPath));
}

function formatConfigErrorMessage$1(err) {
  const errorList = err.issues.map((issue) => ` ${issue.path.join(".")}  ${issue.message + "."}`);
  return errorList.join("\n");
}
const PKG_NAME = "@astrojs/sitemap";
const STATUS_CODE_PAGES = /* @__PURE__ */ new Set(["404", "500"]);
const isStatusCodePage = (locales) => {
  const statusPathNames = new Set(
    locales.flatMap((locale) => [...STATUS_CODE_PAGES].map((page) => `${locale}/${page}`)).concat([...STATUS_CODE_PAGES])
  );
  return (pathname) => {
    if (pathname.endsWith("/")) {
      pathname = pathname.slice(0, -1);
    }
    if (pathname.startsWith("/")) {
      pathname = pathname.slice(1);
    }
    return statusPathNames.has(pathname);
  };
};
const createPlugin = (options) => {
  let config;
  return {
    name: PKG_NAME,
    hooks: {
      "astro:config:done": async ({ config: cfg }) => {
        config = cfg;
      },
      "astro:build:done": async ({ dir, routes, pages, logger }) => {
        try {
          if (!config.site) {
            logger.warn(
              "The Sitemap integration requires the `site` astro.config option. Skipping."
            );
            return;
          }
          const opts = validateOptions$1(config.site, options);
          const { filenameBase, filter, customPages, serialize, entryLimit } = opts;
          const outFile = `${filenameBase}-index.xml`;
          const finalSiteUrl = new URL(config.base, config.site);
          const shouldIgnoreStatus = isStatusCodePage(Object.keys(opts.i18n?.locales ?? {}));
          let pageUrls = pages.filter((p) => !shouldIgnoreStatus(p.pathname)).map((p) => {
            if (p.pathname !== "" && !finalSiteUrl.pathname.endsWith("/"))
              finalSiteUrl.pathname += "/";
            if (p.pathname.startsWith("/")) p.pathname = p.pathname.slice(1);
            const fullPath = finalSiteUrl.pathname + p.pathname;
            return new URL(fullPath, finalSiteUrl).href;
          });
          const routeUrls = routes.reduce((urls, r) => {
            if (r.type !== "page") return urls;
            if (r.pathname) {
              if (shouldIgnoreStatus(r.pathname ?? r.route)) return urls;
              let fullPath = finalSiteUrl.pathname;
              if (fullPath.endsWith("/")) fullPath += r.generate(r.pathname).substring(1);
              else fullPath += r.generate(r.pathname);
              const newUrl = new URL(fullPath, finalSiteUrl).href;
              if (config.trailingSlash === "never") {
                urls.push(newUrl);
              } else if (config.build.format === "directory" && !newUrl.endsWith("/")) {
                urls.push(newUrl + "/");
              } else {
                urls.push(newUrl);
              }
            }
            return urls;
          }, []);
          pageUrls = Array.from(/* @__PURE__ */ new Set([...pageUrls, ...routeUrls, ...customPages ?? []]));
          if (filter) {
            pageUrls = pageUrls.filter(filter);
          }
          if (pageUrls.length === 0) {
            logger.warn(`No pages found!
\`${outFile}\` not created.`);
            return;
          }
          let urlData = generateSitemap(pageUrls, finalSiteUrl.href, opts);
          if (serialize) {
            try {
              const serializedUrls = [];
              for (const item of urlData) {
                const serialized = await Promise.resolve(serialize(item));
                if (serialized) {
                  serializedUrls.push(serialized);
                }
              }
              if (serializedUrls.length === 0) {
                logger.warn("No pages found!");
                return;
              }
              urlData = serializedUrls;
            } catch (err) {
              logger.error(`Error serializing pages
${err.toString()}`);
              return;
            }
          }
          const destDir = fileURLToPath(dir);
          const xslURL = opts.xslURL ? new URL(opts.xslURL, finalSiteUrl).href : void 0;
          await writeSitemap(
            {
              filenameBase,
              hostname: finalSiteUrl.href,
              destinationDir: destDir,
              publicBasePath: config.base,
              sourceData: urlData,
              limit: entryLimit,
              xslURL
            },
            config
          );
          logger.info(`\`${outFile}\` created at \`${path.relative(process.cwd(), destDir)}\``);
        } catch (err) {
          if (err instanceof ZodError) {
            logger.warn(formatConfigErrorMessage$1(err));
          } else {
            throw err;
          }
        }
      }
    }
  };
};
var index_default = createPlugin;

async function getPostCssConfig(root, postcssInlineOptions) {
  let postcssConfigResult;
  if (!(typeof postcssInlineOptions === "object" && postcssInlineOptions !== null)) {
    let { default: postcssrc } = await import('postcss-load-config');
    const searchPath = typeof postcssInlineOptions === "string" ? postcssInlineOptions : root;
    try {
      postcssConfigResult = await postcssrc({}, searchPath);
    } catch {
      postcssConfigResult = null;
    }
  }
  return postcssConfigResult;
}
async function getViteConfiguration(tailwindConfigPath, nesting, root, postcssInlineOptions) {
  const postcssConfigResult = await getPostCssConfig(root, postcssInlineOptions);
  const postcssOptions = postcssConfigResult?.options ?? {};
  const postcssPlugins = postcssConfigResult?.plugins?.slice() ?? [];
  if (nesting) {
    const tailwindcssNestingPlugin = (await import('tailwindcss/nesting/index.js')).default;
    postcssPlugins.push(tailwindcssNestingPlugin());
  }
  postcssPlugins.push(tailwindPlugin(tailwindConfigPath));
  postcssPlugins.push(autoprefixerPlugin());
  return {
    css: {
      postcss: {
        ...postcssOptions,
        plugins: postcssPlugins
      }
    }
  };
}
function tailwindIntegration(options) {
  const applyBaseStyles = options?.applyBaseStyles ?? true;
  const customConfigPath = options?.configFile;
  const nesting = options?.nesting ?? false;
  return {
    name: "@astrojs/tailwind",
    hooks: {
      "astro:config:setup": async ({ config, updateConfig, injectScript }) => {
        updateConfig({
          vite: await getViteConfiguration(
            customConfigPath,
            nesting,
            fileURLToPath(config.root),
            config.vite.css?.postcss
          )
        });
        if (applyBaseStyles) {
          injectScript("page-ssr", `import '@astrojs/tailwind/base.css';`);
        }
      }
    }
  };
}

// src/index.ts

// ../utils/src/is-valid-hostname.ts
var isValidHostname = (x) => {
  if (typeof x !== "string") {
    return false;
  }
  let value = x.toString();
  const validHostnameChars = /^[a-zA-Z0-9-.]{1,253}\.?$/g;
  if (!validHostnameChars.test(value)) {
    return false;
  }
  if (value.endsWith(".")) {
    value = value.slice(0, value.length - 1);
  }
  if (value.length > 253) {
    return false;
  }
  return value.split(".").every((label) => /^([a-zA-Z0-9-]+)$/g.test(label) && label.length < 64 && !label.startsWith("-") && !label.endsWith("-"));
};

// ../utils/src/is-valid-http-url.ts
var isValidHttpUrl = (s) => {
  if (typeof s !== "string" || !s) {
    return false;
  }
  try {
    const { protocol } = new URL(s);
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
};

// ../utils/src/logger.ts
var Logger = class {
  constructor(packageName2) {
    this.colors = {
      reset: "\x1B[0m",
      fg: {
        red: "\x1B[31m",
        green: "\x1B[32m",
        yellow: "\x1B[33m"
      }
    };
    this.packageName = packageName2;
  }
  log(msg, prefix = "") {
    const s = msg.join("\n");
    console.log(`%s${this.packageName}:%s ${s}
`, prefix, prefix ? this.colors.reset : "");
  }
  info(...msg) {
    this.log(msg);
  }
  success(...msg) {
    this.log(msg, this.colors.fg.green);
  }
  warn(...msg) {
    this.log(["Skipped!", ...msg], this.colors.fg.yellow);
  }
  error(...msg) {
    this.log(["Failed!", ...msg], this.colors.fg.red);
  }
};

// ../utils/src/error-helpers.ts
function getErrorMessage(err) {
  return err instanceof Error ? err.message : String(err);
}

// src/config-defaults.ts
var ROBOTS_TXT_CONFIG_DEFAULTS = {
  sitemap: true,
  policy: [
    {
      allow: "/",
      userAgent: "*"
    }
  ],
  sitemapBaseFileName: "sitemap-index"
};

// src/schema.ts
var schemaSitemapItem = z.string().min(1).refine((val) => !val || isValidHttpUrl(val), {
  message: "Only valid URLs with `http` or `https` protocol allowed"
});
var schemaCleanParam = z.string().max(500);
var schemaPath = z.string().or(z.string().array()).optional();
var RobotsTxtOptionsSchema = z.object({
  host: z.string().or(z.boolean()).optional().refine((val) => !val || typeof val === "boolean" || isValidHostname(val), {
    message: "Not valid host"
  }),
  sitemap: schemaSitemapItem.or(schemaSitemapItem.array()).or(z.boolean()).optional().default(ROBOTS_TXT_CONFIG_DEFAULTS.sitemap),
  policy: z.object({
    userAgent: z.string().min(1),
    allow: schemaPath,
    disallow: schemaPath,
    cleanParam: schemaCleanParam.or(schemaCleanParam.array()).optional(),
    crawlDelay: z.number().nonnegative().optional().refine((val) => typeof val === "undefined" || Number.isFinite(val), { message: "Must be finite number" })
  }).array().nonempty().optional().default(ROBOTS_TXT_CONFIG_DEFAULTS.policy),
  sitemapBaseFileName: z.string().min(1).optional().refine((val) => !val || isValidFilename(val), { message: "Not valid file name" }).default(ROBOTS_TXT_CONFIG_DEFAULTS.sitemapBaseFileName),
  transform: z.function().args(z.string()).returns(z.any()).optional()
}).default(ROBOTS_TXT_CONFIG_DEFAULTS);

// src/validate-options.ts
var validateOptions = (site, opts) => {
  const siteSchema = z.string().min(1, {
    message: "`site` property is required in `astro.config.*`."
  });
  siteSchema.parse(site);
  const result = RobotsTxtOptionsSchema.parse(opts);
  return result;
};

// src/get-robots-txt-content.ts
var capitaliseFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1);
var addBackSlash = (s) => s.endsWith("/") ? s : `${s}/`;
var addLine = (name, rule) => {
  if (rule && Array.isArray(rule) && rule.length > 0) {
    let content = "";
    rule.forEach((item) => {
      content += addLine(name, item);
    });
    return content;
  }
  const ruleContent = name === "Allow" || name === "Disallow" ? encodeURI(rule.toString()) : rule.toString();
  return `${capitaliseFirstLetter(name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase())}:${ruleContent.length > 0 ? ` ${ruleContent}` : ""}
`;
};
var generatePoliceItem = (item, index) => {
  let content = "";
  if (index !== 0) {
    content += "\n";
  }
  content += addLine("User-agent", item.userAgent);
  if (typeof item.disallow === "string" || Array.isArray(item.disallow)) {
    content += addLine("Disallow", item.disallow);
  }
  if (item.allow) {
    content += addLine("Allow", item.allow);
  }
  if (item.crawlDelay) {
    content += addLine("Crawl-delay", item.crawlDelay);
  }
  if (item.cleanParam && item.cleanParam.length > 0) {
    content += addLine("Clean-param", item.cleanParam);
  }
  return content;
};
var getSitemapArr = (sitemap, finalSiteHref, sitemapBaseFileName) => {
  if (typeof sitemap !== "undefined") {
    if (!sitemap) {
      return void 0;
    }
    if (Array.isArray(sitemap)) {
      return sitemap;
    }
    if (typeof sitemap === "string") {
      return [sitemap];
    }
  }
  return [`${addBackSlash(finalSiteHref)}${sitemapBaseFileName}.xml`];
};
var getRobotsTxtContent = (finalSiteHref, opts, site) => {
  var _a;
  const { host, sitemap, policy, sitemapBaseFileName } = opts;
  let result = "";
  policy == null ? void 0 : policy.forEach((item, index) => {
    result += generatePoliceItem(item, index);
  });
  (_a = getSitemapArr(sitemap, finalSiteHref, sitemapBaseFileName)) == null ? void 0 : _a.forEach((item) => {
    result += addLine("Sitemap", item);
  });
  if (host) {
    let hostStr;
    if (typeof host === "boolean") {
      const { hostname } = new URL(site);
      hostStr = hostname;
    } else {
      hostStr = host;
    }
    result += addLine("Host", hostStr);
  }
  return result;
};

// src/data/pkg-name.ts
var packageName = "astro-robots-txt";

// src/index.ts
function formatConfigErrorMessage(err) {
  const errorList = err.issues.map((issue) => `${issue.path.join(".")}  ${issue.message + "."}`);
  return errorList.join("\n");
}
var createRobotsTxtIntegration = (options = {}) => {
  let config;
  return {
    name: packageName,
    hooks: {
      "astro:config:done": async ({ config: cfg }) => {
        config = cfg;
      },
      "astro:build:done": async ({ dir }) => {
        const logger = new Logger(packageName);
        try {
          const opts = validateOptions(config.site, options);
          const finalSiteHref = new URL(config.base, config.site).href;
          let robotsTxtContent = getRobotsTxtContent(finalSiteHref, opts, config.site);
          if (opts.transform) {
            try {
              robotsTxtContent = await Promise.resolve(opts.transform(robotsTxtContent));
              if (!robotsTxtContent) {
                logger.warn("No content after transform.");
                return;
              }
            } catch (err) {
              logger.error("Error transforming content", getErrorMessage(err));
              return;
            }
          }
          fs.writeFileSync(new URL("robots.txt", dir), robotsTxtContent);
          logger.success("`robots.txt` is created.");
        } catch (err) {
          if (err instanceof ZodError) {
            logger.warn(formatConfigErrorMessage(err));
          } else {
            throw err;
          }
        }
      }
    }
  };
};
var src_default = createRobotsTxtIntegration;

const siteUrl = "https://devnic.com.br";

defineConfig({
  // URL do site
  site: siteUrl,

  // Gera saída SSR (server) em vez de estático
  output: "server",

  // Todas as integrações
  integrations: [
    src_default$1(),
    svgr(),
    index_default({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
      serialize(item) {
        if (item.url === siteUrl + "/") {
          item.priority = 1.0;
          item.changefreq = "weekly";
        }
        if (
          item.url.includes("politica-de-privacidade") ||
          item.url.includes("termos-de-uso")
        ) {
          item.priority = 0.3;
          item.changefreq = "monthly";
        }
        return item;
      },
    }),
    tailwindIntegration({
      configFile: "./tailwind.config.js",
    }),
    src_default({
      sitemap: [`${siteUrl}/sitemap-index.xml`, `${siteUrl}/sitemap-0.xml`],
      host: siteUrl,
    }),
  ],

  // Renderer React
  renderers: ["@astrojs/renderer-react"],

  // Build do Vite
  vite: {
    plugins: [CompressionPlugin(), svgr()],
    build: {
      minify: "esbuild",
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom"],
            form: ["react-hook-form", "@hookform/resolvers", "zod"],
            ui: ["react-input-mask"],
          },
        },
      },
    },
    css: {
      transformer: "postcss",
    },
  },

  // Opções adicionais de build
  buildOptions: {
    minify: true,
  },

  // Adapter Vercel em modo serverless (gera dist/server/entry.mjs)
  adapter: vercelAdapter({
    }),

  // Configurações do dev server (headers)
  server: {
    headers: {
      "X-Frame-Options": "DENY",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
    },
  },
});

const $$Astro$4 = createAstro("https://devnic.com.br");
const $$MetaConfig = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MetaConfig;
  const { title, description, preview } = Astro2.props;
  const metaData = {
    keywords: "consultoria em TI, transforma\xE7\xE3o digital, infraestrutura de TI, seguran\xE7a da informa\xE7\xE3o, cloud computing, otimiza\xE7\xE3o de processos, gest\xE3o de tecnologia, suporte 24/7, Devnic, S\xE3o Paulo, Brasil, redu\xE7\xE3o de custos, aumento de produtividade, inova\xE7\xE3o tecnol\xF3gica, estrat\xE9gia em TI",
    default: {
      url: siteUrl,
      type: "website",
      title,
      description,
      image: preview,
      siteName: "Devnic Web Solutions",
      locale: "pt_BR"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      image: preview,
      domain: siteUrl,
      url: siteUrl,
      site: "@devnic",
      creator: "@devnic"
    }
  };
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><!-- Favicon completo --><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><!-- Meta tags principais --><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="keywords"${addAttribute(metaData.keywords, "content")}><meta name="author" content="Devnic Web Solutions"><meta name="publisher" content="Devnic Web Solutions"><meta name="copyright" content="© 2024 Devnic Web Solutions. Todos os direitos reservados."><meta name="language" content="Portuguese"><meta name="distribution" content="global"><meta name="rating" content="general"><meta name="revisit-after" content="7 days"><!-- Configurações de tema e cor --><meta name="color-scheme" content="light"><meta name="theme-color" content="#1e40af"><meta name="msapplication-TileColor" content="#1e40af"><!-- Configurações de robôs otimizadas --><meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><meta name="bingbot" content="index, follow"><!-- Meta tags padrão --><meta property="url"${addAttribute(metaData.default.url, "content")}><meta property="type"${addAttribute(metaData.default.type, "content")}><meta property="title"${addAttribute(metaData.default.title, "content")}><meta property="description"${addAttribute(metaData.default.description, "content")}><meta property="image"${addAttribute(metaData.default.image, "content")}><meta property="locale"${addAttribute(metaData.default.locale, "content")}><!-- Open Graph otimizado --><meta property="og:url"${addAttribute(metaData.default.url, "content")}><meta property="og:type"${addAttribute(metaData.default.type, "content")}><meta property="og:title"${addAttribute(metaData.default.title, "content")}><meta property="og:description"${addAttribute(metaData.default.description, "content")}><meta property="og:image"${addAttribute(metaData.default.image, "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:type" content="image/png"><meta property="og:site_name"${addAttribute(metaData.default.siteName, "content")}><meta property="og:locale"${addAttribute(metaData.default.locale, "content")}><!-- Facebook específico --><meta property="fb:app_id" content="YOUR_FACEBOOK_APP_ID"><!-- Twitter Cards otimizado --><meta name="twitter:card"${addAttribute(metaData.twitter.card, "content")}><meta name="twitter:site"${addAttribute(metaData.twitter.site, "content")}><meta name="twitter:creator"${addAttribute(metaData.twitter.creator, "content")}><meta name="twitter:title"${addAttribute(metaData.twitter.title, "content")}><meta name="twitter:description"${addAttribute(metaData.twitter.description, "content")}><meta name="twitter:image"${addAttribute(metaData.twitter.image, "content")}><meta name="twitter:image:alt" content="Devnic Web Solutions - Consultoria em TI para empresas"><meta property="twitter:domain"${addAttribute(metaData.twitter.domain, "content")}><meta property="twitter:url"${addAttribute(metaData.twitter.url, "content")}><!-- LinkedIn específico --><meta property="og:image:alt" content="Devnic Web Solutions - Transformação digital com resultados garantidos"><!-- Tags de negócio local --><meta name="business:contact_data:street_address" content="São Paulo"><meta name="business:contact_data:locality" content="São Paulo"><meta name="business:contact_data:region" content="SP"><meta name="business:contact_data:postal_code" content="01000-000"><meta name="business:contact_data:country_name" content="Brasil"><!-- Performance e Cache --><meta http-equiv="Cache-Control" content="max-age=31536000"><!-- Verificação do Google Search Console --><!-- <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" /> --><!-- Verificação do Bing Webmaster Tools --><!-- <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> -->`;
}, "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/layouts/MetaConfig.astro", void 0);

const $$Astro$3 = createAstro("https://devnic.com.br");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/claytonrodrigues/Documents/projects/devnic.com.br/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/claytonrodrigues/Documents/projects/devnic.com.br/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Astro$2 = createAstro("https://devnic.com.br");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/claytonrodrigues/Documents/projects/devnic.com.br/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/claytonrodrigues/Documents/projects/devnic.com.br/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://devnic.com.br");
const $$GoogleAnalytics = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GoogleAnalytics;
  const { id } = Astro2.props;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate(_a$1 || (_a$1 = __template$1(["<script async", "></script><script>(function(){", `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      // Configuração principal do Google Analytics
      gtag('config', id, {
        // Configurações de privacidade
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        
        // Configurações de performance
        transport_type: 'beacon',
        custom_map: {
          'custom_parameter': 'dimension1'
        }
      });

      // Eventos personalizados para rastreamento de conversões
      window.gtag = gtag;
      
      // Rastreamento de cliques em botões CTA
      document.addEventListener('DOMContentLoaded', () => {
        // Rastrear cliques em botões de contato
        document.querySelectorAll('button[data-track="contact"]').forEach(button => {
          button.addEventListener('click', () => {
            gtag('event', 'click', {
              event_category: 'engagement',
              event_label: 'contact_button',
              value: 1
            });
          });
        });

        // Rastrear cliques em links do WhatsApp
        document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
          link.addEventListener('click', () => {
            gtag('event', 'contact', {
              event_category: 'lead_generation',
              event_label: 'whatsapp_click',
              value: 1
            });
          });
        });

        // Rastrear envios de formulário
        document.querySelectorAll('form').forEach(form => {
          form.addEventListener('submit', () => {
            gtag('event', 'generate_lead', {
              event_category: 'lead_generation',
              event_label: 'form_submission',
              value: 1
            });
          });
        });

        // Rastrear scroll depth
        let maxScroll = 0;
        const trackScrollDepth = () => {
          const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
          
          if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            
            // Enviar eventos em marcos de 25%
            if (scrollPercent >= 25 && scrollPercent < 50 && maxScroll < 50) {
              gtag('event', 'scroll', {
                event_category: 'engagement',
                event_label: 'scroll_depth_25',
                value: 25
              });
            } else if (scrollPercent >= 50 && scrollPercent < 75 && maxScroll < 75) {
              gtag('event', 'scroll', {
                event_category: 'engagement',
                event_label: 'scroll_depth_50',
                value: 50
              });
            } else if (scrollPercent >= 75 && scrollPercent < 100 && maxScroll < 100) {
              gtag('event', 'scroll', {
                event_category: 'engagement',
                event_label: 'scroll_depth_75',
                value: 75
              });
            } else if (scrollPercent >= 100) {
              gtag('event', 'scroll', {
                event_category: 'engagement',
                event_label: 'scroll_depth_100',
                value: 100
              });
            }
          }
        };

        // Throttle scroll events
        let ticking = false;
        window.addEventListener('scroll', () => {
          if (!ticking) {
            requestAnimationFrame(() => {
              trackScrollDepth();
              ticking = false;
            });
            ticking = true;
          }
        });

        // Rastrear tempo na página
        let startTime = Date.now();
        window.addEventListener('beforeunload', () => {
          const timeSpent = Math.round((Date.now() - startTime) / 1000);
          gtag('event', 'page_timing', {
            event_category: 'engagement',
            event_label: 'time_on_page',
            value: timeSpent
          });
        });
      });
    })();</script>`])), addAttribute(`https://www.googletagmanager.com/gtag/js?id=${id}`, "src"), defineScriptVars({ id })) })}`}`;
}, "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/components/GoogleAnalytics.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://devnic.com.br");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, overwritePreview } = Astro2.props;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://devnic.com.br/#organization",
        "name": "Devnic Web Solutions",
        "url": "https://devnic.com.br",
        "logo": "https://devnic.com.br/logo.png",
        "description": "Empresa especializada em consultoria de TI, transforma\xE7\xE3o digital e seguran\xE7a da informa\xE7\xE3o com foco em resultados mensur\xE1veis.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "BR",
          "addressRegion": "SP"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+55-11-98926-6354",
          "contactType": "customer service",
          "availableLanguage": "Portuguese"
        },
        "sameAs": [
          "https://wa.me/5511989266354"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://devnic.com.br/#website",
        "url": "https://devnic.com.br",
        "name": "Devnic - Consultoria em TI e Transforma\xE7\xE3o Digital",
        "description": description,
        "publisher": {
          "@id": "https://devnic.com.br/#organization"
        },
        "inLanguage": "pt-BR"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://devnic.com.br/#localbusiness",
        "name": "Devnic Web Solutions",
        "description": "Consultoria em TI, infraestrutura e seguran\xE7a para empresas que buscam efici\xEAncia e inova\xE7\xE3o",
        "url": "https://devnic.com.br",
        "telephone": "+55-11-98926-6354",
        "email": "suporte.devnic@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "BR",
          "addressRegion": "SP"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -23.5505,
          "longitude": -46.6333
        },
        "priceRange": "$$",
        "serviceArea": {
          "@type": "Country",
          "name": "Brasil"
        }
      },
      {
        "@type": "Service",
        "name": "Consultoria em TI",
        "description": "Planejamento, gest\xE3o de infraestrutura, seguran\xE7a da informa\xE7\xE3o e otimiza\xE7\xE3o de processos",
        "provider": {
          "@id": "https://devnic.com.br/#organization"
        },
        "serviceType": "IT Consulting",
        "areaServed": "BR"
      }
    ]
  };
  return renderTemplate(_a || (_a = __template(['<html lang="pt-BR"> <head>', "<title>", '</title><!-- Preconnect para performance --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- DNS Prefetch para recursos externos --><link rel="dns-prefetch" href="//wa.me"><link rel="dns-prefetch" href="//api.whatsapp.com"><!-- Canonical URL --><link rel="canonical" href="https://devnic.com.br"><!-- Structured Data --><script type="application/ld+json">', '<\/script><!-- Additional SEO tags --><meta name="author" content="Devnic Web Solutions"><meta name="publisher" content="Devnic Web Solutions"><meta name="application-name" content="Devnic"><meta name="theme-color" content="#1e40af"><!-- Geo tags for local SEO --><meta name="geo.region" content="BR-SP"><meta name="geo.placename" content="S\xE3o Paulo, Brasil"><meta name="geo.position" content="-23.5505;-46.6333"><meta name="ICBM" content="-23.5505, -46.6333"><!-- Business tags --><meta name="business:contact_data:phone" content="+55-11-98926-6354"><meta name="business:contact_data:email" content="suporte.devnic@gmail.com"><meta name="business:contact_data:website" content="https://devnic.com.br">', "<!-- Google Analytics -->", "", '</head> <body class="bg-primary text-secondary"> <!-- Skip to main content for accessibility --> <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">\nPular para o conte\xFAdo principal\n</a> <!-- @ts-ignore --> ', " <!-- @ts-ignore --> ", " ", " <!-- Vercel Analytics & Speed Insights --> ", " ", " ", " </body> </html>"])), renderComponent($$result, "MetaConfig", $$MetaConfig, { "title": title, "description": description, "preview": overwritePreview ? overwritePreview : PreviewPng.src }), title, unescapeHTML(JSON.stringify(structuredData)), renderComponent($$result, "Global", Global, { "styles": NormalizeCSS }), renderComponent($$result, "GoogleAnalytics", $$GoogleAnalytics, { "id": "G-EBDZE154W3" }), renderHead(), renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@modules/Header", "client:component-export": "Header" }), renderComponent($$result, "PageWrapper", PageWrapper, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/PageWrapper", "client:component-export": "PageWrapper" }, { "default": ($$result2) => renderTemplate` <main id="main-content"> ${renderSlot($$result2, $$slots["default"])} </main> ` }), renderComponent($$result, "Footer", Footer, {}), renderComponent($$result, "SpeedInsights", $$Index, {}), renderComponent($$result, "Analytics", $$Index$1, {}), renderScript($$result, "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/layouts/Layout.astro", void 0);

export { $$Layout as $, ButtonWrapper as B, Container as C, Image as I, Button as a, ButtonLink as b };
