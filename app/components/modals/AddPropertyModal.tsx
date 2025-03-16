'use client'

import Image from 'next/image'

import { useState } from 'react'
import Modal from './Modal'
import CustomButton from '../forms/CustomButton'
import Categories from '../addproperty/Categories'

import useAddPropertyModal from '@/app/hooks/useAddPropertyModal'

const AddPropertyModal = () => {
    const [currentStep,setCurrentStep] = useState(1);
    const [dataCategory, setDataCategory] = useState('');
    const [dataTitle, setDatitle] = useState('');
    const [dataDescription,  setDataDescription] = useState('');
    
    const AddPropertyModal = useAddPropertyModal();

    const setCategory = (category: string) => {
        setDataCategory(category)
    }

    const content = (
        <> 
            {currentStep == 1 ? (
                <>
                    <h2 className='mb-6 text-2xl'>Elegir categoria</h2>

                    <Categories 
                        dataCategory={dataCategory}
                        setCategory={(category) => setCategory(category)}
                    />
                    
                    <CustomButton 
                        label='Next'
                        onClick={() => setCurrentStep(2)}
                    />    
                </>
            ) : currentStep == 2 ?  (
                <>
                    <h2 className='mb-6 text-2xl'>Descri be su lugar</h2>
                
                    <div className='pt-3 pb-6 space-y-4'>
                        <div className='flex flex-col space-y-2'>
                            <label>Title</label>
                                <input 
                                    type="text" 
                                    value={dataTitle}
                                    onChange={(e) => setDatitle(e.target.value)}
                                    className='w-full p-4 border border-gray-600 rounded-xl'
                                />
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <label>Description</label>
                                <textarea
                                    value={dataDescription}
                                    onChange={(e) => setDatitle(e.target.value)}
                                    className='w-full h-[200px] p-4 border border-gray-600 rounded-xl'
                                />
                        </div>

                    </div>

                    <CustomButton 
                        label='Previous'
                        className='mb-2 bg-black hover:bg-gray-800'
                        onClick={() => setCurrentStep(1)}
                    />

                    <CustomButton 
                        label='Next'
                        onClick={() => setCurrentStep(2)}
                    />
                </>
            ) : currentStep == 3 ?  (
                <>
                <h2 className='mb-6 text-2xl'>Detalles</h2>

                    <CustomButton 
                        label='Previous'
                        className='mb-2 bg-black hover:bg-gray-800'
                        onClick={() => setCurrentStep(2)}
                    />

                    <CustomButton 
                        label='Next'
                        onClick={() => setCurrentStep(4)}
                    />
                </>
            ) : ( 
                <p>Scorpion</p>
            )}
        </>
    )

    return (
        <>
            <Modal
                isOpen={AddPropertyModal.isOpen}
                close={AddPropertyModal.close}
                label="Agregar property"
                content={content}
            />
        </>
    )
}

export default AddPropertyModal