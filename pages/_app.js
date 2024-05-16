import "@/styles/globals.css";
import Layout from "../components/layout/index.js"
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import type { AppProps } from "next/app";

// const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
	//<QueryClientProvider client={queryClient}>
	<Layout>
		{/* <head>
		<head/> */}
		<Component {...pageProps} />
	</Layout>
	//</QueryClientProvider>);
   );
}

// scss has auto class optimization
// next links for pages navigation