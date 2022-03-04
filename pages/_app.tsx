import "../styles/globals.css";
import Layout from "@/components/layout/layout";
import type { AppProps } from "next/app";
if (process.env.REACT_APP_USE_MSW_MOCK_API === 'true') {
import("../test").then(({ setupMocks }) => {
  
  setupMocks();
});
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
