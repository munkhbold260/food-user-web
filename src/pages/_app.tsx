import Layout from "@/components/Layout";
import { NumberProvider } from "@/context/NumChangeContext";
import "@/styles/globals.css";
import { CustomThemeProvider } from "@/utils/CustomTheme";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <NumberProvider>
      <CustomThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CustomThemeProvider>
    </NumberProvider>
  );
};

export default App;
