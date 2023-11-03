import './style.css'

const CreatorSection = () => (
    <div className="creator-section">
        <div className="creator-section-content">
            <h2 className="creator-section-title">Why become a creator?</h2>
            <p className="creator-section-description">Engage with your supporter and subscriber to sell your skills, knowledge and passions</p>
            <button className="creator-section-button">Become a creator</button>
        </div>
        <div className="creator-features-con">
            <div className="creator-feature">
                <img src='/engaze-svg.svg' alt='feature' className='feature-img'/>
                <h3 className="feature-title">Engagement</h3>
                <p className="feature-description">Engage on a deeper level with the fans that matter most</p>
            </div>
            <div className="creator-feature">
                <img src='/autonomy-svg.svg' alt='feature' className='feature-img'/>
                <h3 className="feature-title">Autonomy</h3>
                <p className="feature-description">Full autonomy on when and who you talk to.</p>
            </div>
            <div className="creator-feature">
                <img src='/free-svg.svg' alt='feature' className='feature-img'/>
                <h3 className="feature-title">Free</h3>
                <p className="feature-description">No monthly fee or sign-up fee</p>
            </div>
            <div className="creator-feature">
                <img src='/earn-svg.png' alt='feature' className='feature-img'/>
                <h3 className="feature-title">Earn</h3>
                <p className="feature-description">Add a new source of income that you can control</p>
            </div>
        </div>
    </div>  
)
    

export default CreatorSection