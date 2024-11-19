import { toast, Slide } from "react-toastify";

export const toastMessage = (type, message, autoCloseTime) => {
  switch (type) {
    case "success":
      toast.success(`${message}`, {
        position: "top-right",
        autoClose: autoCloseTime,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      break;
    case "info":
      toast.info(`${message}`, {
        position: "top-right",
        autoClose: autoCloseTime,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      break;
    case "error":
      toast.error(`${message}`, {
        position: "top-right",
        autoClose: autoCloseTime,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      break;
    default:
  }
};
