import { useEffect } from "react"
import { useModal } from "../ModalContext/ModalContext"
import { ProductCard } from "../ProductCard/ProductCard"
import "./Modal.css"
import { Cart } from "../Cart/Cart"

export function Modal(){
  const {modalType, modalData, closeModal} = useModal()

  useEffect(() => {
    if (modalType) {
      document.body.style.overflow = "hidden";   // 🔒 блокируем скролл
      document.documentElement.style.scrollbarGutter = "stable";
    } else {
      document.body.style.overflow = "auto";     // 🔓 возвращаем скролл
      document.documentElement.style.scrollbarGutter = "";
    }

    return () => {
      document.body.style.overflow = "auto";     // На всякий случай при размонтировании
      document.documentElement.style.scrollbarGutter = "";
    };
  }, [modalType]);
 
   if (!modalType) return null; // <=== ГЛАВНОЕ УСЛОВИЕ

  return(
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {modalType === "product" && <ProductCard {...modalData} />}
        {modalType === "cart" && <Cart/>}
      </div>
    </div>
  )
}