import { useModal } from "../ModalContext/ModalContext"
import styles from "./Order.module.css"

export function OrderSuccess() {
  const { closeModal } = useModal()

  return (
    <div className={styles.success} role="status">
      <svg className={styles.checkmark} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle className={styles.checkmarkCircle} cx="26" cy="26" r="24" />
        <path className={styles.checkmarkTick} d="M15 27L22.5 34.5L37.5 18.5" />
      </svg>
      <h2 className={styles.header}>Заказ оформлен</h2>
      <p className={styles.successText}>
        Спасибо! В скором времени с вами свяжется менеджер для подтверждения заказа.
      </p>
      <button className={styles.submitButton} type="button" onClick={closeModal}>
        Хорошо
      </button>
    </div>
  )
}
