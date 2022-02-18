module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
    './*.md',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      tpr: "tpr, open sans, sans-serif",
      monospace: "monospace, 'Courier'"
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}