import { useState } from 'react'
import './waitlist.css'

export default function Waitlist() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      let res = await fetch('http://localhost:3000/waitlist', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      })
      let resJson = await res.json()
      if (res.status === 200) {
        setName('')
        setEmail('')
        setModalOpen(true)
        setTimeout(() => {
          setModalOpen(false)
        }, 10000)
      } else {
        alert(resJson.message)
      }
    } catch (err) {
      console.log(err)
    }
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
              value={name}
              type="text"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              type="e-mail"
              placeholder="Enter e-mail"
              onChange={(e) => setEmail(e.target.value)}
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
