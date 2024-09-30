import Api from "@/services/Api";

const fetchInfo = async (email) => {
  const api = Api.create();
  const response = await api.subscribeToNewsletter({ email: email });
  return response;
};

export default async function handler(req, res) {
  const result = await fetchInfo(req?.body?.email);

  res.status(result?.status).json(result?.data);
}
