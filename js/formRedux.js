myForm = {
  title: 'Application for Leave',
  subtitle: 'For Employees at the Ministry of Education',
  instructions:"<p>Must be completed 2 weeks before leave is due</p>",
  fields: [
    {
      id: 1,
      type: 'text',
      label: 'What is the name of the applicant',
      placeholder: 'Enter Name',
      value: 'name',
      toolTipContent: null,
      required: true,
      validate: 'presence',
      columns: '4'
    },
    {
      id: 2,
      type: 'text-tel',
      label: 'Phone Number',
      placeholder: 'Enter Number',
      value: 'number',
      toolTipContent: null,
      required: true,
      validate: 'presence'
      columns: '4'
    },
    {
      id: 3,
      type: 'text-tel',
      label: 'Phone Number',
      placeholder: 'Enter Number',
      value: 'number',
      toolTipContent: null,
      required: true,
      validate: 'presence'
      columns: '4'
    }
  ]
}
