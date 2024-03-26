// import DeliveryArea from "@/components/DeliveryArea";
import dynamic from "next/dynamic";
const DeliveryArea = dynamic(() => import("@/components/DeliveryArea"), {
  ssr: false,
});

const Home = () => {
  return <DeliveryArea />;
};

export default Home;
