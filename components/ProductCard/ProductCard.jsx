import Image from 'next/image';
import styles from './ProductCard.module.css';
import { ArrowDown } from '../../icons/ArrowDown';

export const ProductCard = (props) => {
	const { img, title, subTitle, simCardText, shieldText, batteryText } = props;
	return (
		<div className={styles['card']}>
			<Image
				src={img}
				alt={`Комплектующие ${subTitle}`}
				width={281}
				height={295}
				className={styles['img']}
			/>
			<div className={styles['title-box']}>
				<h3 className={styles['title']}>{title}</h3>
				<p className={styles['sub-title']}>
					{subTitle[0]}{' '}
					{subTitle[1] && (
						<>
							<br />
							{subTitle[1]}
						</>
					)}
				</p>
			</div>
			<div className={styles['description-box']}>
				<div className={styles['description-row']}>
					<p>{simCardText}</p>
					<Image
						src='/icons/sim-card.svg'
						alt='Иконка сим-карты'
						width={24}
						height={22}
					/>
				</div>
				<div className={styles['line']} />
				<div className={styles['description-row']}>
					<p>{shieldText}</p>
					<Image
						src='/icons/shield.svg'
						alt='Иконка щита'
						width={21}
						height={26}
					/>
				</div>
				<div className={styles['line']} />
				<div className={styles['description-row']}>
					<p>{batteryText}</p>
					<Image
						src='/icons/battery.svg'
						alt='Иконка батареи'
						width={29}
						height={18}
					/>
				</div>
			</div>
			<button className={styles['more-button']}>
				<span>Узнать больше</span>
				<div className={styles['arrow']}>
					<ArrowDown
						alt='Arrow down'
						width={7}
						height={17}
						color={'currentColor'}
					/>
				</div>
			</button>
		</div>
	);
};
