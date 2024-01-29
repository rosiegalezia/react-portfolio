import React, { useState } from 'react';
import './Components.css'

function Form() {
    // Setting the component's initial state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (event) => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        if (name === 'subject') {
            value = value.substring(0, 15);
        }
        // Updating the input's state
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = (event) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!formData.name || !formData.email) {
            alert('Fill out your name and email address please!');
        } else if (!formData.message) {
            alert(
                `Please enter a message`
            );
        } else {
            alert(`Thank you for reaching out ${formData.name}. I'll get back to you as soon as possible`);
        }

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
        <div>
            <form className="form p-5">

                <h3 className="mb-5">Please fill out the form below to pop me an email and I'll get back to you as soon as possible.</h3>
                
                <input
                    className='p-2 my-3 input w-100'
                    value={formData.name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    className='p-2 my-3 input w-100'
                    value={formData.email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    className='p-2 my-3 input w-100'
                    value={formData.subject}
                    name="subject"
                    onChange={handleInputChange}
                    type="subject"
                    placeholder="Subject"
                />
                <input
                    className='p-2 my-3 py-5 input w-100'
                    value={formData.message}
                    name="subject"
                    onChange={handleInputChange}
                    type="subject"
                    placeholder="Message"
                />
                <button onClick={handleFormSubmit} className='p-3 submitBtn w-100'>Submit</button>
            </form>
        </div>
    );
}

export default Form;
