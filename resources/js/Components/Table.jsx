import { Link } from '@inertiajs/react'
import React from 'react'

const Table = ({ columns, items, primary, action }) => {
    return (
        <div className="relative overflow-x-auto mt-4 px-16">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            {primary}
                        </th>
                        {
                            columns.map((column) => (
                                <th scope="col" className="px-6 py-3">
                                    {column}
                                </th>
                            ))
                        }
                        <th scope="col" className="px-6 py-3"> </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    #{item.id}
                                </th>
                                {
                                    columns.map((column) => (
                                        <td className="px-6 py-4">{item[column]}</td>
                                    ))
                                }
                                <td className="px-6 py-4">
                                    <Link href={route('pizzas.edit', item.id)} className='px-4 py-2 bg-blue-500 text-white rounded-md'>Edit</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Table
