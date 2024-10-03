// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import ApiService from 'serviceArchitecture/services/apiservice';

// interface AddFaqModalProps {
//     show: boolean;
//     handleClose: () => void;
//     onFaqAdded: () => void; // Callback to refresh FAQ list after adding
// }

// const AddFaqModal: React.FC<AddFaqModalProps> = ({ show, handleClose, onFaqAdded }) => {
//     const [question, setQuestion] = useState('');
//     const [answer, setAnswer] = useState('');
//     const [error, setError] = useState<string | null>(null);
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleAddFaq = async () => {
//         if (!question || !answer) {
//             setError('Both question and answer are required.');
//             return;
//         }

//         setIsSubmitting(true);
//         try {
//             const requestBody = {
//                 question,
//                 answer,
//             };

//             await ApiService.addFaq(requestBody);
//             setError(null);
//             handleClose();
//             onFaqAdded(); // Trigger a refresh in the parent component
//         } catch (err: any) {
//             setError('Failed to add FAQ. Please try again.');
//         } finally {
//             setIsSubmitting(false);

//         }
//     };

//     return (
//         <Modal show={show} onHide={handleClose} centered>
//             <Modal.Header closeButton>
//                 <Modal.Title>Add New FAQ</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Form>
//                     <Form.Group controlId="faqQuestion">
//                         <Form.Label>Question</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Enter question"
//                             value={question}
//                             onChange={(e) => setQuestion(e.target.value)}
//                             isInvalid={!!error && !question}
//                         />
//                     </Form.Group>

//                     <Form.Group controlId="faqAnswer" className="mt-3">
//                         <Form.Label>Answer</Form.Label>
//                         <Form.Control
//                             as="textarea"
//                             rows={3}
//                             placeholder="Enter answer"
//                             value={answer}
//                             onChange={(e) => setAnswer(e.target.value)}
//                             isInvalid={!!error && !answer}
//                         />
//                     </Form.Group>

//                     {error && <p className="text-danger mt-2">{error}</p>}
//                 </Form>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={handleClose}>
//                     Cancel
//                 </Button>
//                 <Button
//                     variant="primary"
//                     onClick={handleAddFaq}
//                     disabled={isSubmitting}
//                 >
//                     {isSubmitting ? 'Adding...' : 'Add FAQ'}
//                 </Button>
//             </Modal.Footer>
//         </Modal>
//     );
// };

// export default AddFaqModal;


import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import ApiService from 'serviceArchitecture/services/apiservice';

interface AddFaqModalProps {
    show: boolean;
    handleClose: () => void;
    onFaqAdded: () => void;
    faqData?: { _id?: any; question?: string; answer?: string }; // Optional, for editing
    isEditMode?: boolean; // To differentiate between add and edit mode
}

const AddFaqModal: React.FC<AddFaqModalProps> = ({ show, handleClose, onFaqAdded, faqData, isEditMode }) => {
    const [question, setQuestion] = useState<string>('');
    const [answer, setAnswer] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (isEditMode && faqData) {
            // Populate form fields if in edit mode
            setQuestion(faqData.question || '');
            setAnswer(faqData.answer || '');
        } else {
            // Clear fields if in add mode
            setQuestion('');
            setAnswer('');
        }
    }, [faqData, isEditMode]);

    const handleSaveFaq = async () => {
        if (!question || !answer) {
            setError("Both fields are required.");
            return;
        }
        try {
            if (isEditMode && faqData?._id) {
                // Update existing FAQ
                await ApiService.updateFaq(faqData._id, { question, answer });
            } else {
                // Add new FAQ
                await ApiService.addFaq({ question, answer });
            }
            onFaqAdded(); // Close modal and refresh FAQs
            handleClose(); // Close the modal
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{isEditMode ? 'Edit FAQ' : 'Add FAQ'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && <p className="text-danger">{error}</p>}
                <Form>
                    <Form.Group controlId="faqQuestion">
                        <Form.Label>Question</Form.Label>
                        <Form.Control
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="faqAnswer">
                        <Form.Label>Answer</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSaveFaq}>
                    {isEditMode ? 'Update FAQ' : 'Add FAQ'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddFaqModal;
