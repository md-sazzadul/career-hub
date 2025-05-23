import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategoryList />
      <FeaturedJobs />
      <h2>This is Home</h2>
    </div>
  );
};

export default Home;
