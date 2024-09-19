import React from 'react';
import { Container } from 'react-bootstrap';
import Datatable from './Datatable';
import BreadCrumb from 'Common/BreadCrumb';

const Datatables = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb pageTitle="Table" title="Datatables" />
          <Datatable />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Datatables;