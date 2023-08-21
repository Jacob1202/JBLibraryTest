import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import AppHeader from "~/components/AppHeader";
import { ThemeProvider } from "~/components/ThemeProvider";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Library | Jakub Biniek</title>
        <meta
          name="description"
          content="This is a documentation/library of my growth as a software developer"
        />
      </Head>
      <ThemeProvider attribute="class">
        <div className=" flex flex-col bg-gray-50">
          <AppHeader />
          <div className="container mx-auto min-h-screen">
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
