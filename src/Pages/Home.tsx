import { Spin } from 'antd';

const Home = () => {
	return (
		<Spin
			style={{
				display: 'grid',
				placeContent: 'center',
				width: '100%',
				height: '100vh',
			}}
			size="large"
		/>
	);
};
export default Home;
