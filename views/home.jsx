const React = require('react')
const Def = require('./default')


function home () {
    return (
      <Def>
        <main>
          <h1>HOME</h1>
            <div>
              <img src="/images/foodPhotoBE.avif" alt="Chia Fruit Shake" />
            <div>
              Photo by <a href="https://unsplash.com/@cravethebenefits">Brenda Godinez</a> on <a href="https://unsplash.com">Unsplash</a>
            </div>
          </div>
        </main>
        <div className="placesBtn">
          <a href="/places">
            <button className="btn-primary">Places Page</button>
          </a>
        </div>
      </Def>
    )
  }

  module.exports = home
  