import { jsx } from 'react/jsx-runtime';
import { B as ButtonWrapper, a as Button$1, b as ButtonLink } from './Layout_Xeq6cW1F.mjs';

const Button = ({
  link,
  target,
  children,
  align = "center",
  variant = "primary",
  asButton,
  type,
  ...rest
}) => {
  const ButtonComponent = asButton ? Button$1 : ButtonLink;
  const primaryClass = "inline-flex items-center justify-center border border-transparent rounded-sm leading-snug transition duration-150 ease-in-out text-primary bg-tertiary hover:bg-opacity-50 bg-tertiary font-medium";
  const secondaryClass = "inline-flex items-center justify-center border border-transparent rounded-sm leading-snug transition duration-150 ease-in-out text-secondary bg-primary hover:bg-opacity-70 font-medium";
  const tertiaryClass = "inline-flex items-center justify-center border border-transparent rounded-sm leading-snug transition duration-150 ease-in-out text-primary bg-tertiary bg-opacity-20 hover:bg-secondary font-medium";
  let classes;
  switch (variant) {
    case "primary":
      classes = primaryClass;
      break;
    case "secondary":
      classes = secondaryClass;
      break;
    case "tertiary":
      classes = tertiaryClass;
      break;
    default:
      classes = primaryClass;
      break;
  }
  let alignClasses;
  switch (align) {
    case "left":
      alignClasses = "justify-start";
      break;
    case "center":
      alignClasses = "justify-center";
      break;
    case "right":
      alignClasses = "justify-end";
      break;
    default:
      alignClasses = "justify-center";
      break;
  }
  return /* @__PURE__ */ jsx(ButtonWrapper, { $align: align, children: /* @__PURE__ */ jsx(
    ButtonComponent,
    {
      href: link,
      target,
      $variant: variant,
      className: "w-full p-2 px-4 " + classes + " " + alignClasses,
      ...rest,
      children
    }
  ) });
};

export { Button as B };
