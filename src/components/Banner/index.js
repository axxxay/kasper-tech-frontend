import './style.css'

const Banner = () => {
    return (
        <div className="banner">
            <h1 className='banner-text'>Learn from your favorite creators about <span className='banner-sub-text'>fantasy reports</span></h1>
            <div className='banner-outline'>
                <div className='banner-con'>
                    <h1 className='banner-con-text'>1:1</h1>
                    <p className='banner-calls'>video calls</p>
                </div>
            </div>
            <img src='/banner.png' alt='banner' className='banner-img'/>
        </div>
    )
}

export default Banner