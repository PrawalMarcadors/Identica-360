import React from 'react';
import styled from 'styled-components';

export const CompanyLandingPageWrapper = styled('div')`
  padding: 20px;
  text-align: center;
`;


export const CompanyLandingPage: React.FC = () => (
  <CompanyLandingPageWrapper>
    <h1>Company Landing Page</h1>
  </CompanyLandingPageWrapper>
);
