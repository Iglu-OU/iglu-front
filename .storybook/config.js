import { configure } from '@storybook/react'
import '!style-loader!css-loader!sass-loader!../src/scss/main.scss'

const req = require.context('../src', true, /\.stories\.tsx$/)
function loadStories() {
  req.keys().forEach(req)
}
configure(loadStories, module)
