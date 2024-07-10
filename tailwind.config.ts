import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "base-100": "#fafbfd",
        "base-200": "#f5f8fb",
        "base-300": "#eaeff5",
        "base-400": "#D9DEEB",
        "base-500": "#cad7e7",
        "content-base": "#0e1a3b",
        "content-neutral": "#757575",
        "content-neutral-dark": "#626262",
        "content-neutral-light": "#C2C2C2",
        primary: "#224193",
        secondary: "#DF3C5F",
        tertiary: "#6F9BD1",
      },
      keyframes: {
        enterFromLeft: {
          from: { opacity: "0", transform: "translateX(-200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        enterFromRight: {
          from: { opacity: "0", transform: "translateX(200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        exitToLeft: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-200px)" },
        },
        exitToRight: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(200px)" },
        },
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        fadeOut: { from: { opacity: "1" }, to: { opacity: "0" } },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
        slideDown: { from: { height: "0px" }, to: { height: "var(--radix-accordion-content-height)" } },
        slideUp: { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0px" } },
        translateToZero: { from: { transform: "translateX(-200%)" }, to: { transform: "translateX(200%)" } },
        // marquee: { "0%": { transform: "translateX(0%)" }, "100%": { transform: "translateX(-100%)" } },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 2.5rem))",
          },
        },
        marquee2: { "0%": { transform: "translateX(100%)" }, "100%": { transform: "translateX(0%)" } },
      },
    },
    animation: {
      enterFromLeft: "enterFromLeft 250ms ease",
      enterFromRight: "enterFromRight 250ms ease",
      exitToLeft: "exitToLeft 250ms ease",
      exitToRight: "exitToRight 250ms ease",
      fadeIn: "fadeIn 200ms ease",
      fadeOut: "fadeOut 200ms ease",
      scaleIn: "scaleIn 200ms ease",
      scaleOut: "scaleOut 200ms ease",
      slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      translateToZero: "translateToZero 10000ms linear infinite",
      marquee: "marquee 25s linear infinite",
      marquee2: "marquee2 25s linear infinite",
    },
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: value => ({
          perspective: value,
        }),
      })
    }),
    require("tailwindcss-animate"),
  ],
}
export default config
