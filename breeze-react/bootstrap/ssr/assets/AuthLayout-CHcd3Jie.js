import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { Button, cn } from "@nextui-org/react";
import { u as useColorMode, T as Toastify } from "./Toastify-BFVztSFx.js";
import "react";
import { i as img_brand } from "./brand-DWx19l1g.js";
import "react-toastify";
import "zustand";
import "zustand/middleware";
const AuthLayout = ({ children, pageTitle }) => {
  const { colorMode, changeColorMode } = useColorMode();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: pageTitle }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end p-3 inset-x-0 absolute z-30", children: /* @__PURE__ */ jsx(Button, { isIconOnly: true, size: "sm", onPress: changeColorMode, children: /* @__PURE__ */ jsx(
      "i",
      {
        className: cn(
          colorMode === "light" ? "ri-moon-fill" : "ri-sun-fill",
          "ri-xl"
        )
      }
    ) }) }),
    /* @__PURE__ */ jsx("main", { className: "w-full min-h-screen flex justify-center items-center", children: /* @__PURE__ */ jsxs("section", { className: "max-w-lg", children: [
      /* @__PURE__ */ jsx("img", { src: img_brand, alt: "Logo", className: "w-32 mx-auto" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2 mt-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold", children: pageTitle }),
        children
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Toastify, {})
  ] });
};
export {
  AuthLayout
};
