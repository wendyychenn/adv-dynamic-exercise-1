import dynamic from "next/dynamic"
import Header from "../../components/Header";

const DynamicMap = dynamic(() => import('../../components/Map'), { ssr: false });

// REASON using dynamic is because map will render in client side.

export default function Home() {
  return (
    <>
      <Header />
      <DynamicMap />
    </>
  )
}
