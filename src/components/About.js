function About ({ about, image }) {
    return(
    <aside>
        <img src={image} alt="blog logo"/>
        <p>{about}</p>
    </aside>
    )
}
export default About