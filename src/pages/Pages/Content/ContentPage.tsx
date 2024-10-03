import { DeleteModal } from 'Common/DeleteModal';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ApiService from 'serviceArchitecture/services/apiservice'; // Assuming this service is used to call your API
import ContentModal from './ContentModal';

const ContentPage = () => {
  const [contentData, setContentData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState<any | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [contentIdToDelete, setContentIdToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchContentData();
  }, []);

  const fetchContentData = async () => {
    try {
      const response = await ApiService.getContentList();
      setContentData(response.data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleAddContent = () => {
    setSelectedContent(null); // Clear previous selection
    setShowModal(true); // Open modal for adding content
  };

  const handleEditContent = (content: any) => {
    setSelectedContent(content); // Pass selected content to the modal
    setShowModal(true); // Open modal for editing content
  };

//   const handleDeleteContent = (id: string) => {
//     setContentIdToDelete(id);
//     setShowDeleteModal(true);
//   };

//   const confirmDeleteContent = async () => {
//     try {
//       await ApiService.deleteContent(contentIdToDelete); // API call to delete content
//       setContentData(contentData.filter(item => item._id !== contentIdToDelete)); // Remove deleted content
//       setShowDeleteModal(false);
//     } catch (err: any) {
//       setError(err.message);
//     }
//   };

  return (
    <Container fluid>
      <div className="page-content">
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <h4>Content Management</h4>
              </Col>
              <Col className="text-end">
                <Button variant="primary" onClick={handleAddContent}>
                  Add Content
                </Button>
              </Col>
            </Row>
            <Row className="mt-3">
              {error ? (
                <p className="text-danger">{error}</p>
              ) : (
                contentData.map((item) => (
                  <Col key={item._id} xl={4} className="mb-4">
                    <Card>
                      <Card.Body>
                        <h5>{item.description}</h5>
                        <p>
                          <strong>Type:</strong> {item.type === 1 ? 'About Us' : item.type === 2 ? 'Privacy Policy' : 'Terms and Conditions'}
                        </p>
                        {item.image && (
  <div>
    <strong>Image:</strong>
    <img src={item.image} alt={item.description} style={{ width: '100%', height: 'auto' }} />
  </div>
)}
                        <div className="d-flex justify-content-between">
                          <Button variant="warning" size="sm" onClick={() => handleEditContent(item)}>
                            Edit
                          </Button>
                          {/* <Button variant="danger" size="sm" onClick={() => handleDeleteContent(item._id)}>
                            Delete
                          </Button> */}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
            </Row>
          </Card.Body>
        </Card>
      </div>

      {/* Add/Edit Content Modal */}
      {showModal && (
        <ContentModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          contentData={selectedContent} // Pass selected content for editing or null for adding
          refreshContent={fetchContentData} // Refresh content list after add/edit
        />
      )}

      {/* Delete Confirmation Modal */}
      {/* {showDeleteModal && (
        <DeleteModal
          show={showDeleteModal}
          handleClose={() => setShowDeleteModal(false)}
          deleteModalFunction={confirmDeleteContent}
        />
      )} */}
    </Container>
  );
};

export default ContentPage;
