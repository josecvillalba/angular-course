# CSS3 index

## Description of a CSS rule

```
selector {
    declaration*
}
```

A CSS rule can have zero or more declarations.  

A declaration is a pair property/value defined like: `property:value;`

### Examples of declarations:

```
color:blue;
border-style:solid;
border-width: 2px;
```

A selector can be a element, class or id selector.  

### Examples of selectors:

- Element selector

```
p {
    color:blue;    
}
```

- Class selector

```
.blue {
    color:blue;
}
```

- ID selector

```
#name {
    color:blue;
}
```

## Grouping selectors

```
div, .blue {
    color: blue;
}
```

## Combining selectors


- **SELECTOR.CLASS**: Element with class selector

` p.big { font-size: 20px; }`  
*Every p that has class="big"*

- **SELECTOR > SELECTOR**: Child selector  

`article > p { color:blue; }`  
*Every p that is a direct child of article*

- **SELECTOR SELECTOR**: Descendant selector  

`article p { color: blue; }`  

*Note*: Every **SELECTOR** can be a element, class or ID.


## Pseudo class selectors

```
selector:pseudo-class {
    ...
}
```

Where pseudo-class can be:
- `link`
- `visited`
- `hover`
- `active`
- `nth-child(...)`

# How to add a stylesheet

A CSS stylesheet is a text file with one or more css rules.  

In the `<head>` section of the webpage, add:  
```
<link rel="stylesheet" type="text/css" href="">
```

There are other ways to add a style (head style and inline style), but are not recommended:

- Head style

```
<head>
    ...
    <style>
        p {
            color: red;
        }
    </style>
    ...
</head>
```

- Inline style

```
<p style="color: green;">This is a inline style</p>
```

# Links

### The CSS box model [link](./box-model.md)

### Positioning elements [link](./css-positioning.md)

### Floating elements [link](./floating-elements.md)

### Conflict resolution [link](./conflict-resolution.md)
