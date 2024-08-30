import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { CompanyForm } from '../CompanyForm/CompanyForm';
import { ButtonGroup } from '../CompanyForm/CompanyForm.styled';
import { OnboardingType, Steps } from '../../Routes/Routes';
// import { CompanyTable } from '../CompanyDetail/CompanyTable';

export const CompanyDetailsContainer = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
	text-align: start;
	.imageContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.memberImage {
		width: 100%;
		max-width: 250px;
		padding: 40px;
		padding: 50px 0;
		border-radius: 10px;
	}
	.memberImage {
		background: #8b61ff;
		padding: 40px;
		margin: 20px 10px;
	}

	.textContainer {
		text-align: center;
		margin-top: 20px;
	}

	.title {
		font-size: 24px;
		font-weight: 600;
		margin: 0;
	}

	.description {
		font-size: 16px;
		color: #6c757d;
		margin: 0;
	}

	.continueButton {
		margin: 10px 0;
	}
`;

interface AdminHomeProps {
	handleContinueClick: () => void;
	handleBack: () => void;
	currentStep: Steps;
	setOnboardingType: (type: OnboardingType) => void;
}

export const AdminHome: React.FC<AdminHomeProps> = ({ handleContinueClick, handleBack, currentStep, setOnboardingType }) => {
	const renderContent = (currentStep: Steps) => {
		switch (currentStep) {
			case Steps.ONE:
				return (
					<CompanyDetailsContainer>
						<div className="imageContainer">
							<img src="/companyOnboard1.png" alt="Company Details" className="styledImage" />
						</div>
						<div className="textContainer">
							<h2 className="title">Company Details</h2>
							<p className="description">
								Hello Admin!
								<br />
								Help us personalize your experience by providing your business information
							</p>
							<ButtonGroup>
								<Button type="primary" className="continueButton" onClick={handleContinueClick}>
									Continue
								</Button>
							</ButtonGroup>
						</div>
					</CompanyDetailsContainer>
				);
			case Steps.TWO:
				return (
					<CompanyForm
						handleBack={handleBack}
						setOnboardingType={setOnboardingType}
						handleContinueClick={handleContinueClick}
					/>
				);
			case Steps.THREE:
				return (
					<CompanyDetailsContainer>
						<div className="imageContainer">
							<img src="/companyOnboard2.png" alt="Success" className="styledImage" />
						</div>
						<div className="textContainer">
							<h2>Yay!</h2> Your company details have been added
							<p className="description">
								FYI, only admins are authorized to modify the company profile. If any changes are
								made by an admin, all other admins will receive an email notification.
							</p>
							<ButtonGroup>
								<Button type="primary">Turn on Email Notifications</Button>
								<Button>Not now</Button>
							</ButtonGroup>
						</div>
					</CompanyDetailsContainer>
				);
			default:
				return null;
		}
	};

	return <>{renderContent(currentStep)}</>;
};
