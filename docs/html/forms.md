# Forms

Form data is sent in pairs of name/value.

## Form controls

Adding text:
- Text inputs
- Password input
- Text area (multi-line)

Making choices:
- Radio buttons
- Checkboxes
- Drop-down boxes

Submitting forms:
- Submit buttons
- Image buttons

Uploading files:
- File upload

## Form structure

`<form action="" method="" id=""> {Form Elements} </form>`

- action: the url of the page that will receive the information in the form.
- method: *get* or *post*
- id: optional identifier

## Form elements

### Text Input

`<input type="text" name="" maxlength="">`

- `type="text"` to indicate it is a text input
- `name` required attribute (name of the pair name/value)
- `maxlength` optional

### Password input

`<input type="password" name="" maxlength="">`

- `type="text"` to indicate it is a text input
- `name` required attribute (name of the pair name/value)
- `maxlength` optional

### Text Area

Multi-line text input.  
`<textarea name=""></textarea>`

### Radio button

`<input type="radio" name="" value="" checked="checked">`

- `name` and `value` attributes are required
- `checked="checked"` is optional and indicates which value (if any) should be selected by default. Only one radio button in a group should use this attribute.

### Checkbox

`<input type="checkbox" name="" value="" checked="checked">`

- `name` and `value` attributes are required
- `checked="checked"` is optional and indicates which value (if any) should be selected by default. More than one checkbox can be checked in a group.

### Drop-down list box

```
<select name=""> 
    <option value="" selected="selected">Option1Description</option>
    <option value="">Option2Description</option>
    <option value="">Option3Description</option>
    ...
</select>
```

- `selected="selected"` can be used to indicate the default option (only in one `<option>` element). If this attribute isn't used, the first item will be used as "selected" by default.

### Multiple select box

```
<select size="" multiple="multiple">
    <option value="">Opt1</option>
    <option value="">Opt2</option>
    <option value="">Opt3</option>
    ...
</select>
```

- `size`: This attribute turns the drop down box into a box that show more than one option. The value indicated will be the size (in options) of the box.
- `multiple`: This option enables you to select more than one option at the same time.

### File input box

`<input type="file" name="">`

- When using this feature, the `<form>` element must use the method *post*.

### Submit button

`<input type="submit" name="" value="">`

- The *name* attribute is optional.
- The *value* attribute is used to specify the text shown in the button.

### Submit button with a image

`<input type="image">`

- `<img>` attributes are used here to specify and format an image, i.e. `<input type="image" src="" alt="">`.

### Buttons

`<button></button>`

- Text and images can be combined between the opening `<button>` and closing `</button>` tag.

### Hidden controls

`<input type="hidden" name="" value="">`

### Labels

`<label>`

- A label must always reference a control.
- The label can reference a control by wrapping ir, or be used independent and use the *for* attribute to point a control.
- The *`for`* attribute states which form control the label belongs to.

### Grouping form elements

`<fieldset><legend>Text of legend</legend>[...]</fieldset>`

- The `<legend>` element is optional and is positioned just after the opening `<fieldset>`tag.

### HTML5 inputs

`<input type="date">`  
`<input type="email">`  
`<input type="url">`  
`<input type="search" placeholder="">`  
- The placeholder attribute is optional, and can be used on any text input. It's the text shown in the input until the user clicks on it.

