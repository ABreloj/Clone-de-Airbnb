import Image from "next/image"
import { PropertyType } from "./PropertyList"

interface PropertyProps {
    property: PropertyType
}

const PropertyListItem: React.FC<PropertyProps> = ({
    property
}) => {
    return( 
        <div className ="cursor-pointer">
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                    fill
                    src={property.image_url}
                    sizes="(max_width:768px) 768px, (max_width:1200px) 768px, 768px"
                    className="hover:scale-110 object-cover transition h-full w-full"
                    alt="Icon"    
                />
            </div>

                <div className="mt-2">
                    <p className="text-lg font-bold">{property.title}</p>
                </div>

                <div className="mt-2">
                    <p className="text-sm text-gray-700"><strong>${property.price_per_night}</strong> por noche</p>
                </div>
            
        </div>
    )
}

export default PropertyListItem