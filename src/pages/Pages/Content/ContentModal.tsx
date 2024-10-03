import React, { useEffect, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import ApiService from 'serviceArchitecture/services/apiservice'; // Adjust the path as needed

interface ContentModalProps {
    show: boolean;
    handleClose: () => void;
    contentData: any | null; // Pass the content data for editing or null for adding
    refreshContent: () => void; // Function to refresh content list after add/edit
}

const ContentModal: React.FC<ContentModalProps> = ({ show, handleClose, contentData, refreshContent }) => {
    const [type, setType] = useState<number>(1);
    const [description, setDescription] = useState<string>('');
    const [image, setImage] = useState<string>(''); // URL of the uploaded image
    const [file, setFile] = useState<File | null>(null); // File to be uploaded
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (contentData) {
            setType(contentData.type);
            setDescription(contentData.description);
            setImage(contentData.image || ''); // Handle optional image
        } else {
            // Reset fields for adding new content
            setType(1);
            setDescription('');
            setImage('');
            setFile(null);
        }
    }, [contentData]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const uploadImage = async (file: File): Promise<string> => {
        const formData = new FormData();
        formData.append('file', file);

        const response = await ApiService.uploadImage(formData); // Replace with your image upload API call
        return response.data.file_url; // Adjust based on your API response structure
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            if (file) {
                const imageUrl = await uploadImage(file); // Upload file and get URL
                if (contentData) {
                    // Edit content
                    await ApiService.updateContent(contentData.type, { type, description, image: imageUrl });
                } else {
                    // Add new content
                    await ApiService.createContent({ type, description, image: imageUrl });
                }
            } else {
                // If editing and no new file, just send existing image URL
                if (contentData) {
                    await ApiService.updateContent(contentData.type, { type, description, image });
                } else {
                    // No image to add if content is new and no file is selected
                    throw new Error("Please upload an image or provide an existing image.");
                }
            }
            refreshContent(); // Refresh content list after add/edit
            handleClose(); // Close modal
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{contentData ? 'Edit Content' : 'Add Content'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && <p className="text-danger">{error}</p>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formType">
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            as="select"
                            value={type}
                            onChange={(e) => setType(Number(e.target.value))}
                        >
                            <option value={1}>About Us</option>
                            <option value={2}>Privacy Policy</option>
                            <option value={3}>Terms and Conditions</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Add description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formImage">
                        <Form.Label>Image Upload</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3">
                        {contentData ? 'Update Content' : 'Add Content'}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ContentModal;
