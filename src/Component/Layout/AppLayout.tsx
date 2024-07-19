import React from 'react';
import { Layout} from 'antd';
import { Link} from 'react-router-dom';
import { StyledHeader, ContentWrapper } from './AppLayout.styled';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {

  return (
    <Layout>
      <StyledHeader>
        <Link to="/" style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>
          Identica360
        </Link>
      </StyledHeader>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Layout>
  );
};

export default AppLayout;
