    import React, { useState, useEffect } from "react";
    import { Container, Row, Col, Badge, Card, Button, Modal, Form, InputGroup } from "react-bootstrap";
    import { useDispatch, useSelector } from "react-redux";
    import GridFilters from "./GridFilters";
    import GridProperty from "./gridProperty";
    import BreadCrumb from "Common/BreadCrumb";
    import Dropzone from "react-dropzone";
    import { useFormik } from "formik";
    import * as Yup from "yup";
    import { getRealEstateGridList as onGetRealEstateGridList, addRealEstateGridList as onAddRealEstateGridList } from "slices/realestate/thunk";
    import { ToastContainer } from "react-toastify";
    import { createSelector } from "reselect";
import AddPropertyModal from "./AddPropertyModal.tsx/AddPropertyModal";
import ApiService from "serviceArchitecture/services/apiservice";
import { useLocation, useNavigate } from 'react-router-dom';

    const ListingGrid = () => {
        document.title = "Properties  | Rohlzsquad - Admin ";
        const navigate = useNavigate();

        const selectRealEstateGridList = createSelector(
            (state: any) => state.RealEstate,
            (realEstate) => ({
                realestateGridList: realEstate.realEstateGridList
            })
        );

        const { realestateGridList } = useSelector(selectRealEstateGridList);

        const dispatch = useDispatch<any>();
        const [listGrid, setListGrid] = useState<any>([]);
        const [showfilter, setShowfilter] = useState<boolean>(false);
        const [error, setError] = useState<string | null>(null);

        const [addProperty, setAddProperty] = useState<any>(false);
        const handlefileter = () => setShowfilter(!showfilter);
        const [selectfeils, setSelectfeils] = useState<any>([]);

        //Add Property modal
        const handleShowProperty = () => setAddProperty(true);
        const handleCloseProperty = () => setAddProperty(false);

   

        useEffect(() => {
            fetchPropertiesData()
        }, []);


      
        const fetchPropertiesData = async () => {
            try {
                const params = { limit: 100 }; // Define your params object with limit
              const response = await ApiService.GetPropertieslist(params); // Fetch dashboard data
              setListGrid(response.data);
            } catch (err: any) {
              setError(err.message);
            }
          };
       
       


        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <BreadCrumb title="Properties" pageTitle="Real Estate" />
                        <Row>
                            <GridFilters showfilter={showfilter} setListGrid={setListGrid} handlefileter={handlefileter} />
                            <div className="col-lg">
                                <Card>
                                    <Card.Body>
                                        <Row className="align-items-center gy-3">
                                            <Col lg={3}>
                                                <Card.Title as="h6" className="mb-0">Property{" "}
                                                    {/* <Badge bg="secondary-subtle" text="secondary" className="align-baseline ms-1">241</Badge> */}
                                                </Card.Title>
                                            </Col>
                                            <div className="col-sm-auto ms-auto d-flex gap-1">
                                                <Button variant="secondary"  onClick={() => navigate('/apps-real-estate-add-property')} ><i className="bi bi-house align-baseline me-1"></i> Add Property</Button>
                                                {/* <Button variant="primary" className="myButton" onClick={handlefileter}><i className="bi bi-funnel align-baseline me-1"></i> Filter</Button> */}
                                            </div>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <GridProperty data={listGrid} fetchPropertiesData={fetchPropertiesData} />
                            </div>
                        </Row>
                    </Container>
                </div>

                <AddPropertyModal show={addProperty} handleClose={handleCloseProperty} fetchPropertiesData={fetchPropertiesData} />

                
                <ToastContainer />
            </React.Fragment>
        );
    };

    export default ListingGrid;