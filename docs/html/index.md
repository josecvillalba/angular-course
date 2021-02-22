# HTML5 Index

## What is HTML?

Hypertext Markup Language.  

Technologies that drive the web:  
- HTML5 -> Structure  
- CSS3 -> Style  
- Javascript -> Behaviour  

## Anatomy of an HTML tag

`<p>mycontent</p>`

- Element name `(p)`
- Opening tag `<p>`
- content `mycontent`
- closing tag `</p>` (optional for some elements)

A tag can have attributes: `<p id="myId"></p>`
- attribute name `id`
- attribute value `myId` (value goes in quotes, double "myId" or single 'myId')

Quotes alternate if nested: `<p onclick="alert('hi')"></p>`

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h1>My First Heading</h1>
        <p>My first paragraph.</p>
    </body>
</html>
```

## HTML Content models
Block-level elements
- Render to begin in a new line (by default)
- May contain inline or other block-level elements
- Roughly flow Content (HTML5 category)

Inline elements
- Render on the same line (by default)
- May only contain other inline elements
- Roughly phrasing content (HTML5 category)


# Links

### HTML5 TAGS [link](./tags.md)

### Interactive elements [link](./interactive-elements.md)

### HTML Entities [link](./html-entities.md)