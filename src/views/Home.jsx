import React from "react";
import Header from "../containers/Header";
import Companies from "../containers/Companies";
import Mission from "../containers/Mission";
import PeopleContainer from "../containers/PeoplesContainer";
import GetStarted from "../containers/GetStarted";
import Footer from "../containers/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Companies />
            <Mission />
            <PeopleContainer />
            <GetStarted />
            <Footer />
        </>
    )
}

export default Home;