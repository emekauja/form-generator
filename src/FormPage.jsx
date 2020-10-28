import { useCallback, useState } from 'react';
import FormGenerator from './FormGenerator';

const form = [
  {
    key: 'name',
    label: 'What is the name of the officer in question?',
    type: 'text',
  },
  {
    label: 'When was the date of the incident?',
    type: 'date',
  },
  {
    label: 'How much is the bribe that was paid? (optional)',
    type: 'number',
    props: { min: 0, max: 500000 }

  },
  {
    key: 'gender',
    label: 'whats the Gender of the officer?',
    type: 'radio',
    options: [
      {
        key: 'male',
        label: 'Male',
        name: 'gender',
        value: 'male'
      },
      {
        key: 'female',
        label: 'Female',
        name: 'gender',
        value: 'female'
      },
    ]
  },
  {
    key: 'city',
    label: 'which City did this happen?',
    type: 'select',
    value: 'Lagos',
    options: [
      { key: 'abuja', label: 'Abuja', value: 'abuja' },
      { key: "others", label: "Others", value: "Others" },
      { key: "lagos", label: 'Lagos', value: 'lagos' }
    ]
  },
  {
    key: 'assort',
    label: 'what kinds of assort did you recceive ?',
    type: "checkbox",
    options: [
      { key: 'extortion', label: 'Extortion', value: 'extortion' },
      { key: 'beatings', label: 'Beatings', value: "beatings" },
      { key: 'abuse', label: 'Abuse', value: "abuse" },
      { key: 'rape', label: 'Rape', value: "rape" },
      { key: 'many', label: 'Many', value: "many" }
    ]
  }
];


const FormPage = () => {
  const [id, setId] = useState('')

  const handleSubmission = useCallback((formFields) => {
    // Logic to handle submission of form fields
    setId(formFields)
  }, []);

  return <FormGenerator 
            key={id}
            model={form}
            onSubmit={() => handleSubmission}
            title='Police Brutality Report Form'
            className='form'
          />;
};

export default FormPage;