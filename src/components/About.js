function About ({about,image}) {
    return(
    <aside>
        <p>{about}</p>
        <img src = {image} alt ="blog logo"/>
    </aside>
    )
}
export default About