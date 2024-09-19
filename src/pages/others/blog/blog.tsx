


import BreadCrumb from 'Common/BreadCrumb';
import React, { useEffect ,useState} from 'react'
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
import ApiService from 'serviceArchitecture/services/apiservice';
import small2 from "assets/images/small/img-2.jpg";



const Blogs = () => {

    document.title = "Blogs | Steex - Admin & Dashboard Template"

      useEffect(() => {
getFaqData()
    }, []);
    // const [open, setOpen] = useState(false);
    const [faq, setFaq] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    
    const getFaqData = async () => {
        try {
            const params = { limit: 100 }; // Define your params object with limit
          const response = await ApiService.getFaqList(params); // Fetch dashboard data
          setFaq(response.data);
        } catch (err: any) {
          setError(err.message);
        }
      };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Blogs" pageTitle="Pages" />
                    <Card>
                        <Card.Body>
                            <Row>
                              
                                <Col xl={12}>
                                   
                                <Card>
                                <Card.Body>
                                    <div className="mb-4">
                                        <h5 className="card-title mb-3">Media</h5>
                                        <Row className=" profile-media g-3">
                                            <Col lg={12}>
                                                <img src={small2} alt="" className="img-fluid h-100 rounded object-fit-cover" />
                                            </Col>
                                            
                                           
                                        </Row>
                                    </div>

                                    <div className="mb-4">
                                        <h5 className="card-title mb-3">Title </h5>
                                        <p className="text-muted mb-2">A <b>Web Developer</b> creates and designs different websites for clients. They are responsible for their aesthetic as well as their function. Professionals in this field may also need to be able to ensure sites are compatible with multiple types of media. Web Developers need to have a firm understanding of programming and graphical design. Having a strong resume that emphasizes these attributes makes it significantly easier to get hired as a Web Developer.</p>
                                        <p className="text-muted mb-0">As a web designer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites. Solving code problems. Editing & Design with designing team in the company to build perfect web designs.</p>
                                    </div>
                                    <div className="mb-4">
                                        <Row>
                                           
                                            
                                        </Row>
                                    </div>
                                 
                                </Card.Body>
                            </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                   
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Blogs;