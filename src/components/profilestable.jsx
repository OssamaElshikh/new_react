import React, { useEffect, useState } from "react";
import axios from "axios";
import "./overlay.css";
import Nav from "./navbar";

const ITEMS_PER_PAGE = 10; // Number of items to display per page

function ProfileTable() {
    const [data, setData] = useState([]);
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [deleteCandidate, setDeleteCandidate] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showViewModal, setViewModal] = useState(false);

    // show data

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/profiles/");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const handleViewDetails = (profile) => {
        setSelectedProfile(profile);
        setShowEditModal(false);
        setViewModal(true);
    };

    //   edit data
    const handleEditDetails = (profile) => {
        setSelectedProfile(profile);
        setViewModal(false);
        setShowEditModal(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSelectedProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const handleBackToList = () => {
        setSelectedProfile(null);
        setShowEditModal(false);
    };

    const handleSubmitEdit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(
                `http://localhost:8000/profiles/${selectedProfile.id}/`,
                selectedProfile
            );
            setShowEditModal(false);
            fetchData();
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    //   delete data

    const handleDelete = (postId) => {
        setDeleteCandidate(postId);
    };

    const confirmDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/profiles/${deleteCandidate}`);
            const updatedData = data.filter((post) => post.id !== deleteCandidate);
            setData(updatedData);
        } catch (error) {
            console.error("Error deleting record:", error);
        }
        setDeleteCandidate(null);
    };

    const cancelDelete = () => {
        setDeleteCandidate(null);
    };

    //   pagination

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Calculate the indexes for the current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Get the data for the current page
    const currentPageData = data.slice(startIndex, endIndex);

    return (
        <>
            <Nav />
            <div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <h1 style={{ marginTop: "60px" }}>
                        List of Profiles{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="40"
                            fill="currentColor"
                            className="bi bi-person-lines-fill"
                            viewBox="0 0 16 16"
                        >

                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />

                        </svg>
                    </h1>
                </div>

                {selectedProfile && showViewModal && (
                    <div className="modal" style={{ display: "block" }}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Profile Details</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        onClick={handleBackToList}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <>
                                        <p>
                                            <span style={{ fontWeight: "bold" }}>name:</span>
                                            <br />
                                            {selectedProfile.name}
                                        </p>
                                        <p>
                                            <span style={{ fontWeight: "bold" }}>phone:</span>
                                            <br />
                                            {selectedProfile.phone}
                                        </p>
                                        <p>
                                            <span style={{ fontWeight: "bold" }}>speed:</span>
                                            <br />
                                            {selectedProfile.speed}
                                        </p>
                                        <p>
                                            <span style={{ fontWeight: "bold" }}>pop_name:</span>
                                            <br />
                                            {selectedProfile.pop_name}
                                        </p>
                                        <p>
                                            <span style={{ fontWeight: "bold" }}>
                                                dslam_hostname:
                                            </span>
                                            <br />
                                            {selectedProfile.dslam_hostname}
                                        </p>
                                        <p>
                                            <span style={{ fontWeight: "bold" }}>frame:</span>
                                            <br />
                                            {selectedProfile.frame}
                                        </p>
                                        <p>
                                            <span style={{ fontWeight: "bold" }}>
                                                attainable_speed:
                                            </span>
                                            <br />
                                            {selectedProfile.attainable_speed}
                                        </p>
                                    </>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-bs-dismiss="modal"
                                        onClick={handleBackToList}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {showEditModal && selectedProfile && (
                    <div className="modal" style={{ display: "block" }}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Profile</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        onClick={handleBackToList}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleSubmitEdit}>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                value={selectedProfile.name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">
                                                Phone
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                value={selectedProfile.phone}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="speed" className="form-label">
                                                speed
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="speed"
                                                name="speed"
                                                value={selectedProfile.speed}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="pop_name" className="form-label">
                                                pop_name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="pop_name"
                                                name="pop_name"
                                                value={selectedProfile.pop_name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="dslam_hostname" className="form-label">
                                                dslam_hostname
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="dslam_hostname"
                                                name="dslam_hostname"
                                                value={selectedProfile.dslam_hostname}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="frame" className="form-label">
                                                frame
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="frame"
                                                name="frame"
                                                value={selectedProfile.frame}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="attainable_speed" className="form-label">
                                                attainable_speed
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="attainable_speed"
                                                name="attainable_speed"
                                                value={selectedProfile.attainable_speed}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        {/* Repeat similar input fields for other properties */}
                                        <div className="d-flex justify-content-end">
                                            <button
                                                type="button"
                                                className="btn btn-secondary me-2"
                                                onClick={handleBackToList}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                onClick={handleSubmitEdit}
                                            >
                                                Save Changes
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div style={{ margin: "0 20px" }}>
                    <div className="table-responsive">
                        <table
                            className="table table-hover"
                            style={{ border: "1px solid black" }}
                        >
                            <thead>
                                <tr className="table-primary">
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Speed</th>
                                    <th scope="col">Pop_name</th>
                                    <th scope="col">Dslam_hostname</th>
                                    <th scope="col">Frame</th>
                                    <th scope="col">Attainable speed</th>
                                    <th scope="col">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentPageData.map((post, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 3 === 0
                                                ? "table-light"
                                                : index % 3 === 1
                                                    ? "table-info"
                                                    : "table-dark"
                                        }
                                    >
                                        <td>{post.name}</td>
                                        <td>{post.phone}</td>
                                        <td>{post.speed}</td>
                                        <td>{post.pop_name}</td>
                                        <td>{post.dslam_hostname}</td>
                                        <td>{post.frame}</td>
                                        <td>{post.attainable_speed}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-info "
                                                onClick={() => handleViewDetails(post)}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="25"
                                                    height="25"
                                                    fill="currentColor"
                                                    className="bi bi-eye"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                </svg>
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-warning "
                                                onClick={() => handleEditDetails(post)}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="25"
                                                    height="25"
                                                    fill="currentColor"
                                                    className="bi bi-pencil-square"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                                    />
                                                </svg>
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-danger "
                                                onClick={() => handleDelete(post.id)}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="25"
                                                    height="25"
                                                    fill="currentColor"
                                                    className="bi bi-trash3"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "20px",
                        }}
                    >
                        <div className="pagination">
                            {Array.from(
                                { length: Math.ceil(data.length / ITEMS_PER_PAGE) },
                                (_, index) => (
                                    <button
                                        key={index + 1}
                                        className={`btn btn-outline-primary ${currentPage === index + 1 ? "active" : ""
                                            }`}
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </div>

                {deleteCandidate && (
                    <div className="modal-overlay">
                        <div className="modal-content2">
                            <h4>Are you sure you want to delete this profile?</h4>
                            <div className="modal-buttons">
                                <button className="btn btn-danger" onClick={confirmDelete}>
                                    Yes
                                </button>
                                <button className="btn btn-secondary" onClick={cancelDelete}>
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ProfileTable;
