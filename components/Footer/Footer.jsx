import styles from './Footer.module.css';

export const Footer = () => {
	return (
		<footer className={styles['footer']}>
			<div className={styles['top']}>
				<div className={styles['info']}>
					<div className={styles['title']}>
						Попробуй прямо сейчас. Выбери свое решение.
					</div>
					<div className={styles['sub-title']}>
						Оставьте заявку или позвоните, и мы сами всё за вас заполним.
					</div>
				</div>
				<button className={styles['order-button']}>Оформить заказ</button>
			</div>
			<div className={styles['center']}>
				<div className={styles['left']}>
					<div className={styles['address']}>
						Санкт-Петербург пр. Энергетиков д.30 к.8
					</div>
					<div className={styles['phone']}>
						<div className={styles['title']}>Санкт-Петербург</div>
						<a href='tel:+78123250102' className={styles['number']}>
							+7 812 325-01-02
						</a>
					</div>
					<div className={styles['phone']}>
						<div className={styles['title']}>Москва</div>
						<a href='tel:+74956090332' className={styles['number']}>
							+7 495 609-03-32
						</a>
					</div>
					<div className={styles['phone']}>
						<div className={styles['title']}>Алматы</div>
						<a href='tel:+77772269191' className={styles['number']}>
							+7 777 226-91-91
						</a>
					</div>
				</div>

				<nav>
					<ul className={styles['right']}>
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
					</ul>
				</nav>
			</div>
			<div className={styles['bottom']}>
				<div className={styles['description']}>
					Разнообразный и богатый опыт говорит нам, что понимание сути
					ресурсосберегающих технологий не даёт нам иного выбора, кроме
					определения{' '}
				</div>
				<div className={styles['copyright']}>
					© 2022 Компания &quot;Ритм&quot;
				</div>
			</div>
		</footer>
	);
};
