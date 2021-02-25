# Audio and Video

## HTML5 Video

`<video src="" poster="" width="" height="" preload="{none,auto,metadata}" controls autoplay loop muted>`

- *controls*: this attribute indicates whether the player should display controls. If you do not use this attribute, no controls will be shown by default.
- Attributes like *controls*, *autoplay*, *loop* and *muted* do not have a value, so if it is present, the option is on. Otherwise, it is off.
- The default value for `preload` is different for each browser.The specadvises it to be set to `metadata`.
- `<poster>`: A URL for an image to be shown while the video is downloading. If this attribute isn't specified, nothing is displayed until the first frame is available, then the first frame is shown as the poster frame.

## Multiple video sources

To maximize the compatibility with browsers, many `<source>` tags can be specified for a `<video>`.

```
<video controls>
    <source src="../assets/video/file_example_AVI_480_750kB.avi">
    <source src="../assets/video/file_example_MOV_480_700kB.mov">
    <source src="../assets/video/file_example_MP4_480_1_5MG.mp4">
</video>
```

## Videos Example

[Video link](./audio-video/video.html)



## HTML5 Audio

`<audio src="" controls autoplay preload="{none,auto,metadata}" loop>`

## Multiple audio sources

To maximize the compatibility with browsers, many `<source>` tags can be specified for a `<audio>`.

```
<audio controls>
    <source src="../assets/audio/file_example_OOG_1MG.ogg">
    <source src="../assets/audio/file_example_MP3_700KB.mp3">
</audio>
```

## Audios Example

[Audio link](./audio-video/audio.html)
