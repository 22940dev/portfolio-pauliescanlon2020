module.exports = {
  siteMetadata: {
    title: "Paul Scanlon",
    description:
      "I'm a React UI developer / UX Engineer (contract). React, GatsbyJs, JavaScript, TypeScript/Flow, StyledComponents, Storybook, TDD (Jest/Enzyme) and a tiny bit of Node.js.",
    keywords: [
      "React",
      "GatsbyJs",
      "JavaScript",
      "TypeScript",
      "Flow",
      "StyledComponents",
      "Jest",
      "Enzyme",
      "Node.js",
    ],
    siteURL: "https://pauliescanlon.io",
    siteImage: "images/gatstats_1080x608.jpg",
    config: {
      headerHeight: 64,
      sideBarWidth: 240,
      twitter: "pauliescanlon",
      github: "pauliescanlon",
    },
  },
  plugins: [
    `@pauliescanlon/gatsby-theme-gatstats`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-76055934-1",
      },
    },
  ],
}
