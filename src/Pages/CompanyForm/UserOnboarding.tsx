import React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import {
	Container,
	Heading,
	StyledForm,
	ButtonGroup,
	ProgressBarContainer,
	ProgressSegment,
} from './CompanyForm.styled';

const { Option } = Select;

interface UserOnboardingFormProps {
	handleBack: () => void;
}

export const UserOnboardingForm: React.FC<UserOnboardingFormProps> = ({ handleBack }) => {
	const [form] = Form.useForm();

	const onFinish = (values: any) => {
		console.log(values);
	};

	return (
		<Container>
			<ProgressBarContainer>
				<ProgressSegment filled={true} />
				<ProgressSegment filled={false} />
				<ProgressSegment filled={false} />
				<ProgressSegment filled={false} />
			</ProgressBarContainer>
			<Heading>Onboard your newest member at Zeta!</Heading>
			<StyledForm form={form} layout="vertical" name="userOnboardingForm" onFinish={onFinish}>
				<Form.Item
					label="Employee Name"
					name="employeeName"
					//   rules={[{ required: true, message: 'Please input the employee name!' }]}
				>
					<Input placeholder="Add Employee Name" />
				</Form.Item>
				<Form.Item
					label="Employee ID"
					name="employeeId"
					//   rules={[{ required: true, message: 'Please input the employee ID!' }]}
				>
					<Input placeholder="Add Employee ID" />
				</Form.Item>
				<Form.Item
					label="Employee Designation"
					name="employeeDesignation"
					//   rules={[{ required: true, message: 'Please select the designation!' }]}
				>
					<Select placeholder="Select Designation">
						<Option value="developer">Developer</Option>
						<Option value="designer">Designer</Option>
						<Option value="manager">Manager</Option>
						{/* Add other options as needed */}
					</Select>
				</Form.Item>
				<Form.Item
					label="Employee Gender"
					name="employeeGender"
					//   rules={[{ required: true, message: 'Please select the gender!' }]}
				>
					<Select placeholder="Select Gender">
						<Option value="male">Male</Option>
						<Option value="female">Female</Option>
						<Option value="other">Other</Option>
						{/* Add other options as needed */}
					</Select>
				</Form.Item>
				<Form.Item
					label="Employee birthday"
					name="employeeBirthday"
					//   rules={[{ required: true, message: 'Please input the birthday!' }]}
				>
					<DatePicker format="DD/MM/YYYY" placeholder="dd / mm / yyyy" />
				</Form.Item>
				<Form.Item
					label="Employee Email ID"
					name="employeeEmail"
					//   rules={[{ required: true, message: 'Please input a valid work email ID!', type: 'email' }]}
				>
					<Input placeholder="Enter a valid work email ID" />
				</Form.Item>
				<Form.Item
					label="Employee Contact Number"
					name="employeeContact"
					//   rules={[{ required: true, message: 'Please input a 10 digit number!', len: 10 }]}
				>
					<Input placeholder="Enter a 10 digit number" />
				</Form.Item>
				<ButtonGroup>
					<Button type="primary" onClick={handleBack}>
						Back
					</Button>
					<Button type="primary" htmlType="submit">
						Continue
					</Button>
				</ButtonGroup>
			</StyledForm>
		</Container>
	);
};
