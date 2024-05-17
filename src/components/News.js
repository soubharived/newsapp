import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import staticData from './staticData';

export class News extends Component {


    static defaultProps = {
        country: "in",
        pagesize: 6,
        category: "general"
    }
    static propsTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string
    }
    capatalizeFirstletter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capatalizeFirstletter(this.props.category)}-News-Monkey`;

    }


    async updatePage() {
        this.props.setProgress(10);
        console.log(this.props.country);
        console.log(this.props.category);


        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        this.setState({ loading: true })

       let data
        try {
            data = await fetch(url);
            
        } catch (error) {
            data = staticData;
            
        }
        this.props.setProgress(30);
        let parsedData
        try {
         parsedData = await data.json();
            
        } catch (error) {
            parsedData= data
        }
        this.props.setProgress(70);



        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
        console.log(this.state.totalResults);




    }



    async componentDidMount() {
        //    console.log(this.props.category)
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7480b090cd5540dfabc9d80edc73e5da&page=1&pageSize=${this.props.pagesize}`;
        //     this.setState({loading: true})
        //     let data = await fetch(url);
        //     let parsedData = await data.json();


        //     this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults  , loading: false})
        this.updatePage();


    }

    // handleNextClick = async () => {


    //     if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pagesize)) {

    //         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7480b090cd5540dfabc9d80edc73e5da&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
    //         // this.setState({loading: true})
    //         // let data = await fetch(url);
    //         // let parsedData = await data.json();



    //         // this.setState({
    //         //     page: this.state.page + 1,
    //         //     articles: parsedData.articles,
    //         //     loading:false
    //         // })
    //         this.setState({ page: this.state.page + 1 })
    //         this.updatePage();
    //     }



    // }
    // handlePreClick = async () => {


    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7480b090cd5540dfabc9d80edc73e5da&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
    //     // this.setState({loading: true})

    //     // let data = await fetch(url);
    //     // let parsedData = await data.json();



    //     // this.setState({
    //     //     page: this.state.page - 1,
    //     //     articles: parsedData.articles,
    //     //     loading: false
    //     // })
    //     this.setState({ page: this.state.page - 1 })
    //     this.updatePage();
    // }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        this.setState({ loading: true })

        let data
        try {
             data = await fetch(url);
            
        } catch (error) {
            data = staticData;
            
        }
        let parsedData
        try {
        parsedData = await data.json();
            
        } catch (error) {
            parsedData= data;
            
        }


        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })


    };

    render() {

        return (
            <div  >
                
                    <h1 className='text-center my-3'>News-Monkey top headlines</h1>
                    {/* {this.state.loading && <Spinner/>} */}

                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={this.state.loading && <Spinner />}
                    >
                        <div  className="container"> 
                            <div  className="row">
                                {this.state.articles.map((element) => {
                                   return <div className="col-md-4" key={element.url}>
                                        <NewsItem title={element.title != null ? element.title.slice(0, 45): ""} description={element.description != null ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage != null ? element.urlToImage : "https://cdn.vox-cdn.com/thumbor/KtdyGv-4uFr5ujHeSMmN2si8Vok=/0x0:5472x3648/1200x628/filters:focal(1270x2242:1271x2243)/cdn.vox-cdn.com/uploads/chorus_asset/file/24590577/DB2023AU00345.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                })}

                            </div>
                        </div>
                    </InfiniteScroll>
                    {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1 || this.state.loading} type='button' className="btn btn-dark mx-3" onClick={this.handlePreClick}>&larr; Prevous</button>
                    <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pagesize) || this.state.loading} type='button' className="btn btn-dark mx-3" onClick={this.handleNextClick}>next &rarr;</button>
                </div> */}






                
            </div>
        )
    }

}
export default News