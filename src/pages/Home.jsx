import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

function Home() {

    const poneys = [
        {
          id: 1,
          name: "Poney 1",
          color: "red",
          age: 2,
          isMagic: true,
        },
        {
          id: 2,
          name: "Poney 2",
          color: "blue",
          age: 3,
          isMagic: false,
        }, 
        {
          id: 3,
          name: "Poney 3",
          color: "green",
          age: 4,
          isMagic: true,
        },
        {
          id: 4,
          name: "Poney 4",
          color: "yellow",
          age: 5,
          isMagic: false,
        },
        {
          id: 5,
          name: "Poney 5",
          color: "purple",
          age: 6,
          isMagic: true,
        },
        {
          id: 6,
          name: "Poney 6",
          color: "pink",
          age: 7,
          isMagic: false,
        },
        {
          id: 7,
          name: "Poney 7",
          color: "black",
          age: 8,
          isMagic: true,
        },
        {
          id: 8,
          name: "Poney 8",
          color: "white",
          age: 9,
          isMagic: false,
        },
        {
          id: 9,
          name: "Poney 9",
          color: "brown",
          age: 10,
          isMagic: true,
        },
        {
          id: 10,
          name: "Poney 10",
          color: "grey",
          age: 11,
          isMagic: false,
        },
      ];

        const magicPoney = poneys.filter((poney) => {
        return poney.isMagic === true
        })

        const filteredPoney = magicPoney.slice(-5)
      

    return (
        // <div className="backgroundContainer" style={{ backgroundImage: "url(images/poney2.jpg)" }}>
        <>
            <Header />
            <Nav />
                <main>
                    <h2>Nos poney magiques</h2>
                    {filteredPoney.map((poney) => {
                        return (
                            <article>
                                <h2> {poney.name} </h2>
                                <p> {poney.color} </p>
                                <p> {poney.age} </p>
                            </article>
                        )
                    })}
                </main>
            <Footer />
        </>
        // </div>
    )
}

export default Home;
