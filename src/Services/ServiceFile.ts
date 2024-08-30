import { useApi } from '../API/useAPI';
import { Company, CompanyPostData } from '../Pages/types';

export const AppService = () => {
	const { baseApi } = useApi();

	const getCompanyId = async (
		id: number
	): Promise<Company[]> => {
		const { data } = await baseApi().get(`/company/${id}`);
		return data;
	};

	const getAllCompanies = async (): Promise<Company[]> => {
		const { data } = await baseApi().get(`company/getAllCompany`);
		return data;
	};

	const createCompany = async (payload: CompanyPostData) => {
		const { data } = await baseApi().post(`/company/onboardCompany`, payload);
		return data;
	};

	const updateCompanyData = async (id: number, payload: CompanyPostData) => {
		const { data } = await baseApi().post(`/company/${id}/metadata`, payload);
		return data;
	};

	return {
		getCompanyId,
		getAllCompanies,
		updateCompanyData,
		createCompany,
	};
};
