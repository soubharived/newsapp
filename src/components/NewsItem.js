import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, author, date, newsUrl, source } = this.props;
        return (
            <div className='my-3' style={{display: 'flex' , justifyContent: 'center' }}>
                <div className="card" style={{ width: "21rem"}}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                        <span className=" badge rounded-pill bg-danger" style={{ left: "90%", zindex: '1' }}> {source}</span>
                    </div>
                    <img src={imageUrl} className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text' ><small className='text-muted'>By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='blank' className="btn btn-sm btn-dark ">Read More</a>

                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem