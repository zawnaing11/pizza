import Table from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import React from 'react'

const columns = [
    'chef',
    'size',
    'status',
]
const Index = ({ auth, pizzas }) => {
    return (
        <AuthenticatedLayout>
            <Head title="All Pizzas" />

            <Table items={pizzas} columns={columns} primary={'Order Number'} action={'pizzas.edit'}/>

        </AuthenticatedLayout>
    )
}

export default Index
