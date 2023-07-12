module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Hanken Grotesk', 'Arial', 'sans-serif'],
      },
      colors: {
        "custom-red": "hsl(0, 100%, 67%)",
        "custom-yellow": "hsl(39, 100%, 56%)",
        "custom-green": "hsl(166, 100%, 37%)",
        "custom-blue": "hsl(234, 85%, 45%)",
        "custom-dark": "hsl(224, 30%, 27%)",
        /* for gradients */
        "slate-blue": "hsl(252, 100%, 67%)",
        "royal-blue": "hsl(241, 81%, 54%)",
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsla(241, 72%, 46%, 0)",
      },
    }
  },
  plugins: []
}