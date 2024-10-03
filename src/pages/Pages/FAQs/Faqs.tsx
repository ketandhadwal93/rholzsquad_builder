



// import BreadCrumb from 'Common/BreadCrumb';
// import React, { useEffect ,useState} from 'react'
// import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
// import ApiService from 'serviceArchitecture/services/apiservice';

// const Faqs = () => {

//     document.title = "FAQs | Steex - Admin & Dashboard Template"

//       useEffect(() => {
// getFaqData()
//     }, []);
//     // const [open, setOpen] = useState(false);
//     const [faq, setFaq] = useState<any[]>([]);
//     const [error, setError] = useState<string | null>(null);
    
//     const getFaqData = async () => {
//         try {
//             const params = { limit: 100 }; // Define your params object with limit
//           const response = await ApiService.getFaqList(params); // Fetch dashboard data
//           setFaq(response.data);
//         } catch (err: any) {
//           setError(err.message);
//         }
//       };

//     return (
//         <React.Fragment>
//             <div className="page-content">
//                 <Container fluid>
//                     <BreadCrumb title="FAQs" pageTitle="Pages" />
//                     <Card>
//                         <Card.Body>
//                             <Row>
                              
//                                 <Col xl={12}>
//                                     <Accordion defaultActiveKey="0">
//                                         <Accordion.Item eventKey="0">
//                                             <Accordion.Header id="genques-headingOne">
//                                                 What are FAQ questions?
//                                             </Accordion.Header>
//                                             <Accordion.Body>
//                                                 An FAQ page <b>(short for Frequently Asked Question page)</b> is a part of your website that provides answers to common questions, assuages concerns, and overcomes objections. It's a space where customers away from your sales-focused landing pages and homepage.
//                                             </Accordion.Body>
//                                         </Accordion.Item>
//                                         <Accordion.Item eventKey="1">
//                                             <Accordion.Header id="genques-headingTwo">
//                                                 What is FAQ process?
//                                             </Accordion.Header>
//                                             <Accordion.Body>
//                                                 FAQ stands for Frequently Asked Questions. It's <b>your opportunity to communicate with the most important visitors to your website</b> – those who have begun the decision-making process about whether to do business with you can't fit elsewhere on their website.
//                                             </Accordion.Body>
//                                         </Accordion.Item>
//                                         <Accordion.Item eventKey="2">
//                                             <Accordion.Header id="genques-headingThree">
//                                                 What is the purpose of FAQ?
//                                             </Accordion.Header>
//                                             <Accordion.Body>
//                                                 The purpose of a FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing information, and text consisting of questions and their answers may thus be called a FAQ regardless.
//                                             </Accordion.Body>
//                                         </Accordion.Item>
//                                         <Accordion.Item eventKey="3">
//                                             <Accordion.Header id="genques-headingFour">
//                                                 What is an online FAQ?
//                                             </Accordion.Header>
//                                             <Accordion.Body>
//                                                 FAQs stand for frequently asked questions. It is one of the many crucial pages of your website. It gives your customers answers to recurring and common questions and addresses their concerns public product documentation that is released at the same time.
//                                             </Accordion.Body>
//                                         </Accordion.Item>
//                                         <Accordion.Item eventKey="4">
//                                             <Accordion.Header id="genques-collapseFive">
//                                                 What are some design questions?
//                                             </Accordion.Header>
//                                             <Accordion.Body>
//                                                 These questions will help clients feel involved with the design process, and they'll also help you brainstorm ideas and fine-tune your creative output.
//                                             </Accordion.Body>
//                                         </Accordion.Item>
//                                         <Accordion.Item eventKey="5">
//                                             <Accordion.Header id="genques-headingSix">
//                                                 What are the 4 questions of design?
//                                             </Accordion.Header>
//                                             <Accordion.Body>
//                                                 The methodology I've found most successful, has been introduced by prof Jeanne Liedtka from Darden Business School and identifies four stages: What is?, What if?, What wows?, and What works?
//                                             </Accordion.Body>
//                                         </Accordion.Item>
//                                     </Accordion>
//                                     <Accordion defaultActiveKey="0">
//                                         {faq.length > 0 ? (
//                                             faq.map((item, index) => (
//                                                 <Accordion.Item eventKey={index.toString()} key={item.id || index}>
//                                                     <Accordion.Header>
//                                                         {item.question}
//                                                     </Accordion.Header>
//                                                     <Accordion.Body>
//                                                         {item.answer}
//                                                     </Accordion.Body>
//                                                 </Accordion.Item>
//                                             ))
//                                         ) : (
//                                             <p>{error ? error : "No FAQs available"}</p>
//                                         )}
//                                     </Accordion>
//                                 </Col>
//                             </Row>
//                         </Card.Body>
//                     </Card>
                   
//                 </Container>
//             </div>
//         </React.Fragment>
//     );
// };

// export default Faqs;














import BreadCrumb from 'Common/BreadCrumb';
import { DeleteModal } from 'Common/DeleteModal';
import React, { useEffect, useState } from 'react';
import { Accordion, Card, Col, Container, Row, Button } from 'react-bootstrap';
import ApiService from 'serviceArchitecture/services/apiservice';
import AddFaqModal from './addFaq';
// import { PencilSimple, TrashSimple, PlusCircle } from 'phosphor-react'; // Import icons

const Faqs = () => {
    document.title = "FAQs | Steex - Admin & Dashboard Template";

    const [faq, setFaq] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedFaqId, setSelectedFaqId] = useState<number | null>(null);

    useEffect(() => {
        getFaqData();
    }, []);

    const getFaqData = async () => {
        try {
            const params = { limit: 100 }; // Define your params object with limit
            const response = await ApiService.getFaqList(params); // Fetch FAQ data
            setFaq(response.data);
        } catch (err: any) {
            setError(err.message);
        }
    };


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  Delete logic %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const handleDeleteFaq = (id: any) => {
        setSelectedFaqId(id); // Set the ID of the FAQ to be deleted
        setShowDeleteModal(true); // Show the delete confirmation modal
    };

    const confirmDeleteFaq = async () => {
        console.log("Confirm Delete--------->>",selectedFaqId)
        if (selectedFaqId) {
            try {
                await ApiService.deleteFaq(selectedFaqId); // Call the delete API
                setFaq(faq.filter(item => item._id !== selectedFaqId)); // Remove the deleted FAQ from the list
                setShowDeleteModal(false); // Hide the modal after deletion
            } catch (error) {
                console.error("Error deleting FAQ:", error);
            }
        }
    };
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  Delete logic %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%




// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  Add logic %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const [showAddFaqModal, setShowAddFaqModal] = useState(false); // Add state to handle Add FAQ modal visibility
const [selectedFaq, setSelectedFaq] = useState<any | null>(null); // To hold the data for the selected FAQ during editing
const [isEditMode, setIsEditMode] = useState(false); // To track if we're editing or adding

const handleEditFaq = (faqData: any) => {
    setSelectedFaq(faqData); // Pass the selected FAQ data to the modal
    setIsEditMode(true); // Set to edit mode
    setShowAddFaqModal(true); // Show the modal
};

const handleAddFaq = () => {
    setSelectedFaq(null); // Clear any selected FAQ data
    setIsEditMode(false); // Set to add mode
    setShowAddFaqModal(true); // Show the modal
};

const handleFaqAddedOrUpdated = () => {
    setShowAddFaqModal(false); // Hide modal after adding or updating
    getFaqData(); // Refresh FAQ list
};
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  ADD logic %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="FAQs" pageTitle="Pages" />

                    {/* Add FAQ Button */}
                    <div className="mb-4 text-end">
                        <Button variant="primary" onClick={handleAddFaq}>
                            <i className="ph-plus" /> Add FAQ
                        </Button>
                    </div>

                    <Card>
                        <Card.Body>
                            <Row>
                                <Col xl={12}>
                                    <Accordion defaultActiveKey="0">
                                        {faq.length > 0 ? (
                                            faq.map((item, index) => (
                                                <Accordion.Item eventKey={index.toString()} key={item.id || index}>
                                                    <Accordion.Header>
                                                        {item.question}
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <Row className="d-flex justify-content-between">
                                                            <Col>{item.answer}</Col>
                                                            <Col xs="auto">
                                                                <Button
                                                                    variant="warning"
                                                                    size="sm"
                                                                    className="me-2"
                                                                    onClick={() => handleEditFaq(item)}
                                                                >
                                                                    <i className="ph-pencil" /> Edit
                                                                </Button>
                                                                <Button
                                                                    variant="danger"
                                                                    size="sm"
                                                                    onClick={() => handleDeleteFaq(item._id)}
                                                                >
                                                                    <i className="ph-trash" /> Delete
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            ))
                                        ) : (
                                            <p>{error ? error : "No FAQs available"}</p>
                                        )}
                                    </Accordion>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>


                <AddFaqModal
                        show={showAddFaqModal}
                        handleClose={() => setShowAddFaqModal(false)}
                        onFaqAdded={handleFaqAddedOrUpdated}
                        faqData={selectedFaq} // Pass selected FAQ data for edit mode
                        isEditMode={isEditMode} // Flag to indicate whether it's edit mode
                    />

                {/* Delete Confirmation Modal */}
                <DeleteModal
                    show={showDeleteModal}
                    handleClose={() => setShowDeleteModal(false)}
                    deleteModalFunction={confirmDeleteFaq} // Call the confirm delete function
                />
            </div>
        </React.Fragment>
    );
};

export default Faqs;
