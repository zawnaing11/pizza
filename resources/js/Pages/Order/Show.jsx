import { Head } from '@inertiajs/react'
import React from 'react'
import OrderStatus from './Partials/OrderStatus'

const Show = ({ pizza }) => {
    return (
        <div>
            <Head title={`Order #${pizza.id}`} />

            <div className="py-12 bg-blue-50 h-svh flex flex-col justify-center items-center gap-10">
                <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200" viewBox="0 0 640 512"><path fill="#4e2fa2" d="M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3zM200 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm96 328c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-114.3 0c11.6 36 3.1 77-25.4 105.5L320 413.8l0 34.2zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
                </div>
                <div>
                    <OrderStatus currentStatus={pizza.status}></OrderStatus>
                </div>
                <p>Your order No <span className='font-bold'>#{pizza.id}</span> </p>
            </div>
        </div>
    )
}

export default Show
