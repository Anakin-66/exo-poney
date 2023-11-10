import Footer from "../components/Footer";
import Header from "../components/Header";


function Contact() {

    const onClick = (event) => {
        console.log(`Le champ ${event} a été cliqué !`);
      };

    return (
        <div className="backgroundContainer" style={{ backgroundImage: "url(images/poney3.jpg)" }}>
            <Header />
                <div className="formContainer">
                    <form>
                        <label>
                            Nom :
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Prénom :
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Votre message :
                        <textarea>
                            
                        </textarea>
                        </label>
                        <input onClick={() => onClick()} type="submit" value="Envoyer" />
                    </form>
                </div>
            <Footer />
        </div>
    )
}

export default Contact;