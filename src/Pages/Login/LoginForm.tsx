import { Form, Input, Button } from 'antd';
import { AppleOutlined } from '@ant-design/icons';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { LoginFormWrapper } from './LoginForm.styled';
import { RoutesPath } from '../../Routes/RoutesPath';
import { useNavigate } from 'react-router-dom';
import { OnboardingType } from '../../Routes/Routes';
import { setUser } from '../../Store/Slice/User.slice';
import { Role } from '../../Store/types';

interface LoginFormProps {
	setOnboardingType: (type: OnboardingType) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setOnboardingType }) => {
	const navigate = useNavigate();

	const onFinish = (values: { email: string; password: string }) => {
		console.log(values);

		if (values.email === 'company@gmail.com') {
			// dispatch(
			// 	setUser({
			// 		username: 'Admin',
			// 		role: Role.ADMIN,
			// 		accessToken: 'dummyAccessToken',
			// 		refreshToken: 'dummyRefreshToken',
			// 		email: values.email,
			// 	})
			// );
			navigate(RoutesPath.ADMIN_HOME);
			setOnboardingType(OnboardingType.COMPANY);
		} else if (values.email === 'member@gmail.com') {
			// dispatch(
			// 	setUser({
			// 		username: 'Member',
			// 		role: Role.USER,
			// 		accessToken: 'dummyAccessToken',
			// 		refreshToken: 'dummyRefreshToken',
			// 		email: values.email,
			// 	})
			// );
			navigate(`${RoutesPath.GET_USER_BY_ID.replace(':userId', '1')}`);
		} else {
			navigate(RoutesPath.LOGOUT);
		}
	};

	// const onFinish = (values: { email: string }) => {
	// 	console.log(values);

	// 	if (values?.email === 'company@gmail.com') {
	// 		navigate(RoutesPath.ADMIN_HOME);
	// 		setOnboardingType(OnboardingType.COMPANY);
	// 	} else if (values?.email === 'member@gmail.com') {
	// 		navigate(`${RoutesPath.GET_USER_BY_ID.replace(':userId', '1')}`);
	// 	} else {
	// 		navigate(RoutesPath.LOGOUT);
	// 	}
	// };

	const [form] = Form.useForm();
	return (
		<LoginFormWrapper>
			<div className="form-container">
				<div className="form-wrapper">
					<div className="header">
						<span className="column">
							<h1>Hello!</h1>
							<span className="sub-header">Welcome to Identica360</span>
						</span>
						<img src="/public/zetaLogo.png" alt="Zeta Logo" className="logo" />
					</div>
					<Form
						form={form}
						layout="vertical"
						name="login"
						initialValues={{ remember: true }}
						onFinish={onFinish}
					>
						<Form.Item
							name="email"
							label="Email"
							rules={[{ required: true, message: 'Please input your email!' }]}
						>
							<Input placeholder="Enter email" />
						</Form.Item>

						<Form.Item
							name="password"
							label="Password"
							rules={[{ required: true, message: 'Please input your password!' }]}
							extra={
								<>
									<div className="forgot">
										<a href="#">Forgot password?</a>
									</div>
								</>
							}
						>
							<Input.Password placeholder="Enter password" />
						</Form.Item>
						<Button htmlType="submit" className="styled-button">
							Sign In
						</Button>

						{/* <Button type="default" onClick={handleAdminSignIn} className="styled-button">
							Sign In As Admin
						</Button>

						<Button type="default" onClick={handleUserSignIn} className="styled-button">
							Sign In As User
						</Button> */}
					</Form>

					<div className="continue-with">OR CONTINUE WITH</div>
					<div className="row">
						<FcGoogle />
						<BsFacebook className="icon" />
						<AppleOutlined />
					</div>

					<div className="footer">
						<div>Powered By ©2024 Identica360</div>
						<div className="sign-up">
							Don't have an account? <a href="#">Sign up</a>
						</div>
					</div>
				</div>
			</div>
		</LoginFormWrapper>
	);
};

export default LoginForm;
function dispatch(arg0: any) {
	throw new Error('Function not implemented.');
}

