import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react"
import type { ICartItem } from "../Cart/Cart.types"
import { useCart } from "../Cart/Context/Context"
import { useModal } from "../ModalContext/ModalContext"
import styles from "./Order.module.css"

type FieldName = "firstName" | "lastName" | "phone" | "comment"
type FormValues = Record<FieldName, string>
type FormErrors = Partial<Record<FieldName, string>>

const NAME_PATTERN = /^[A-Za-zА-Яа-яЁё\s-]+$/
const COMMENT_MAX_LENGTH = 500

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  phone: "",
  comment: "",
}

function validateName(value: string, emptyMessage: string) {
  const trimmed = value.trim()
  if (!trimmed) return emptyMessage
  if (trimmed.length < 2) return "Минимум 2 символа"
  if (!NAME_PATTERN.test(trimmed)) return "Только буквы, пробел и дефис"
  return ""
}

// Пустая строка = ошибки нет
const validators: Record<FieldName, (value: string) => string> = {
  firstName: (value) => validateName(value, "Введите имя"),
  lastName: (value) => validateName(value, "Введите фамилию"),
  phone: (value) => {
    if (!value.trim()) return "Введите номер телефона"
    if (/[^\d\s()+-]/.test(value)) return "Номер может содержать только цифры"
    const digits = value.replace(/\D/g, "")
    if (digits.length !== 11 || !/^[78]/.test(digits)) {
      return "Введите номер в формате +7 (999) 123-45-67"
    }
    return ""
  },
  comment: (value) =>
    value.length > COMMENT_MAX_LENGTH ? `Не больше ${COMMENT_MAX_LENGTH} символов` : "",
}

const fieldNames = Object.keys(validators) as FieldName[]

interface IOrder {
  firstName: string
  lastName: string
  phone: string
  comment: string
  items: ICartItem[]
  totalPrice: number
}

// Фиктивная отправка: имитируем ответ сервера с задержкой.
// TODO: заменить на реальный запрос
function submitOrder(order: IOrder): Promise<IOrder> {
  return new Promise((resolve) => setTimeout(() => resolve(order), 800))
}

export function OrderForm() {
  const { items, totalItems, totalPrice, dispatch } = useCart()
  const { openModal } = useModal()

  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isCartEmpty = items.length === 0

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as FieldName
    const value = e.target.value
    setValues((prev) => ({ ...prev, [name]: value }))
    // Перепроверяем на лету только те поля, которые пользователь уже трогал
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validators[name](value) }))
    }
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as FieldName
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validators[name](e.target.value) }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() // 🔥 ОТМЕНЯЕМ перезагрузку

    const nextErrors: FormErrors = {}
    fieldNames.forEach((name) => {
      nextErrors[name] = validators[name](values[name])
    })
    setErrors(nextErrors)
    setTouched({ firstName: true, lastName: true, phone: true, comment: true })

    const firstInvalid = fieldNames.find((name) => nextErrors[name])
    if (firstInvalid) {
      const field = e.currentTarget.elements.namedItem(firstInvalid)
      if (field instanceof HTMLElement) field.focus()
      return
    }

    if (isCartEmpty || isSubmitting) return

    const order: IOrder = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      phone: values.phone.trim(),
      comment: values.comment.trim(),
      items,
      totalPrice,
    }

    setIsSubmitting(true)
    await submitOrder(order)
    setIsSubmitting(false)

    dispatch({ type: 'CLEAR_CART' })
    openModal('success')
  }

  const renderError = (name: FieldName) =>
    errors[name] ? (
      <p className={styles.error} id={`order-${name}-error`} role="alert">
        {errors[name]}
      </p>
    ) : null

  const fieldProps = (name: FieldName) => ({
    id: `order-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `order-${name}-error` : undefined,
  })

  const inputClass = (name: FieldName) =>
    `${styles.input} ${errors[name] ? styles.inputInvalid : ""}`

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.headerBlock}>
        <h2 className={styles.header}>Оформление заказа</h2>
        <p className={styles.subtitle}>
          Оставьте контакты — менеджер перезвонит и уточнит детали
        </p>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="order-firstName">Имя</label>
          <input
            {...fieldProps("firstName")}
            className={inputClass("firstName")}
            type="text"
            placeholder="Введите имя"
            autoComplete="given-name"
          />
          {renderError("firstName")}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="order-lastName">Фамилия</label>
          <input
            {...fieldProps("lastName")}
            className={inputClass("lastName")}
            type="text"
            placeholder="Введите фамилию"
            autoComplete="family-name"
          />
          {renderError("lastName")}
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="order-phone">Телефон</label>
        <input
          {...fieldProps("phone")}
          className={inputClass("phone")}
          type="tel"
          inputMode="tel"
          placeholder="+7 (999) 123-45-67"
          autoComplete="tel"
        />
        {renderError("phone")}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="order-comment">
          Комментарий <span className={styles.optional}>необязательно</span>
        </label>
        <textarea
          {...fieldProps("comment")}
          className={`${inputClass("comment")} ${styles.textarea}`}
          placeholder="Адрес доставки, удобное время для звонка"
          rows={3}
        />
        {renderError("comment")}
      </div>

      <div className={styles.summary}>
        {isCartEmpty ? (
          <span>Корзина пуста — добавьте товары, чтобы оформить заказ</span>
        ) : (
          <>
            <span>Товаров: {totalItems}</span>
            <span className={styles.summaryPrice}>{totalPrice.toLocaleString("ru-RU")} ₽</span>
          </>
        )}
      </div>

      <div className={styles.actions}>
        <button className={styles.backButton} type="button" onClick={() => openModal('cart')}>
          Назад в корзину
        </button>
        <button className={styles.submitButton} type="submit" disabled={isCartEmpty || isSubmitting}>
          {isSubmitting ? "Отправляем…" : "Сделать заказ"}
        </button>
      </div>
    </form>
  )
}
