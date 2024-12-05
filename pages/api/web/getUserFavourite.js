import Api from "@/services/Api";
import { getSession } from "next-auth/react";

const fetchUserFavorites = async (favUserId) => {
  const api = Api.create();
  if (!!favUserId) {
    api.setAuthData({ "X-User-ID": `${favUserId}` });
  }
  const response = await api.getUserFavorites({
    favUserId: favUserId,
  });
  return response?.data;
};

export default async function handler(req, res) {
  const session = await getSession({ req });
  const favUserId = session?.user?.id || 72;
  const result = await fetchUserFavorites(favUserId);
  res.status(200).json(result);
}
