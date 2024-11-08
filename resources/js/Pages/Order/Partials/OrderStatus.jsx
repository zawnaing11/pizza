import React from 'react'

const statuses = ['ordered', 'prepping', 'baking', 'checking', 'ready'];

const OrderStatus = ({ currentStatus }) => {
    const getClass = (status, index) => {
        let baseClass = `px-6 py-2 border-r-2 border-slate-100 bg-blue-200 `;
        if (index === 0) {
            baseClass += 'rounded-l-full';
        }
        if (index === statuses.length - 1) {
            baseClass = baseClass.replace('border-r-2', 'rounded-r-full')
        }
        if (status === currentStatus) {
            baseClass = baseClass.replace('border-r-2', '')
            return `${baseClass} bg-red-700 scale-110 rounded shadow-lg`;
        }
        if (statuses.indexOf(currentStatus) > index) {
            return `${baseClass} bg-blue-600`;
        }
        return baseClass;
    }
    return (
        <div className='flex flex-row border-4 border-blue-200 rounded-full'>
            {
                statuses.map((status, index) => (
                    <div className={getClass(status, index)}>
                        <p className='uppercase italic font-semibold text-white text-center'>
                            <span className='block items-center'>{index+1}</span>
                            {status}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default OrderStatus
