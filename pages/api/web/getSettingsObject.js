import Api from "@/services/Api";
import { getSession } from "next-auth/react";

const fetchInfo = async (
  page,
  currentUserId = null,
  countrySlug = null,
  categorySlug = null,
  accessToken
) => {
  const api = Api.create();
  api.setAuthData({ Authorization: `Bearer ${accessToken}` });
  if (!!currentUserId) {
    api.setAuthData({ "X-User-ID": `${currentUserId}` });
  }
  const params = {};
  if (countrySlug) {
    params.country_slug = countrySlug;
  }
  if (categorySlug) {
    params.category_slug = categorySlug;
  }
  params.page = page;
  const response = await api.getSettingsObject(params);
  return response?.data;
};

export default async function handler(req, res) {
  const session = await getSession({ req });
  const { country_slug, category_slug, page } = req.query;
  // Fetch the info by passing necessary parameters
  const result = await fetchInfo(
    page,
    session?.data?.user?.id,
    country_slug,
    category_slug,
    session?.accessToken
  );
  res.status(200).json(result);
}
