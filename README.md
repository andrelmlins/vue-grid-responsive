<div align="center">

<img alt="Vue Framework" src="https://vuejs.org/images/logo.png" width="100">

<h1>Vue Grid Responsive</h1>

Responsive grid system based on Bootstrap for Vue.

</div>

<br />
<br />

[![npm version](https://badge.fury.io/js/vue-grid-responsive.svg)](https://www.npmjs.com/package/vue-grid-responsive) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/vue-grid-responsive/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/vue-grid-responsive.svg?branch=master)](https://travis-ci.com/andrelmlins/vue-grid-responsive)

## Installation

### NPM

```
npm i vue-grid-responsive
// OR
yarn add vue-grid-responsive
```

### CDN

```html
<script src="https://unpkg.com/vue-grid-responsive"></script>
```

### Manual

You can also download and import it manually

```html
<script src="/vue-grid-responsive/dist/vue-grid-reponsive.min.js"></script>
```

## Module import

```js
import Vue from 'vue';
import { Row, Column } from 'vue-grid-responsive';

Vue.component('row', Row);
Vue.component('column', Column);
```

## Examples

An example of how to use the library:

```vue
<template>
  <row container :gutter="12">
    <column :xs="12" :md="{4}" :lg="3">
      xs=12 md=4 lg=3
    </column>
    <column :xs="12" :md="4" :lg="3">
      xs=12 md=4 lg=3
    </column>
    <column :xs="12" :md="4" :lg="3">
      xs=12 md=4 lg=3
    </column>
    <column :xs="{12}" :md="4" :lg="3">
      xs=12 md=4 lg=3
    </column>
  </row>
</template>
```

Using then hidden component:

```vue
<template>
  <div>
    <hidden :xs="true">
      hidden xs
    </hidden>
    <hidden :md="true">
      hidden md
    </hidden>
    <hidden :xl="true">
      hidden xl
    </hidden>
  </div>
</template>
```

## Demo [Link](https://vue-grid-responsive.netlify.com/)

Local demo:

```
git clone https://github.com/andrelmlins/vue-grid-responsive.git
cd vue-grid-responsive
npm && npm run dev
```

## Properties

Component props:

### Row Component props

| Prop    | Default | Type   | Description                            |
| ------- | ------- | ------ | -------------------------------------- |
| gutter  | -       | number | Grid spacing in the container          |
| columns | 12      | number | Setting columns count in the container |

### Column Component props

| Prop | Default | Type   | Description                |
| ---- | ------- | ------ | -------------------------- |
| xs   | -       | number | Size in extra small screen |
| sm   | -       | number | Size in small screen       |
| md   | -       | number | Size in medium screen      |
| lg   | -       | number | Size in large screen       |
| xl   | -       | number | Size in extra large screen |

### Hidden Component props

| Prop | Default | Type    | Description                |
| ---- | ------- | ------- | -------------------------- |
| xs   | -       | boolean | Hidden in extra small size |
| sm   | -       | boolean | Hidden in small size       |
| md   | -       | boolean | Hidden in medium size      |
| lg   | -       | boolean | Hidden in large size       |
| xl   | -       | boolean | Hidden in extra large size |

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/vue-grid-responsive.png)](https://nodei.co/npm/vue-grid-responsive/)

## License

Vue Grid Responsive is open source software [licensed as MIT](https://github.com/andrelmlins/vue-grid-responsive/blob/master/LICENSE).
