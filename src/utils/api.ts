import jobApi from "./jobApiConfig";

export const getJobPostings = async (
  limit: number | null = 1000,
  offset: number | null = 0
) => {
  const requestBody = {
    limit: limit,
    offset: offset,
  };
  const response = await jobApi.post(`/getSampleJdJSON`, requestBody);
  return response?.data ?? {};
};
