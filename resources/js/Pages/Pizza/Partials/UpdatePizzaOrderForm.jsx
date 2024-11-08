import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';

const orderStatus = ['Ordered', 'Prepping', 'Baking', 'Checking', 'Ready'];

export default function UpdatePizzaOrderForm({ pizza, className = ''}) {
    const {data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        size: pizza.size,
        crust: pizza.crust,
        toppings: pizza.toppings.join(', '),
        status: pizza.status,
    })

    const submitHandle = (e) => {
        e.preventDefault();
        patch(route('pizzas.update', pizza.id), {
            preserveScroll: true
        });
    }
    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Order Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your order status .
                </p>
            </header>

            <form onSubmit={submitHandle} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="size" value="Size" />

                    <TextInput
                        id="size"
                        className="mt-1 block w-full bg-gray-100"
                        value={pizza.size}
                        disabled
                    />

                    <InputError className="mt-2" message={''} />
                </div>

                <div>
                    <InputLabel htmlFor="crust" value="Crust" />

                    <TextInput
                        id="crust"
                        className="mt-1 block w-full bg-gray-100"
                        value={pizza.crust}
                        disabled
                    />

                    <InputError className="mt-2" message={''} />
                </div>

                <div>
                    <InputLabel htmlFor="toppings" value="Toppings" />

                    <TextInput
                        id="toppings"
                        className="mt-1 block w-full bg-gray-100"
                        value={pizza.toppings.join(', ')}
                        disabled
                    />

                    <InputError className="mt-2" message={''} />
                </div>

                <div>
                    <InputLabel htmlFor="status" value="Status" />

                    <SelectInput
                        id="status"
                        className="mt-1 block w-full"
                        options={orderStatus}
                        onChange={(e) => setData('status', e.target.value)}
                    />

                    <InputError className="mt-2" message={errors.message} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={''}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">
                            Successfully Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
