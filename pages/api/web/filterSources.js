import Api from "@/services/Api";
import { getSession } from "next-auth/react";

const fetchInfo = async (countrySlug, categorySlug, currentUserId = null) => {
  const api = Api.create();
  if (!!currentUserId) {
    api.setAuthData({ "X-User-ID": `${currentUserId}` });
  }
  const response = await api.filterSources({
    country: countrySlug,
    category: categorySlug,
  });

  return response;
};

export default async function handler(req, res) {
  const session = await getSession({ req });
  const result = await fetchInfo(
    req?.query?.countrySlug,
    req?.query?.categorySlug,
    session?.user?.id
  );
  res.status(result?.status).json(result?.data);
}
