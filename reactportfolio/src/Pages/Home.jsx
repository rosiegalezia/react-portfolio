import '../Pages/Styles.css'

function Home() {
    // Body
    return <div>
        <h2 className="p-5">Hi! My name is Rosie</h2>
        {/* image */}
        <h5 className="px-5 py-3">I am an energetic and driven Product Designer and Front-End Web Developer.
            Outside of Design and Web Development, I'm interested in feminism and sustainability, and enjoy spending my free time cooking, sewing and crafting.

            <br />
            <br />I'm currently looking for opportunities in Web Development and UI Design.</h5>
        <br />
        <h5 className="p-5">Please view my CV <a href='https://rosiegalezia.co.uk/Assets/CV-Jan-2024.pdf' target="_blank" className=''>here</a></h5>

    </div>
}

export default Home;