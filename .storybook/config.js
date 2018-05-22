import { configure } from "@storybook/vue";

import { setOptions } from "@storybook/addon-options";

setOptions({
  name: "demo library",
  showAddonPanel: true
});

// automatically import all files ending in *.stories.js
const req = require.context("../stories/", true, /storie/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
