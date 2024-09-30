import Api from "@/services/Api";
import { getSession } from "next-auth/react";

const fetchInfo = async (tag, page, currentUserId = null) => {
  const api = Api.create();
  if (!!currentUserId) {
    api.setAuthData({ "X-User-ID": `${currentUserId}` });
  }
  const response = await api.getTagPage({ tag: tag, page: page });
  console.log("=================response===========");
  console.log(response);
  return response?.data;
};

export default async function handler(req, res) {
  const session = await getSession({ req });
  const result = await fetchInfo(
    req?.query?.tag,
    req?.query?.page,
    session?.user?.id
  );
  res.status(200).json(result);
}
