import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
            // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
            // @ts-ignore
            scope: "read:user",
          }),
          GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
          })
    ],

    secret: process.env.SECRET,

    callbacks: {
        session({ session, token, user }) {
          return session // The return type will match the one returned in `useSession()`
        },
      },
})