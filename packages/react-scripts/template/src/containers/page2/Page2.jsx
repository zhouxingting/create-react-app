import './page2.css'

import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions'

class Page2 extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.page2LoadHandle())
  }

  render() {
    const { page2Loading } = this.props

    return <div className="page2">Page2 --> {`${page2Loading}`}</div>
  }
}

const mapState = state => ({
  xxx: state.common.xxx,
  page2Loading: state.page2.page2Loading,
})

export default connect(mapState)(Page2)
