// import { toast } from "@mobiscroll/react";

import { toast } from "react-toastify";

export const toastMessage = (message, type) => {
  // toast({
  //     message: message ? message : "Submitted",
  //     type: type ? type : "success",
  //     position: "top",
  //     icon: type ? type : "success",
  //   })
  toast.success(message ? message : "Submitted", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
