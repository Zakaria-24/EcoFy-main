import Banner from "../components/Banner";
import MyQueryCard from "../components/MyQueryCard";
const MyQueries = () => {
  return (
    <div>
      {/* Query Banner */}
      <Banner />
      {/* My Queries */}
      <div className="container px-6 py-10 mx-auto">
        <MyQueryCard />
      </div>
    </div>
  );
};

export default MyQueries;
