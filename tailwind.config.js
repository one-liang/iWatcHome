module.exports = {
  content: ["./**/*.{html,js}"],
  prefix: "iwh-",
  theme: {
    extend: {
      colors: {
        gray: {
          800: "#37373D",
          500: "#838383",
          100: "#EEEEEE",
        },
      },
      screens: {
        xl: "1200px",
      },
    },
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Arial",
        "Segoe UI",
        "Roboto",
        "Noto Sans TC",
        "PingFang TC",
        "Microsoft JhengHei",
        "sans-serif",
      ],
    },
    fontSize: {
      base: [
        "1rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "1.875rem",
        {
          lineHeight: "2.25rem",
        },
      ],
      "4xl": [
        "2.25rem",
        {
          lineHeight: "2.813rem",
        },
      ],
    },
    transitionTimingFunction: {
      zoom: "cubic-bezier(0.18, 0.6, 0.33, 0.76)",
    },
  },
  plugins: [],
};
