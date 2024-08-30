import React, { useEffect, useState } from 'react';
import { Form, Input, Button, notification, Space, Select, Flex } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import {
	Container,
	Heading,
	StyledForm,
	ColorInput,
	ButtonGroup,
	ColorFormItem,
	ProgressBarContainer,
	ProgressSegment,
} from './CompanyForm.styled';
import { hardcodedData } from '../CompanyDetail/utilities';
import { Company, CompanyPostData, initialCompanyPostData } from '../types';
import { CompanyMutationKeys } from '../../API/query-keys';
import { AppService } from '../../Services/ServiceFile';
import { RoutesPath } from '../../Routes/RoutesPath';
import { FaPen } from 'react-icons/fa';
import { FaUserPlus } from 'react-icons/fa6';
import { OnboardingType } from '../../Routes/Routes';
import { rating } from '../utility';
import TextArea from 'antd/es/input/TextArea';

interface CompanyFormProps {
	handleBack: () => void;
	setOnboardingType: (type: OnboardingType) => void;
	handleContinueClick: () => void;
}

enum FormStep {
	BasicInfo,
	AdditionalInfo,
	RatingReview,
	Location,
}

const { Option } = Select;

export const CompanyForm: React.FC<CompanyFormProps> = ({
	handleBack,
	setOnboardingType,
	handleContinueClick,
}) => {
	const [currentStep, setCurrentStep] = useState<FormStep>(FormStep.BasicInfo);
	// const [companyData, setCompanyData] = useState<Company | null>({
	//     id: 1,
	//     companyName: "ABC Corporation",
	//     companyEmail: "info@abccorp.com",
	//     pointOfContact: "John Doe",
	//     address: "123 Main Street",
	//     location: "New York, NY",
	//     websiteUrl: "https://www.abccorp.com",
	//     colorTheme: "#336699",
	//     approved: true,
	//     heroProduct: "Product XYZ",
	//     analystEmail: "analyst@abccorp.com"
	// });
	const [viewOnly, setViewOnly] = useState<boolean>(false);
	const [color, setColor] = useState<string>('#8000ff');
	const { companyId } = useParams<{ companyId: string }>();
	const [form] = Form.useForm();
	const appService = AppService();
	const navigate = useNavigate();

	const createCompany = useMutation({
		mutationKey: [CompanyMutationKeys.CREATE_COMPANY],
		mutationFn: async (payload: Company) => {
			return await appService.createCompany(payload);
		},
		onSuccess: () => {
			notification.success({
				message: companyId ? 'Company updated successfully' : 'Company created successfully',
			});
			form.resetFields();
			setViewOnly(true);
		},
		onError: (error: any) => {
			notification.error({
				message: companyId ? 'Failed to update company' : 'Failed to create company',
				description: error.message,
			});
		},
	});

	// useEffect(() => {
	// 	if (!companyId) {
	// 		return;
	// 	}
	// 	const data = hardcodedData.find((item) => item.companyId === companyId) as Company | undefined;
	// 	if (data) {
	// 		setCompanyData(data);
	// 		if (data.colorTheme) {
	// 			setColor(data.colorTheme);
	// 			form.setFieldsValue({ colorTheme: data.colorTheme });
	// 		}
	// 	}
	// }, [companyId, form]);

	const onFinish = async (values: CompanyPostData) => {
		const payload = values;
		console.log(payload);
	
		try {
			await createCompany.mutateAsync(payload);
			nextStep();
		} catch (error) {
			console.error('Error creating company:', error);
		}
	};
	

	const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newColor = e.target.value;
		setColor(newColor);
		form.setFieldsValue({ colorTheme: newColor });
	};

	const memberOnboarding = () => {
		console.log('1');

		setOnboardingType(OnboardingType.MEMBER);
		navigate(RoutesPath.ADMIN_HOME);
	};

	const nextStep = () => {
		const nextStep = currentStep + 1;
		setCurrentStep(nextStep);
	};

	const prevStep = () => {
		const prevStep = currentStep - 1;
		setCurrentStep(prevStep);
	};

	const renderForm = () => {
		switch (currentStep) {
			case FormStep.BasicInfo:
				return (
					<StyledForm
						form={form}
						layout="vertical"
						name="companyForm"
						initialValues={initialCompanyPostData}
						onFinish={onFinish}
					>
						<Form.Item
							label="Company Name"
							name="name"
							rules={[{ required: true, message: 'Please input the company name!' }]}
						>
							<Input disabled={viewOnly} />
						</Form.Item>
						<Form.Item
							label="Company Website"
							name="websiteUrl"
							rules={[{ required: true, message: 'Please input the company website!' }]}
						>
							<Input disabled={viewOnly} />
						</Form.Item>
						<Flex>Point of contact</Flex>
						<div style={{ padding: '10px' }}>
							<Form.Item
								label="Company Contact"
								name="pointOfContact"
								rules={[{ required: true, message: 'Please input the point of contact!' }]}
							>
								<Input disabled={viewOnly} />
							</Form.Item>
							<Form.Item
								label="Company Email ID"
								name="officialEmail"
								rules={[{ required: true, message: 'Please input the company email!' }]}
							>
								<Input type="email" disabled={viewOnly} />
							</Form.Item>
						</div>
						<ColorFormItem
							label={
								<>
									Select the primary colour for your company screen
									<Input
										disabled={viewOnly}
										onChange={(e) => {
											const newColor = e.target.value;
											setColor(newColor);
											form.setFieldsValue({ colorTheme: newColor });
										}}
										style={{ margin: '10px 0' }}
										value={color}
									/>
								</>
							}
							name="colorTheme"
							rules={[{ required: true, message: 'Please input the primary colour!' }]}
						>
							<Input type="color" disabled={viewOnly} onChange={handleColorChange} value={color} />
						</ColorFormItem>
						<Form.Item
							label="Upload High-Resolution Company Logo"
							// name="logo"
						>
							<Input type="file" suffix={<UploadOutlined />} disabled />
						</Form.Item>
						<ButtonGroup>
							<Button type="primary" onClick={handleBack}>
								Back
							</Button>
							<Button type="primary" htmlType='submit'>
								Continue
							</Button>
						</ButtonGroup>
					</StyledForm>
				);

			// Render other steps similarly using switch-case
			case FormStep.AdditionalInfo:
				return (
					<div>
						<Form.Item
							label="Address Line 1"
							name={['address', 'line1']}
							rules={[{ required: true, message: 'Address 1 is required' }]}
						>
							<Input placeholder="Enter here" />
						</Form.Item>
						<Form.Item label="Address Line 2" name={['address', 'line2']}>
							<Input placeholder="Enter here" />
						</Form.Item>
						<Form.Item
							label="City"
							name={['address', 'city']}
							rules={[{ required: true, message: 'City is required' }]}
						>
							<Input placeholder="Enter here" />
						</Form.Item>
						<Form.Item
							label="State"
							name={['address', 'state']}
							rules={[{ required: true, message: 'State is required' }]}
						>
							{/* <Select placeholder="Select one" allowClear>
								{states.map((item, index) => (
									<Option value={item} key={index}>
										{item}
									</Option>
								))}
							</Select> */}
							<Input placeholder="Enter here" />
						</Form.Item>
						<Form.Item
							label="Zip"
							name={['address', 'zip']}
							rules={[{ required: true, message: 'Zip code is required' }]}
						>
							<Input placeholder="Enter here" />
						</Form.Item>
						<Form.Item
							label="Country"
							name={['address', 'country']}
							rules={[{ required: true, message: 'Country is required' }]}
						>
							{/* <Select placeholder="Select one" allowClear>
								{countries.map((item, index) => (
									<Option value={item} key={index}>
										{item}
									</Option>
								))}
							</Select> */}
							<Input placeholder="Enter here" />
						</Form.Item>

						<ButtonGroup>
							<Button type="primary" onClick={prevStep}>
								Back
							</Button>
							<Button type="primary" onClick={nextStep}>
								Continue
							</Button>
						</ButtonGroup>
					</div>
				);

			case FormStep.RatingReview:
				return (
					<div>
						<Form.Item
							label="Platform"
							name="platform"
							rules={[{ required: true, message: 'State is required' }]}
						>
							<Select placeholder="Select one" allowClear>
								<Option value="Glassdoor">Glassdoor</Option>
								<Option value="Ambition Box">Ambition Box</Option>
							</Select>
							{/* <Input placeholder="Enter here" /> */}
						</Form.Item>
						<Form.Item
							label="Reviewer Name"
							name="profileName"
							rules={[{ required: true, message: 'Reviewer Name is required' }]}
						>
							<Input placeholder="Enter here" />
						</Form.Item>
						<Form.Item
							label="Comments"
							name="reviewText"
							rules={[{ required: true, message: 'Comments is required' }]}
						>
							<TextArea rows={4} placeholder="Enter here" />
						</Form.Item>
						<Form.Item label="Upload High-Resolution User Profile pic" name="logo">
							<Input type="file" suffix={<UploadOutlined />} />
						</Form.Item>
						<Form.Item
							label="Rating"
							name="rating"
							rules={[{ required: true, message: 'Reviewer Name is required' }]}
						>
							<Space.Compact style={{ width: '100%', justifyContent: 'space-between' }}>
								<Select placeholder="Select one" allowClear style={{ width: '48%' }}>
									{rating.map((item, index) => (
										<Option value={item} key={index}>
											{item}
										</Option>
									))}
								</Select>
								/
								<Select placeholder="Select one" allowClear style={{ width: '48%' }}>
									{rating.map((item, index) => (
										<Option value={item} key={index}>
											{item}
										</Option>
									))}
								</Select>
							</Space.Compact>
						</Form.Item>
						<ButtonGroup>
							<Button type="primary" onClick={prevStep}>
								Back
							</Button>
							<Button type="primary" onClick={nextStep}>
								Continue
							</Button>
						</ButtonGroup>
					</div>
				);

			case FormStep.Location:
				return (
					<div>
						Location Step
						<ButtonGroup>
							<Button type="primary" onClick={prevStep}>
								Back
							</Button>
							<Button
								type="primary"
								// htmlType="submit"
								onClick={handleContinueClick}
							>
								Continue
							</Button>
						</ButtonGroup>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<Container>
			<ProgressBarContainer>
				<ProgressSegment filled={true} />
				<ProgressSegment filled={false} />
				<ProgressSegment filled={false} />
				<ProgressSegment filled={false} />
			</ProgressBarContainer>
			<Heading>
				Enter your business information here for a personalized setup{' '}
				{/* {companyData ? (
					<>
						<FaPen onClick={() => setViewOnly(false)} className="icon-edit" title="Edit details" />
						<FaUserPlus onClick={memberOnboarding}className="icon-edit" title="Onboard User" />
					</>
				) : null} */}
			</Heading>
			{renderForm()}
		</Container>
	);
};
