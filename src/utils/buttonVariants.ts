import { cva } from "class-variance-authority"

export const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 transition-[background-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "rounded-md border",
        outline: "rounded-md border",
        ghost: "rounded-md border",
        link: "hover:underline disabled:hover:no-underline",
      },
      colorSchema: {
        primary: "text-primary border-primary hover:bg-primary/90 focus-visible:outline-primary hover:text-white",
        secondary:
          "text-secondary border-secondary hover:bg-secondary/90 focus-visible:outline-secondary hover:text-white",
        tertiary: "text-tertiary border-tertiary hover:bg-tertiary/90 focus-visible:outline-tertiary hover:text-white",
        whitePrimary: "text-white border-white hover:bg-white focus-visible:outline-white hover:text-primary",
        whiteSecondary: "text-white border-white hover:bg-white focus-visible:outline-white hover:text-secondary",
        whiteTertiary: "text-white border-white hover:bg-white focus-visible:outline-white hover:text-tertiary",
      },
      disabled: {
        true: "cursor-not-allowed border-base-100 text-content-neutral bg-base-100 hover:bg-base-100",
      },
      fullWidth: {
        true: "w-full",
      },
      size: {
        default: "px-6 py-3 text-base",
        xs: "px-2 py-1 text-xs rounded",
        iconXs: "rounded text-sm w-6 h-6 px-1 py-1",
        iconSm: "rounded text-sm w-7 h-7 px-1 py-1",
        iconMd: "rounded-md text-base w-9 h-9 px-2 py-2",
        iconLg: "text-lg w-12 h-12 px-3 py-3",
      },
      uppercase: {
        true: "uppercase",
      },
    },
    defaultVariants: {
      variant: "solid",
      colorSchema: "primary",
      size: "default",
      fullWidth: false,
      uppercase: false,
      disabled: false,
    },
    compoundVariants: [
      {
        variant: "ghost",
        className: "border-transparent",
      },
      {
        variant: "link",
        className: "bg-transparent p-0 hover:bg-transparent",
      },
      {
        variant: "solid",
        colorSchema: "primary",
        disabled: false,
        className: "bg-primary border-primary text-white hover:bg-primary/80 focus-visible:outline-primary",
      },
      {
        variant: "solid",
        colorSchema: "secondary",
        disabled: false,
        className: "bg-secondary border-secondary text-white hover:bg-secondary/80 focus-visible:outline-secondary",
      },
      {
        variant: "solid",
        colorSchema: "tertiary",
        disabled: false,
        className: "bg-tertiary border-tertiary text-white hover:bg-tertiary/80 focus-visible:outline-tertiary",
      },
      {
        variant: "solid",
        colorSchema: "whitePrimary",
        disabled: false,
        className: "bg-white border-white text-primary hover:bg-white/80 focus-visible:outline-white",
      },
      {
        variant: "solid",
        colorSchema: "whiteSecondary",
        disabled: false,
        className: "bg-white border-white text-secondary hover:bg-white/80 focus-visible:outline-white",
      },
      {
        variant: "solid",
        colorSchema: "whiteTertiary",
        disabled: false,
        className: "bg-white border-white text-tertiary hover:bg-white/80 focus-visible:outline-white",
      },
    ],
  },
)
