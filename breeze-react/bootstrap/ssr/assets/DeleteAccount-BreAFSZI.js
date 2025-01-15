import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { t } from "./translations-Dx-0rddP.js";
import { useForm } from "@inertiajs/react";
import { useDisclosure, Button, Modal, ModalContent, ModalHeader, ModalBody, Input } from "@nextui-org/react";
const DeleteAccount = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const passwordInput = useRef(null);
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const submit = (e) => {
    e.preventDefault();
    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => onClose(),
      onError: () => {
        var _a;
        return (_a = passwordInput.current) == null ? void 0 : _a.focus();
      },
      onFinish: () => reset()
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "text-danger space-y-5", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold select-none", children: t("Delete Account") }),
      /* @__PURE__ */ jsx("div", { className: "font-light leading-tight select-none", children: t("delete-account-confirmation-message") }),
      /* @__PURE__ */ jsx("div", { className: "md:flex justify-end", children: /* @__PURE__ */ jsx("div", { className: "w-1/3", children: /* @__PURE__ */ jsx(Button, { color: "danger", onPress: onOpen, fullWidth: true, children: t("Delete account") }) }) })
    ] }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        hideCloseButton: true,
        size: "sm",
        isOpen,
        onOpenChange,
        isDismissable: false,
        isKeyboardDismissDisabled: true,
        children: /* @__PURE__ */ jsx(ModalContent, { children: (onClose2) => /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(ModalHeader, { children: /* @__PURE__ */ jsx("span", { className: "leading-tight select-none", children: t("delete-account-confirmation-title") }) }),
          /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs(ModalBody, { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm leading-tight select-none", children: t("delete-account-confirmation-message") }),
            /* @__PURE__ */ jsx("div", { className: "space-y-1", children: /* @__PURE__ */ jsx(
              Input,
              {
                ref: passwordInput,
                id: "password",
                type: "password",
                name: "password",
                label: t("Password"),
                value: data.password,
                errorMessage: errors.password,
                isInvalid: errors.password ? true : false,
                onValueChange: (e) => setData("password", e)
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-x-5 pb-5", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  color: "danger",
                  fullWidth: true,
                  type: "submit",
                  spinner: /* @__PURE__ */ jsx("i", { className: "ri-loader-line ri-lg animate-spin" }),
                  isLoading: processing,
                  children: t("Delete")
                }
              ),
              /* @__PURE__ */ jsx(Button, { color: "default", fullWidth: true, onPress: onClose2, children: t("Cancel") })
            ] })
          ] }) })
        ] }) })
      }
    )
  ] });
};
export {
  DeleteAccount
};
