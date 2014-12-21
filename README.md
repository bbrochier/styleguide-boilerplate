# Styleguide Boilerplate

The purpose of Styleguide Boilerplate is to provide you with a `minimal styleguide structure` that you can plug into your project in order to reference all the components and styles available to use in that particular project.


## Demo
[http://bbrochier.github.io/styleguide-boilerplate/](http://bbrochier.github.io/styleguide-boilerplate/)

## Repo
[https://github.com/bbrochier/styleguide-boilerplate](https://github.com/bbrochier/styleguide-boilerplate)

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

If you want to control the output of the code, then follow the structure below for your elements.

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

Basic HTML elements to build your styleguide with : __Sections / Descriptions / h1, h2, h3__

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

##### Callout Danger

```
<div class="sg-callout sg-callout-danger">
    <div class="sg-callout-title">Callout danger</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
```

##### Callout Warning

```
<div class="sg-callout sg-callout-warning">
    <div class="sg-callout-title">Callout warning</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
```

##### Callout Info

```
<div class="sg-callout sg-callout-info">
    <div class="sg-callout-title">Callout info</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
```

### 4. Text Highlight

To highlight text in the description and callouts, wrap it with a `<code>` tag.


### 5. Grid system

The styleguide does not impose any grid system so you can use your favorite.

To display your grid in the styleguide you can use `<div class="sg-cell">your text</div>` as cell filler inside your cols. _(see example in grid section)_


### 6. Colors

The colors can be displayed in 2 differents ways using the following code :

##### As swatches :

```
<div class="sg-color">
    <span style="background-color: #03a9f4"></span>
    <span><strong>#03a9f4</strong><br>rgb(3,169,244)<br>@color-blue-deepSky</span>
</div>
```

##### As group of colors :

```
<ul class="sg-color-group">
    <li class="sg-color-title">Blue</li>
    <li class="sg-color-dark" style="background-color: #01579b;">
        <span>@color-blue-cobalt</span>
        <span>#01579b</span>
    </li>
    <li class="sg-color-dark" style="background-color: #03a9f4;">
        <span>@color-blue-deepSky</span>
        <span>#03a9f4</span>
    </li>
    <li class="sg-color-light" style="background-color: #81d4fa;">
        <span>@color-blue-lightSky</span>
        <span>#81d4fa</span>
    </li>
</ul>
```

### 7. Fonts

To display a font simply use the code below and add/remove characters to meet your needs :

_Reminder: If you use web fonts for your site, don't forget to call them as well in the header of the styleguide._

```
<div class="sg-font" style="font-family:roboto">
    <div class="sg-font-title">Roboto 400 <span>@font-roboto</span></div>
    <div>
        abcdefghijklmnopqrstuvwxyz à â ç é è ê ë ï î ô ù ü û <br>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ À Â Ç É È Ê Ë Ï Î Ô Ù Ü Û <br>
        1 2 3 4 5 6 7 8 9 0 % $ € & @ . , ? ! ’ “ ” ( ) - /
    </div>
</div>
```

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

Styleguide Boilerplate was built using [Sublime Text 3](http://www.sublimetext.com/3)

The typeface [Roboto](http://www.google.com/fonts/specimen/Roboto) was created by [Christian Robertson](https://plus.google.com/110879635926653430880/about).

Source code generation by [X-rayHTML](https://github.com/filamentgroup/X-rayHTML).

Code highlighting by [PrismJS](http://prismjs.com/).

Markdown interpretation by [showdownJS](https://github.com/showdownjs/showdown).

Icons in the navigation are all from [Iconmonstr](http://iconmonstr.com/).


## Acknowledgement

Styleguide Boilerplate was created with ♥︎ for a better web.