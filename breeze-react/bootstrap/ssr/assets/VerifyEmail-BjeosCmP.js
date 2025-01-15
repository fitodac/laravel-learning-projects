import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { t } from "./translations-Dx-0rddP.js";
import { useForm, Link } from "@inertiajs/react";
import { Button } from "@nextui-org/react";
import { toast } from "react-toastify";
import { AuthLayout } from "./AuthLayout-CHcd3Jie.js";
import { StatusMessage } from "./StatusMessage-DG9ui-FH.js";
import "./Toastify-BFVztSFx.js";
import "react";
import "zustand";
import "zustand/middleware";
import "./brand-DWx19l1g.js";
const VerifyEmail = ({ status }) => {
  const { post, processing } = useForm({});
  console.log("status", status);
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"), {
      preserveScroll: true,
      onSuccess: () => {
        toast.success(`A new verification link has been sent to the email address you
					provided during registration.`);
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "w-72 space-y-7", children: [
      /* @__PURE__ */ jsx("p", { children: t("email-verification-message") }),
      status && /* @__PURE__ */ jsx(StatusMessage, { ...{ status } }),
      /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          color: "primary",
          fullWidth: true,
          isLoading: processing,
          children: t("Resend Verification Email")
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(Link, { href: route("login"), children: t("Already registered?") }) })
  ] });
};
VerifyEmail.layout = (page) => /* @__PURE__ */ jsx(AuthLayout, { ...{ children: page, pageTitle: t("Email Verification") } });
export {
  VerifyEmail as default
};
