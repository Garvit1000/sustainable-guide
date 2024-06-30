import React, { useState } from 'react';
import './PersonalizedGuide.css';

const PersonalizedGuide = () => {
  const [profile, setProfile] = useState({
    householdSize: '',
    dietaryPreference: '',
    transportationMethod: '',
    energyUsage: ''
  });

  const [tips, setTips] = useState([]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateTips(profile);
  };

  const generateTips = (profile) => {
    const newTips = [];

    // Generate tips based on household size
    if (profile.householdSize) {
      newTips.push(`With a household size of ${profile.householdSize}, consider energy-efficient appliances and practices.`);
    }

    // Generate tips based on dietary preference
    if (profile.dietaryPreference === 'vegan') {
      newTips.push('As a vegan, focus on locally sourced and seasonal produce to reduce your carbon footprint.');
    } else if (profile.dietaryPreference === 'vegetarian') {
      newTips.push('As a vegetarian, incorporate more plant-based proteins to further reduce your environmental impact.');
    } else if (profile.dietaryPreference === 'omnivore') {
      newTips.push('As an omnivore, consider reducing meat consumption and opting for sustainably sourced products.');
    }

    // Generate tips based on transportation method
    if (profile.transportationMethod === 'car') {
      newTips.push('Consider carpooling, using public transport, or switching to an electric vehicle to reduce emissions.');
    } else if (profile.transportationMethod === 'public_transport') {
      newTips.push('Using public transport is great! Try to combine trips to further minimize your carbon footprint.');
    } else if (profile.transportationMethod === 'bike') {
      newTips.push('Biking is an excellent choice! Ensure your bike is well-maintained for efficient commuting.');
    } else if (profile.transportationMethod === 'walk') {
      newTips.push('Walking is fantastic for the environment! Consider walking whenever possible.');
    }

    // Generate tips based on energy usage
    if (profile.energyUsage.toLowerCase() === 'high') {
      newTips.push('Your energy usage is high. Consider switching to LED bulbs, unplugging devices when not in use, and using smart thermostats.');
    } else if (profile.energyUsage.toLowerCase() === 'medium') {
      newTips.push('Your energy usage is moderate. Explore options like solar panels and energy-efficient appliances.');
    } else if (profile.energyUsage.toLowerCase() === 'low') {
      newTips.push('Your energy usage is low. Keep up the good work and continue to find small ways to save energy.');
    }

    setTips(newTips);
  };

  return (
    <div id='personalizedguide' className="personalized-guide">
      <h1>Personalized Sustainability Guide</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Household Size:
          <input type="number" name="householdSize" value={profile.householdSize} onChange={handleChange} />
        </label>
        <label>
          Dietary Preference:
          <select name="dietaryPreference" value={profile.dietaryPreference} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="omnivore">Omnivore</option>
          </select>
        </label>
        <label>
          Transportation Method:
          <select name="transportationMethod" value={profile.transportationMethod} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="car">Car</option>
            <option value="public_transport">Public Transport</option>
            <option value="bike">Bike</option>
            <option value="walk">Walk</option>
          </select>
        </label>
        <label>
          Energy Usage:
          <input type="text" name="energyUsage" value={profile.energyUsage} onChange={handleChange} placeholder="e.g., high, medium, low" />
        </label>
        <button type="submit">Get Tips</button>
      </form>
      <div className="tips">
        {tips.length > 0 && <h2>Personalized Tips</h2>}
        <ul>
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PersonalizedGuide;
