import Api from "@/services/Api";
import { getSession } from "next-auth/react";

const fetchLiveStream = async (country, page, currentUserId = null) => {
  const api = Api.create();
  if (!!currentUserId) {
    api.setAuthData({ "X-User-ID": `${currentUserId}` });
  }
  const response = await api.getLiveStream({
    country: country,
    page: page,
  });
  return response?.data;
};

export default async function handler(req, res) {
  const session = await getSession({ req });
  const result = await fetchLiveStream(
    req?.query?.country,
    req?.query?.page,
    session?.user?.id
  );
  res.status(200).json(result);
}
