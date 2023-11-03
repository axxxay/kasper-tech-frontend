import './style.css'
import {BsChevronRight} from 'react-icons/bs'

const Mentors = () => {
    return(
        <div className="mentors">
            <h1 className='mentor-heading sub'>Get direct</h1>
            <h1 className='mentor-heading'>knowledge and insight .</h1>
            <div className="mentors-container">
                <img src='/img-card.png' alt='mentor' className='mentor-img' />
                <img src='/img-card2.png' alt='mentor' className='mentor-img' />
                <img src='/img-card3.png' alt='mentor' className='mentor-img' />
            </div>
            <div className='mentors-details-con'>
                <div className='mentors-details'>
                    <div className='mentors-details-value'>
                        <h2 className='mentor-count' >300</h2>
                        <p className='mentor-text'>creators</p>
                    </div>
                    <div className='mentors-details-value'>
                        <h2 className='mentor-count'>14.4k</h2>
                        <p className='mentor-text'>users</p>
                    </div>
                    <div className='mentors-details-value'>
                        <h2 className='mentor-count'>9.11k</h2>
                        <p className='mentor-text'>session</p>
                    </div>
                </div>
                <div className='explore-con'>
                    <p className='explore-text'>Explore the marketplace</p>
                    <button className='explore-btn'>
                        <BsChevronRight className='arrow-icon' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Mentors