import Container from "../components/Container";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="bg-white w-screen flex flex-col gap-6 items-center">
      <Header />
      <Container />
    </div>
  );
};
export default Home;
