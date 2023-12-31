/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        auto: "1fr auto",
        x4: "repeat(4, minmax(0,16px))",
      },
      gridTemplateColumns: {
        x3: "repeat(3, 354px)",
        gallery: "repeat(auto-fit, minmax(414px, 414px));",
        catalog: "repeat(auto-fit, minmax(354px, 354px));",
        galleryAlbum: "repeat(auto-fit, minmax(358px, 358px));",
        sectionAlbums: "repeat(auto-fit, minmax(337px, 337px));",
      },
      width: {
        1030: "1030px",
        317: "317px",
        333: "333px",
        337: "337px",
        345: "345px",
        354: "354px",
        414: "414px",
      },
      minWidth: {
        130: "130px",
        334: "334px",
        570: "570px",
        full: "990px",
      },
      maxWidth: {
        297: "297px",
        358: "358px",
        600: "600px",
        688: "688px",
        700: "700px",
        972: "972px",
        1030: "1030px",
        1024: "1024px",
      },
      colors: {
        dark: "#161920",
        light: "#FFFFFF",
        pink: "#DA5D7D",
      },
      height: {
        15: "60px",
        154: "616px",
        337: "337px",
      },
      maxHeight: {
        479: "479px",
      },
      minHeight: {
        334: "334px",
        514: "514px",
        605: "605px",
        680: "680px",
      },
      margin: {
        10: "40px",
        16: "66px",
        17: "70px",
        19: "76px",
        21: "84px",
        22: "88px",
        23: "92px",
      },
      fontSize: {
        eb: "28px",
        "1xl": "22px",
      },
      borderRadius: {
        20: "20px",
      },
      spacing: {
        19: "76px",
        23: "92px",
        10: "10px",
        minusScreenW: "-100vw",
      },
      content: {
        catalogImgMd: 'url("/catalog-bg-mobile.png")',
      },
      screens: {
        lg: "1100px",
      },
    },
  },
  plugins: [],
};
