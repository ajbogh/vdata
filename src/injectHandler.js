import debounce from 'lodash/debounce'
import includes from 'lodash/includes'

/**
 * inject handler that will run on datastore events
 *
 * DANGER: mutates thisArg
 *
 * @param {Vue} thisArg
 * @param {string} label
 * @param {string[]} events
 * @param {function} fn
 */
export default (vm, label, events, fn) => {
  vm[`_${label}Handler`] = debounce(function () {
    const event = arguments[1] || '$vdata-call'
    if (includes(events, event) || event === '$vdata-call') {
      if (process.env.NODE_ENV !== 'test') {
        console.log(`[@citygro/vdata<${vm._uid}>] running for ${event}`)
      }
      fn.apply(vm, [...arguments])
    }
  }, 25, {leading: true})
  if (process.env.NODE_ENV !== 'test') {
    console.log(`[@citygro/vdata#${label}<${vm._uid}>] ready. listening on`, events)
  }
}
