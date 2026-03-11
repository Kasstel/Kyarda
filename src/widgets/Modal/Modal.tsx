import { useEffect } from "react"
import { useModal } from "../ModalContext/ModalContext"
import { ProductCard } from "../ProductCard/ProductCard"
import "./Modal.css"

export function Modal(){
  const {modalType, modalData, closeModal} = useModal()

  useEffect(() => {
    if (modalType) {
      document.body.style.overflow = "hidden";   // 🔒 блокируем скролл
    } else {
      document.body.style.overflow = "auto";     // 🔓 возвращаем скролл
    }

    return () => {
      document.body.style.overflow = "auto";     // На всякий случай при размонтировании
    };
  }, [modalType]);
 
   if (!modalType) return null; // <=== ГЛАВНОЕ УСЛОВИЕ

  return(
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {modalType === "product" && <ProductCard {...modalData} />}
        {modalType === "cart" && <div>Корзина</div>}
      </div>
    </div>
  )
}