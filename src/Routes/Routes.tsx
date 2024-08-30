import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { RoutesPath } from './RoutesPath';
import LoginForm from '../Pages/Login/LoginForm';
import { AdminHome } from '../Pages/AdminHome/AdminHome';
import Home from '../Pages/Home';
import { CompanyTable } from '../Pages/CompanyDetail/CompanyTable';
import { UserProfile } from '../Pages/UserProfile/UserProfile';
import UserOnboardingContent from '../Pages/userOnboarding/userOnboarding';

export enum Steps {
	ONE = 'ONE',
	TWO = 'TWO',
	THREE = 'THREE',
}

export enum OnboardingType{
	MEMBER= 'MEMBER',
	COMPANY= 'COMPANY'
}

interface RoutesProps {
	onboardingType: OnboardingType
	setOnboardingType: (type: OnboardingType) => void;
}

export const AuthenticatedRoutes: React.FC<RoutesProps> = ({onboardingType, setOnboardingType}) => {
	const [currentStep, setCurrentStep] = useState<Steps>(Steps.ONE);
	const navigate = useNavigate();

	const handleContinueClick = () => {
		if (currentStep === Steps.ONE) {
			setCurrentStep(Steps.TWO);
		} else if (currentStep === Steps.TWO) {
			setCurrentStep(Steps.THREE);
		}
	};

	useEffect(() => {
		console.log('Current Step:', currentStep);
			
		console.log(onboardingType);
	}, []);

	const handleBack = () => {
		console.log('Before State Update:', currentStep);
		if (currentStep === Steps.ONE) {
			navigate(RoutesPath.ADMIN_HOME);
		} else if (currentStep === Steps.THREE) {
			setCurrentStep(Steps.TWO);
		} else if (currentStep === Steps.TWO) {
			setCurrentStep(Steps.ONE);
		}

		console.log('After State Update:', currentStep);
	};

	return (
		<Routes>
			<Route path={RoutesPath.BASEURL} element={<LoginForm setOnboardingType={setOnboardingType} />} />
			<Route
				path={RoutesPath.ADMIN_HOME}
				element={
					<AdminHome handleContinueClick={handleContinueClick} handleBack={handleBack} currentStep={currentStep} setOnboardingType={setOnboardingType} />
				}
			/>
			<Route path={RoutesPath.GET_USER_BY_ID} element={<UserProfile />} />
			<Route path={RoutesPath.GET_ALL_CAMPANIES} element={<CompanyTable />} />
			<Route path={RoutesPath.ONNBOARD_USER} element={<UserOnboardingContent handleContinueClick={handleContinueClick} handleBack={handleBack} currentStep ={currentStep }/>} />
		</Routes>
	);
};

export const UnAuthenticatedRoutes: React.FC<RoutesProps> = ({onboardingType, setOnboardingType}) => {
	return (
		<Routes>
			<Route path={RoutesPath.BASEURL} element={<LoginForm setOnboardingType={setOnboardingType} />} />
			<Route path={RoutesPath.LOGIN} element={<LoginForm setOnboardingType={setOnboardingType} />} />
		</Routes>
	);
};
