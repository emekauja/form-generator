# Form-Generator
JS Form Generator Component 

## What is this project?
a dynamic component that is able to generate a form from a JS data structure. For now, can collect **text input**, **long text input**, **select**, **radio**, **numeric data** and **dates**.

This project has is hosted HERE [https://jovial-kepler-8ca762.netlify.app/](https://jovial-kepler-8ca762.netlify.app/)

## Setup
1. Clone the repo using your favorite method.
2. Open two tabs in the terminal.
3. Tab 1: `cd ~/form-generator`
4. Tab 1: `npm install`
5. Tab 1: `npm start`
6. Tab 2:`npm install && npm run build`
7. Tab 2: `npm run start-dev`

## Usage
As an example of how we may pass data to this component is shown below:
```jsx
// NOTE: Though this illustration is created using React syntax, you can structure data base on preference

import FormGenerator from './FormGenerator';

const form = [
  {
    key: 'text'
    label: 'What is the name of the officer in question?',
    type: 'text',
  },
  {
    key: 'date'
    label: 'When was the date of the incident?',
    type: 'date',
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
];

// I have added like Radio, Select, title and buttons to the data structure. You may choose how this bit fit into the datastructure

const FormPage = () => {
  const handleSubmission = useCallback((formFields) => {
    // Logic to handle submission of form fields
  }, []);

  return <FormGenerator 
            key={id}
            model={form}
            onSubmit={() => handleSubmission()}
            title='Police Brutality Report Form'
            className='form'
          />;
};

export default FormPage;
```

##Rendered Form

<img width="1280" alt="Screen Shot 2020-09-08 at 5 08 32 AM" src="img/form.png">

## Testing
At the moment there are 3 required checks running on GitHub Actions for any incoming pull request:
- Client Javascript & CSS linter: `cd ~/form-generator && npm run lint`
- Server test runner: `cd ~/form-generator && npm test`v