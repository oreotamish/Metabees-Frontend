import { useState } from 'react'
import './waitlist.css'

export default function Waitlist() {
  const [isModalOpen, setModalOpen] = useState(false)

  const onSubmit = () => {
    setModalOpen(true)
    setTimeout(() => {
      setModalOpen(false)
    }, 10000)
  }

  // Check whether the input fields are empty or not
  // If empty, show error message
  // If not empty, send the data to the backend
  // If the data is sent successfully, show the modal
  // If the data is not sent successfully, show the error message
  const validate = () => {
    const name = document.getElementsByName('name')[0].value
    const email = document.getElementsByName('email')[0].value
    if (name === '' || email === '') {
      alert('Please fill all the fields')
    } else {
      onSubmit()
    }
  }

  return (
    <div className="waitlist-bg">
      <div>
        <form className="waitlist-form">
          <div className="waitlist-form-title">
            <span>Apply for </span>
          </div>
          <div className="waitlist-title-2">
            <span>BETA</span>
          </div>
          <div className="waitlist-input-container">
            <input
              className="waitlist-input-mail"
              name="name"
              type="email"
              placeholder="Enter name"
            />
            <span> </span>
          </div>

          <section className="waitlist-bg-stars">
            <span className="waitlist-star"></span>
            <span className="waitlist-star"></span>
            <span className="waitlist-star"></span>
            <span className="waitlist-star"></span>
          </section>

          <div className="waitlist-input-container">
            <input
              className="waitlist-input-pwd"
              name="email"
              type="e-mail"
              placeholder="Enter e-mail"
            />
          </div>
          <button type="button" className="waitlist-submit" onClick={validate}>
            <span className="sign-text">Join waitlist</span>
          </button>
        </form>
        {isModalOpen && (
          <div className="waitlist-modal" id="modal">
            <div className="waitlist-card">
              <div className="waitlist-card-content">
                <p className="waitlist-card-title">🏆Congrats🏆</p>
                <p className="waitlist-card-para">
                  You have successfully applied for the waitlist.Keep an eye on
                  yor email for further updates
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
