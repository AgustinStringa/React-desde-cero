import React from 'react'
import Calculadora from './components/Calculadora/Calculadora'
import Effect from './components/Effect'
import State from './components/State'
import Layouteffect from './components/Layouteffect'
import Ref from './components/Ref'
import NumberInput from './components/Calculadora/NumberInput'
import Memo from './components/memo/Memo'
import Custom from './components/Custom'


const App = () => {
  return (
    <div className="container text-center">
      {/* <Calculadora></Calculadora> */}
      {/* <State /> */}
      {/* <Effect /> */}

      {/* <Layouteffect></Layouteffect> */}
      {/* <Ref></Ref> */}


      <Memo></Memo>
      {/* <Custom></Custom> */}
    </div>


  )
}

export default App
