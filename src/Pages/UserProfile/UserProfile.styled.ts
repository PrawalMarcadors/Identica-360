import styled from 'styled-components';

export const Container = styled.div`
	background-color: #fff;
	padding: 10px;
	border-radius: 10px;

	.company-logo {
		text-align: center;
	}

	.container-body {
		height: 77vh;
		overflow-y: scroll;
	}

	.text-maipulation {
		display: flex;
		align-items: center;
		color: #654098;
	}

	.company-logo img {
		width: 100px;
		margin: 20px;
	}

	.card-body {
		/* border: 1px solid grey; */
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		border-radius: 10px;
	}

	.card-body-data {
		padding: 20px;
		margin-bottom: 20px;
	}

	.user-header {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.background-pic {
		width: 100%;
		height: 200px;
		object-fit: cover;
		border-radius: 10px 10px 0 0;
	}

	.profile-pic {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		margin-top: -50px;
	}

	.user-info {
		text-align: center;
		margin: 10px 0;
	}

	.user-info h2 {
		margin: 5px 0;
	}

	.user-info p {
		margin: 3px 0;
	}

	.about-me {
		text-align: center;
		background-color: #f3e5f5;
		padding: 10px;
		border-radius: 5px;
		margin: 10px 0;
		text-align: left;
		display: flex;
		flex-direction: row-reverse;
	}

	.about-me h2 {
		margin: 0;
	}

	.about-me p {
		margin: 5px 0;
	}

	.about-me-data {
		width: 70%;
	}

	.contacts-count {
		color: white;
		background-color: #d1aa36;
		text-align: center;
		position: sticky;
		left: 100%;
		width: 80px;
		height: 80px;
		border-bottom-left-radius: 50%;
		border-bottom-right-radius: 50%;
		margin-top: -10px;
		h1 {
			padding: 0;
			margin: 0;
		}
	}

	.logo {
		width: 100px;
		margin-bottom: 1rem;
	}

	.icon {
		margin: 0 10px;
		font-size: 1.5em !important;
	}

	.ant-select-selector {
		background-color: white !important;
		border: 1px solid #6a1b9a !important;
	}

	.get-in-touch {
		margin: 10px 0;
		text-align: center;
	}

	.get-in-touch h2 {
		margin: 0;
	}

	.schedule-meeting {
		background-color: #f3e5f5;
		padding: 10px; /* Adjust padding here if needed */
		border-radius: 5px;
		margin: 10px 0;
		text-align: left;
	}

	.schedule-meeting h2 {
		margin: 0;
	}

	.schedule-meeting p {
		margin: 5px 0;
	}

	.hero-product {
		text-align: center;
	}

	.hero-product img {
		width: 70%;
		margin: 10px;
	}

	.company-contact p {
		margin: 5px 0;
	}

	.container {
		color: black;
	}

	.request-button {
		border-radius: 15px;
	}

	.save-to-contacts {
		display: flex;
		justify-content: center;
	}

	.company-contact {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.contact-button {
		width: 46%;
		margin: 5px;
	}

	.contact-bttn {
		width: 80%;
		margin: 5px;
	}

	.footer {
		text-align: center;
	}

	.icon-section {
		display: flex;
		padding: 15px 0;
		position: absolute;
		bottom: 0;
		justify-content: space-between;
		width: 100%;
		padding-right: 24px;
		background-color: #fff;
	}

	.icon-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #333;
		min-width: 100px;
		font-size: 12px;
	}

	.icon-container .icons {
		font-size: 1.5rem !important;
		margin-bottom: 5px;
	}
`;
