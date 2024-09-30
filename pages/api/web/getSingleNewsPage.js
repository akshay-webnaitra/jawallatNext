import Api from "@/services/Api";
import { getSession } from "next-auth/react";

const fetchInfo = async (id, currentUserId = null) => {
  const api = Api.create();
  if (!!currentUserId) {
    api.setAuthData({ "X-User-ID": `${currentUserId}` });
  }
  const response = await api.getSingleNewsPage({ id: id });
  return response;
};

export default async function handler(req, res) {
  const session = await getSession({ req });
  const result = await fetchInfo(req?.query?.id, session?.user?.id);

  res.status(result?.status).json(result?.data);
}
