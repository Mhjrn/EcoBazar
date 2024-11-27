import React from 'react';
import { FaStar, FaStarHalf } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars }) => {
    const renderStars = () => {
        const starIcons = [];
        const fullStars = Math.floor(stars);
        const hasHalfStar = stars % 1 !== 0;
        
        for (let i = 0; i < fullStars; i++) {
            starIcons.push(<FaStar key={i} className=' fill-amber-500' />);
        }

        if (hasHalfStar) {
            starIcons.push(<FaStarHalf key="half" className=' fill-amber-500' />);
        }

        const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < remainingStars; i++) {
            starIcons.push(<AiOutlineStar key={i + fullStars} className=' fill-amber-500' />);
        }

        return starIcons;
    };

    return (
        <div className="flex gap-1 items-center justify-start">
            {renderStars()}
        </div>
    );
}

export default Star;
