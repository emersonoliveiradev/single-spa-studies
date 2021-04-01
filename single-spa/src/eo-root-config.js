import { registerApplication, start } from "single-spa";

fetch("https://api.github.com/users/octocat/orgs")
  .then((resp) => resp.json())
  .then((data) => {
    /* Dados sobreescritos. Simulação de load automático */
    data = {
      applications: [
        {
          name: "@eo/react-single",
          package: "@eo/react-single",
          activeWhen: "/react-single",
          exact: true,
        },
        {
          name: "@eo/react-multiples",
          package: "@eo/react-multiples",
          activeWhen: "/react-multiples",
          exact: false,
        },
        {
          name: "@eo/react-lazy",
          package: "@eo/react-lazy",
          activeWhen: "/react-lazy",
          exact: false,
        },
        {
          name: "@eo/react-route",
          package: "@eo/react-route",
          activeWhen: "/react-route",
          exact: true,
        },
        {
          name: "@eo/react-header",
          package: "@eo/react-header",
          activeWhen: "/",
          exact: false,
        },
        {
          name: "@single-spa/welcome",
          package:
            "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js",
          activeWhen: "/",
          exact: true,
        },
      ],
    };
    data.applications.forEach((app) => {
      registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.exact
          ? (location) => location.pathname === app.activeWhen
          : [app.activeWhen],
      });
    });
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    });
  });

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import("@single-spa/welcome"),
//   activeWhen: (location) => location.pathname === "/",
// });

// registerApplication({
//   name: "@eo/react-single",
//   app: () => System.import("@eo/react-single"),
//   activeWhen: (location) => location.pathname === "/react-single",
// });

// registerApplication({
//   name: "@eo/react-multiples",
//   app: () => System.import("@eo/react-multiples"),
//   activeWhen: ["/react-multiples"],
// });

// registerApplication({
//   name: "@eo/react-parcel",
//   app: () => System.import("@eo/react-parcel"),
//   activeWhen: (location) => location.pathname === "/react-parcel",
// });

// registerApplication({
//   name: "@eo/react-route",
//   app: () => System.import("@eo/react-route"),
//   activeWhen: (location) => location.pathname === "/react-route",
// });

// registerApplication({
//   name: "@eo/react-lazy",
//   app: () => System.import("@eo/react-lazy"),
//   activeWhen: ["/react-lazy"],
// });

// registerApplication({
//   name: "@eo/react-header",
//   app: () => System.import("@eo/react-header"),
//   activeWhen: ["/"],
// });

// start({
//   urlRerouteOnly: true,
// });
