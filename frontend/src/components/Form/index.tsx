import React from 'react'
import FormContainer from '@components/Form/FormContainer'
import SelectV1 from '@components/Form/SelectV1'
import InputV1 from '@components/Form/InputV1'
import ButtonV1 from '@components/Form/ButtonV1'

const Form = Object.assign(React.memo(FormContainer), {
  SelectV1 : SelectV1,
  InputV1: React.memo(InputV1),
  ButtonV1: React.memo(ButtonV1)
})

export default Form