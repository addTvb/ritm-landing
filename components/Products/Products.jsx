import { ProductCard } from '../ProductCard/ProductCard';
import styles from './Products.module.css';

const products = [
	{
		img: '/products/mega.png',
		title: 'Mega',
		subTitle: ['Модульный охранный прибор'],
		simCardText: '2 SIM карты + Ethernet',
		shieldText: '80 проводных/беспроводных зон',
		batteryText: 'Блок питания 2.5 А 12 В',
	},
	{
		img: '/products/mega-light.png',
		title: 'Mega Light ',
		subTitle: ['Проводной охранный прибор'],
		simCardText: '2 SIM карты',
		shieldText: '16 проводных зон',
		batteryText: 'Адаптер питания 1А 12B',
	},
	{
		img: '/products/mega-light-443.png',
		title: 'Mega Light 433',
		subTitle: ['Беспроводной охранный прибор'],
		simCardText: '2 SIM карты',
		shieldText: '32 беспроводных зоны',
		batteryText: 'Адаптер питания 1А 12B',
	},
	{
		img: '/products/mega-keyboard.png',
		title: 'Mega Keyboard',
		subTitle: ['Охранный прибор в корпусе кливиатуры', 'проводной | беспроводной'],
		simCardText: '2 SIM карты',
		shieldText: '8 проводных или 32 беспроводных зоны',
		batteryText: 'Адаптер 1 А 12 В + АКБ 18650',
	},
];

export const Products = () => {
	return (
		<div className={styles['products']}>
			<div className={styles['title']}>
				Выбери свою Mega - новая линейка оборудования во вселенной RITM.
			</div>
			<div className={styles['card-box']}>
				{products.map((item, index) => (
					<ProductCard
						key={`product-${index}`}
						img={item.img}
						title={item.title}
						subTitle={item.subTitle}
						simCardText={item.simCardText}
						shieldText={item.shieldText}
						batteryText={item.batteryText}
					/>
				))}
			</div>
		</div>
	);
};
