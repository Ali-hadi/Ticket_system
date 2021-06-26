import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
// const banner = 'https://aodour.oss-ap-southeast-1.aliyuncs.com/banner/2021-06-23/7f0ef287-588a-454d-8e89-e7f677ae8331.jpg';
import image1 from "../../images/banner1.png";
const Banner = () => {
    return (
        <div class="banner">
            <Router>
                <div className="container-fluid">
                    <div className="flex">
                        <div>
                            <figure>
                                <img src={image1} alt="img here" />
                            </figure>
                        </div>
                        <div className="banner-content">
                            <h2>Turn your photos into stunning wall art</h2>
                            <p>Design beautiful walls filled with memories using your favorite photos</p>
                            <Link to="" className="btn-normal2">Let's Go</Link>
                        </div>
                    </div>
                </div>
            </Router>

        </div>
    )
}
export default Banner;