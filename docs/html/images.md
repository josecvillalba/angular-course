# Images

The \<img> element is used to add images.  

There are two compulsory attributes: *src* and *alt*.  
- *src* indicates the source of the image.
- *alt* describes the content of the image.  

The title attribute is optional and provides additional information about the image.  

Example: `<img src="bears.png" alt="two bears playing" title="Bears are dangerous animals">`

## Height and width
To specify the size of the image, *height* and *width* attributes can be used (in pixels), but it if preferable by using CSS rather than HTML.

Example: `<img src="img.png" height="500" width="300">`

## HTML5 figure and figure caption

`<figure>` is used to contain an image (or several) and their caption associated.  
`<figcaption>` is used to add a caption to one or more images contained in a `<figure>` element.

Example:
```
<figure>
    <img src="img1.jpg" alt="image one">
    <br>
    <figcaption>This caption is associated to the image</figcaption>
</figure>
```

## Example

[link](./images/images.html)