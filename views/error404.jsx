const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <div>
                <img src="/images/cat.jpg" alt="kitten" />
              <div>
                Photo by <a href="https://flickr.com/photos/lachlanrogers/"></a> Lachlan Rodgers on <a href="https://placekitten.com/">Place Kitten</a>
              </div>
          </div>
        </main>
      </Def>
    )
  }

  module.exports = error404