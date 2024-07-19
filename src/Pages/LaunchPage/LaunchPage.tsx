import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RoutesPath } from '../../Routes/RoutesPath';

const SplashScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fff;
`;

export const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(RoutesPath.LOGIN);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [navigate]);

  return (
    <SplashScreenContainer>
      <img src="/path/to/your/image.png" alt="Identica360" />
    </SplashScreenContainer>
  );
};
