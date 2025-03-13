    //Funtction to simulate user interaction (e.g., clicking on a button)
function simulate simulateUserInteraction(){
    //Get the button element
    const button= document.querySelector('button');
    //Simulate a click on the button
    button.click();
}
    //Function to validate the form
function validateForm(){
    //Get the form elements
    const nameInput= document.getElementById('name');
    const emailInput= document.getElementById('email');
    const PhoneInput= document.getElementById('phone');

    //Check if the form fields are empty 
    if(nameInput.value === '' || emailInput.value === '' || passwordInput.value === '' || PhoneInput.value === '') {
        alert ('please fill out all fields.');
        return false; 
    
}
    //CHeck if the email is valid
    const emailRegex=/^{a-zA-ZO-9._%+-]+@{a-zA-ZO-9.-]{2,}$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Invalidemailaddress.');
        return false;
    }
    // Check if the phone number is valid
    const phoneRegex = /^\d{3}-\d{4}$/;
    if (!phoneRegex.test(PhoneInput.value)) {
        alert ('Invalid Phone Number. Please use the format xxx-xxx-xxxx');
        return false;
    }
    // if all fields are valid, submit the form
    return true;
}

    // Function to store feedback 
function storeFeedback () {
    // Get the feedback input element
    const feedbackInput = document.getElementById ('feedback');
    // get the feedback text
    const FeedbackText = feedbackInput.value;

    //store the feedback in local storage
    localStorage.setItem('feedback', feedbackText);
    //clear the feedback input field 
    feedbackInput.value = '';
}

    //Function to calculate the number of visitors to the site 
function calculateVisitors () {
    //get the current visitor count from local storage 
    let visitorCount = localStorage.getItem('visitorCount');

    //If the visitor count is not set, set it to 1
    if (visitorCount === null) {
        visitorCount = 1;
    } else {
        //Otherwise, increment the visitor count 
        visitorCount = parseInt(visitorCount) + 1;
    }
    //store the updated visitor count in local storage 
        localStorage.setItem('visitorCount', visitorCount);

    //display the visitor count on the page 
    const visitorCountElement = document.getElementById('visitor-count');
    visitorCountElement.textContent = 'Visitorcount: ${visitorCount}';
}

     //Function to display the stored freedback
function displayFeedback () {
    //Get thestored feedback from local storage
    
    const feedback= localStorage.getItem('feedback');
    
    //if feedback is stored, display it on the page 
    if (feedback !== null) {
        const feedbackElement = document.getElementById('feedback-display');
    }
}

    //call the functions on page load 
document.addEventListener('DOMContent-Loaded',() => {
    calculateVisitors();
    displayFeedback();
});
