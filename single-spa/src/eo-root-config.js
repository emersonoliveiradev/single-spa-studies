import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@eo/react-single",
  app: () => System.import("@eo/react-single"),
  activeWhen: ["/react-single"],
});

registerApplication({
  name: "@eo/react-multiples",
  app: () => System.import("@eo/react-multiples"),
  activeWhen: ["/react-multiples"],
});

start({
  urlRerouteOnly: true,
});
