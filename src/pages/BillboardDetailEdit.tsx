import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import statusValidate from '../components/statusValidate'
import {BaseURL} from '../constant'

const BillboardDetailEdit = () => {
    const navigate = useNavigate()
    const {billboardId} = useParams()
    const {status, refetch, data, error} = useQuery(
        ['billboard'],
        async () => {
            const {data} = await axios.get(
                `${BaseURL}/api/billboards/${billboardId}`
            )
            return data
        },
    )
    const handleEditCompletedBillboard = async () => {
        await axios.patch(`${BaseURL}/api/billboards/${billboardId}`, {
            // wait
        })
        refetch()
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl dark:text-white mb-2 font-bold">{data.name}</h1>
                    <p>{statusValidate(data.status)}</p>
                </div>
                <div className="flex space-x-2 items-center">
                    <button
                        onClick={() => console.log('test')}
                        type="button"
                        className="py-2 px-4 text-sm font-medium text-center text-white bg-zinc-600 rounded-lg hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 dark:bg-zinc-400 dark:hover:bg-zinc-600 dark:focus:ring-zinc-800"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        type="button"
                        className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-400 dark:hover:bg-red-600 dark:focus:ring-red-800"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => handleEditCompletedBillboard()}
                        type="button"
                        className="py-2 px-3 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-400 dark:hover:bg-green-600 dark:focus:ring-green-800"
                    >
                        Done
                    </button>
                </div>
            </div>
            <div className="bg-white mt-4 py-4 px-6 rounded-lg">
                <div className={'font-bold text-xl mb-2'}>Details</div>
                <div className={'flex flex-row'}>
                    <div className={'flex justify-center p-24'}>
                        <img className={'w-full'} src={data.imageUrl} alt="billboard photo"/>
                    </div>
                    <div className={'w-3/4'}>
                        <div>
                            <div className={'font-bold'}>Title:</div>
                            <input type="text" className={'p-2 border rounded-lg'} defaultValue={data.name}/>
                            {/*<div>{data.name}</div>*/}
                        </div>
                        <div className={'flex flex-row my-2'}>
                            <div className={'flex flex-col gap-y-2'}>
                                <div>
                                    <div className={'font-bold'}>
                                        Address:
                                    </div>
                                    <input type="text" className={'p-2 border rounded-lg'}
                                           defaultValue={data.address}/>
                                    {/*<div>{data.address}</div>*/}
                                </div>
                                <div>
                                    <div className={'font-bold'}>District:</div>
                                    <input type="text" className={'p-2 border rounded-lg'}
                                           defaultValue={data.district.name}/>
                                    {/*<div>{data.district.name}</div>*/}
                                </div>
                                <div>
                                    <div className={'font-bold'}>Latitude:</div>
                                    <input type="number" className={'p-2 border rounded-lg'}
                                           defaultValue={data.lat}/>
                                    {/*<div>{data.lat}</div>*/}
                                </div>

                            </div>
                            <div className={'flex flex-col gap-y-2 ml-20'}>
                                <div>
                                    <div className={'font-bold'}>
                                        Ward:
                                    </div>
                                    <input type="text" className={'p-2 border rounded-lg'}
                                           defaultValue={data.ward.name}/>
                                    {/*<div>{data.ward.name}</div>*/}
                                </div>
                                <div>
                                    <div className={'font-bold'}>City:</div>
                                    <input type="text" className={'p-2 border rounded-lg'}
                                           defaultValue={data.city.name}/>
                                    {/*<div>{data.city.name}</div>*/}
                                </div>
                                <div>
                                    <div className={'font-bold'}>Longitude:</div>
                                    <input type="number" className={'p-2 border rounded-lg'}
                                           defaultValue={data.long}></input>
                                    {/*<div>{data.long}</div>*/}
                                </div>
                            </div>
                        </div>
                        <div className={'my-2'}>
                            <div className={'font-bold'}>Description:</div>
                            <textarea className={'w-full h-full p-2 border rounded-lg'}>
                                {data.description}
                            </textarea>
                            {/*<div>{}</div>*/}
                        </div>
                        <div className={'my-2'}>
                            <div className={'font-bold'}>Author:</div>
                            <div>{data.user.name}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BillboardDetailEdit
