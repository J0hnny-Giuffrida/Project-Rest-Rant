const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>
            No Comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <h2>
                    <img className="showImage" src={data.place.pic} alt="Show Food" />
                </h2>
                <h3>
                    Located in {data.place.city}, {data.place.state}
                </h3>
                <h2>Rating</h2>
                <div>
                    <p>Not Rated</p>
                </div>
                <h2>Description</h2>
                <div>
                    <p></p>
                </div>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>
                <h2>Comments:</h2>
                <div>
                    {comments}
                </div>
                <div>
                    <h3>
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                            Edit
                        </a>
                        <form method="POST" action={`places/${data.id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </h3>
                </div>
                <div>
                    <h1>Comment on {data.place.name}</h1>
                <form method="POST" action={`/places/${data.place.id}/comment`}>
                    <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" type="text" id="author" name="author" required />
                    </div>
                    </div>
                    <div className="row">
                    <div className="form-check col-sm-6">
                        <label htmlFor="rant">Rant</label>
                        <input className="form-check-input" type="checkbox" id="rant" name="rant" />
                    </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stars">Stars</label>
                        <input className="form-control" type='range' min='0' max='5' id="stars" name="stars" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <input className="form-control" type='textarea' id="content" name="content" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment" />
                </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show