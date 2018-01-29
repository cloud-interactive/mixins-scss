# Installation

```
npm i -S git@github.com:cloud-interactive/mixins-scss.git
```

# Settings

## SCSS only

Just import `mixins.scss` in which scss file you need mixins.

```scss
// any.scss
@import "~/cloud-interactive-mixins-scss/mixins.scss";
```

## Use sass-resources-loader

Install [sass-resources-loader](https://github.com/shakacode/sass-resources-loader)

```
npm i -S sass-resources-loader
```

### Vue

See [Using Pre-Processors](https://vue-loader.vuejs.org/en/configurations/pre-processors.html) - Loading a global settings file part.

As an example, if you are using [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack), modify `build/utils.js` like so:

```js
// build/utils.js
scss: generateLoaders('sass').concat({
  loader: 'sass-resources-loader',
  options: {
    resources: require('cloud-interactive-mixins-scss').resources,
  }
}),
```

### React

See [sass-resources-loader](https://github.com/shakacode/sass-resources-loader) - webpack@2 part

```js
// config/webpack.config.dev.js
// config/webpack.config.prod.js

module: {
  rules: [
    // Apply loader
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: require('cloud-interactive-mixins-scss').resources,
          },
        },
      ],
    },
  ],
},
```

Now you can use mixins in any `.vue` or `.scss` files.
