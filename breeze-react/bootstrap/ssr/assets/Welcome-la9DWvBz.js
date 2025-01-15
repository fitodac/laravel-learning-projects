import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head, router } from "@inertiajs/react";
import "react";
import { T as Toastify, u as useColorMode } from "./Toastify-BFVztSFx.js";
import { t } from "./translations-Dx-0rddP.js";
import { Button } from "@nextui-org/react";
import "react-toastify";
import "zustand";
import "zustand/middleware";
const GuestLayout = ({ children, pageTitle }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: pageTitle }),
    /* @__PURE__ */ jsx("main", { className: "w-full min-h-screen", children }),
    /* @__PURE__ */ jsx(Toastify, {})
  ] });
};
const Welcome = ({
  auth
}) => {
  useColorMode();
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto", children: /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center min-h-screen", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md space-y-20", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-primary text-3xl font-semibold text-center", children: "Welcome to Laravel" }),
    auth.user ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
      Button,
      {
        color: "primary",
        size: "lg",
        onPress: () => router.visit(route("login")),
        children: t("Dashboard")
      }
    ) }) }) : /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-x-5", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          fullWidth: true,
          color: "primary",
          size: "lg",
          onPress: () => router.visit(route("login")),
          children: t("Log in")
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          fullWidth: true,
          color: "primary",
          size: "lg",
          onPress: () => router.visit(route("register")),
          children: t("Register")
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-gray-400 text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "What is this?" }),
      /* @__PURE__ */ jsx("p", { className: "leading-tight", children: "An authentication interface built in Laravel implementing Laravel Breeze, NextUi and Inertia with React." })
    ] })
  ] }) }) });
};
Welcome.layout = (page) => /* @__PURE__ */ jsx(GuestLayout, { ...{ children: page, pageTitle: t("Welcome") } });
export {
  Welcome as default
};
