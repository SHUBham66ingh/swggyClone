import { dineoutRestaurants } from '../utils/DineData';
import DineCard from './DineCard';


export default function DineOption() {
    return (
        <div className="w-[80%] mx-auto mt-20">
            <p className="text-3xl font-bold text-center">Discover best restaurants on Discounts</p>
            
            {/* Scrollable container */}
            <div className="overflow-x-auto scrollbar-hide mt-5">
                <div className="flex gap-3 whitespace-nowrap">
                    {dineoutRestaurants.map((res) => (
                        <DineCard key={res.info.id} res={res} />
                    ))}
                </div>
            </div>
        </div>
    );
}
