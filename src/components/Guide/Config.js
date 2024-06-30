export const formConfig = {
    fields: [
      {
        name: 'energyUsage',
        label: 'Energy Usage',
        options: [
          { value: '', label: 'Select...' },
          { value: 'high', label: 'High' },
          { value: 'medium', label: 'Medium' },
          { value: 'low', label: 'Low' }
        ],
        tips: {
          high: 'Consider installing solar panels or using energy-efficient appliances.',
          medium: 'Switch to LED lighting and unplug devices when not in use.',
          low: 'Keep up the good work by maintaining your low energy usage.'
        }
      },
      {
        name: 'transportation',
        label: 'Transportation',
        options: [
          { value: '', label: 'Select...' },
          { value: 'car', label: 'Car' },
          { value: 'bike', label: 'Bike' },
          { value: 'walk', label: 'Walk' }
        ],
        tips: {
          car: 'Try carpooling or using public transportation to reduce your carbon footprint.',
          bike: 'Biking is a great way to stay healthy and reduce emissions!',
          walk: 'Walking is a great zero-emission transportation method.'
        }
      },
      {
        name: 'wasteManagement',
        label: 'Waste Management',
        options: [
          { value: '', label: 'Select...' },
          { value: 'recycle', label: 'Recycle' },
          { value: 'compost', label: 'Compost' },
          { value: 'neither', label: 'Neither' }
        ],
        tips: {
          recycle: 'Keep recycling and consider composting organic waste.',
          compost: 'Composting is great! Make sure to recycle as well.',
          neither: 'Try to recycle and compost to reduce waste going to landfills.'
        }
      },
      {
        name: 'foodChoices',
        label: 'Food Choices',
        options: [
          { value: '', label: 'Select...' },
          { value: 'plant-based', label: 'Plant-Based' },
          { value: 'mixed', label: 'Mixed' },
          { value: 'meat-heavy', label: 'Meat-Heavy' }
        ],
        tips: {
          'plant-based': 'Plant-based diets are very sustainable. Keep it up!',
          mixed: 'Try to incorporate more plant-based meals into your diet.',
          'meat-heavy': 'Consider reducing meat consumption to lower your environmental impact.'
        }
      }
    ]
  };
  