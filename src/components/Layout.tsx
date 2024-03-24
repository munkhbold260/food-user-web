import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main> {children}</main>
      <Footer />
    </>
  );
};
export default Layout;
