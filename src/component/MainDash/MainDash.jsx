import React, { useState } from "react";
import step1gif from "../../assets/img/goal.png";
import step2gif from "../../assets/img/addfriend.png";
import step3gif from "../../assets/img/payperclick.png";
import step4gif from "../../assets/img/giftcard.png";
import arrow from "../../assets/img/Arrow2.png";
import "./MainDash.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const MainDash = () => {
  const defaultSteps = [
    { icon: step1gif, content: "set your goal" },
    { icon: step2gif, content: "create or Join Group" },
    { icon: step3gif, content: "Pay amount on time" },
    { icon: step4gif, content: "Earn Rewards" },
  ];

  const [steps, setSteps] = useState(defaultSteps);
  const [modalOpen, setModalOpen] = useState(false);
  const [newStepIcon, setNewStepIcon] = useState("");
  const [newStepContent, setNewStepContent] = useState("");
  const [newStepImage, setNewStepImage] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setNewStepIcon("");
    setNewStepContent("");
    setNewStepImage(null);
    setEditingIndex(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewStepImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const addStep = () => {
    if (newStepContent && newStepImage) {
      if (editingIndex !== null) {
        const updatedSteps = [...steps];
        updatedSteps[editingIndex] = {
          icon: newStepImage,
          content: newStepContent,
        };
        setSteps(updatedSteps);
        setEditingIndex(null);
      } else {
        setSteps([
          ...steps,
          { icon: newStepImage, content: newStepContent, isNew: true },
        ]);
      }
      closeModal();
    }
  };

  const removeStep = (index) => {
    const updatedSteps = [...steps];
    updatedSteps.splice(index, 1);
    setSteps(updatedSteps);
    setEditingIndex(null);
  };

  const editStep = (index) => {
    setEditingIndex(index);
    setNewStepIcon(steps[index].icon);
    setNewStepContent(steps[index].content);
    setModalOpen(true);
  };

  return (
    <div className="mainDash">
      <div className="heading">
        <h1>How it works</h1>
        <button onClick={openModal}>Add Step</button>
      </div>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className={`step ${step.isNew ? "fade-in" : ""}`}>
            <div className="content-arrow">
              <div className="content">
                <img src={step.icon} alt="icon" className="animated-icon" />
                <p>step {index + 1}:</p>
                <p>{step.content}</p>
                <div className="button-container">
                  <button onClick={() => removeStep(index)}>
                    <RiDeleteBin6Line />
                  </button>
                  <button onClick={() => editStep(index)}>
                    <FaRegEdit />
                  </button>
                </div>
              </div>

              {index < steps.length - 1 && (
                <img src={arrow} alt="arrow" className="arrow" />
              )}
              {index === steps.length - 1 && index > 0 && (
                <img src={arrow} alt="arrow" className="arrow" />
              )}
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal">
          <form>
            <h2>{editingIndex !== null ? "Edit Step" : "Add Step"}</h2>
            <label>
              Step Icon
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
            <label>
              Step Content
              <input
                type="text"
                value={newStepContent}
                onChange={(e) => setNewStepContent(e.target.value)}
              />
            </label>
            <button type="button" onClick={addStep}>
              {editingIndex !== null ? "Save Changes" : "Add Step"}
            </button>
            <button type="button" onClick={closeModal}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MainDash;
