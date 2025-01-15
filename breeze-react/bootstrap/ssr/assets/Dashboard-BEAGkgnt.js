import { jsx, Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import "@inertiajs/react";
import { t } from "./translations-Dx-0rddP.js";
import { a as useStoreMain } from "./Toastify-BFVztSFx.js";
import { P as PageHeader, A as AuthenticatedLayout } from "./AuthenticatedLayout-A8O0eBPC.js";
import "react-toastify";
import "zustand";
import "zustand/middleware";
import "@nextui-org/react";
import "framer-motion";
import "./brand-DWx19l1g.js";
const Dashboard = ({ auth }) => {
  const { setAuth } = useStoreMain();
  useEffect(() => {
    if (setAuth) setAuth(auth);
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(PageHeader, { title: t("Dashboard") }) });
};
Dashboard.layout = (page) => /* @__PURE__ */ jsx(AuthenticatedLayout, { ...{ children: page, pageTitle: t("Dashboard") } });
export {
  Dashboard as default
};
