import React ,{useState}from 'react'
import './Guide.css' 
import { formConfig } from './Config.js';
const Guide = () => {
        const [formData, setFormData] = useState(
            formConfig.fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
          );
        
          const [personalizedTips, setPersonalizedTips] = useState(null);
        
          const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();
            generatePersonalizedTips();
          };
        
          const generatePersonalizedTips = () => {
            const tips = [];
        
            formConfig.fields.forEach((field) => {
              const userValue = formData[field.name];
              if (userValue && field.tips[userValue]) {
                tips.push(field.tips[userValue]);
              }
            });
        
            setPersonalizedTips(tips);
          };
        
          return (
            <div  className="sustainability-form-container">
              <form onSubmit={handleSubmit} className="sustainability-form">
                <h2>Personalized Tips (Resource Based)</h2>
                {formConfig.fields.map((field) => (
                  <label key={field.name}>
                    {field.label}:
                    <select
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                    >
                      {field.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>
                ))}
                <button type="submit">Get Personalized Tips</button>
              </form>
        
              {personalizedTips && (
                <div className="personalized-tips">
                  <h3>Personalized Tips</h3>
                  <ul>
                    {personalizedTips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        };

export default Guide
