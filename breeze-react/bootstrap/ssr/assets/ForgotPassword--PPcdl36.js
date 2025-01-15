import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { useForm, Link } from "@inertiajs/react";
import { t } from "./translations-Dx-0rddP.js";
import { Input, Button } from "@nextui-org/react";
import { AuthLayout } from "./AuthLayout-CHcd3Jie.js";
import { StatusMessage } from "./StatusMessage-DG9ui-FH.js";
import "./Toastify-BFVztSFx.js";
import "react-toastify";
import "zustand";
import "zustand/middleware";
import "./brand-DWx19l1g.js";
const ForgotPassword = ({ status }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: ""
  });
  const inputEmail = useRef(null);
  useEffect(() => {
    var _a;
    (_a = inputEmail.current) == null ? void 0 : _a.focus();
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"), {
      onSuccess: () => reset()
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "w-72 space-y-7", children: [
    /* @__PURE__ */ jsx("div", { className: "text-sm leading-tight", children: t("forgot-password-message") }),
    status && /* @__PURE__ */ jsx(StatusMessage, { ...{ status } }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("fieldset", { className: "space-y-1", children: /* @__PURE__ */ jsx(
        Input,
        {
          id: "email",
          type: "email",
          name: "email",
          label: "Email",
          value: data.email,
          ref: inputEmail,
          isInvalid: errors.email ? true : false,
          errorMessage: errors.email,
          onValueChange: (e) => setData("email", e)
        }
      ) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          color: "primary",
          fullWidth: true,
          type: "submit",
          spinner: /* @__PURE__ */ jsx("i", { className: "ri-loader-line ri-lg animate-spin" }),
          isLoading: processing,
          children: t("Email password reset link")
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: route("login"), children: t("Already registered?") }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: route("register"), children: t("Don't have an Account?") }) })
    ] })
  ] }) });
};
ForgotPassword.layout = (page) => /* @__PURE__ */ jsx(AuthLayout, { ...{ children: page, pageTitle: t("Forgot your password?") } });
export {
  ForgotPassword as default
};
