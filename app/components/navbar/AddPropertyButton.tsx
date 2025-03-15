'use client'

import useLoginModal from "@/app/hooks/UseLoginModal"
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal"

interface AddPropertyButtonProps {
    userId?: string | null
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
    userId
}) => {
    const loginModal = useLoginModal()
    const AddPropertyModal = useAddPropertyModal( )

    const airbnbYourHome = () => {
        if (userId) {
        AddPropertyModal.open()
        } else {
            loginModal.open()
        }
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