import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const projectId = req.query.id
    const {category, image_list_1, image_list_2, txt_list_1, txt_list_2, image_detail_1, image_detail_2, image_detail_2_bg, image_detail_3, image_detail_4, image_detail_5, image_detail_6, image_detail_7, txt_detail_1_2, txt_detail_1_3, txt_detail_2_1, txt_detail_2_2, txt_detail_2_3, txt_detail_3_1, txt_detail_1_1, txt_detail_3_1_bg} = req.body
    if (req.method === 'GET') {
        const note = await prisma.project.findUnique({
            where: { id: Number(projectId) }
        })
        res.json(note)
    }

    // DELETE
    if (req.method === 'DELETE') {
        const note = await prisma.project.delete({
            where: { id: Number(projectId) }
        })
        res.json(note)
    }
    // UPDATE
    else if (req.method === 'PUT') {
        const note = await prisma.project.update({
            where: { id: Number(projectId) },
            data: {
                category,
                image_list_1,
                image_list_2,
                txt_list_1,
                txt_list_2,
                image_detail_1,
                image_detail_2,
                image_detail_2_bg,
                image_detail_3,
                image_detail_4,
                image_detail_5,
                image_detail_6,
                image_detail_7,
                txt_detail_1_1,
                txt_detail_1_2,
                txt_detail_1_3,
                txt_detail_2_1,
                txt_detail_2_2,
                txt_detail_2_3,
                txt_detail_3_1,
                txt_detail_3_1_bg,
            }
        })
        res.status(200).json({ message: 'Note updated' })
    }
    else {
        console.log("Note could not be modified")
        res.status(400).json({ message: "Note could not be modified" })
    }
}