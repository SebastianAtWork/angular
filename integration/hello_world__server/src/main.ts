import 'zone.js'

import {renderModuleFactory} from '@angular/platform-server';
import {AppModuleNgFactory} from './app.ngfactory';

renderModuleFactory(AppModuleNgFactory, {
  url: 'http://trotyl.me/',
  document: `<!DOCTYPE html>
<html>
<head>
  <title>Trotyl's Spike</title>
</head>
<body>
  <hello-world-app></hello-world-app>
  <p>Some other content</p>
</body>
</html>`,
  extraProviders: []
}).then(html => console.log(html));
