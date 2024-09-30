import Api from "@/services/Api";

const fetchInfo = async (params) => {
  const api = Api.create();
  const response = await api.signup(params);
  return response?.data;
};

export default async function handler(req, res) {
  const result = await fetchInfo(req?.body);
  res.status(200).json(result);
}
