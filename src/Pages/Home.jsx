import './Styles.css'

function Home() {
    // Body
    return <div className='background min-vh-100 pb-5 m-0'>
        <div className='row g-0 p-5 align-items-center'>
            <div className='col col-lg-4 p-4'>
                <img src='../public/Headshot.png' className='img-fluid'></img>
            </div>

            <div className='col col-lg-7'>
                <h2 className="p-5">Hi! My name is Rosie 👋🏻</h2>
                {/* image */}
                <h5 className="py-3 p-5">I am an energetic and driven Product Designer and Front-End Web Developer.
                    Outside of Design and Web Development, I'm interested in feminism and sustainability, and enjoy spending my free time cooking, sewing and crafting.
                    This website is a personal portfolio, created to practice my React skills.
                    <br />
                    <br />I'm currently looking for opportunities in Web Development and UI Design. Please view my CV <a href='https://rosiegalezia.co.uk/Assets/CV-Jan-2024.pdf' target="_blank" className=''>here</a>.</h5>
                <br />

            </div>
        </div>
    </div>
}

export default Home;