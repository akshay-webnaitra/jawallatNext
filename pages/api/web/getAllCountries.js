import Api from "@/services/Api";
import { getSession } from "next-auth/react";

const fetchCountries = async (page, currentUserId = null) => {
  const api = Api.create();
  if (!!currentUserId) {
    api.setAuthData({ "X-User-ID": `${currentUserId}` });
  }
  const response = await api.getAllCountries({
    page: page,
  });
  return response?.data;
};

export default async function handler(req, res) {
  const session = await getSession({ req });
  const result = await fetchCountries(req?.query?.page, session?.user?.id);
  res.status(200).json(result);
}
