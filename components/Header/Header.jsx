import styles from './Header.module.css';
import clsx from 'clsx';
import { LogoIcon } from '../../icons/LogoIcon';
import { ArrowDown } from '../../icons/ArrowDown';

export const Header = ({ headerColor }) => {
	return (
		<header
			className={clsx(
				styles['header'],
				headerColor === 'white' ? styles['dark'] : styles['white']
			)}
		>
			<LogoIcon
				color={headerColor === 'white' ? '#fff' : '#050F20'}
				width={73}
				height={37}
				alt='RITM company logo'
				className={styles['logo']}
			/>
			<nav className={styles['nav']}>
				<ul>
					<li>
						<a href='#'>Mega</a>
					</li>
					<li>
						<a href='#'>Mega Light</a>
					</li>
					<li>
						<a href='#'>Mega Keyboard</a>
					</li>
					<li>
						<a href='#'>Софт</a>
					</li>
					<li>
						<a href='#'>Контакты</a>
					</li>
				</ul>
			</nav>
			<div className={styles['actions']}>
				<button className={styles['select-button']}>
					<div>Спецификация</div>
					<ArrowDown
						alt='Arrow down'
						width={7}
						height={17}
						color={headerColor === 'white' ? '#fff' : '#050F20'}
					/>
				</button>
				<button className={styles['order-button']}>Оформить заказ</button>
			</div>
		</header>
	);
};
