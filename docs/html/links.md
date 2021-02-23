# Links

Links are created using the \<a> element.  
The destination is specified using the href attribute.  

Example: `<a href="https://www.google.com">Search in Google</a>`

## External links

External links are referenced by using absolute URLs.  

## Internal links

Internal links are best referenced by using relative URLs instead of absolute ones.

| Relative link type | Example |
| --- | --- |
| Same folder | `<a href="index.html>Home page</a>"` |
| Child folder (1 level deeper) | `<a href="books/list.html>Books list</a>"` |
| Grandchild folder (2 levels deeper) | `<a href="books/digital/list.html>Digital Books list</a>"` |
| Parent folder (1 level up) | `<a href="../index.html>Home</a>"` |
| Grandparent folder (2 levels up) | `<a href="../../index.html>Home</a>"` |  


## Email links (mailto:)

`<a href="mailto:info@example.org">Email us!</a>`

## Opening links in a new window (target attribute)

`<a href="https://www.google.com" target="_blank">Search in Google</a>`

## Linking to sections in a document

Sections are identified by adding the attribute "id" to an HTML element.  

The value of the attribute should start with a letter or an underscore (not a number or any other character), and these ids should be unique in every single page.  

To Link to a section, the href attribute of the link starts with the symbol "#", followed by the name of the id.

Example: `<a href="#top">Back to top</a>`

## Links example

[link](./links/links1.html)

