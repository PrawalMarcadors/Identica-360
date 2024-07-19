import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { reviewsData } from '../types';
import { Progress } from 'antd';

const CardContainer = styled.div`
	text-align: center;
	max-width: 600px;
	margin: 0 auto;

	.header {
		color: #654098;
		margin-bottom: 20px;
	}

	.profile,
	.profile-section {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 10px;
        gap: 5px;
	}

	.profile-image {
		width: 50px;
		height: 50px;
	}
	.profile-section {
		gap: 15px;
	}

	.profile-name {
		font-weight: bold;
	}

	.stars {
		color: #ffc107;
		margin-bottom: 10px;
		font-size: 1.5rem;
	}

	.review-text {
		font-size: 1rem;
		color: #333;
		margin-bottom: 20px;
	}

	.rating-container {
		display: flex;
		justify-content: center;
		margin: 20px 0;
	}

	.rating {
		margin: 0 10px;
		text-align: center;
	}

	.arrows {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		border-radius: 10px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}

	.star-container {
		display: inline-block;
		font-size: 1.2rem;
	}

	.star {
		color: #ffc107;
	}

	.empty-star {
		color: #ccc;
	}

	.ant-progress-steps-item {
		width: 10px !important;
		height: 10px !important;
		border-radius: 100%;
	}

    .ant-progress-steps-item-active{
        background: black;
    }

	.ant-progress-text {
		display: none;
	}
`;

export const TestimonialCard: React.FC = () => {
	const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
	const { reviews, glassdoorRating, ambitionBoxRating } = reviewsData;

	const handleNextReview = () => {
		setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
	};

	const handlePrevReview = () => {
		setCurrentReviewIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
	};

	const { profileImage, profileName, date, stars, reviewText } = reviews[currentReviewIndex];

	// Function to render stars based on the given number
	const renderStars = (numStars: number) => {
		const starArray = [];
		for (let i = 0; i < 5; i++) {
			if (i < numStars) {
				starArray.push(
					<span key={i} className="star">
						&#9733;
					</span>
				);
			} else {
				starArray.push(
					<span key={i} className="empty-star">
						&#9733;
					</span>
				);
			}
		}
		return starArray;
	};

	return (
		<CardContainer>
			<h3 className="header">Read what the folks are saying!</h3>
			<div className="arrows">
				<IoIosArrowBack size={30} style={{ cursor: 'pointer' }} onClick={handlePrevReview} />
				<div>
					<div className="profile-section">
						<div className="profile">
							<img className="profile-image" src={profileImage} alt={profileName} />
							<div>
								<div className="profile-name">{profileName}</div>
								<div>{date}</div>
							</div>
						</div>
						<div className="stars">{renderStars(stars)}</div>
					</div>
					<div className="review-text">{reviewText}</div>
				</div>
				<IoIosArrowForward size={30} style={{ cursor: 'pointer' }} onClick={handleNextReview} />
			</div>
			<div className="progress">
				<Progress
					steps={3}
					percent={((currentReviewIndex + 1) / reviews.length) * 100}
					format={(percent) =>
						`${Math.round(((percent || 0) / 100) * reviews.length)}/${reviews.length}`
					}
					width={60}
				/>
			</div>
			<div className="rating-container">
				<div className="rating">
					<div className="star-container">{renderStars(glassdoorRating)}</div>
					Rated {glassdoorRating} on GlassDoor
				</div>
				<div className="rating">
					<div className="star-container">{renderStars(ambitionBoxRating)}</div>
					Rated {ambitionBoxRating} on AmbitionBox
				</div>
			</div>
		</CardContainer>
	);
};
