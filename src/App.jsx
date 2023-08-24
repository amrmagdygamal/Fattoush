


function App() {

  return (
    <>
      <div className="container">
        <div className="card">
          <img className="logo" style={{ width: "8rem", borderRadius: "2rem", marginBottom: "1rem" }} src="/fatt-big-logo.jpg" alt="" />
          <h3 className="m-title">Fattoush Restaurant</h3>
          <p className="intro-parag">Thank you for your visit, please leave us review on</p>
          <div className="nav-btns">
            <button className="nav-btn">
              <a href="https://bit.ly/3KVjW4u?r=lp" target="_blank" className="nav-btn" rel="noreferrer"><img src="/trapadvisor.jpg" alt="trapadisor icon" /> <h3>Tripadvisor Review</h3></a>
            </button>
            <button className="nav-btn">
            <a  href="https://bit.ly/3KVjW4u?r=lp" target="_blank" className="nav-btn" rel="noreferrer"><img src="/google.jpg" alt="google" /> <h3>Google Review</h3></a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
