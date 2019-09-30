export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

const camelCase = type => type.toLowerCase().replace(/_([a-z])/g, ($0, $1) => $1.toUpperCase())

const action = (type, payload = {}) => ({ type, ...payload })

// 普通 type 和 action
export const plainTypesAndActions = types =>
  types.reduce((TA, type) => {
    TA[type] = type
    TA[camelCase(type)] = action.bind(null, type)

    return TA
  }, {})

// 请求 type 和 action
export const requestTypesAndActions = requestsTypes =>
  requestsTypes.reduce((RTA, reqType) => {
    RTA[reqType] = [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
      acc[type] = `${reqType}_${type}`
      return acc
    }, {})

    RTA[camelCase(reqType)] = {
      request: () => action(RTA[reqType][REQUEST]),
      success: data => action(RTA[reqType][SUCCESS], { data }),
      failure: error => action(RTA[reqType][FAILURE], { error }),
    }
    return RTA
  }, {})
