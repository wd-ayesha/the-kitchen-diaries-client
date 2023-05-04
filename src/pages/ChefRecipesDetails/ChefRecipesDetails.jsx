import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ChefRecipesDetails = () => {
    const { id } = useParams();

    useEffect(() => {
      fetch(`http://localhost:5000/chefs/${id}`)
        .then((res) => res.json())
        .then((data) => console.log(data.item));
    }, []);
  
    console.log(id);
    return (
        <div>
           dhfgsdkj
        </div>
    );
};

export default ChefRecipesDetails;