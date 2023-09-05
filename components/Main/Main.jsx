import { useEffect, useRef } from 'react';
import styles from './Main.module.css';
import clsx from 'clsx';
import { videoAtom } from '../../state/videoAtom';
import { useRecoilState } from 'recoil';

export const Main = (props) => {
	const [isEnded, setIsEnded] = useRecoilState(videoAtom);
	const videoRef = useRef(null);
	let isPlayed = false;

	const handleScroll = () => {
		const height = window.innerHeight;
		const rect = videoRef.current.getBoundingClientRect();
		const allPercent = height / 100;
		const halfViewportHeight = allPercent * 50 + 100;

		if (!isPlayed) {
			if (rect.top <= halfViewportHeight) {
				videoRef.current.play();
				isPlayed = true;
			}
		}
	};

	const handleEnd = () => setIsEnded(true);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className={styles['main']}>
			<h1 className={clsx(styles['title'], isEnded && styles['place-up'])}>
				Mega — новая эпоха для лучших охранных компаний
			</h1>
			<video
				src='/MegaOpenFast.mp4'
				ref={videoRef}
				muted
				width={1200}
				onEnded={handleEnd}
			/>
		</div>
	);
};
