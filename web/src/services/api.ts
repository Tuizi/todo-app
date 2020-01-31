import axios, { Method } from 'axios';

const API_PATH = '/api';

export const requestApi = async <T>(
  url: string,
  data: any,
  method: Method = 'get'
) => {
  const response = await axios({
    method,
    url: `${API_PATH}/${url}`,
    data: {
      data
    }
  });

  const axiosData = response.data;
  const apiData = axiosData.data;

  return apiData as T;
};
