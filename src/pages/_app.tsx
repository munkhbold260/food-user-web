import Layout from "@/components/Layout";
// import { CustomContextProvider } from "@/context/Context";
import "@/styles/globals.css";
import { CustomThemeProvider } from "@/utils/CustomTheme";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    // <CustomContextProvider>
    <CustomThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CustomThemeProvider>
    // </CustomContextProvider>
  );
};

export default App;
