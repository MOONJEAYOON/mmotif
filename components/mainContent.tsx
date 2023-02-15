import PortfolioContext from '../context/context';
import React, { useContext } from "react";
import Link from "next/link";

export default function mainContent(){
    const { prefix } = useContext(PortfolioContext);
    return(
        <>
            <div id="main-content">
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                        <div className="sq-u-5 sq-u-sm-2 sq-u-md-1 sq-u-lg-1">
                            <div className="sq_box img-u-1 img-u-sm-1 img-u-md-1">
                                <img src={`${prefix}/images/projet/MEDIA/Drax/project_AD_Drax_01.jpg`} alt="" className="c_img" />
                            </div>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                        <div className="sq-u-3 sq-u-sm-4 sq-u-md-1 sq-u-lg-1">
                            <div className="sq_box bk_red">
                                <div className="middle_inner under_1">
                                    <h3>Graphic Design</h3>
                                    <p>DRAX Brochure<br/>
                                        CONCEPT / PRODUCT<br/>
                                        Book</p>
                                    <Link href="/work/1"className="link">View project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                        <div className="sq-u-5 sq-u-sm-5 sq-u-md-1 sq-u-lg-1">
                            <div className="sq_box img-u-3 img-u-sm-3 img-u-md-3 fl-u-md-2 fl-u-lg-0">
                                <img src={`${prefix}/images/projet/AD/EX/project_AD_EX_01.jpg`} alt="" className="c_img"/>
                            </div>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                        <div className="sq-u-3 sq-u-sm-4 sq-u-md-1 sq-u-lg-1">
                            <div className="sq_box bk_red fl-u-md-1 fl-u-lg-0">
                                <div className="middle_inner under_1">
                                    <h3>ADVERTISING</h3>
                                    <p>Korea Expressway Corporation - Advertising</p>
                                    <Link href="/work/2"className="link">View project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-lg-1-2">
                        <div className="sq-u-5 sq-u-sm-2 sq-u-md-6 sq-u-lg-6">
                            <div className="sq_box img-u-1">
                                <img src={`${prefix}/images/projet/MEDIA/Lamborghini/under_3.jpg`} className="c_img" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-lg-1-2">
                        <div className="sq-u-3 sq-u-sm-4 sq-u-md-4 sq-u-lg-6">
                            <div className="sq_box bk_gray_2">
                                <div className="middle_inner under_2">
                                    <h3>Howongwan Wayfinding system Design</h3>
                                    <p className="txt_1">EXHIBITION</p>
                                    <p className="txt_2">Wayfinding system</p>
                                    <Link href="/work"className="link">View project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 pure-u-none pure-u-sm-none">
                        <div className="sq-u-md-1 bk_gray_3">
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                        <div className="sq-u-3 sq-u-sm-4 sq-u-md-1 sq-u-lg-1">
                            <div className="sq_box bk_red">
                                <div className="middle_inner under_1">
                                    <h3>Editorial Design</h3>
                                    <p>The War Memorial of Korea Brochure</p>
                                    <Link href="/work"className="link">View project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-lg-1-2">
                        <div className="sq-u-1 sq-u-sm-2 sq-u-md-6 sq-u-lg-4 sq_box_hidden">
                            <div className="sq_box img-u-2">
                                <img src={`${prefix}/images/under_4.jpg`} alt="" className="c_img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}