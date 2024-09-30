import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Api from "@/services/Api";

const api = Api.create();
const providers = [
  CredentialsProvider({
    name: "Credentials",
    authorize: async (credentials) => {
      const response = await api.login({
        email: credentials.email,
        password: credentials.password,
      });
      const user = response?.data?.return?.data;

      if (!!user) {
        return user;
      } else {
        return null;
      }
    },
  }),
];

const callbacks = {
  async jwt({ token, account, user }) {
    // Persist the OAuth access_token to the token right after signin
    if (user) {
      token.user = user.advertiser;
      token.accessToken = user.token;
    }
    return token;
  },
  async session({ session, token }) {
    // Send properties to the client, like an access_token from a provider.
    session.accessToken = token.accessToken;
    session.user = token.user;
    return session;
  },
};

const options = {
  providers,
  callbacks,
};

export default (req, res) => NextAuth(req, res, options);
