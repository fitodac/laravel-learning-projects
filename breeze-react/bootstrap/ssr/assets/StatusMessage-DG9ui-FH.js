import { jsx, Fragment, jsxs } from "react/jsx-runtime";
const StatusMessage = ({ status }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "bg-success-100 text-success font-medium leading-tight pl-12 pr-5 py-4 relative rounded-2xl", children: [
    /* @__PURE__ */ jsx("i", { className: "ri-checkbox-circle-line ri-xl text-success-300 left-1 top-2 absolute pointer-events-none" }),
    status
  ] }) });
};
export {
  StatusMessage
};
