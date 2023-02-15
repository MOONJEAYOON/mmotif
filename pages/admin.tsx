import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Head from 'next/head'
import { useState } from 'react'
import { PrismaClient } from '@prisma/client'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

let TableBorder = styled.table`
border-collapse:collapse;
`;
let TableCell = styled.td`
border:1px solid #000;
`;

const prisma = new PrismaClient();

interface FormData {
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
}

// Array interface
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


const Admin: NextPage<Projects> = ({ projects }) => {
    const [form, setForm] = useState<FormData>({id: '', category: '', image_list_1: '', image_list_2: '', txt_list_1: '', txt_list_2: '', image_detail_1: '', image_detail_2: '', image_detail_2_bg: '', image_detail_3: '', image_detail_4: '', image_detail_5: '', image_detail_6: '', image_detail_7: '', txt_detail_1_2: '', txt_detail_1_3: '', txt_detail_2_1: '', txt_detail_2_2: '', txt_detail_2_3: '', txt_detail_3_1: '', txt_detail_1_1: '', txt_detail_3_1_bg:''})
    const [newProject, setNewProject] = useState<boolean>(true)
    const router = useRouter()

    const refreshData = () => {
        router.replace(router.asPath)
    }

    async function handleSubmit(data: FormData) {

        console.log(data)
        console.log(newProject)
        try {
            if (newProject) {
                // Check input is not blank
                if (data.category) {
                    // CREATE
                    fetch('api/create', {
                        body: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        method: 'POST'
                    }).then(() => {
                        setForm({id: '', category: '', image_list_1: '', image_list_2: '', txt_list_1: '', txt_list_2: '', image_detail_1: '', image_detail_2: '', image_detail_2_bg: '', image_detail_3: '', image_detail_4: '', image_detail_5: '', image_detail_6: '', image_detail_7: '', txt_detail_1_2: '', txt_detail_1_3: '', txt_detail_2_1: '', txt_detail_2_2: '', txt_detail_2_3: '', txt_detail_3_1: '', txt_detail_1_1: '', txt_detail_3_1_bg:''})
                        refreshData()
                    })
                }
                else {
                    alert("필수값 입력하셈")
                }
            }
            else {
                // UPDATE
                fetch(`api/work/${data.id}`, {
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'PUT'
                }).then(() => {
                    setForm({id: '', category: '', image_list_1: '', image_list_2: '', txt_list_1: '', txt_list_2: '', image_detail_1: '', image_detail_2: '', image_detail_2_bg: '', image_detail_3: '', image_detail_4: '', image_detail_5: '', image_detail_6: '', image_detail_7: '', txt_detail_1_2: '', txt_detail_1_3: '', txt_detail_2_1: '', txt_detail_2_2: '', txt_detail_2_3: '', txt_detail_3_1: '', txt_detail_1_1: '', txt_detail_3_1_bg:''})
                    setNewProject(true)
                    refreshData()
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteProject(id: string) {
        try {
            fetch(`api/work/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'DELETE'
            }).then(() => {
                refreshData()
            })
        } catch (error) {
            console.log(error)
        }
    }

    function handleCancel() {
        setForm({id: '', category: '', image_list_1: '', image_list_2: '', txt_list_1: '', txt_list_2: '', image_detail_1: '', image_detail_2: '', image_detail_2_bg: '', image_detail_3: '', image_detail_4: '', image_detail_5: '', image_detail_6: '', image_detail_7: '', txt_detail_1_2: '', txt_detail_1_3: '', txt_detail_2_1: '', txt_detail_2_2: '', txt_detail_2_3: '', txt_detail_3_1: '', txt_detail_1_1: '', txt_detail_3_1_bg:''})
        setNewProject(true)
    }

    return (
        <>
            <Head>
                <title>admin</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className="text-center font-bold text-2xl m-4">admin</h1>
            <form className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
                  onSubmit={e => {
                      e.preventDefault()
                      handleSubmit(form)
                  }}>
                <input type="text"
                       placeholder="Category"
                       value={form.category}
                       onChange={e => setForm({...form, category: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="image_list_1"
                       value={form.image_list_1}
                       onChange={e => setForm({...form, image_list_1: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="image_list_2"
                       value={form.image_list_2}
                       onChange={e => setForm({...form, image_list_2: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="txt_list_1"
                       value={form.txt_list_1}
                       onChange={e => setForm({...form, txt_list_1: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="txt_list_2"
                       value={form.txt_list_2}
                       onChange={e => setForm({...form, txt_list_2: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="image_detail_1"
                       value={form.image_detail_1}
                       onChange={e => setForm({...form, image_detail_1: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="image_detail_2"
                       value={form.image_detail_2}
                       onChange={e => setForm({...form, image_detail_2: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="image_detail_2_bg"
                       value={form.image_detail_2_bg}
                       onChange={e => setForm({...form, image_detail_2_bg: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="image_detail_3"
                       value={form.image_detail_3}
                       onChange={e => setForm({...form, image_detail_3: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="image_detail_4"
                       value={form.image_detail_4}
                       onChange={e => setForm({...form, image_detail_4: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="image_detail_5"
                       value={form.image_detail_5}
                       onChange={e => setForm({...form, image_detail_5: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="image_detail_6"
                       value={form.image_detail_6}
                       onChange={e => setForm({...form, image_detail_6: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="image_detail_7"
                       value={form.image_detail_7}
                       onChange={e => setForm({...form, image_detail_7: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="txt_detail_1_1"
                       value={form.txt_detail_1_1}
                       onChange={e => setForm({...form, txt_detail_1_1: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="txt_detail_1_2"
                       value={form.txt_detail_1_2}
                       onChange={e => setForm({...form, txt_detail_1_2: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="txt_detail_1_3"
                       value={form.txt_detail_1_3}
                       onChange={e => setForm({...form, txt_detail_1_3: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="txt_detail_2_1"
                       value={form.txt_detail_2_1}
                       onChange={e => setForm({...form, txt_detail_2_1: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="txt_detail_2_2"
                       value={form.txt_detail_2_2}
                       onChange={e => setForm({...form, txt_detail_2_2: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="txt_detail_2_3"
                       value={form.txt_detail_2_3}
                       onChange={e => setForm({...form, txt_detail_2_3: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="txt_detail_3_1"
                       value={form.txt_detail_3_1}
                       onChange={e => setForm({...form, txt_detail_3_1: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                <input type="text"
                       placeholder="txt_detail_3_1_bg"
                       value={form.txt_detail_3_1_bg}
                       onChange={e => setForm({...form, txt_detail_3_1_bg: e.target.value})}
                       className="border-2 rounded border-gray-600 p-1"
                />
                {newProject ? (
                    <button type="submit" className="bg-blue-500 text-white rounded p-1">Add +</button>
                ) : (
                    <>
                        <button type="submit" className="bg-blue-500 text-white rounded p-1">Update</button>
                        <button onClick={handleCancel} className="bg-red-500 text-white rounded p-1">Cancel</button>
                    </>
                )}
            </form>
            <div className="w-auto min-w-[25%] max-w-min mt-10 mx-auto space-y-6 flex flex-col items-stretch">
                <TableBorder>
                    <thead>
                    <tr>
                        <TableCell>category</TableCell>
                        <TableCell>image_list_1</TableCell>
                        <TableCell>image_list_2</TableCell>
                        <TableCell>txt_list_1</TableCell>
                        <TableCell>txt_list_2</TableCell>
                        <TableCell>image_detail_1</TableCell>
                        <TableCell>image_detail_2</TableCell>
                        <TableCell>image_detail_2_bg</TableCell>
                        <TableCell>image_detail_3</TableCell>
                        <TableCell>image_detail_4</TableCell>
                        <TableCell>image_detail_5</TableCell>
                        <TableCell>image_detail_6</TableCell>
                        <TableCell>image_detail_7</TableCell>
                        <TableCell>txt_detail_1_1</TableCell>
                        <TableCell>txt_detail_1_2</TableCell>
                        <TableCell>txt_detail_1_3</TableCell>
                        <TableCell>txt_detail_2_1</TableCell>
                        <TableCell>txt_detail_2_2</TableCell>
                        <TableCell>txt_detail_2_3</TableCell>
                        <TableCell>txt_detail_3_1</TableCell>
                        <TableCell>txt_detail_3_1_bg</TableCell>
                    </tr>
                    </thead>
                    <tbody>

                    {projects.map(pro => (

                        <tr key={pro.id}>


                            <TableCell>{pro.category}</TableCell>
                            <TableCell>{pro.image_list_1}</TableCell>
                            <TableCell>{pro.image_list_2}</TableCell>
                            <TableCell>{pro.txt_list_1}</TableCell>
                            <TableCell>{pro.txt_list_2}</TableCell>
                            <TableCell>{pro.image_detail_1}</TableCell>
                            <TableCell>{pro.image_detail_2}</TableCell>
                            <TableCell>{pro.image_detail_2_bg}</TableCell>
                            <TableCell>{pro.image_detail_3}</TableCell>
                            <TableCell>{pro.image_detail_4}</TableCell>
                            <TableCell>{pro.image_detail_5}</TableCell>
                            <TableCell>{pro.image_detail_6}</TableCell>
                            <TableCell>{pro.image_detail_7}</TableCell>
                            <TableCell>{pro.txt_detail_1_1}</TableCell>
                            <TableCell>{pro.txt_detail_1_2}</TableCell>
                            <TableCell>{pro.txt_detail_1_3}</TableCell>
                            <TableCell>{pro.txt_detail_2_1}</TableCell>
                            <TableCell>{pro.txt_detail_2_2}</TableCell>
                            <TableCell>{pro.txt_detail_2_3}</TableCell>
                            <TableCell>{pro.txt_detail_3_1}</TableCell>
                            <TableCell>{pro.txt_detail_3_1_bg}</TableCell>
                        </tr>
                    ))}
                    </tbody>
                </TableBorder>
            </div>
        </>
    )
}

export default Admin

// Server side rendering on every request
export const getServerSideProps: GetServerSideProps = async () => {
    // READ all notes from DB
    const projects = await prisma?.project.findMany({
    })

    return {
        props: {
            projects
        }
    }
}