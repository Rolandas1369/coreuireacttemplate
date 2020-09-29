import { CCol, CRow } from '@coreui/react';
import React, { Component } from 'react'

import './divider.css';

export default class Divider extends Component {
  render() {
    return (
        <React.Fragment>
    <CRow>
      <CRow className="divide m-2">
        Helo
      </CRow>
      <CRow className="divide  m-2">
         Helo
        </CRow>
        <CRow className="divide  m-2">
            Helo
        </CRow>
        <CRow className="divide  m-2">
            Helo
        </CRow>
        <CRow className="divide  m-2">
            Helo
        </CRow>
        <CRow className="divide  m-2">
            Helo
        </CRow>
    </CRow>

    <hr></hr>

    <CCol>
      <CRow className="divide m-2">
        Helo
      </CRow>
      <CRow className="divide  m-2">
         Helo
        </CRow>
        <CRow className="divide  m-2">
            Helo
        </CRow>
        <CRow className="divide  m-2">
            Helo
        </CRow>
    </CCol>
    <hr></hr>

    <CCol>
      <CCol className="divide m-2">
        Helo
      </CCol>
      <CCol className="divide  m-2">
         Helo
        </CCol>
        <CCol className="divide  m-2">
            Helo
        </CCol>
        <CCol className="divide  m-2">
            Helo
        </CCol>
    </CCol>

    <hr></hr>

    <CRow>
      <CCol className="divide m-2">
        Helo
      </CCol>
      <CCol className="divide  m-2">
         Helo
        </CCol>
        <CRow className="divide  m-2">
            Helo
        </CRow>
        <CRow className="divide  m-2">
            Helo
        </CRow>
        <CRow className="divide  m-2">
            Helo
        </CRow>
        <CRow className="divide  m-2">
            Helo
        </CRow>
    </CRow>
        <hr></hr>

        <CRow>
      <CRow className="divide m-2 col-6">
        Heloaaaaaaaaaaa
      </CRow>
      <CRow className="divide  m-2 col-2">
         Heloaaaaaaaaaa
        </CRow>
        <CRow className="divide  m-2">
            Heloaaaaaaaaaaa
        </CRow>
        <CRow className="divide  m-2">
            Helo
        </CRow>
        <CRow className="divide  m-2">
            Helo
        </CRow>
        <CRow className="divide  m-2">
            Helo
        </CRow>
    </CRow>
      </React.Fragment>
    )
  }
}