# Styleguide Boilerplate

The purpose of Styleguide Boilerplate is to provide you with a `minimal styleguide structure` that you can plug into your project in order to reference all the components and styles available to use in that particular project.


## Demo
[http://bbrochier.github.io/styleguide-boilerplate/](http://bbrochier.github.io/styleguide-boilerplate/)


## Setup

1. [Download](https://github.com/bbrochier/styleguide-boilerplate) the content of the repo into a _"styleguide"_ folder within you project
2. Link the CSS of your project in the header of the styleguide
3. Link the fonts of your project if you have special ones
4. That's it! You're good to go!

_TIP: To better match your project design, be sure to change the styleguide colors as you wish ;)_


## How to use


### 1. Source code

#### 1.1 Automatic source code

To generate the markup of your elements, just wrap them with `<div data-xrayhtml>`

_TIP: Be sure to start your code at the `very left of you editor` to avoid unwanted indentation_

```
    <div data-xrayhtml>
<h1 class="title1">h1. Styleguide heading (2em)</h1>
<h2 class="title2">h2. Styleguide heading (1.5em)</h2>
    </div>
```

#### 1.2 Custom source code

If you want to controle the output of the code, then follow the structure below for your elements.

_TIP: Be sure to replace all the `<` width `&lt;` in the `<code>`_

```
<div class="xrayhtml">
    <div class="snippet">
        <h1 class="title1">My H1 element snippet</h1>
        <h2 class="title2">My H2 element snippet</h2>
    </div>
    <div class="source-panel">
        <pre>
            <code class="language-markup">
&lt;h1 class="title1">H1 code source different from the snippet&lt;/h1>
&lt;h2 class="title2">H2 code source different from the snippet&lt;/h2>
            </code>
        </pre>
    </div>
</div>
```


### 2. Structure

### 3. Headings

### 4. Description & Notes

### 5. Grid system

### 6. Colors

### 7. Fonts

### 8. Markdown viewer

### 9. Documentation

### 10. Ressources


## Class references

- .sg-section
- .sg-h1
- .sg-h2
- .sg-h3
- .sg-desc (code)
- .sg-callout.sg-callout-danger
- .sg-callout.sg-callout-warning
- .sg-callout.sg-callout-info
- .sg-callout-title
- .sg-color
- .sg-color-group
- .sg-font
- .sg-cell
- .md-viewer