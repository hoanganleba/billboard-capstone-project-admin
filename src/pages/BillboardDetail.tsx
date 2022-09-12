import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import {Link, Route, Routes, useParams, useRoutes} from 'react-router-dom'
import statusValidate from '../components/statusValidate'
import {BASE_URL} from '../constant'

function BillboardDetail() {
    const {billboardId} = useParams()
    const {status, refetch, data, error} = useQuery(
        ['billboard'],
        async () => {
            const {data} = await axios.get(
                `${BASE_URL}/api/billboards/${billboardId}`
            )
            return data
        },
    )
    const handleApproveBillboard = async (status: string) => {
        await axios.patch(`${BASE_URL}/api/billboards/${billboardId}`, {
            status
        })
        refetch()
    }

    return (
        <>
            {status === 'loading' ? (
                <div role="status">
                    <svg
                        aria-hidden="true"
                        className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            ) : status === 'error' ? (
                <span>Error: {(error as Error).message}</span>
            ) : (
                <div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl dark:text-white mb-2 font-bold">{data.name}</h1>
                            <p>{statusValidate(data.status)}</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <Link
                                type="button"
                                className="py-2 px-4 text-sm font-medium text-center text-white bg-zinc-600 rounded-lg hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 dark:bg-zinc-400 dark:hover:bg-zinc-600 dark:focus:ring-zinc-800"
                                to={`/dashboard/billboards/${billboardId}/edit`}>
                                Edit
                            </Link>
                            <button
                                onClick={() => handleApproveBillboard('rejected')}
                                type="button"
                                className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-400 dark:hover:bg-red-600 dark:focus:ring-red-800"
                            >
                                Reject
                            </button>
                            <button
                                onClick={() => handleApproveBillboard('approved')}
                                type="button"
                                className="py-2 px-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                            >
                                Approve
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
                                    <div>{data.name}</div>
                                </div>
                                <div className={'flex flex-row my-2'}>
                                    <div className={'flex flex-col gap-y-2'}>
                                        <div>
                                            <div className={'font-bold'}>
                                                Address:
                                            </div>
                                            <div>{data.address}</div>
                                        </div>
                                        <div>
                                            <div className={'font-bold'}>District:</div>
                                            <div>{data.district.name}</div>
                                        </div>
                                        <div>
                                            <div className={'font-bold'}>Latitude:</div>
                                            <div>{data.lat}</div>
                                        </div>

                                    </div>
                                    <div className={'flex flex-col gap-y-2 ml-20'}>
                                        <div>
                                            <div className={'font-bold'}>
                                                Ward:
                                            </div>
                                            <div>{data.ward.name}</div>
                                        </div>
                                        <div>
                                            <div className={'font-bold'}>City:</div>
                                            <div>{data.city.name}</div>
                                        </div>
                                        <div>
                                            <div className={'font-bold'}>Longitude:</div>
                                            <div>{data.long}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'my-2'}>
                                    <div className={'font-bold'}>Description:</div>
                                    <div>{data.description}</div>
                                </div>
                                <div className={'my-2'}>
                                    <div className={'font-bold'}>Author:</div>
                                    <div>{data.user.name}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default BillboardDetail
