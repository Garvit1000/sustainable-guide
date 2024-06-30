import React, { useState } from 'react';
import './Resources.css';
const resources = [
    {
      name: 'Solar Panels',
      image: 'https://cdn.pixabay.com/photo/2017/09/12/13/21/photovoltaic-system-2742302_960_720.jpg',
      tip: 'Install solar panels to reduce reliance on fossil fuels and lower your energy bills.'
    },
    {
      name: 'Reusable Bags',
      image: 'https://cdn.pixabay.com/photo/2018/11/24/22/44/bag-3836481_960_720.jpg',
      tip: 'Use reusable bags instead of single-use plastic bags to reduce plastic waste.'
    },
    {
      name: 'Compost Bin',
      image: 'https://cdn.pixabay.com/photo/2014/08/16/11/17/compost-419261_960_720.jpg',
      tip: 'Compost your organic waste to create nutrient-rich soil for your garden.'
    },
    {
      name: 'Water Bottle',
      image: 'https://cdn.pixabay.com/photo/2020/11/08/10/28/bottles-5723338_960_720.jpg',
      tip: 'Use a reusable water bottle to reduce plastic waste and stay hydrated.'
    }
  ];
  
  const ResourceCard = ({ resource }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
    return (
        <div id='resources' className={`resource-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
          <div className="resource-card-inner">
            <div className="resource-card-front">
              <img src={resource.image} alt={resource.name} className="resource-image" />
              <h3>{resource.name}</h3>
            </div>
            <div className="resource-card-back">
              <p>{resource.tip}</p>
            </div>
          </div>
        </div>
      );
    };
    const Resources = () => {
    return (
        <div className="App">
          <h1>Sustainability Resources</h1>
          <div className="resource-container">
            {resources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </div>
      );
    
};

export default Resources;
