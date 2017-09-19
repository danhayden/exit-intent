# Exit Intent

[![version][version]](http://npm.im/exit-intent)
[![MIT License][MIT License]](http://opensource.org/licenses/MIT)
[![Standard][Standard]](http://standardjs.com)
[![Standard Version][Standard Version]](https://github.com/conventional-changelog/standard-version)
[![Size][Size]](https://unpkg.com/exit-intent)
[![Size gzip][Size gzip]](https://unpkg.com/exit-intent)

Exit Intent detection library.

```javascript
import ExitIntent from 'exit-intent'

// Initialise
const removeExitIntent = new ExitIntent({
  threshold: 50,                          // default 20
  maxDisplays: 2,                         // default 1
  eventThrottle: 100,                     // default 200
  onExitIntent: () => {                   // default no-op function
    console.log('exit-intent triggered')
  }    
})

// Destroy
removeExitIntent()
```

- `threshold` maximum distance in pixels from the top of the page to trigger.
- `maxDisplays` maximum number of times to trigger.
- `eventThrottle` event throttle in milliseconds.
- `onExitIntent` function to call when an exit intent has been detected.

### License

MIT

[version]: https://img.shields.io/npm/v/exit-intent.svg
[MIT License]: https://img.shields.io/npm/l/exit-intent.svg
[Standard]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[Standard Version]: https://img.shields.io/badge/release-standard%20version-brightgreen.svg
[Size]: https://badges.herokuapp.com/size/npm/exit-intent
[Size gzip]: https://badges.herokuapp.com/size/npm/exit-intent?gzip=true

originally based on https://github.com/richriscunha/Exitent
