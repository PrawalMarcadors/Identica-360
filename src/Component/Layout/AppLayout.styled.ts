import styled from 'styled-components';
import { Layout, Menu } from 'antd';

export const StyledHeader = styled(Layout.Header)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #654098;
	padding: 0 20px;
	width: 100vw;
	height: 10vh;
`;

export const ContentWrapper = styled(Layout.Content)`
	height: 92vh;
	overflow-y: scroll;
`;

export const DesktopMenu = styled(Menu)`
	flex: 1;
`;
