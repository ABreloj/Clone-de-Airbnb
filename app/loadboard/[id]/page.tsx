import Image from "next/image"
import ContactButton from "@/app/components/ContactButton" 
import PropertyList from "@/app/components/Properties/PropertyList"

const LandloadDetailPage = () => {
    return(
        <main className="max-[1500px] mx-auto px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1 mb-4">
                    <div className="flex flex-col items-center p-6 rounded-xl border border-gray-600 shadow-xl">
                        <Image
                            src="/Profile_pic_1,jpg"
                            width={500}
                            height={500}
                            alt='User'
                            className="rounded-full"
                        />

                        <h1 className="mt-6 text-2xl">Landlord name</h1>

                        <ContactButton />
                    </div>
                </aside>
                
                <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <PropertyList/> 
                    </div>
                </div>

            </div>
        </main>

    )
}

export default LandloadDetailPage