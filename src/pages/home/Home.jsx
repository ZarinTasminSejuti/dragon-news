import Header from "../shared/header/Header";
import LeftSide from "../shared/leftNav/LeftSide";
import Navbar from "../shared/navbar/Navbar";
import RightNav from "../shared/rightNav/RightNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSide></LeftSide>
                </div>

                <div className="md:col-span-2 border">
                    <h2>News coming soon</h2>
                </div>

                <div className="border">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;