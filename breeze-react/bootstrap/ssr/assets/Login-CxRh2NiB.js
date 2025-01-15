import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useForm, Link } from "@inertiajs/react";
import { t } from "./translations-Dx-0rddP.js";
import { Input, Switch, Button } from "@nextui-org/react";
import { AuthLayout } from "./AuthLayout-CHcd3Jie.js";
import { StatusMessage } from "./StatusMessage-DG9ui-FH.js";
import "./Toastify-BFVztSFx.js";
import "react-toastify";
import "zustand";
import "zustand/middleware";
import "./brand-DWx19l1g.js";
const Login = ({ status, canResetPassword }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  const [pwdVisibility, setPwdVisibility] = useState(false);
  const inputEmail = useRef(null);
  useEffect(() => {
    var _a;
    (_a = inputEmail.current) == null ? void 0 : _a.focus();
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "w-72 space-y-7", children: [
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
      /* @__PURE__ */ jsx("fieldset", { className: "space-y-1", children: /* @__PURE__ */ jsx(
        Input,
        {
          id: "password",
          type: pwdVisibility ? "text" : "password",
          name: "password",
          label: t("Password"),
          value: data.password,
          isInvalid: errors.password ? true : false,
          onValueChange: (e) => setData("password", e),
          errorMessage: errors.password,
          endContent: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              tabIndex: -1,
              onClick: () => setPwdVisibility(!pwdVisibility),
              children: pwdVisibility ? /* @__PURE__ */ jsx("i", { className: "ri-eye-fill ri-lg text-primary" }) : /* @__PURE__ */ jsx("i", { className: "ri-eye-off-fill ri-lg text-zinc-400 dark:text-zinc-600" })
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(
        Switch,
        {
          name: "remember",
          "aria-label": t("Remember me"),
          size: "sm",
          value: data.remember ? "1" : "0",
          tabIndex: 2,
          onValueChange: (e) => setData("remember", e),
          children: t("Remember me")
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
          children: t("Log in")
        }
      ),
      canResetPassword && /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: route("password.request"), children: t("Forgot your password?") }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: route("register"), children: t("Don't have an Account?") }) })
      ] })
    ] }) })
  ] }) });
};
Login.layout = (page) => /* @__PURE__ */ jsx(AuthLayout, { ...{ children: page, pageTitle: t("Log in") } });
export {
  Login as default
};
