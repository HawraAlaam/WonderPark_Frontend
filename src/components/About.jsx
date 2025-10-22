const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-header">Welcome to WonderPark! 🎢</h1>

      <div className="about-content">
        <div className="about-text">
          <p>🌟 <strong>WonderPark</strong> is your ultimate destination for <span style={{color: '#FF5722'}}>FUN, ADVENTURE, and MAGICAL MEMORIES!</span></p>

          <p>🎯 Where every visit becomes an unforgettable journey through imagination and excitement!</p>
        </div>

        <div className="about-features">
          <div className="feature">🎮 Thrilling Rides & Games</div>
          <div className="feature">🎨 Creative Activities</div>
          <div className="feature">👨‍👩‍👧‍👦 Family Fun</div>
          <div className="feature">🎪 Live Entertainment</div>
        </div>

        <div className="about-text">
          <p>✨ Discover a world where:</p>
          <ul style={{textAlign: 'left', marginLeft: '2rem', color: '#5D4037'}}>
            <li>Every ride tells an exciting story</li>
            <li>Laughter fills the air</li>
            <li>Creativity meets adventure</li>
            <li>Memories are made every minute!</li>
          </ul>
        </div>

        <div className="about-cta">
          🎉 JOIN THE FUN TODAY! 🎉<br />
          Where Wonder Comes to Life!
        </div>
      </div>
    </div>
  )
}

export default About
