import toast from "react-hot-toast";

class Notify {
  static showError() {
    toast.error("Ha ocurrido un error", {
      duration: 2000,
      position: "top-right"
    })
  }

  static showAddSuccess() {
    toast.success("Se añadió el producto al carrito", {
      duration: 2000,
      position: "top-right"
    })
  }

  static showBuySuccess() {
    toast.success("Se ha realizado la compra satisfactoriamente", {
      duration: 2000,
      position: "top-right"
    })
  }
};

export default Notify