import React from 'react';

// Import modules
import Navbar from '../../components/navbar/navbar';
import WordsCounter from '../../components/wordscounter/wordscounter';
import Footer from '../../components/footer/footer';

// Import style file
import './home.scss';

const Home = () => {
    return (
        <div id="home-container">
            <section className="home-header">
                <Navbar />
            </section>
            <section className="home-wordscounter">
                <WordsCounter />
            </section>
            <section className="home-footer">
                <Footer />
            </section>
        </div>
    )
}

export default Home;