// config.js
var headerConfig = {
  branding: {
    text: "Tanaro",
  },
  navigation: [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About",
      link: "/about.html",
    },
    {
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
    },
    {
      text: "Contact",
      link: "#contact",
    },
  ],
  developerInfo: {
    name: "Tanaro",
    website: "https://tanaro.one",
  },
};
