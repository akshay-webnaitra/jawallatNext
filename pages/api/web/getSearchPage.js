import Api from "@/services/Api";
import { getSession } from "next-auth/react";

const fetchInfo = async (
  keyword,
  category,
  source,
  type,
  page,
  currentUserId = null
) => {
  const api = Api.create();
  if (!!currentUserId) {
    api.setAuthData({ "X-User-ID": `${currentUserId}` });
  }
  const response = await api.getSearchPage({
    keyword: keyword,
    category: category,
    source: source,
    type: type,
    page: page,
  });
  return response?.data;
};

export default async function handler(req, res) {
  const session = await getSession({ req });
  const result = await fetchInfo(
    req?.query?.keyword,
    req?.query?.category,
    req?.query?.source,
    req?.query?.type,
    req?.query?.page,
    session?.user?.id
  );
  res.status(200).json(result);
}
