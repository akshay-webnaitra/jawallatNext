import Api from "@/services/Api";
import { getSession } from "next-auth/react";

const increaseShares = async (id, accessToken) => {
  const api = Api.create();
  api.setAuthData({ Authorization: `Bearer ${accessToken}` });
  const params = { videoId: id };
  const response = await api.increaseShare(params);
  return response;
};

export default async function handler(req, res) {
  const session = await getSession({ req });
  const result = await increaseShares(req?.body, session?.accessToken);
  res.status(200).json(result);
}
