import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { t } from "./translations-Dx-0rddP.js";
import { Input, Button } from "@nextui-org/react";
import { AuthLayout } from "./AuthLayout-CHcd3Jie.js";
import "./Toastify-BFVztSFx.js";
import "react-toastify";
import "zustand";
import "zustand/middleware";
import "./brand-DWx19l1g.js";
const ResetPassword = ({ token, email }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  const [pwdVisibility, setPwdVisibility] = useState(false);
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.store"));
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "w-72 space-y-7", children: /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx("fieldset", { className: "space-y-1", children: /* @__PURE__ */ jsx(
      Input,
      {
        id: "email",
        type: "email",
        name: "email",
        label: "Email",
        value: data.email,
        autoComplete: "username",
        errorMessage: errors.email,
        isInvalid: errors.email ? true : false,
        onValueChange: (e) => setData("email", e)
      }
    ) }),
    /* @__PURE__ */ jsx("fieldset", { className: "space-y-1", children: /* @__PURE__ */ jsx(
      Input,
      {
        id: "password",
        type: pwdVisibility ? "text" : "password",
        name: "password",
        label: t("Password"),
        value: data.password,
        errorMessage: errors.password,
        isInvalid: errors.password ? true : false,
        onValueChange: (e) => setData("password", e),
        endContent: /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setPwdVisibility(!pwdVisibility),
            children: pwdVisibility ? /* @__PURE__ */ jsx("i", { className: "ri-eye-fill ri-lg text-primary" }) : /* @__PURE__ */ jsx("i", { className: "ri-eye-off-fill ri-lg text-zinc-400 dark:text-zinc-600" })
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("fieldset", { className: "space-y-1", children: /* @__PURE__ */ jsx(
      Input,
      {
        id: "password",
        type: pwdVisibility ? "text" : "password",
        name: "password_confirmation",
        label: t("Confirm password"),
        value: data.password_confirmation,
        errorMessage: errors.password_confirmation,
        isInvalid: errors.password ? true : false,
        onValueChange: (e) => setData("password_confirmation", e),
        endContent: /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setPwdVisibility(!pwdVisibility),
            children: pwdVisibility ? /* @__PURE__ */ jsx("i", { className: "ri-eye-fill ri-lg text-primary" }) : /* @__PURE__ */ jsx("i", { className: "ri-eye-off-fill ri-lg text-zinc-400 dark:text-zinc-600" })
          }
        )
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
        children: t("Reset Password")
      }
    )
  ] }) }) }) });
};
ResetPassword.layout = (page) => /* @__PURE__ */ jsx(AuthLayout, { ...{ children: page, pageTitle: t("Reset password") } });
export {
  ResetPassword as default
};
