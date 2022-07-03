const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
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