import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./**/*.{ts,tsx,mdx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        main: {
          50: "var(--main-50-color)",
          75: "var(--main-75-color)",
          100: "var(--main-100-color)",
          200: "var(--main-200-color)",
          300: "var(--main-300-color)",
          400: "var(--main-400-color)",
          600: "var(--main-600-color)", //main
          700: "var(--main-700-color)", //hover
          800: "var(--main-800-color)", //active
        },
        generic: {
          black: "var(--black-color)",
          white: "var(--white-color)",
        },
        gray: {
          1: "var(--gray-1-color)",
          2: "var(--gray-2-color)",
          3: "var(--gray-3-color)",
          4: "var(--gray-4-color)",
          5: "var(--gray-5-color)",
          6: "var(--gray-6-color)",
          7: "var(--gray-7-color)",
          8: "var(--gray-8-color)",
        },
        state: {
          error: "var(--error-color)",
          error35: "var(--error-35-color)",
          error15: "var(--error-15-color)",
          success: "var(--success-color)",
          info: "var(--info-color)",
          warning: "var(--warning-color)",
        },
        opacity: {
          50: "var(--opacity-50-color)",
          40: "var(--opacity-40-color)",
          30: "var(--opacity-30-color)",
        },
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        extraBold: "800",
      },
      borderWidth: {
        1: "1px",
        6: "6px",
      },
      borderRadius: {
        "4xl": "1.875rem",
      },
      fontSize: {
        10: "0.625rem", // 10px
        11: "0.6875rem", // 11px
        xs: ["0.75rem", "1rem"], // 12px
        13: "0.8125rem", // 13px
        sm: ["0.875rem", "1.25rem"], // 14px
        15: "0.9375rem", // 15px
        base: ["1rem", "1.5rem"], // 16px
        17: "1.0625rem", // 17px
        lg: ["1.125rem", "1.75rem"], // 18px
        19: "1.1875rem", // 19px
        xl: ["1.25rem", "1.75rem"], // 20px
        21: "1.3125rem", // 21px
        22: "1.375rem", // 22px
        23: "1.4375rem", // 23px
        "2xl": ["1.5rem", "2rem"], // 24px
        25: "1.5625rem", // 25px
        26: "1.625rem", // 26px
        27: "1.6875rem", // 27px
        28: "1.75rem", // 28px
        29: "1.8125rem", // 29px
        "3xl": ["1.875rem", "2.25rem"], // 30px
        31: "1.9375rem", // 31px
        32: "2rem", // 32px
        33: "2.0625rem", // 33px
        34: "2.125rem", // 34px
        35: "2.1875rem", // 35px
        "4xl": ["2.25rem", "2.5rem"], // 36px
        37: "2.3125rem", // 37px
        38: "2.375rem", // 38px
        39: "2.4375rem", // 39px
        40: "2.5rem", // 40px
        41: "2.5625rem", // 41px
        42: "2.625rem", // 42px
      },
      boxShadow: {
        loginBox:
          "0px 0px 20px 0px rgba(0, 0, 0, 0.2), 0px 1px 2px 0px rgba(0, 0, 0, 0.2), 0px 0px 4px 0px rgba(0, 0, 0, 0.2)",
      },
      transitionProperty: {
        width: "width",
        height: "height",
        "max-height": "max-height",
      },
    },
  },
  plugins: [],
};
export default config;
