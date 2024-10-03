import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import ApiService from 'serviceArchitecture/services/apiservice'; // Assume your ApiService handles the blog and image upload APIs


interface BlogModalProps {
    show: boolean;
    handleClose: () => void;
    blogData?: any; // Optional for when editing
    refreshBlogList: () => void; // To refresh the blog list after adding/editing
}

const BlogModal: React.FC<BlogModalProps> = ({ show, handleClose, blogData, refreshBlogList }) => {
    const [type, setType] = useState(0); // Draft by default
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<string | null>(null); // Image URL or null
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        if (blogData) {
            setType(blogData.type);
            setTitle(blogData.title);
            setDescription(blogData.description);
            setImage(blogData.image || null);
        } else {
            resetForm();
        }
    }, [blogData]);

    const resetForm = () => {
        setType(0);
        setTitle('');
        setDescription('');
        setImage(null);
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setUploading(true);
            try {
                const formData = new FormData();
                formData.append('file', file);
                const response = await ApiService.uploadImage(formData); // Upload API for images
                setImage(response.data.file_url); // Assuming the API returns the image URL
                // toastr.success('Image uploaded successfully');
            } catch (error) {
                // toastr.error('Image upload failed');
            } finally {
                setUploading(false);
            }
        }
    };

    const handleSubmit = async () => {
        if (!title || !description || !image) {
            // toastr.error('Please fill in all the fields.');
            return;
        }

        const blogPayload = {
            type,
            title,
            description,
            image
        };

        try {
            if (blogData) {
                // Editing existing blog
                await ApiService.updateblog(blogData._id, blogPayload); // Assuming this is your API call
                // toastr.success('Blog updated successfully');
            } else {
                // Adding a new blog
                await ApiService.addBlog(blogPayload);
                // toastr.success('Blog added successfully');
            }
            resetForm();
            handleClose();
            refreshBlogList(); // Refresh blog list on parent component
        } catch (error) {
            // toastr.error('Failed to save blog');
        }
    };

    return (
        <Modal show={show} onHide={handleClose} backdrop="static" centered>
            <Modal.Header closeButton>
                <Modal.Title>{blogData ? 'Edit Blog' : 'Add New Blog'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">Type</Form.Label>
                        <Col sm="9">
                            <Form.Check
                                type="radio"
                                label="Draft"
                                name="type"
                                value={0}
                                checked={type === 0}
                                onChange={() => setType(0)}
                            />
                            <Form.Check
                                type="radio"
                                label="Published"
                                name="type"
                                value={1}
                                checked={type === 1}
                                onChange={() => setType(1)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter blog title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter blog description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" onChange={handleImageUpload} disabled={uploading} />
                        {image && (
                            <div className="mt-2">
                                <img src={image} alt="Uploaded" className="img-thumbnail" width="200" />
                            </div>
                        )}
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSubmit} disabled={uploading}>
                    {blogData ? 'Update Blog' : 'Add Blog'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BlogModal;
