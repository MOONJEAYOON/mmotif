import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {category, image_list_1, image_list_2, txt_list_1, txt_list_2, image_detail_1, image_detail_2, image_detail_2_bg, image_detail_3, image_detail_4, image_detail_5, image_detail_6, image_detail_7, txt_detail_1_1, txt_detail_1_2, txt_detail_1_3, txt_detail_2_1, txt_detail_2_2, txt_detail_2_3, txt_detail_3_1, txt_detail_3_1_bg} = req.body

    try {
        // CREATE
        await prisma.project.create({
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
        res.status(200).json({ message: 'Note created' })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error })
    }
}