import throttle from 'lodash/throttle'

export default function ExitIntent (options = {}) {
  const defaultOptions = {
    threshold: 20,
    maxDisplays: 1,
    minTrail: 10,
    eventThrottle: 200,
    onExitIntent: () => {}
  }

  return (function () {
    const config = {...defaultOptions, ...options}
    const eventListeners = new Map()
    let displays = 0
    let trail = []

    const addEvent = (eventName, callback) => {
      document.addEventListener(eventName, callback, false)
      eventListeners.set(`document:${eventName}`, {eventName, callback})
    }

    const removeEvent = key => {
      const {eventName, callback} = eventListeners.get(key)
      document.removeEventListener(eventName, callback)
      eventListeners.delete(key)
    }

    const isMouseMovingUp = () => {
      let result = true
      trail.forEach((point, i) => {
        if (!(trail[i - 1] === undefined || point < trail[i - 1])) {
          result = false
        }
      })
      return result
    }

    const shouldDisplay = position => {
      if (
        isMouseMovingUp() &&
        position <= config.threshold &&
        displays < config.maxDisplays
      ) {
        displays++
        return true
      }
      return false
    }

    const mouseDidMove = event => {
      trail.push(event.clientY)
      if (trail.length === config.minTrail) {
        if (shouldDisplay(event.clientY)) {
          config.onExitIntent()
          if (displays >= config.maxDisplays) {
            removeEvents()
          }
        }
        trail.splice(0, 1)
      }
    }

    const removeEvents = () => {
      eventListeners.forEach((value, key, map) => removeEvent(key))
    }

    addEvent('mousemove', throttle(mouseDidMove, config.eventThrottle))

    return removeEvents
  })()
}
