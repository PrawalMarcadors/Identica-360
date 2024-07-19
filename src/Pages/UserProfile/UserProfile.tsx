import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form, Select } from 'antd';
import { CiClock2 } from 'react-icons/ci';
import { MdLocationPin } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';
import { Container } from './UserProfile.styled';
import { IoLogoLinkedin, IoMdArrowDropright, IoMdArrowDropup } from 'react-icons/io';
import { RiContactsBookFill } from 'react-icons/ri';
import { TiMail } from 'react-icons/ti';
import { BiPhoneCall } from 'react-icons/bi';
import { FaSms } from 'react-icons/fa';
import { TestimonialCard } from './TestimonialCard';
import { AiOutlineCompass, AiOutlineShareAlt } from 'react-icons/ai';
import { SiAlwaysdata } from 'react-icons/si';

const { Option } = Select;

interface Company {
	logo: string;
	heroProduct: string;
	contact: string;
	email: string;
	website: string;
	analystEmail: string;
}

interface User {
	backgroundPic: string;
	profilePic: string;
	fullName: string;
	designation: string;
	experiences: string[];
	aboutMe: string;
	contactsCount: number;
}

interface Meeting {
	time: string;
	link: string;
	location: string;
}

interface UserData {
	id: string;
	company: Company;
	user: User;
	meeting: Meeting;
}

export const UserProfile: React.FC = () => {
	const { userId } = useParams<{ userId: string }>();
	const [userData, setUserData] = useState<UserData[] | null>(null);
	const [showMore, setShowMore] = useState<boolean>(false);

	const userDataArray = [
		{
			id: '1',
			company: {
				logo: '/public/zetaLogo.png',
				heroProduct: '/images.jpg',
				contact: '123-456-7890',
				email: 'info@company1.com',
				website: 'www.zeta.tech',
				analystEmail: 'analyst@company1.com',
			},
			user: {
				backgroundPic: '/th.jpg',
				profilePic: '/47339.jpg',
				fullName: 'Jogender Kota',
				designation: 'Senior Project Manager',
				experiences: ['Product Development', 'PayZapp', 'HDFC', 'DevOps/SRE/AI/ML & Automation'],
				aboutMe:
					'I am Jogender Kota, passionate, skilled, and enthusiastic about Product Development, DevOps principles, and tools passionate, skilled, and enthusiastic about Product Development, DevOps principles, and tools passionate, skilled, and enthusiastic about Product Development, DevOps principles, and tools',
				contactsCount: 78,
			},
			meeting: {
				time: '10:00 - 11:00 AM',
				link: 'http://meeting-link1.com',
				location: 'Conference Room 02',
			},
		},
		{
			id: '2',
			company: {
				logo: '/logoImage.png',
				heroProduct: '/cardImage.png',
				contact: '234-567-8901',
				email: 'info@company2.com',
				website: 'www.zeta.tech',
				analystEmail: 'analyst@company2.com',
			},
			user: {
				backgroundPic: '/backgroundPicImage.png',
				profilePic: '/profilePicImage2.png',
				fullName: 'Alice Doe',
				designation: 'Project Manager',
				experiences: ['Software Development', 'FinTech', 'DevOps'],
				aboutMe: 'I am Alice Doe, experienced in managing software development projects...',
				contactsCount: 45,
			},
			meeting: {
				time: '11:00 - 12:00 AM',
				link: 'http://meeting-link2.com',
				location: 'Conference Room 03',
			},
		},
	];

	useEffect(() => {
		// Mocking fetch call with userDataArray
		setUserData(userDataArray);
	}, []);

	const currentUser = userData?.find((user) => user.id === userId);

	if (!currentUser) {
		return <div>User not found</div>;
	}

	const {
		company: { logo, heroProduct, contact, email, website },
		user: { backgroundPic, profilePic, fullName, designation, experiences, aboutMe, contactsCount },
		meeting: { time, link, location },
	} = currentUser;

	const trimmedAboutMe = aboutMe.slice(0, 120);

	return (
		<Container className="container">
			<div className="container-body">
				<div className="company-logo">
					<img src={logo} alt="Company Logo" />
				</div>
				<div className="card-body">
					<div className="user-header">
						<img className="background-pic" src={backgroundPic} alt="User Background" />
						<img className="profile-pic" src={profilePic} alt="User Profile" />
					</div>
					<div className="card-body-data">
						<div className="user-info">
							<h2 className="full-name">{fullName}</h2>
							<p className="designation">{designation}</p>
							<p className="experiences">{experiences.join(' | ')}</p>
						</div>
						<div className="save-to-contacts">
							<Button>
								<RiContactsBookFill className="icon" />
								Save to Contacts
							</Button>
						</div>
					</div>
				</div>
				<div className="about-me">
					<div className="contacts-count">
						My Connects<h1>{contactsCount}</h1>
					</div>
					<div className="about-me-data">
						<h2 className="text-color">About Me</h2>
						{!showMore ? (
							<>
								<p className="about-text">{trimmedAboutMe}...</p>
								<div onClick={() => setShowMore(true)} className="text-maipulation">
									Tell me more <IoMdArrowDropright />
								</div>
							</>
						) : (
							<>
								<p className="about-text">{aboutMe}</p>
								<div onClick={() => setShowMore(false)} className="text-maipulation">
									Show less <IoMdArrowDropup />
								</div>
							</>
						)}
					</div>
				</div>
				<div className="get-in-touch">
					<h2>Get in Touch</h2>
					<Button
						className="contact-button"
						onClick={() => (window.location.href = `mailto:${email}?subject=Contact me`)}
					>
						<TiMail className="icon" />
						Email Me
					</Button>

					<Button
						className="contact-button"
						onClick={() => (window.location.href = `tel:${contact}`)}
					>
						<BiPhoneCall className="icon" />
						Call Me
					</Button>

					<Button
						className="contact-button"
						onClick={() => (window.location.href = `sms:${contact}`)}
					>
						<FaSms className="icon" />
						Text Me
					</Button>

					<Button
						className="contact-button"
						onClick={() => (window.location.href = 'https://www.example.com')}
					>
						<IoLogoLinkedin className="icon" />
						Social Connect
					</Button>
				</div>
				<div className="schedule-meeting">
					<h3 style={{ color: '#654098' }}>Schedule a Meeting with {fullName}</h3>
					<p>
						<CiClock2 /> {time}
					</p>
					<p>
						<MdLocationPin />
						{location}
					</p>
					<Form.Item>
						<Select placeholder="Choose Platform" className="platform-option">
							<Option value="zoom">Zoom</Option>
							<Option value="googleMeet">Google Meet</Option>
						</Select>
					</Form.Item>
					<Button className="request-button">
						<BsPersonCircle style={{ margin: '5px' }} />
						<a href={`https://${link}`} target="_blank" rel="noopener noreferrer">
							Send Request
						</a>
					</Button>
				</div>
				<div className="about-me">
					<div>
						<img src={logo} alt="Company Logo" className="logo" />
					</div>
					<div className="about-me-data">
						<h2 className="text-color">About Me</h2>
						{!showMore ? (
							<>
								<p className="about-text">{trimmedAboutMe}...</p>
								<div onClick={() => setShowMore(true)} className="text-maipulation">
									Tell me more <IoMdArrowDropright />
								</div>
							</>
						) : (
							<>
								<p className="about-text">{aboutMe}</p>
								<div onClick={() => setShowMore(false)} className="text-maipulation">
									Show less <IoMdArrowDropup />
								</div>
							</>
						)}
					</div>
				</div>
				<div className="hero-product">
					<img src={heroProduct} alt="Hero Product" />
				</div>
				<div className="company-contact">
					<Button
						className="contact-bttn"
						onClick={() => (window.location.href = `tel:${contact}`)}
					>
						Zeta Official Contact
					</Button>
					<Button
						className="contact-bttn"
						onClick={() => (window.location.href = `mailto:${email}?subject=Contact me`)}
					>
						Company Official Email Id
					</Button>
					<Button className="contact-bttn">
						<a href={`https://${website}`} target="_blank" rel="noopener noreferrer">
							{website}
						</a>
					</Button>
					{/* <Button
					className="contact-bttn"
					onClick={() => (window.location.href = `mailto:${analystEmail}?subject=Analyst Inquiry`)}
				>
					Analyst? {analystEmail}
				</Button> */}
				</div>
				<div>Map</div>

				<div>Map</div>
				<TestimonialCard />
				<Button>Download X</Button>
				<div className="footer">
					<p>Powered By ©2024 Identica360</p>
				</div>
			</div>
			<div className="icon-section">
				<div className="icon-container">
					<SiAlwaysdata className="icons" />
					<span>Overview</span>
				</div>
				<div className="icon-container">
					<AiOutlineCompass className="icons" />
					<span>Explore Zeta</span>
				</div>
				<div className="icon-container">
					<AiOutlineShareAlt className="icons" />
					<span>Share this Card</span>
				</div>
			</div>
		</Container>
	);
};
