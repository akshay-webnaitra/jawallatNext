import Api from "@/services/Api";
import { getSession } from "next-auth/react";

const fetchInfo = async (countrySlug, categorySlug, currentUserId = null) => {
  const api = Api.create();
  if (!!currentUserId) {
    api.setAuthData({ "X-User-ID": `${currentUserId}` });
  }
  const params = {
    country_slug: countrySlug,
    category_slug: categorySlug,
  };
  const response = await api.filterSources(params);
  return response;
};

export default async function handler(req, res) {
  const session = await getSession({ req });
  const result = await fetchInfo(
    req?.query?.country_slug,
    req?.query?.category_slug,
    session?.user?.id
  );
  res.status(result?.status).json(result?.data);
}
