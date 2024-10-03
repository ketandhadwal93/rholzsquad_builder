// import React from "react";
// import { Modal, Button, ModalHeader, ModalBody } from "react-bootstrap";

// export const DeleteModal = ({ show, handleClose, deleteModalFunction }: any) => {
//     return (
//         <React.Fragment>
//             <Modal show={show} onHide={handleClose} id="removeCartModal" className="fade zoomIn" dialogClassName="modal-dialog-centered">
//                 <ModalHeader closeButton>
//                 </ModalHeader>
//                 <ModalBody className="p-md-5">
//                     <div className="text-center">
//                         <div className="text-danger">
//                             <i className="bi bi-trash display-5"></i>
//                         </div>
//                         <div className="mt-4">
//                             <h4>Are you sure ?</h4>
//                             <p className="text-muted mx-4 mb-0">Are you sure you want to remove this product ?</p>
//                         </div>
//                     </div>
//                     <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
//                         <Button type="button" variant="light" className="btn w-sm" onClick={handleClose}>Close</Button>
//                         <Button type="button" variant="danger" className="btn w-sm btn-hover" id="delete-record" onClick={deleteModalFunction}>Yes, Delete It!</Button>
//                     </div>
//                 </ModalBody>
//             </Modal>
//         </React.Fragment>
//     );
// }

import React from "react";
import { Modal, Button } from "react-bootstrap";

const ActionModal = ({ show, handleClose, builder, handleAction }:any) => {
    const handleVerify = () => {
        handleAction(builder, 1); // Pass 1 for verification
      };
    
      const handleReject = () => {
        handleAction(builder, 2); // Pass 2 for rejection
      };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Action</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to update status of this builder?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleReject}>
          Reject
        </Button>
        <Button
          variant="primary"
          onClick={handleVerify}        >
          {/* {builder?.status === 'Pending' ? 'Verify' : 'Reject'} */}
          Verify
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ActionModal;
