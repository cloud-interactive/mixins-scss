/*
 * By sass-resources-loader
 * Avoid using SASS @import rules inside resources files as it slows down incremental builds.
 * See https://github.com/shakacode/sass-resources-loader/issues/46
 */

const path = require('path')

exports.resources = [
  './mixins/background.scss',
  './mixins/clearfix.scss',
  './mixins/cross.scss',
  './mixins/font-awesome.scss',
  './mixins/full-fill.scss',
  './mixins/image.scss',
  './mixins/position.scss',
  './mixins/size.scss',
  './mixins/status.scss',
  './mixins/text-truncate.scss',
  './mixins/triangle.scss',
  './mixins/vertical-align.scss',
].map(file => path.resolve(__dirname, file))