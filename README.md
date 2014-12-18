# Styleguide Boilerplate

The purpose of Styleguide Boilerplate is to provide you with a `minimal styleguide structure` that you can plug into your project in order to reference all the components and styles available to use in that particular project.


## Demo
[http://bbrochier.github.io/styleguide-boilerplate/](http://bbrochier.github.io/styleguide-boilerplate/)


## Setup

1. [Download](https://github.com/bbrochier/styleguide-boilerplate) the content of the repo into a _"styleguide"_ folder within you project
2. Link the CSS of your project in the header of the styleguide
3. Link the fonts of your project if you have special ones
4. That's it! You're good to go!

_TIP: To better match your project design, be sure to change the styleguide colors as you wish. The colors of the SVG icons can be changed directly in the svg code._


## How to use


### 1. Source code

#### 1.1 Automatic snippet/source code

To generate the markup of your elements, just wrap them with `<div data-xrayhtml>`.

The markup is hidden by default, to toggle the visibily, click on the `(</>)` button on the left of your element.

_TIP: Be sure to start your code at the `very left of your editor` to avoid unwanted indentation_

```
    <div data-xrayhtml>
<h1 class="title1">h1. Styleguide heading (2em)</h1>
<h2 class="title2">h2. Styleguide heading (1.5em)</h2>
    </div>
```

#### 1.2 Custom snippet/source code

If you want to controle the output of the code, then follow the structure below for your elements.

_TIP: Be sure to replace all the `<` width `&lt;` in the `<code>` and to start your code at the `very left of your editor`._

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

#### 1.3 Only source code (HTML/CSS/JS)

If you want to display only the source code, without snippet follow the structure below.

_TIP: Be sure to replace all the `<` width `&lt;` in the `<code>` and to start your code at the `very left of your editor`._

##### HTML

```
<div class="xrayhtml">
    <pre>
        <code class="language-markup">
&lt;h1 class="title1">H1 code source different from the snippet&lt;/h1>
&lt;h2 class="title2">H2 code source different from the snippet&lt;/h2>
        </code>
    </pre>
</div>
```

##### CSS

```
<div class="xrayhtml">
    <pre>
        <code class="language-css">
.class {
    display: block;
    color: #333;
    background: #fff;
}
        </code>
    </pre>
</div>
```

##### JS

```
<div class="xrayhtml">
    <pre>
        <code class="language-javascript">
myFunction() {
    console.log('hello world');
}
        </code>
    </pre>
</div>
```

### 2. Section & Headings

Basic HTML structure

```
<div class="sg-section">
    <div class="sg-h1">Title H1</div>
    <div class="sg-h2">Title H2</div>
    <div class="sg-h3">Title H3</div>
    <div class="sg-desc">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
</div>
```

### 3. Callouts

Along with the description, you can add callouts to get the attention of the user.

#### 3.1 Callout Danger

```
<div class="sg-callout sg-callout-danger">
    <div class="sg-callout-title">Callout danger</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
```

#### 3.1 Callout Warning

```
<div class="sg-callout sg-callout-warning">
    <div class="sg-callout-title">Callout warning</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
```

#### 3.1 Callout Info

```
<div class="sg-callout sg-callout-info">
    <div class="sg-callout-title">Callout info</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
```

### 4. Text Highlight

To highlight text in the description and callouts, wrap it with a `<code>` tag.


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


## Colophon

Skeleton was built using [Sublime Text 3](http://www.sublimetext.com/3)

The typeface [Raleway](http://www.google.com/fonts/specimen/Raleway) was created by [Matt McInerney](http://matt.cc/) and [Pablo Impallari](http://www.impallari.com/). 

Code highlighting by Google's [Prettify library](https://code.google.com/p/google-code-prettify/). 

Icons in the header of the documentation are all derivative work of icons from [The Noun Project](http://thenounproject.com). [Feather](http://thenounproject.com/term/feather/22073) by Zach VanDeHey, [Pen](http://thenounproject.com/term/pen/21163) (with cap) by Ed Harrison, [Pen](http://thenounproject.com/term/pen/32847) (with clicker) by Matthew Hall, and [Watch](http://thenounproject.com/term/watch/48015) by Julien Deveaux.


## Acknowledgement

Skeleton was created by [Dave Gamache](https://twitter.com/dhg) for a better web.