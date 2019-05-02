const edge = require('electron-edge-js')

const clrMethod = edge.func({
  assemblyFile: './build/WordIntegrator.dll',
  typeName: 'WordIntegrator.Main',
  methodName: 'GetHelloWorld'
})

module.exports = {
  callGetHelloWorld: () => {
    clrMethod(null, function (error, result) {
      if (error) throw error
      console.log(result)
    })
  }
}
