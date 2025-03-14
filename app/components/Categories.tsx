import Image from "next/image"

const Categories = () => {
    return(
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src="/Icon_Category_Beach.jpg"
                    alt="Category icon"
                    width={20}
                    height={30}
                />

                <span className="text-ts">Beach</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src="/Icon_Category_Beach.jpg"
                    alt="Category icon"
                    width={20}
                    height={30}
                />

                <span className="text-ts">Villas</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src="/Icon_Category_Beach.jpg"
                    alt="Category icon"
                    width={20}
                    height={30}
                />

                <span className="text-ts">Cabins</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src="/Icon_Category_Beach.jpg"
                    alt="Category icon"
                    width={20}
                    height={30}
                />

                <span className="text-ts">Tiny Homes</span>
            </div>

        </div>
    )
}

export default Categories