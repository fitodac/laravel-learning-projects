import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { t } from "./translations-Dx-0rddP.js";
import { useForm } from "@inertiajs/react";
import { Input, Button } from "@nextui-org/react";
const UpdatePassword = () => {
  const passwordInput = useRef(null);
  const currentPasswordInput = useRef(null);
  const [success, setSuccess] = useState(false);
  const {
    data,
    setData,
    errors,
    put,
    reset,
    processing,
    recentlySuccessful,
    isDirty
  } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const submit = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        setSuccess(true);
        setTimeout(() => setSuccess(false), 4e3);
      },
      onError: (errors2) => {
        var _a, _b;
        if (errors2.password) {
          reset("password", "password_confirmation");
          (_a = passwordInput.current) == null ? void 0 : _a.focus();
        }
        if (errors2.current_password) {
          reset("current_password");
          (_b = currentPasswordInput.current) == null ? void 0 : _b.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsx("h3", { className: "font-semibold select-none", children: t("Update Password") }),
    /* @__PURE__ */ jsx("div", { className: "font-light leading-tight select-none", children: t("update-password-description") }),
    success && /* @__PURE__ */ jsx("p", { className: "text-success", children: t("password-updated-message") }),
    /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("fieldset", { className: "space-y-1", children: /* @__PURE__ */ jsx(
        Input,
        {
          ref: currentPasswordInput,
          id: "current_password",
          type: "password",
          name: "current_password",
          label: t("Current Password"),
          value: data.current_password,
          errorMessage: errors.current_password,
          isInvalid: errors.current_password ? true : false,
          onValueChange: (e) => setData("current_password", e)
        }
      ) }),
      /* @__PURE__ */ jsx("fieldset", { className: "space-y-1", children: /* @__PURE__ */ jsx(
        Input,
        {
          ref: passwordInput,
          id: "password",
          type: "password",
          name: "password",
          label: t("New Password"),
          value: data.password,
          errorMessage: errors.password,
          isInvalid: errors.password ? true : false,
          onValueChange: (e) => setData("password", e)
        }
      ) }),
      /* @__PURE__ */ jsx("fieldset", { className: "space-y-1", children: /* @__PURE__ */ jsx(
        Input,
        {
          id: "password_confirmation",
          type: "password",
          name: "password_confirmation",
          label: t("Confirm Password"),
          value: data.password_confirmation,
          errorMessage: errors.password_confirmation,
          isInvalid: errors.password_confirmation ? true : false,
          onValueChange: (e) => setData("password_confirmation", e)
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "md:flex justify-end", children: /* @__PURE__ */ jsx("div", { className: "w-1/3", children: /* @__PURE__ */ jsx(
        Button,
        {
          fullWidth: true,
          color: "primary",
          type: "submit",
          isDisabled: !isDirty,
          spinner: /* @__PURE__ */ jsx("i", { className: "ri-loader-line ri-lg animate-spin" }),
          isLoading: processing,
          children: t("Save")
        }
      ) }) })
    ] }) }) })
  ] });
};
export {
  UpdatePassword
};
