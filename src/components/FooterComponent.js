import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className="foot">
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='foottext text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                LiDARTour
              </h6>
              <p>
                We are LiDARTours! Our goal is to provide you with a safe alternative to inperson tours, and allow you to get a view and layout without leaving you're house. 
              </p>
            </MDBCol>

            

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='foottext text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Polycam
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Blender
                </a>
              </p>
            </MDBCol>
            
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='foottext text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <a href='#!' className='text-reset'>
                  artemioskayas@gmail.com
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  am114@wellesley.edu
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  km1@wellesley.edu
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  el110@wellesley.edu
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          LiDARTour
        </a>
      </div>
    </MDBFooter>
    </div>
  );
}