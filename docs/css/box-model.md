# The CSS Box Model

Everything in CSS has a box around it.

![](./assets/img/box-model.png)

The parts of a box are:
- Content box
- Padding box
- Border box
- Margin box

## The standard CSS box model

In this model, the width and height of a box defines the width and the height of the *content box*.

![](./assets/img/standard-box-model.png)

## The alternative CSS box model

Using this model, any width is the width of the visible box on the page.

![](./assets/img/alternate-box-model.png)

By default, browsers use the standard box model. If you want to turn on the alternative model for an element you do so by setting `box-sizing: border-box`

Example:

```
* {
    box-sizing: border-box;
}
```
