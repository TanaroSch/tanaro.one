// config.js
var headerConfig = {
  branding: {
    text: "Tanaro",
  },
  navigation: [
    {
      text: "Home",
      link: "/index.html",
    },
    {
      text: "About",
      link: "/about.html",
    },
    /*{
      text: "Tools",
      link: "#tools",
      dropdown: [
        {
          text: "Image Cropper",
          link: "/tools/image/cropper/index.html",
        },
        {
          text: "BIRME",
          link: "/tools/image/birme/index.html",
        },
      ],
    },*/
    {
      text: "Extras",
      link: "/extras/quiz/index.html",
      dropdown: [
        {
          text: "한글 Keyboard",
          link: "/extras/hangeul/hangeul.html",
        },
        {
          text: "AI Image Quiz",
          link: "/extras/quiz/index.html",
        },
      ],
    },
    {
      text: "Contact",
      link: "/contact.html",
    },
  ],
  developerInfo: {
    name: "Tanaro",
    website: "https://tanaro.one",
  },
};
