'use client'

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal"

const AddPropertyButton = () => {
    const AddPropertyModal = useAddPropertyModal( )

    const airbnbYourHome = () => {
        AddPropertyModal.open()
    }
    return(
            <div 
            onClick={airbnbYourHome}
            className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200"
            >
                DjangoBnb Our Home
            </div>
    )
}

export default AddPropertyButton