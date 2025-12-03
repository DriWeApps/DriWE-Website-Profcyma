"use client"
import React from "react"
import { Modal } from "react-bootstrap"

function Image_Preview({ showModal, setShowModal, modalImage }) {
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="md"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Document Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {modalImage ? (
            <img
              src={modalImage}
              alt="Preview"
              style={{
                width: "300px",
                height: "300px",
                objectFit:"contain",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0,0,0,0.15)",
              }}
            />
          ) : (
            <p>No image selected.</p>
          )}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Image_Preview
