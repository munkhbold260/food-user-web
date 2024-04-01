import Layout from "@/components/Layout";
<<<<<<< HEAD
import { NumberProvider } from "@/context/NumChangeContext";
=======
// import { CustomContextProvider } from "@/context/Context";
>>>>>>> a795716e1784405d224b3edd9679db420f53f1f3
import "@/styles/globals.css";
import { CustomThemeProvider } from "@/utils/CustomTheme";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
<<<<<<< HEAD
    <NumberProvider>
      <CustomThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CustomThemeProvider>
    </NumberProvider>
=======
    // <CustomContextProvider>
    <CustomThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CustomThemeProvider>
    // </CustomContextProvider>
>>>>>>> a795716e1784405d224b3edd9679db420f53f1f3
  );
};

export default App;
