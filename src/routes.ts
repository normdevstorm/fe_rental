import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("./presentation/common/layouts/BaseLayout.tsx", [
    index("./pages/HomePage.tsx"),
    route("about-us", "./pages/BrowsePage.tsx"),
    ...prefix("owner", [
      index("./pages/owner/home.tsx"),
      route(":booking", "./pages/owner/booking.tsx"),
      route("register", "./pages/owner/register.tsx"),
    ]),
  ]),
  layout("./presentation/common/layouts/AuthLayout.tsx", [
    route("login", "./pages/LoginPage.tsx"),
    // route("register", "./pages/register.tsx")
  ]),
] satisfies RouteConfig;
