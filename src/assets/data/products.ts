import type { IProductCard } from "../../widgets/ProductCard/ProductCard";
import kalibr__pilo from '../../images/kalibr__pilo.png'
import strog__pilo from '../../images/strog__pilo.jpg'
import prof__pilo from '../../images/prof__pilo.png'

export const PRODUCTS: IProductCard[] = [
  {
    name: "Калиброванный",
    image: kalibr__pilo,
    salePrice: 27000,
    firstPrice: 28000,
    thickness: "25 мм",
    width: "50 мм",
    description: "Сорт 1 - 2 \n Материал - хвойные породы (ЕЛЬ, СОСНА)\n Длина 6 000 мм / 3 000 мм \n Цена указана за 1 М3",
    typeBoard: "Сухая калиброванная 1-2 сорт"
  },
  {
    name: "Строганый",
    image: strog__pilo,
    salePrice: 31000,
    firstPrice: 34000,
    thickness: "20 мм",
    width: "45 мм",
    description: "Сорт 1 - 2 \n Материал - хвойные породы (ЕЛЬ, СОСНА)\n Длина 6 000 мм / 3 000 мм \n Цена указана за 1 М3",
    typeBoard:
      "Обрезная (ест. вл) 2-3 сорт, длина 1200мм / 2400мм "
  },
  {
    name: "Профилированный",
    image: prof__pilo,
    salePrice: 31000,
    firstPrice: 34000,
    thickness: "20 мм",
    width: "45 мм",
    description: "Сорт 1 - 2 \n Материал - хвойные породы (ЕЛЬ, СОСНА)\n Длина 6 000 мм / 3 000 мм \n Цена указана за 1 М3",
    typeBoard:
      "Обрезная (ест. вл) 2-3 сорт, длина 1200мм / 2400мм "
  }
];