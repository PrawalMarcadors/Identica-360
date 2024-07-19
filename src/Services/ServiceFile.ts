import { useApi } from "../API/useAPI";
import { Company } from "../pages/types";

export const AppService = () => {
	const { baseApi } = useApi();

	// const getCompanyId = async (
	// 	id: number
	// ): Promise<Company[]> => {
	// 	const { data } = await baseApi().get(`/company/${id}`);
	// 	return data;
	// };

	// const getAllCompanies = async (): Promise<Company[]> => {
	// 	const { data } = await baseApi().get(`/company`);
	// 	return data;
	// };

	const createCompany = async (
		payload : Company
	) => {
		const { data } = await baseApi().post(`/company/`, payload);
		return data;
	};

	return {
		// getCompanyId,
		// getAllCompanies,
		createCompany,
	};
};
