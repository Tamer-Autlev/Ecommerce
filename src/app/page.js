import Categories from "./component/categories/Categories";
import ContactBar from "./component/contactBar/ContactBar";
import Featured from "./component/featured/Featured";
import Slider from "./component/slider/Slider";

const Page = () => {
  return (
    <>
      <Slider />
      <main>
        <Featured />
        <Categories />
      </main>
    </>
  );
};
export default Page;
