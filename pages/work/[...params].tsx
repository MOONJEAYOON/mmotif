import type { NextPage } from 'next'
import { PrismaClient } from '@prisma/client'
import { GetServerSideProps } from 'next'
import PortfolioContext from '../../context/context';
import React, { useContext } from "react";

type MovieDetailParams = [string, string] | [];

const prisma = new PrismaClient();
interface Projects {
    projects: {
        id: string
        category: string
        image_list_1: string
        image_list_2: string
        txt_list_1: string
        txt_list_2: string
        image_detail_1: string
        image_detail_2: string
        image_detail_2_bg: string
        image_detail_3: string
        image_detail_4: string
        image_detail_5: string
        image_detail_6: string
        image_detail_7: string
        txt_detail_1_1: string
        txt_detail_1_2: string
        txt_detail_1_3: string
        txt_detail_2_1: string
        txt_detail_2_2: string
        txt_detail_2_3: string
        txt_detail_3_1: string
        txt_detail_3_1_bg: string
    }[]
}

const Work: NextPage<Projects> = ({ projects }) => {
    const { prefix } = useContext(PortfolioContext);
    return(
        <>
            {projects.map(project => (
                <div className="pure-g work_project" key={project.id}>
                    <div className="pure-u-1 pure-u-sm-1-2 pure-u-lg-5-8">
                        <div className="sq-u-1 sq-u-lg-2 sq_box_hidden list_detail">
                            <div className="sq_box img-u-1">
                                <img src={`${prefix}/images/projet/detail/${project.image_detail_1}`} alt="" className="c_img"/>
                            </div>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-sm-1-2 pure-u-lg-3-8">
                        <div className="sq-u-6 sq-u-sm-1 sq-u-lg-7 sq_box_hidden list_detail">
                            <div className="sq_box">
                                <div className="middle_inner tbox_1">
                                    <h3>{project.txt_detail_1_1}</h3>
                                    <div className="line"><span></span></div>
                                    <p>{project.txt_detail_1_2}</p>
                                    <p>{project.txt_detail_1_3}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2">
                        <div className="pure-g">
                            <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-2">
                                <div className="sq-u-4 sq-u-sm-1 sq-u-md-1 sq_box_hidden list_detail" style={{backgroundColor:`${project.image_detail_2_bg}`}}>
                                    <div className="sq_box">
                                        <div className="middle_inner">
                                            <img src={`${prefix}/images/projet/square/${project.image_detail_2}`} alt="" className="c_img_logo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-2">
                                <div className="sq-u-1 sq-u-sm-1 sq-u-md-1 sq_box_hidden list_detail">
                                    <div className="sq_box">
                                        <img src={`${prefix}/images/projet/detail/${project.image_detail_3}`} alt="" className="c_img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-2">
                                <div className="sq-u-1 sq-u-sm-1 sq-u-md-1 sq_box_hidden list_detail">
                                    <div className="sq_box">
                                        <img src={`${prefix}/images/projet/detail/${project.image_detail_4}`} alt="" className="c_img"/>
                                    </div>
                                </div>
                            </div>
                            <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-2">
                                <div className="sq-u-3 sq-u-sm-1 sq-u-md-1 sq_box_hidden list_detail">
                                    <div className="sq_box">
                                        <div className="middle_inner tbox_2">
                                            <h3>{project.txt_detail_2_1}</h3>
                                            <p>{project.txt_detail_2_2}</p>
                                            <p>{project.txt_detail_2_3}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-2">
                        <div className="sq-u-1 list_detail">
                            <div className="sq_box">
                                <img src={`${prefix}/images/projet/detail/${project.image_detail_5}`} alt="" className="c_img"/>
                            </div>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-2">
                        <div className="sq-u-1 list_detail">
                            <div className="sq_box">
                                <img src={`${prefix}/images/projet/detail/${project.image_detail_6}`} alt="" className="c_img"/>
                            </div>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2">
                        <div className="pure-g">
                            <div className="pure-u-1">
                                <div className="sq-u-4 sq-u-sm-8 sq-u-md-4 list_detail" style={{backgroundColor:`${project.txt_detail_3_1_bg}`}}>
                                    <div className="sq_box">
                                        <div className="middle_inner tbox_3">
                                            <p>{project.txt_detail_3_1}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pure-u-1">
                                <div className="sq-u-4 list_detail">
                                    <div className="sq_box">
                                        <img src={`${prefix}/images/projet/detail/${project.image_detail_7}`} alt="" className="c_img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default Work

export const getServerSideProps: GetServerSideProps = async (context) => {
    const params = context.params!.params as MovieDetailParams;
    console.log(params);
    // const res = await fetch(`https://.../data`)
    // const data = await res.json()
    const projects = await prisma.project.findMany({
        where: { id: Number(params) }
    })
    return {
        props: {
            projects
        }
    }
}