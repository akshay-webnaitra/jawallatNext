import Api from "@/services/Api";
import { getSession } from "next-auth/react";

const fetchInfo = async (params, accessToken) => {
  const api = Api.create();
  api.setAuthData({ Authorization: `Bearer ${accessToken}` });
  const response = await api.addCategoryToUser(params);
  return response?.data;
};

export default async function handler(req, res) {
  const session = await getSession({ req });
  const result = await fetchInfo(req?.body, session?.accessToken);
  res.status(200).json(result);
}
