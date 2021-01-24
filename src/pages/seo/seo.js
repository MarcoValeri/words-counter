import React, { useState } from 'react';

// Import components
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

// Import style file
import './seo.scss';

const Seo = () => {

    const [ title, setTitle ] = useState("");
    const [ url, setUrl ] = useState("");
    const [ description, setDescription ] = useState("");

    // Events
    const handlerTitleChange = e => {
        setTitle(e.target.value);
    }

    const handlerUrlChange = e => {
        setUrl(e.target.value);
    }

    const handlerDescriptionChange = e => {
        setDescription(e.target.value);
    }



    return (
        <section id="seo-container">
            <section className="seo-header">
                <Navbar />
            </section>
            <section className="seo-area">
                <form>
                    <label>
                        Title
                        <input onChange={handlerTitleChange} type="text" value={title} />
                    </label>
                    
                    <label>
                        URL
                        <input onChange={handlerUrlChange} type="text" value={url} />
                    </label>
                    
                    <label>
                        Description
                        <input onChange={handlerDescriptionChange} type="text" value={description} />
                    </label>
                </form>
            </section>
            <section className="seo-footer">
                <Footer />
            </section>
        </section>
    )
};

export default Seo;