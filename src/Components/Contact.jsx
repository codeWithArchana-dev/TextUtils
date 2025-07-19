import React, { useState } from 'react';
import{Link} from 'react-router-dom';

export default function Contact(props) {

  let myStyle = {
    color: props.mode==='dark'?'white':'#212529',
    backgroundColor:props.mode==='dark'?'#212529':'white'

  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for reaching out, ${formData.name}!`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4"style={{ color: props.mode==='dark'?'white':'#212529'}}>Contact Us</h2>
      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6 col-sm-12"style={myStyle}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input 
                type="text"placeholder="Enter Your Name" style={myStyle}
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input style={myStyle} 
                type="email"placeholder="Enter Your Name" 
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea style={myStyle}
                className="form-control"placeholder="Type Something Here"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required 
              />
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="col-md-6 col-sm-12"style={myStyle}>
          <h5>📍 Address:</h5>
          <p className='ms-2'>Khora Colony Near Kavita Palace,Ghaziabad</p>

          <h5>📞 Phone:</h5>
          <p className='ms-2'>+91-8707586243</p>

          <h5>✉️ Email:</h5>
          <p className='ms-2'>archana10122004@gmail.com</p>

          <h5>🔗 Follow Us:</h5>
          <p className='ms-2'>
            <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</Link> |{' '}
            <Link to="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</Link> |{' '}
            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

