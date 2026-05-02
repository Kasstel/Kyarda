export function OrderForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // 🔥 ОТМЕНЯЕМ перезагрузку
    console.log('submit')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Введите имя" />
      <input placeholder="Введите фамилию" />
      <button type="submit">Сделать заказ бич</button>
    </form>
  )
}