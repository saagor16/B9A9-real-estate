import Banner from "./Banner";
import Card from "./Card";

const Home = () => {
    return (
        <div>
            <div className="mt-10">
                <Banner></Banner>
            </div>
            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                <Card></Card>
                </div>
            </div>
        </div>
    );
};

export default Home;