import Image from "next/image";
import Footer from "./components/ClientComponents/Footer/Footer";
import Header from "./components/ClientComponents/Header/Header";


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center mt-20 mx-10">
        <Image
          src={"/images/banner_home.png"}
          alt="banner home"
          width={1316}
          height={262}
          className="object-cover"
        />
      </main>
      <Footer />
    </>
  );
}
