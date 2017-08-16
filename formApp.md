App might need to create a form object, that will ultimately look something like this:

```json
{
  "id": 142342,
  "title": "My Form",
  "subtitle": "What a form!",
  "instructions": "<p>Fill out this form by 18 September 2020</p>",
  "sections": [
    {
      "id": 1424,
      "title": "Student Details",
      "subtitle": "For preprocessing accounts",
      "fields": [
        {
          "id": 142,
          "type": "text-tel",
          "label": "Home Phone Number",
          "placeholder": "Enter Home Phone Number",
          "required": false,
          "toolTipContent": "Enter ya details"
        },
        {
          "id": 143,
          "type": "radio-button-group",
          "label": "Which do you prefer",
          "optionsUrl": "demo.forms/api/preferences",
          "required": false,
        }
      ]
    },
    {
      "id": 1241,
      "title": "Parent Details",
      "fields": [
        {
          "id": 142,
          "type": "text-tel",
          "label": "Home Phone Number",
          "placeholder": "Enter Home Phone Number",
          "required": false,
        }
      ]
    }
  ]
}
```

OR

* GET api/form/25323
* GET api/form/25323/sections
* GET api/form/25323/sections/2/fields

For this data:

### Relationships

* FORM has many SECTIONS
  - $db => id
  - $db => title
  - $db => subtitle
  - $db => instructions
* SECTION has one FORM
* SECTION has many FIELDS
* FIELD has one SECTION


### Displaying a form from json

Loop through the sections
Loop through the fields in the section
Display a full-width column field for each thing
The route will need to know what data to get for checkbox, radio field and dropdown options.

### Creating the JSON, and creating the form in the App

Needs to be an ember data representation of the form's JSON tree.
Add a field, add its label, type etc.
This gets added to the ember data model

```hbs
{{form-header title=title subtitle=title instuctions=instructions}}

{{#each sections as |section|}}
      {{#form-section title=section.title}}
            {{#form-row multiline=true}}
                  {{#each section.fields as |field|}}
                        {{form-generic field=field}}
                  {{/each}}
            {{/form-row}}
      {{/form-section}}
{{/each}}
```

### Steps

* Setup mock endpoints with form data
* Get this into the application
* Render it out

* Form with a sidebar to create new fields and sections
* POST some kind of representation of the created form to an SS API

### What is the MVP?
## User Stories

* User can click through and make a form with basic fields, and can send a screenshot to us
* User can add a form field and set its label
