/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports =
withMT( {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
       backgroundImage : {
       
        'home-bg' : "url('/home/tspl/Documents/space/public/assets/home/background-home-desktop.jpg')",
        'home-tab-bg' : "url('/home/tspl/Documents/space/public/assets/home/background-home-tablet.jpg')",
        'home-mob-bg' : "url('/home/tspl/Documents/space/public/assets/home/background-home-mobile.jpg')",
       'destination-bg' : "url('/home/tspl/Documents/space/public/assets/destination/background-destination-desktop.jpg')",
       'destination-tab-bg' : "url('/home/tspl/Documents/space/public/assets/destination/background-destination-tablet.jpg')",
       'destination-mob-bg' : "url('/home/tspl/Documents/space/public/assets/destination/background-destination-mobile.jpg')",
       'crew-bg' : "url('/home/tspl/Documents/space/public/assets/crew/background-crew-desktop.jpg')",
       'crew-tab-bg' : "url('/home/tspl/Documents/space/public/assets/crew/background-crew-tablet.jpg')",
       'crew-mob-bg' : "url('/home/tspl/Documents/space/public/assets/crew/background-crew-mobile.jpg')",
       'technology-bg' : "url('/home/tspl/Documents/space/public/assets/technology/background-technology-desktop.jpg')",
       'technology-tab-bg' : "url('/home/tspl/Documents/space/public/assets/technology/background-technology-tablet.jpg')",
       'technology-mob-bg' : "url('/home/tspl/Documents/space/public/assets/technology/background-technology-mobile.jpg')"
       },
       backdropBlur: {
        xs: '2px',
      }
      
    },
  },
  plugins: [],
});

