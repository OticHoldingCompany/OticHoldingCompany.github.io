// variables
const password = sessionStorage.getItem('password');
const maintenancePassword = "tomato"; // Set your maintenance password here

// check if correct password
const checkPassword = (input) => {
    if (input === null || input.trim() === "") {
        return false;
    }
    if (input == maintenancePassword) {
        sessionStorage.setItem('password', input);
        return true;
    } else {
        return false;
    }
}

const showContent = (value) => {
    if (value) {
        // If the value is true, show the main content
        document.getElementById('maintenance')?.setAttribute('hidden', '');
        document.getElementById('default-main')?.removeAttribute('hidden');
    } else {
        // If the value is false, show the maintenance page
        document.getElementById('default-main')?.setAttribute('hidden', '');
        document.getElementById('maintenance')?.removeAttribute('hidden');
    }
}

// check maintenance form
const maintenanceForm = (input) => {
    if (checkPassword(input)) {
        // Password is correct, allow access
        const msg = "Access granted: You are free to view this website in this session.";
        console.log(msg);
        showContent(true);
        document.getElementById('maintenance-password')?.removeAttribute('error', '');
        alert(msg);
    } else {
        // Password is incorrect, deny access
        const msg = "Access denied: Invalid password.";
        console.log(msg);
        showContent(false);
        document.getElementById('maintenance-password')?.setAttribute('error', ''); // Clear the input field error
        alert(msg);
    }
}

// check if the session already has the password
const maintenanceSessionPass = () => {
    if (password) {
        // If a password is already stored, check it
        if (checkPassword(password)) {
            console.log("Access granted: Valid stored password.");
            showContent(true);
        } else {
            console.log("Access denied: Invalid stored password.");
            showContent(false);
        }
    }
}

// add event listener to the maintenance form submission
document.getElementById('maintenance-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = this.elements['password'].value;
    console.log("Password entered:", input);
    maintenanceForm(input);
});
// auto check session password
maintenanceSessionPass();
