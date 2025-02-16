import React from 'react';
import Layout from '@theme/Layout';
import Intro from '../components/HomePage/Intro';
import Features from "../components/HomePage/Features"
import OurTeam from "@site/src/components/HomePage/OurTeam";
import ProjectDescription from "@site/src/components/HomePage/ProjectDescription";

const Home = () => {
    return (
        <Layout title="Home" description="Detect AI-driven accounts easily.">
            <Intro />
            <Features />
            <ProjectDescription />
            <OurTeam />
        </Layout>
    );
};

export default Home;
