
import Modal from "react-bootstrap/Modal";

const UserUpdatePopup = ({ show, handlePopupClose, popupMessage }) => {
    return (
        <div>
            <Modal show={show} onHide={handlePopupClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className="text-center" >{popupMessage}</Modal.Body>
            </Modal>
        </div>
    );
};

export default UserUpdatePopup;
