import './style.css'
import NavBar from '../NavBar'
import Banner from '../Banner'
import Mentors from '../Mentors'
import CreatorSection from '../CreatorSection'
import Community from '../Community'
import Footer from '../Footer'

const HomePage = () => {
    return (
        <div className="home-page">
            <NavBar/>
            <Banner/>
            <Mentors/>
            <CreatorSection/>
            <Community/>
            <Footer/>
        </div>
    )
}

export default HomePage