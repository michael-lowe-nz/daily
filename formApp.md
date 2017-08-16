App needs to create a form object, that will ultimately look something like this:

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
          "toolTipContent": "En"
        }
      ]
    },
    {
      "title": "Parent Details",
      "fields": [
        {
          "id": 142,
          "type": "text-tel",
          "label": "Home Phone Number",
          "placeholder": "Enter Home Phone Number",
          "required": false,
          "toolTipContent": "En"
        }
      ]
    }
  ]
}
```

For this data:

* FORM has many SECTIONS
  - db -> id
  - db -> title
  - db -> subtitle
  - db -> instructions
* SECTION has one FORM
* SECTION has many FIELDS
* FIELD has one SECTION


# Displaying a form from json

Loop through the sections
Loop through the fields in the section
Display a full-width column field for each thing
The route will need to know what data to get for checkbox, radio field and dropdown options.

# Creating the JSON, and creating the form in the App

Needs to be an ember data representation of the form's JSON tree.
Add a field, add its label, type etc.
This gets added to the ember data model
