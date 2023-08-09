import './popu.css'

const PopUp = ({ isOpen, onclose }) => {
  if (!isOpen) return null

  return (
    <div>
      <div class="popup-card">
        <div class="popup-card-content">
          <p class="popup-card-title">Card hover effect</p>
          <p class="popup-card-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PopUp
