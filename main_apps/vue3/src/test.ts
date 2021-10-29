console.log(window.ShadowRoot)

var a: any = null

Object.defineProperty(window, 'ShadowRoot', {
  value: undefined,
})
