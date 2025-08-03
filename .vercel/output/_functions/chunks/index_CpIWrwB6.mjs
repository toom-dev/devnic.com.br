import { jsx } from 'react/jsx-runtime';
import { C as Container } from './Layout_DXR7D-GL.mjs';
import 'react';

const ContentSection = ({
  children,
  ...rest
}) => {
  if (!children) {
    return null;
  }
  return /* @__PURE__ */ jsx("section", { className: "mt-32 md:mt-40 md:mb-16", ...rest, "data-animate": true, children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { className: "text-center max-w-xl m-auto flex flex-col gap-5 justify-center items-center", children }) }) });
};

export { ContentSection as C };
