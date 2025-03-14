import Image from "next/image"
import ReservationSidebar from "@/app/components/Properties/ReservationSidebar"

const PropertyDetailPage = () => {
    return(
        <main className="max-[1500px] mx-auto px-6 pb-6">
        <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
            <Image
                src='/Beach_1.jpg'
                alt='beach house'
                fill
                priority // ← Añade esto
                style={{ objectFit: "cover" }}
            />
        </div>  

        <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="py-6 pr-6 col-span-3">
                <h1 className="mb-4 text-4xl">Property name</h1>

                <span  className="mb-6 block text-lg text-gray-600">
                    4 guest- 2 rooms
                </span>
        
                <hr />

                <div className="py-6 flex items-center space-x-4">
                <Image
                    src="/Profile_pic_1.jpg"
                    width={50}
                    height={50}
                    style={{ width: "auto", height: "auto" }} // ← Agrega esto
                    className="rounded-full"
                    alt="The user"
                />

                    <p><strong>John Doe</strong>is your host</p>

                    <hr />

                    <p className="mt-6 text-lg">
                        fdnouisdhiofd
                    </p>
                </div>
            </div>
        
            <ReservationSidebar/>

        </div>
        </main>
    )
}

export default PropertyDetailPage