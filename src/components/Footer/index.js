import './style.css'

const Footer = () => (
    <div className="footer">
        <div className='footer-social-con'>
            <img src='/logo.svg' alt='logo' className='footer-logo'/>
            <div className='footer-social'>
                <a href='https://www.facebook.com/' target='__blank' className='social-link'>
                    <img src='/facebook.svg' alt='facebook' className='footer-social-icon'/>
                </a>
                <a href='https://www.twitter.com/' target='__blank' className='social-link'>
                    <img src='/twitter.svg' alt='twitter' className='footer-social-icon'/>
                </a>
                <a href='https://www.instagram.com/' target='__blank' className='social-link'>
                    <img src='/instagram.svg' alt='instagram' className='footer-social-icon'/>
                </a>
            </div>
        </div>
        <div className='footer-sections'>
            <h3 className='footer-section-title'>About</h3>
            <p className='footer-section-description'>How it works</p>
            <p className='footer-section-description'>Company</p>
            <p className='footer-section-description'>Help and support</p>
        </div>
        <div className='footer-sections'>
            <h3 className='footer-section-title'>For creators</h3>
            <p className='footer-section-description'>How can I get paid</p>
            <p className='footer-section-description'>Become a creator</p>
        </div>
        <div className='footer-sections'>
            <h3 className='footer-section-title'>Learn</h3>
            <p className='footer-section-description'>Blog</p>
            <p className='footer-section-description'>Cookies policy</p>
            <p className='footer-section-description'>Privacy policy</p>
        </div>
        <div className='footer-sections'>
            <h3 className='footer-section-title'>Support</h3>
            <p className='footer-section-description'>Service status</p>
            <p className='footer-section-description'>Report abuse</p>
            <p className='footer-section-description'>Dispute a payment</p>
        </div>
    </div>
)

export default Footer