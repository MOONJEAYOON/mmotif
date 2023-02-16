import { PrismaClient } from '@prisma/client'
import {GetServerSideProps, NextPage} from 'next'
import Link from "next/link";
import React, { useContext } from "react";

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

const Works: NextPage<Projects> = ({ projects }) => {
    return(
        <div className="pure-g work_project">
            {projects.map(project => (
                <div key={project.id}  className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3">
                    <div className="sq-u-1 sq_box_hidden list">
                        <div className="sq_box">
                            <img src={`/images/projet/square/${project.image_list_1}`} alt="" className="c_img"/>
                            <div className="middle_inner">
                                <img src={`/images/projet/square/${project.image_list_2}`} alt="" className="c_img_logo"/>
                            </div>
                        </div>
                        <div className="sq_box overlay">
                            <Link href={`/work/${project.id}`} className="sq_box overlay">
                                <div className="middle_inner">
                                    <h3>{project.txt_list_1}</h3>
                                    <p>{project.txt_list_2}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}
export default Works

export const getServerSideProps: GetServerSideProps = async (context) => {
    const router = context.resolvedUrl;
    let projects;
    console.log(router);
    if (router === '/work?graphic=') {
        projects = await prisma?.project.findMany({
            where: { category: 'GRAPHIC' },
        })
    } else if (router === '/work?advertising=') {
        projects = await prisma?.project.findMany({
            where: { category: 'ADVERTISING' },
        })
    } else if (router === '/work?print=') {
        projects = await prisma?.project.findMany({
            where: { category: 'PRINT' },
        })
    } else {
        projects = await prisma?.project.findMany({})
    }
    return {
        props: {
            projects
        }
    }
}