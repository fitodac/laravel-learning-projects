import { jsx } from "react/jsx-runtime";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { NextUIProvider } from "@nextui-org/react";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const appName = "Laravel";
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(
    `./pages/${name}.tsx`,
    /* @__PURE__ */ Object.assign({ "./pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword-DvxrsOzH.js"), "./pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword--PPcdl36.js"), "./pages/Auth/Login.tsx": () => import("./assets/Login-CxRh2NiB.js"), "./pages/Auth/Register.tsx": () => import("./assets/Register-BfBHO6bl.js"), "./pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword-THhUyPuA.js"), "./pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail-BjeosCmP.js"), "./pages/Auth/components/StatusMessage.tsx": () => import("./assets/StatusMessage-DG9ui-FH.js"), "./pages/Auth/layout/AuthLayout.tsx": () => import("./assets/AuthLayout-CHcd3Jie.js"), "./pages/Dashboard.tsx": () => import("./assets/Dashboard-BEAGkgnt.js"), "./pages/Profile/Edit.tsx": () => import("./assets/Edit-CJISrwVG.js"), "./pages/Profile/components/DeleteAccount.tsx": () => import("./assets/DeleteAccount-BreAFSZI.js"), "./pages/Profile/components/UpdatePassword.tsx": () => import("./assets/UpdatePassword-B3xvzdPA.js"), "./pages/Profile/components/UpdateProfile.tsx": () => import("./assets/UpdateProfile-CoLu18bv.js"), "./pages/Welcome.tsx": () => import("./assets/Welcome-la9DWvBz.js") })
  ),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(
      /* @__PURE__ */ jsx(NextUIProvider, { children: /* @__PURE__ */ jsx(App, { ...props }) })
    );
  },
  progress: {
    color: "#4B5563"
  }
}).then(() => {
  var _a;
  (_a = document.getElementById("app")) == null ? void 0 : _a.removeAttribute("data-page");
});
