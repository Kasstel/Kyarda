

type typeBoard = "Сухая калиброванная 1-2 сорт" | "Сухая калиброванная 3 сорт" | "Обрезная (ест. вл) 2-3 сорт, длина 1200мм / 2400мм "


export interface IProductCard{
  name: string,
  image: string,
  salePrice: number,
  firstPrice?: number,
  typeBoard?: typeBoard,
  thickness?: string,
  width?: string,
  description: string
}


export function ProductCard({ 
  name, 
  salePrice, 
  firstPrice, 
  typeBoard, 
  thickness, 
  width, 
  description 
}: IProductCard){

  return (
    <div className="product-modal">
      <h2>{name}</h2>

      <p>Цена: {salePrice} ₽</p>
      <p>Старая цена: {firstPrice} ₽</p>
      {typeBoard && <p>Тип: {typeBoard}</p>}

      <p>Толщина: {thickness}</p>
      <p>Ширина: {width}</p>

      <p>{description}</p>
    </div>
  );
}
