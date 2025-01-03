import Api from "@/services/Api";
import { getSession } from "next-auth/react";

const fetchAffiliate = async (category, page, currentUserId = null) => {
  const api = Api.create();
  if (!!currentUserId) {
    api.setAuthData({ "X-User-ID": `${currentUserId}` });
  }
  const response = await api.getAffiliate({
    category: category,
    page: page,
  });
  return response?.data?.return;
};

export default async function handler(req, res) {
  const session = await getSession({ req });
  const result = await fetchAffiliate(
    req?.query?.category,
    req?.query?.page,
    session?.user?.id
  );
  res.status(200).json(result);
}
