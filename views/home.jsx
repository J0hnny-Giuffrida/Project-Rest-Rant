const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img className="homeImage" src="/images/beef-bowl.jpg" alt="Beef Bowl" />
                    <div>
                        Photo by <a href="https://unsplash.com/@lvnatikk">Lily Banse</a> on <a href="https://unsplash.com">Unsplash</a>
                    </div>
                </div>
                <h3>
                    <a href="/places">
                        <button className="btn-primary">Places Page</button>
                    </a>
                </h3>
            </main>
        </Def>
    )
}

module.exports = home