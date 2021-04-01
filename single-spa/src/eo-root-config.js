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
  activeWhen: (location) => location.pathname === "/react-single",
});

registerApplication({
  name: "@eo/react-multiples",
  app: () => System.import("@eo/react-multiples"),
  activeWhen: ["/react-multiples"],
});

registerApplication({
  name: "@eo/react-parcel",
  app: () => System.import("@eo/react-parcel"),
  activeWhen: (location) => location.pathname === "/react-parcel",
});

registerApplication({
  name: "@eo/react-route",
  app: () => System.import("@eo/react-route"),
  activeWhen: (location) => location.pathname === "/react-route",
});

registerApplication({
  name: "@eo/react-lazy",
  app: () => System.import("@eo/react-lazy"),
  activeWhen: ["/react-lazy"],
});

registerApplication({
  name: "@eo/react-header",
  app: () => System.import("@eo/react-header"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
