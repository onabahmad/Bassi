# Bassi Assignement

## Overview

This React application provides a customizable step-by-step guide dashboard where users can add, edit, and delete steps with associated icons and content.

## How to Run Locally

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository

git clone https://github.com/your-username/step-by-step-guide-dashboard.git

2. Change into the project directory:
   cd bassi

3. Run the following command to start the development server:
   npm start

## Usage

The main dashboard displays the steps of the guide.
Click the "Add Step" button to open a modal for adding a new step.
Fill in the step icon, content, and upload an image.
Click "Add Step" in the modal to add the new step to the guide.
To edit a step, click the edit button on the step, make changes in the modal, and click "Save Changes."
To delete a step, click the delete button on the step.

## Design Decisions and Considerations

1. Component Structure
   The application is structured as a React component (MainDash) to manage the state of the step guide. The state includes the list of steps, modal visibility, and data for adding/editing steps.

2. Modal for Adding/Editing Steps
   A modal is used for a user-friendly interface to add or edit steps. The modal includes fields for the step icon, content, and an image upload option.

3. Image Handling
   The application allows users to upload images for step icons. The handleImageChange function uses the FileReader API to convert the selected image into a data URL for display.

4. State Management
   State is managed using the useState hook. The steps state holds the list of steps, and additional states manage the modal and new step data.

5. Dynamic Step Rendering
   The steps are dynamically rendered based on the data in the steps state array. This allows for a flexible and scalable approach to managing the guide.

6. Edit and Delete Functionality
   Users can edit and delete steps by interacting with the buttons provided on each step. The addStep, editStep, and removeStep functions handle these operations.

7. Styling
   Basic styling is applied using CSS to enhance the visual presentation of the step guide dashboard.
