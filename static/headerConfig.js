// config.js
var headerConfig = {
  branding: {
    text: "Tanaro",
  },
  navigation: [
    {
      text: "Home",
      link: "#home",
    },
    {
      text: "About",
      link: "#about",
    },
    {
      text: "Services",
      link: "#services",
      dropdown: [
        {
          text: "Web Design",
          link: "#web-design",
        },
        {
          text: "App Development",
          link: "#app-development",
        },
        {
          text: "SEO Optimization",
          link: "#seo",
        },
        {
          text: "IT Consulting",
          link: "#consulting",
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
    website: "https://tanaro.one", // Replace with your actual website URL
  },
};
