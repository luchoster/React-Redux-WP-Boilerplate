import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import R from 'ramda'
import Bluebird from 'bluebird'

import ApiRequest from './lib/request'

import './scss/style.scss'

class Index extends Component {
  render() {
    return(
      // Here we can add static components, like a Main Menu, or side Menu
      this.props.children
      // Here we would put the footer component since we use it on all the pages
    )
  }
}

export default connect()(Index)
