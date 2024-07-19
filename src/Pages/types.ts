export type Company = {
	id?: number;
	companyName: string;
	companyEmail: string;
	pointOfContact: string;
	address: string;
	location: string;
	// logo?: string; // Uncomment if needed
	websiteUrl: string;
	colorTheme: string;
	// usp?: string; // Uncomment if needed
	approved: boolean;
	heroProduct: string;
	analystEmail: string;
};

export interface ReviewData {
	reviews: Review[];
	glassdoorRating: number;
	ambitionBoxRating: number;
}

export interface Review {
	profileImage: string;
	profileName: string;
	date: string;
	stars: number;
	reviewText: string;
}

export const reviewsData: ReviewData = {
	reviews: [
		{
			profileImage: '/dist/men_02.jpg',
			profileName: 'Jahnvi Mehra',
			date: 'A day ago',
			stars: 4,
			reviewText:
				'Zeta is revolutionizing the banking tech industry! The mobile experiences they offer are seamless!',
		},
		{
			profileImage: '/dist/men_01.jpg',
			profileName: 'Rajesh Kumar',
			date: '3 days ago',
			stars: 5,
			reviewText:
				'Great company to work with! Amazing workplace culture and opportunities for growth.',
		},
		{
			profileImage: '/dist/women_01.jpg',
			profileName: 'Priya Singh',
			date: '5 days ago',
			stars: 3,
			reviewText: 'I am impressed with Zeta’s commitment to innovation and customer satisfaction.',
		},
	],
	glassdoorRating: 4,
	ambitionBoxRating: 4.5,
};
