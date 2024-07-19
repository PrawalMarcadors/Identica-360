import React, { Dispatch, SetStateAction } from 'react';
import { Button, Table } from 'antd';
import styled from 'styled-components';
// import { AppService } from '../../Services/ServiceFile';
import { Company } from '../types';

// Hardcoded initial value for companyList if getAllCompanies returns null
const initialCompanyList: Company[] = [
	{
		id: 1,
		companyName: 'Sample Company 1',
		companyEmail: 'sample1@example.com',
		pointOfContact: 'John Doe',
		address: '123 Sample St, Sample City',
		location: 'Sample Location',
		websiteUrl: 'https://www.samplecompany1.com',
		colorTheme: '#ffffff',
		approved: true,
	},
	{
		id: 2,
		companyName: 'Sample Company 2',
		companyEmail: 'sample2@example.com',
		pointOfContact: 'Jane Smith',
		address: '456 Example Ave, Example Town',
		location: 'Example Location',
		websiteUrl: 'https://www.samplecompany2.com',
		colorTheme: '#000000',
		approved: false,
	},
];

export const CompanyTableWrapper = styled('div')`
	padding: 20px;
`;

const columns = [
	{
		title: 'Company Id',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Company Name',
		dataIndex: 'companyName',
		key: 'companyName',
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
	},
];

interface CompanyTableProps {
	setIsModalVisible?: Dispatch<SetStateAction<boolean>>;
}

export const CompanyTable: React.FC<CompanyTableProps> = ({ setIsModalVisible }) => {
	// const appService = AppService();

	// const { isLoading, data: companyList = initialCompanyList, refetch } = useQuery({
	//   queryKey: [CompanyQueryKeys.GET_ALL_COMPANIES],
	//   queryFn: async () => {
	//     try {
	//       const data = await appService.getAllCompanies();
	//       return data ?? initialCompanyList; // Use initialCompanyList if data is null
	//     } catch (error: any) {
	//       console.error('Error fetching company list:', error);
	//       notification.error({
	//         message: 'Failed to fetch company list',
	//         description: error.message || 'An unexpected error occurred.',
	//       });
	//       return initialCompanyList; // Return initialCompanyList on error
	//     }
	//   },
	// });

	const handleOnClick = () => {
		if (setIsModalVisible) {
			setIsModalVisible(false);
		}
	};

	return (
		<CompanyTableWrapper>
			<Table columns={columns} dataSource={initialCompanyList} rowKey="id" />
			<Button onClick={handleOnClick}>Close</Button>
		</CompanyTableWrapper>
	);
};
