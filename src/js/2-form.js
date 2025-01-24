let formData = {
    email: "",
    message: "",
};

const feedbackForm = document.querySelector(".js-feedback-form");

const fillForm = () => {
    try {
         if (localStorage.length === 0) {
            return;
        };
        const formDataFromLs = JSON.parse(localStorage.getItem("feedback-form-state"));

        formData = formDataFromLs;

        for (const key in formDataFromLs) {
            feedbackForm.elements[key].value = formDataFromLs[key];
        }
    } catch (error) {
        console.log(error);
    };
};

fillForm();

const onFormInput = event => {
    const formFieldEl = event.target;
    const formFieldElValue = formFieldEl.value;
    const formFieldName = formFieldEl.name;

    formData[formFieldName] = formFieldElValue;

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

const onFormSubmit = event => {
    event.preventDefault();

    const hasEmptyFields = Object.values(formData).some(value => value === '');
    
    if (hasEmptyFields) {
        alert('Please fill all fields');
    } else {
        console.log(formData);

        const formEl = event.currentTarget;
        formEl.reset();
        localStorage.removeItem("feedback-form-state");
        formData.email = "";
        formData.message = "";
    }
};

feedbackForm.addEventListener('input', onFormInput);
feedbackForm.addEventListener('submit', onFormSubmit)