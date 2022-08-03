>module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.html',
    './*.html',
    './*.md',
  ],
  darkMode: 'class',
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