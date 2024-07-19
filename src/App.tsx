import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './Store/Store';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';
import { AuthenticatedRoutes, OnboardingType} from './Routes/Routes';
import AppLayout from './Component/Layout/AppLayout';
import { useState } from 'react';
const App: React.FC = () => {
	const [onboardingType, setOnboardingType] = useState<OnboardingType>(OnboardingType.COMPANY);
	// const { isAuthenticated } = useSelector(UserAuthSelector);
	// console.log(isAuthenticated);

	return <AuthenticatedRoutes onboardingType={onboardingType} setOnboardingType={setOnboardingType} />;
	// isAuthenticated ? <AuthenticatedRoutes onboardingType={onboardingType} setOnboardingType={setOnboardingType} /> : <UnAuthenticatedRoutes onboardingType={onboardingType} setOnboardingType={setOnboardingType} />;


};

const queryClient = new QueryClient();

const WrappedApp: React.FC = () => {
	/* 
		TODO: fetch access token and refresh token from localstorage, if tokens present, load them in redux and fetch user details using token and reinitiate UserAuth slice
	*/

	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<ReduxProvider store={store}>
					<ConfigProvider theme={{}}>
						<ThemeProvider theme={{}}>
							<AppLayout>
								<App />
							</AppLayout>
						</ThemeProvider>
					</ConfigProvider>
				</ReduxProvider>
			</QueryClientProvider>
		</BrowserRouter>
	);
};

export default WrappedApp;
