import React from 'react';
import { CompanyDetailsContainer} from '../AdminHome/AdminHome';
import { Button } from 'antd';
import { ButtonGroup } from '../CompanyForm/CompanyForm.styled';
import { UserOnboardingForm } from '../CompanyForm/UserOnboarding';
import { Steps } from '../../Routes/Routes';

interface UserOnboardingContentProps {
    currentStep: Steps;
    handleContinueClick: () => void;
    handleBack: () => void;
}

const UserOnboardingContent: React.FC<UserOnboardingContentProps> = ({
    currentStep,
    handleContinueClick,
    handleBack,
}) => {
    switch (currentStep) {
        case Steps.ONE:
            return (
                <CompanyDetailsContainer>
                    <div className="imageContainer">
                        <img
                            src="/memberOnboardinginitail.png"
                            alt="Company Details"
                            className="memberImage"
                        />
                    </div>
                    <div className="textContainer">
                        <h2 className="title">Member Onboarding</h2>
                        <p className="description">
                            Hello Admin!
                            <br />
                            Onboard your newest member on Zeta!
                        </p>
                        <ButtonGroup>
                            <Button
                                type="primary"
                                className="continueButton"
                                onClick={handleContinueClick}
                            >
                                Continue
                            </Button>
                            <Button
                                type="primary"
                                className="continueButton"
                                onClick={handleBack}
                            >
                                Back
                            </Button>
                        </ButtonGroup>
                    </div>
                </CompanyDetailsContainer>
            );
        case Steps.TWO:
            return <UserOnboardingForm handleBack={handleBack} />;
        case Steps.THREE:
            return (
                <CompanyDetailsContainer>
                    <div className="imageContainer">
                        <img
                            src="/memberOnboarded.png"
                            alt="Company Details"
                            className="memberImage"
                        />
                    </div>
                    <div className="textContainer">
                        <h2 className="title">
                            A new member has been added to your workspace!
                        </h2>
                        <p className="description">
                            Make sure you stay up-to-date with all the changes
                            this member makes to their profile. You can always
                            turn it off later.
                        </p>
                        <ButtonGroup>
                            <Button type="primary" className="continueButton">
                                Turn on Email Notifications
                            </Button>
                            <Button type="text" className="no_border-bttn">
                                Not now
                            </Button>
                        </ButtonGroup>
                    </div>
                </CompanyDetailsContainer>
            );
        default:
            return null;
    }
};

export default UserOnboardingContent;
