import Image from "next/image"

const MyReservationPage = () => {
    return(
        <main className="max-[1500px] mx-auto px-6 pb-6">
                <h1 className="py-6 text-2xl">My reservation</h1>

            <div className="space-y-4">
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div    className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                src="Beach_1.jpg"
                                className="hover:scale-110 object-cover transition h-full w-full"
                                alt="Beach house"
                            />
                        </div>
                    </div>

                    <div  className="col-span-3 space-y-2">
                        <h2 className="mb-4 text-xl">Properties</h2>

                        <p className="mb-2"><strong>Check in date:</strong> 14/12/2025</p>
                        <p className="mb-2"><strong>Check in date:</strong> 26/12/2025</p>

                        <p className="mb-2"><strong>numero de noches:</strong> 2</p>
                        <p className="mb-2"><strong>Total :</strong> $200</p>

                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">Propiedades</div>
                    </div>
                </div>

                <div className="p-5 grid grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div    className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                src="Beach_1.jpg"
                                className="hover:scale-110 object-cover transition h-full w-full"
                                alt="Beach house"
                            />
                        </div>
                    </div>

                    <div  className="col-span-3 space-y-2">
                        <h2 className="mb-4 text-xl">Properties</h2>

                        <p className="mb-2"><strong>Check in date:</strong> 14/12/2025</p>
                        <p className="mb-2"><strong>Check in date:</strong> 26/12/2025</p>

                        <p className="mb-2"><strong>numero de noches:</strong> 2</p>
                        <p className="mb-2"><strong>Total :</strong> $200</p>

                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">Propiedades</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MyReservationPage