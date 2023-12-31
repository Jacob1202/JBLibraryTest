import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import AppHeader from "~/components/AppHeader";
import { ThemeProvider } from "~/components/ThemeProvider";
import AppFooter from "~/components/AppFooter";

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
        <div className="2s  flex min-h-screen flex-col bg-white transition-all ease-in-out dark:bg-zinc-900">
          <div className="container mx-auto">
            <AppHeader />
            <Component {...pageProps} />
            <AppFooter />
          </div>
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
