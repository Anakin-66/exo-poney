import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
    const infos = {
        author: "Poney Man",
        published: "01/01/2021",
        address: "12 rue du canasson, cheval-sur-mer",
      };

    return (
        <div className="backgroundContainer" style={{ backgroundImage: "url(images/poney3.jpg)" }}>
            <Header />
                <div className="aboutus">
                    <p> {infos.author} </p>
                    <p> {infos.published} </p>
                    <p> {infos.address} </p>
                </div>
            <Footer/>
        </div>
    )
}

export default About;