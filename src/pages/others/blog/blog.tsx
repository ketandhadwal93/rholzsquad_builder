import BreadCrumb from 'Common/BreadCrumb';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import ApiService from 'serviceArchitecture/services/apiservice';
import small2 from "assets/images/small/img-2.jpg";
import { DeleteModal } from 'Common/DeleteModal';
import BlogModal from './blogmodal/blogmodal';

const Blogs = () => {
    document.title = "Blogs | Steex - Admin & Dashboard Template";

    const [blog, setBlog] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [blogToDelete, setBlogToDelete] = useState<number | null>(null); // Store the blog ID for deletion

    useEffect(() => {
        getBlogList();
    }, []);

    const getBlogList = async () => {
        try {
            const params = { limit: 100 }; // Define your params object with limit
            const response = await ApiService.getBlogList(params); // Fetch blog data
            setBlog(response.data);
        } catch (err: any) {
            setError(err.message);
        }
    };

    // Open the delete confirmation modal
    const handleOpenDeleteModal = (blogId: any) => {
        setBlogToDelete(blogId);
        setShowDeleteModal(true);
    };

    // Handle the actual blog deletion
    const handleDeleteBlog = async () => {
        if (blogToDelete !== null) {
         console.log('clickedi',blogToDelete)
            try {
                await ApiService.deleteBlog(blogToDelete); // Assuming there's an API service method to delete a blog
                setBlog(blog.filter((b) => b.id !== blogToDelete)); // Remove the deleted blog from state
                setShowDeleteModal(false); // Close the modal
                setBlogToDelete(null); // Reset the blogToDelete state
                getBlogList()
            } catch (error) {
                console.error("Error deleting blog:", error);
            }
        }   
    };

    const [showModal, setShowModal] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState<any>(null); // Holds the blog to edit

    const handleAddBlog = () => {
        setSelectedBlog(null); // Reset to null for adding a new blog
        setShowModal(true);
    };

    const handleEditBlog = (blog: any) => {
        setSelectedBlog(blog); // Pass the blog data for editing
        setShowModal(true);
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Blogs" pageTitle="Pages" />

                    {/* Add Blog Button */}
                    <div className="mb-4 text-end">
                        <Button variant="primary" onClick={handleAddBlog}>
                            Add Blog
                        </Button>
                    </div>

                    <Card>
                        <Card.Body>
                            <Row>
                                <Col xl={12}>
                                    <Card>
                                        <Card.Body>
                                            <h5 className="card-title mb-3">Blogs</h5>

                                            {/* Check if there are blogs, otherwise display an error message */}
                                            {error && <p className="text-danger">{error}</p>}
                                            {blog.length === 0 && !error && <p>No blogs found</p>}

                                            <Row className="g-3">
                                                {blog.map((item, index) => (
                                                    <Col lg={12} key={index}>
                                                        <Card>
                                                            <Card.Body>
                                                                {/* Blog Image */}
                                                                <img
                                                                    src={item.image || small2}
                                                                    alt={item.title}
                                                                    className="img-fluid h-100 rounded object-fit-cover"
                                                                />

                                                                {/* Blog Title */}
                                                                <h5 className="mt-3">{item.title}</h5>

                                                                {/* Blog Description */}
                                                                <p className="text-muted">{item.description}</p>

                                                                {/* Edit and Delete Buttons */}
                                                                <div className="mt-3 d-flex gap-2">
                                                                    <Button
                                                                        variant="warning"
                                                                        onClick={() => handleEditBlog(item)}
                                                                    >
                                                                        Edit
                                                                    </Button>

                                                                    <Button
                                                                        variant="danger"
                                                                        onClick={() => handleOpenDeleteModal(item._id)}
                                                                    >
                                                                        Delete
                                                                    </Button>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </div>

            {/* Delete Confirmation Modal */}
            <DeleteModal
                show={showDeleteModal}
                handleClose={() => setShowDeleteModal(false)}
                deleteModalFunction={handleDeleteBlog}
                refreshBlogList={getBlogList}
            />
             <BlogModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                blogData={selectedBlog}
                refreshBlogList={getBlogList} // Function to refresh blog list after add/edit
            />
        </React.Fragment>
    );
};

export default Blogs;
