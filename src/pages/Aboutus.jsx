function About() {
    const infos = {
        author: "Poney Man",
        published: "01/01/2021",
        address: "12 rue du canasson, cheval-sur-mer",
      };

    return (
        <>
            <p> {infos.author} </p>
            <p> {infos.published} </p>
            <p> {infos.address} </p>
        </>
    )
}

export default About;