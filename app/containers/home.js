import React, { Component } from 'react'
import R from 'ramda'
import { connect } from 'react-redux'
import { fetchPage } from '../actions/page'
import HomeComponent from '../components/home'

class Home extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const query = {slug: 'home'}
    this.props.onMount({query})
  }

  render() {
    return (
      <div>
        {HomeComponent(this.props.page)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  page: R.path(['page'])(state)
})


const mapDispatchToProps = dispatch => ({
  onMount: ({query}) => {
    dispatch(fetchPage({query}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
