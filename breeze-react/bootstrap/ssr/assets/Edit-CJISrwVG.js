import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import "@inertiajs/react";
import { t } from "./translations-Dx-0rddP.js";
import "react";
import "./Toastify-BFVztSFx.js";
import { P as PageHeader, A as AuthenticatedLayout } from "./AuthenticatedLayout-A8O0eBPC.js";
import "react-toastify";
import { UpdateProfile } from "./UpdateProfile-CoLu18bv.js";
import { UpdatePassword } from "./UpdatePassword-B3xvzdPA.js";
import { DeleteAccount } from "./DeleteAccount-BreAFSZI.js";
import "zustand";
import "zustand/middleware";
import "@nextui-org/react";
import "framer-motion";
import "./brand-DWx19l1g.js";
const Edit = ({
  auth,
  mustVerifyEmail,
  status
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { title: t("My account") }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 lg:max-w-xl", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-white p-10 shadow-xl rounded-2xl dark:bg-black/20", children: /* @__PURE__ */ jsx(UpdateProfile, { ...{ mustVerifyEmail, status } }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-white p-10 shadow-xl rounded-2xl dark:bg-black/20", children: /* @__PURE__ */ jsx(UpdatePassword, {}) }),
      /* @__PURE__ */ jsx("div", { className: "bg-white p-10 shadow-xl rounded-2xl dark:bg-black/20", children: /* @__PURE__ */ jsx(DeleteAccount, {}) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "h-20" })
  ] });
};
Edit.layout = (page) => /* @__PURE__ */ jsx(AuthenticatedLayout, { ...{ children: page, pageTitle: t("My account") } });
export {
  Edit as default
};
