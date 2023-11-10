function Contact() {
    return (
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
            <input type="submit" value="Envoyer" />
            
        </form>
    )
}

export default Contact;