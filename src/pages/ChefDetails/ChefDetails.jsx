import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailCard from '../DetailCard/DetailCard';


const ChefDetails = () => {
    const { id } = useParams(); 
    const [details, setDetails] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:5000/chefs/${id}`)
        .then((res) => res.json())
        .then((data) => setDetails(data.item));
    }, []);
    
    return (
        <div>
         {
            details.recipes?.map(detail => <DetailCard key={detail.id} detail={detail}></DetailCard>)
         }
        </div>
    );
};

export default ChefDetails;