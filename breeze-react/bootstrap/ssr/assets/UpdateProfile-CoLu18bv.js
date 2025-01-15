import { jsxs, jsx } from "react/jsx-runtime";
import { t } from "./translations-Dx-0rddP.js";
import { usePage, useForm, Link } from "@inertiajs/react";
import { Input, Button } from "@nextui-org/react";
const UpdateProfile = ({ mustVerifyEmail, status }) => {
  const user = usePage().props.auth.user;
  const {
    data,
    setData,
    patch,
    errors,
    processing,
    recentlySuccessful,
    isDirty
  } = useForm({
    name: user.name,
    email: user.email
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update"));
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsx("h3", { className: "font-semibold select-none", children: t("Profile information") }),
    /* @__PURE__ */ jsx("div", { className: "font-light leading-tight select-none", children: t("profile-information-intro") }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsx("fieldset", { className: "space-y-1", children: /* @__PURE__ */ jsx(
        Input,
        {
          id: "name",
          type: "text",
          name: "name",
          label: t("Username"),
          value: data.name,
          isInvalid: errors.name ? true : false,
          errorMessage: errors.name,
          onValueChange: (e) => setData("name", e)
        }
      ) }),
      /* @__PURE__ */ jsx("fieldset", { className: "space-y-1", children: /* @__PURE__ */ jsx(
        Input,
        {
          id: "email",
          type: "email",
          name: "email",
          label: "Email",
          value: data.email,
          isInvalid: errors.email ? true : false,
          errorMessage: errors.email,
          onValueChange: (e) => setData("email", e)
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
    ] }) }),
    mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsx("div", { children: status !== "verification-link-sent" ? /* @__PURE__ */ jsxs("p", { className: "text-danger text-sm mt-2", children: [
      t("Your email address is unverified"),
      " ",
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("verification.send"),
          method: "post",
          as: "button",
          className: "underline text-sm",
          children: t("email-verify-link")
        }
      )
    ] }) : /* @__PURE__ */ jsx("div", { className: "mt-2 font-medium text-sm text-green-600", children: t("verification-link-sent-notice") }) })
  ] });
};
export {
  UpdateProfile
};
