import { plainTypesAndActions, requestTypesAndActions } from './baseAction'


const plainTypes = [
  // page2LoadHandle -> ...arguments
  'PAGE2_LOAD_HANDLE',

  // ...

]


const reqTypes = [
  // getPage2Data 接口请求 actions & types -> ...arguments
  'PAGE2_DATA_GET',

  // ...

]

export default {
  ...plainTypesAndActions(plainTypes),
  ...requestTypesAndActions(reqTypes)
}
