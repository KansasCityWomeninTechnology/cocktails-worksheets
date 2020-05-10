1. In VS Code, find the "Contact" section in your _index.html_ and add a new line after the paragraph element.

1. We want to display a label so people know to put their email address in the input. Labels have their own HTML element, `<label>`. Add a `<label>` tag. Between the opening and closing `<label>` tag, add text for the label, such as "Email".

  >[!INFO]
   >Using a `label` for HTML input is best practice for assistive technologies. Labels help describe the input control to provide correct semantics and also helps apply focus on the input control automatically.

1. Now we use an attribute to help tie HTML elements together. The `for` attribute specifies the id of the control to tie it to (which we will create soon). Inside the opening `<label>` tag, add a`for` attribute and set the value to "email", like you did for the image `src` attribute and the filename of the image. 

   [!CODECHECK] 
Inside the opening `<label>` tag, type `for="email"`. Your code should look like this
```html
<label for="email">Email</label>
```
   [CODECHECK!]

1. Save your file and preview it in Chrome. Do you see your "Email" label right above the footer?

1. Let's add the email input! In VS Code, add a new line after the `<label></label>` element.

1. Inputs have their own HTML element called `<input>` and are **self-closing**. All the information the input needs are in attributes. Type `<input />`. 

1. We need to provide the input `type`, `name`, and `id` as attributes. We'll add them in order. Inside the `<input />` tag, add the first attribute `type` and set the value to "email".
   >[!INFO]
   >Isn't it cool when you use a website from your phone and the keyboard changes to the number input when typing in a phone number? Using the correct `type` on your input elements helps the browser figure out how to best help you.

1. Now add the `name` attribute with the value "contactEmail". This is for identifing the control within a form. We aren't using a form today, but we'll add it for correctness. 

1. Lastly, add the `id` attribute with the value "email". The `id` of the control must match the label's `for` attribute. This is what ties the label and the input together. 

   [!CODECHECK]
All these attribute instructions can be confusing. Double check your input element. Your code should look like this
```html
<label for="email">Email</label>
<input type="email" name="contactEmail" id="email" />
```
   [CODECHECK!]

1. Save your file and preview it in Chrome.
