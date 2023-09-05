import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Footer, Header, Main ,Products } from '../components';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { videoAtom } from '../state/videoAtom';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function Home() {
	const whiteBlockRef = useRef(null);

	const [headerColor, setHeaderColor] = useState('white');
	const isVideoEnded = useRecoilValue(videoAtom);

	const handleScroll = () => {
		const whiteRect = whiteBlockRef.current.getBoundingClientRect();

		if (whiteRect.y < 35) {
			if (headerColor === 'white') setHeaderColor('dark');
		} else setHeaderColor('white');
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<Header headerColor={headerColor} />
			<div className={styles['content']}>
				<div className={styles['text-block']}>
					<div className={styles['text']}>Уникальная разработка Ritm</div>
				</div>
				<div ref={whiteBlockRef}>
					<Main />
				</div>
        {isVideoEnded && <Products />}
			</div>
        {isVideoEnded && <Footer />}
		</>
	);
}
