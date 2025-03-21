interface CustomButtonProps {
    label: string
    className?: string
    onClick?: () => void
}

const CustomButton: React.FC<CustomButtonProps> = ({label, onClick, className}) => {
    return(
        <div 
        onClick={onClick}
        className={`w-full py-4 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition cursor-pointer`}
            >
            { label }
        </div>
    )

}

export default CustomButton