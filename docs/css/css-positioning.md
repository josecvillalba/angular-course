# CSS Positioning

The `position` property specifies the type of positioning method used for an element.  

There are five different values:
- static
- relative
- fixed
- absolute
- sticky

## `static` position

Static positioning is default for all elements, except `<html>`, which is relative.  

An element with `position: static;` is not positioned in any special way; it is always positioned according to the normal flow of the page.  

## `relative` position

Relative positioning offsets the element relative to its normal document flow position.

An element with `position: fixed;` is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.  

A fixed element does not leave a gap in the page where it would normally have been located.  

## `absolute` position

An element with `position: absolute;` is positioned relative to the nearest positioned ancestor.  

## `sticky` position

An element with `position:sticky;` is positioned based on the user's scroll position.  

A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like `position:fixed`).

# Examples

[Positioning examples](./positioning/positioning.html)