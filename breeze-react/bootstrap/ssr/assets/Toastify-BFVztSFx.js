import { useEffect } from "react";
import { jsx } from "react/jsx-runtime";
import { ToastContainer } from "react-toastify";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
const useStoreMain = create()(
  persist(
    (set, get) => ({
      colorMode: localStorage.getItem("colorMode") || "light",
      setColorMode: (colorMode) => {
        set({ colorMode });
      },
      auth: { user: null },
      setAuth: (auth) => set({ auth }),
      profileTab: "profile",
      setProfileTab: (profileTab) => set({ profileTab }),
      navbarOpen: false,
      setNavbarOpen: (navbarOpen) => set({ navbarOpen })
    }),
    {
      name: "store",
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
const useColorMode = () => {
  const { colorMode, setColorMode } = useStoreMain();
  useEffect(() => {
    var _a, _b;
    if (colorMode === "dark") {
      (_a = document.querySelector("html")) == null ? void 0 : _a.classList.add("dark");
    } else {
      (_b = document.querySelector("html")) == null ? void 0 : _b.classList.remove("dark");
    }
  }, [colorMode]);
  const changeColorMode = () => {
    if (setColorMode) {
      colorMode === "light" ? setColorMode("dark") : setColorMode("light");
    }
  };
  return { colorMode, changeColorMode };
};
const Toastify = () => {
  const { colorMode } = useStoreMain();
  return /* @__PURE__ */ jsx(
    ToastContainer,
    {
      position: "bottom-right",
      autoClose: 4e3,
      hideProgressBar: false,
      newestOnTop: true,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: colorMode
    }
  );
};
export {
  Toastify as T,
  useStoreMain as a,
  useColorMode as u
};
