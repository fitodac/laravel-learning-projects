import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { usePage, router, Head } from "@inertiajs/react";
import { t } from "./translations-Dx-0rddP.js";
import { cn, Button, Switch, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { a as useStoreMain, u as useColorMode, T as Toastify } from "./Toastify-BFVztSFx.js";
import { i as img_brand } from "./brand-DWx19l1g.js";
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { windowWidth };
};
const useNavbarToggler = () => {
  const { navbarOpen, setNavbarOpen } = useStoreMain();
  const { windowWidth } = useWindowWidth();
  useEffect(() => {
    if (windowWidth >= 768) setNavbarOpen(false);
  }, [windowWidth]);
  const toggleNavbar = () => setNavbarOpen(!navbarOpen);
  return { navbarOpen, setNavbarOpen, toggleNavbar };
};
const Navbar = () => {
  const { windowWidth } = useWindowWidth();
  const { navbarOpen } = useStoreMain();
  const { url } = usePage();
  return /* @__PURE__ */ jsx(
    motion.aside,
    {
      className: cn(
        "bg-white border-r border-zinc-100 w-72 min-h-screen left-0 top-0 fixed z-30",
        "md:w-60",
        "dark:bg-zinc-700 dark:border-zinc-800"
      ),
      animate: { x: windowWidth >= 768 ? 0 : navbarOpen ? 0 : "-100%" },
      transition: { duration: 0.4, ease: "linear" },
      children: /* @__PURE__ */ jsx("div", { className: "pt-16 px-2 md:pt-20", children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            fullWidth: true,
            variant: "light",
            onPress: () => router.visit(route("dashboard")),
            isDisabled: "/dashboard" === url,
            className: "px-3 justify-start",
            children: t("Dashboard")
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            fullWidth: true,
            variant: "light",
            onPress: () => router.visit(route("profile.edit")),
            isDisabled: "/profile" === url,
            className: "px-3 justify-start",
            children: t("Mi account")
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            fullWidth: true,
            variant: "light",
            isDisabled: true,
            className: "px-3 justify-start",
            children: "Item 2"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            fullWidth: true,
            variant: "light",
            isDisabled: true,
            className: "px-3 justify-start",
            children: "Item 3"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            fullWidth: true,
            variant: "light",
            isDisabled: true,
            className: "px-3 justify-start",
            children: "Item 4"
          }
        )
      ] }) }) })
    }
  );
};
const TopBar = () => {
  const user = usePage().props.auth.user;
  const { navbarOpen, toggleNavbar } = useNavbarToggler();
  const { colorMode, changeColorMode } = useColorMode();
  useEffect(() => {
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "bg-white border-b border-zinc-100 w-full fixed z-40",
        "dark:bg-zinc-700 dark:border-zinc-800"
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "pl-5 pr-3 py-1 flex justify-between items-center md:py-2", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: img_brand, alt: "Logo", className: "w-20 mt-1 md:w-24" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-x-0 items-center", children: [
          /* @__PURE__ */ jsx(
            Switch,
            {
              color: "default",
              isSelected: colorMode === "dark",
              size: "sm",
              thumbIcon: ({ isSelected }) => isSelected ? /* @__PURE__ */ jsx("i", { className: "ri-moon-fill text-zinc-800" }) : /* @__PURE__ */ jsx("i", { className: "ri-sun-fill text-yellow-500" }),
              onChange: changeColorMode
            }
          ),
          /* @__PURE__ */ jsxs(Dropdown, { children: [
            /* @__PURE__ */ jsx(DropdownTrigger, { children: /* @__PURE__ */ jsx(
              Button,
              {
                variant: "light",
                endContent: /* @__PURE__ */ jsx("i", { className: "ri-arrow-down-s-line" }),
                children: user == null ? void 0 : user.name
              }
            ) }),
            /* @__PURE__ */ jsxs(DropdownMenu, { "aria-label": "Dropdown Variants", color: "primary", children: [
              /* @__PURE__ */ jsx(
                DropdownItem,
                {
                  textValue: t("My account"),
                  onClick: () => router.visit(route("profile.edit")),
                  children: t("My account")
                }
              ),
              /* @__PURE__ */ jsx(
                DropdownItem,
                {
                  textValue: t("Log out"),
                  onClick: () => router.post(route("logout")),
                  children: t("Log out")
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              isIconOnly: true,
              variant: "light",
              onPress: toggleNavbar,
              className: "md:hidden",
              children: /* @__PURE__ */ jsx(
                "i",
                {
                  className: cn(
                    navbarOpen ? "ri-close-large-line" : "ri-menu-3-line",
                    "ri-xl"
                  )
                }
              )
            }
          )
        ] })
      ] })
    }
  );
};
const PageHeader = ({
  title,
  children
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "pt-5 pb-8 flex justify-between", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold select-none", children: title }),
    /* @__PURE__ */ jsx("div", { children })
  ] });
};
const AuthenticatedLayout = ({ children, pageTitle }) => {
  useWindowWidth();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: pageTitle }),
    /* @__PURE__ */ jsxs("main", { className: "w-full min-h-screen", children: [
      /* @__PURE__ */ jsx(TopBar, {}),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "bg-zinc-50 w-full min-h-screen",
            "md:pl-60",
            "dark:bg-zinc-900"
          ),
          children: [
            /* @__PURE__ */ jsx(Navbar, {}),
            /* @__PURE__ */ jsx("div", { className: "px-10", children })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Toastify, {})
  ] });
};
export {
  AuthenticatedLayout as A,
  PageHeader as P
};
