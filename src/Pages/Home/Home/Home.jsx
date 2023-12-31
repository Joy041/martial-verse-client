import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Client from "../Client/Client";
import Instructor from "../Instructor/Instructor";
import PopularClass from "../PopularClass/PopularClass";


const Home = () => {
    return (
        <div className="bg-slate-400">
            <Helmet>
                <title>Martialverse || Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <Instructor></Instructor>
            <Client></Client>
        </div>
    );
};

export default Home;