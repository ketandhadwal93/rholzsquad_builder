import React, { useEffect, useState } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import { Col, Container, Row } from 'react-bootstrap';
import ApiService from 'serviceArchitecture/services/apiservice';
// Import Components
import Widgets from './widgets';
import PropertiesType from './propertiesType';
import RevenueOverview from './revenueOverview';
import Property from './property';
import Feedback from './feedback';
import PopularProperty from './popularProperty';
import PropertyCharts from './propertyCharts';
import RecentActivity from './recentActivity';
import AgentList from './agentList';

const RealEstate = () => {
    const [dashboardData, setDashboardData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchDashboardData = async () => {
          try {
            const data = await ApiService.getDashboardData(); // Fetch dashboard data
            setDashboardData(data);
          } catch (err: any) {
            setError(err.message);
          }
        };
    
        fetchDashboardData();
      }, []);

  document.title="Real Estate |  Admin & Dashboard Template";
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <BreadCrumb title="REAL ESTATE" pageTitle="Dashboards" />
                <Widgets />
                <Row>
                    <PropertiesType />
                    <RevenueOverview />
                </Row>
                {/* <Row>
                    <Property />
                    <Feedback />
                </Row> */}
                {/* <Row>
                    <PopularProperty />
                    <Col xxl={8}>
                        <Row>
                            <PropertyCharts />
                            <RecentActivity />
                            <AgentList />
                        </Row>
                    </Col>
                </Row> */}
            </Container>
        </div>
    </React.Fragment>
  );
};

export default RealEstate;
