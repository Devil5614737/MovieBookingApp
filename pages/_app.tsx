import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { MovieContextProvider } from '../context/MovieContext';

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={pageProps.session}>
     <MovieContextProvider>
     <Component {...pageProps} />
     </MovieContextProvider>
    </SessionProvider>
  );
}
export default MyApp
