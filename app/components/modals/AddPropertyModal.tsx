'use client'

import Image from 'next/image'

import Modal from './Modal'

import useAddPropertyModal from '@/app/hooks/useAddPropertyModal'

const AddPropertyModal = () => {
    const AddPropertyModal = useAddPropertyModal();

    return (
        <>
            <Modal
                isOpen={AddPropertyModal.isOpen}
                close={AddPropertyModal.close}
                label="Agregar property"
                content={(
                <p>I</p>
                )}
            />
        </>
    )

}

export default AddPropertyModal