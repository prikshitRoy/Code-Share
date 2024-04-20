import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        "fira-code": ["var(--font-fira-code)", ...fontFamily.mono],
        "jetbrains-mono": ["var(--font-jetbrains-mono)", ...fontFamily.mono],
        inconsolata: ["var(--font-inconsolata)", ...fontFamily.mono],
      },
    },
  },
  plugins: [
    require("@headlessui/tailwindcss"),
    require("tailwindcss-animate"),
    require("tailwindcss-radix"),
  ],
};
export default config;
