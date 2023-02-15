import {GetServerSideProps, NextPage} from "next";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
// Array interface
interface Notes {
    notes: {
        id: string
        category: string
        image_list_1: string
        image_list_2: string
        txt_list_1: string
        txt_list_2: string
        image_detail_1: string
        image_detail_2: string
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
    }[]
}
const All: NextPage<Notes> = ({ notes }) => {
    return(
        <div className="pure-g work_project">
            {notes.map(note => (
                <div key={note.id}  className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3">
                    <div className="sq-u-1 sq_box_hidden list">
                        <div className="sq_box">
                            <img src={`../images/projet/square/${note.image_list_1}`} alt="" className="c_img"/>
                                <div className="middle_inner">
                                    <img src={`./mmotif/images/projet/square/${note.image_list_2}`} alt="" className="c_img_logo"/>
                                </div>
                        </div>
                        <div className="sq_box overlay">
                            <a href="projectdetail/media09.html" className="sq_box overlay">
                                <div className="middle_inner">
                                    <h3>{note.txt_list_1}</h3>
                                    <p>{note.txt_list_2}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}
export default All

export const getServerSideProps: GetServerSideProps = async () => {

    const notes = await prisma?.project.findMany({
        select: {
            id: true,
            category: true
        }
    })

    return {
        props: {
            notes
        }
    }
}
