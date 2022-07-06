const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <div className="errorDiv">
                    <p>Oops, sorry we can't find this page</p>
                </div>
                <div>
                    <img className="errorImage" src="/images/404.jpg" alt="Laptop with code displayed" />
                    <div>
                        Photo by <a href="https://unsplash.com/@clemhlrdt">Clément Hélardot</a> on <a href="https://unsplash.com">Unsplash</a>
                    </div>
                </div>
                <p>Oops, sorry we can't find this page</p>
            </main>
        </Def>
    )
}

module.exports = error404