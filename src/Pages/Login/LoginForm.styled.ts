import { Card } from 'antd';
import styled from 'styled-components';

export const LoginFormWrapper = styled(Card)`
	font-weight: 600 !important;
	color: #5f5e5e !important;
	.form-container {
		display: flex;
		justify-content: center;
	}

	.product-name{
		font-size: 2em;
		margin: auto 0;
		color: #1176BC;
	}

	.form-wrapper {
		background-color: #fff;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		text-align: center;
		width: 100%;
	}

	.header {
		margin-bottom: 0.5rem;
		display: flex;
		justify-content: space-between;
		color: black;
		line-height: 1 !important;
	}

	.header .column {
		text-align: start;
	}

	h1 {
		margin: 0 !important;
	}

	.sub-header {
		margin: 0 !important;
		font-weight: 100 !important;
		color: #a5a5a5 !important;
		font-size: 0.7em;
	}

	.logo {
		width: 100px;
		margin-bottom: 1rem;
	}

	.styled-button {
		width: 100%;
		margin-bottom: 1rem;
		background-color: #654098;
		border-color: #654098;
		color: white;
	}

	.styled-button:hover,
	.styled-button:focus {
		background-color: #654098;
		border-color: #654098;
		color: white;
	}

	.row {
		display: flex;
		flex-direction: row;
		gap: 10px;
		font-size: 2em;
		justify-content: center;
		.icon {
			color: #2e2eb1;
		}
	}

	.admin-button {
		background-color: #654098;
		border-color: #654098;
	}

	.admin-button:hover,
	.admin-button:focus {
		background-color: #654098;
		border-color: #654098;
	}

	.sign-up {
	}

	.ant-form-item {
		margin: 0 !important;
		.ant-form-item-label {
			padding: 0 !important;
		}
		.ant-form-item-label > label {
			color: #5f5e5e !important;
		}
	}
	.forgot {
		text-align: end;
		margin: 5px 0;
		a {
			color: #25bbcf !important;
		}
	}

	a {
		font-weight: 600 !important;
		color: #654098;
		text-decoration: inherit;
	}

	.footer {
		margin-top: 2rem;
		font-size: 0.8rem;
		color: black;
	}
`;
