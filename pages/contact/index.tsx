// import Image from 'next/image'

export default function Contact() {
    return (
        <>
            <div className="pure-g">
                <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4">
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-1 pure-u-lg-1-1">
                            <div className="sq-u-3 sq-u-sm-1">
                                <div className="sq_box bk_gray_1">
                                    <div className="middle_inner c_Office">
                                        <h3>Creative Area</h3>
                                        <p><span className="inbk">디지털 전략<br/>
								사용자 경험<br/>
								웹 디자인<br/>
								웹 개발<br/>
								컨텐츠 제작<br/>
								브랜드 전략<br/>
								매채 광고전략<br/>
								에듀토리얼 디자인<br/>
								그래픽 아트
								</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-1 pure-u-lg-1-1">
                            <div className="sq-u-3 sq-u-sm-1">
                                <div className="sq_box bk_red">
                                    <div className="middle_inner c_Contact">
                                        <h3>Contact</h3>
                                        <p>t. +82-10-9150-8818<br/>
                                            www.mmotif.com<br/>
                                            moon@mmotif.com</p>
                                        <a href="mailto:moon@mmotif.com" className="link">Mail to us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pure-u-1 pure-u-md-2-3 pure-u-lg-3-4">
                    <div className="sq-u-1 sq-u-md-1 sq-u-lg-3">
                        <div className="sq_box">
                            <img className="img_map_s c_img" src="/mmotif/images/map_s.jpg" alt=""/>
                            <img className="img_map c_img" src="/mmotif/images/map.jpg" alt="" /></div>
                    </div>
                </div>
            </div>
        </>

    )

}