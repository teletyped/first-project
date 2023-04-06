import React from "react";
import './Table.css'
import Table from "./Table";
import { API_URL } from "../../core/constans";
import Loading from "../comman/Loading";
import Pagination from "./Pagination";

class List extends React.Component {
    constructor() {
        super()
        this.state = {

            currencies: [],
            isLoading: false,
            error: null,
            page: 1,
            perPage: 20,
            totalPages: 5,
        }

    }

    // componentDidUpdate(prevProps,prevState){
    //     if(prevState.page !== this.state.page){
    //     this.fetchCurrencies()
    //     }
    // }

    componentDidMount(){
    this.fetchCurrencies()
}
    fetchCurrencies = () =>{
        const { page, perPage } = this.state;
        const url = `${API_URL}page=${page}&per_page=${perPage}`
        this.setState({ isLoading: true })
        fetch(url).then(res => {
            if (res.status) {

                return res.json()
            }

            throw new Error('something went wrong')

        }).then((result) => {
            console.log(result, 'result');
            this.setState({ isLoading: false, currencies: result })

        }).catch((err) => {

            this.setState({ isLoading: false, error: err.message })
        })
    }

    renderChangePercent(percent) {
        if (percent > 0) {
            return <span className="percent-raised">{percent}% &uarr;</span>
        } else if (percent < 0) {
            return <span className="percent-fallen">{percent}% &uarr;</span>
        } else {
            return <span>{percent}</span>
        }
    }

    handleChangePagination = (isIncrement) =>{
     this.setState((prevState)=>{
    return {
    page : prevState.page + (isIncrement ? 1 : -1)
    }
}, this.fetchCurrencies)

    }

    render() {
        const { isLoading, error, currencies,page,totalPages } = this.state
        if (isLoading) {
            return <div className="loading-container"><Loading /></div>
        }
        if (error) {
            return <div>{error}</div>
        }
        return (
            <React.Fragment>
                <Table currencies={currencies} renderChangePercent={this.renderChangePercent} />
                <Pagination 
                page = {page} 
                totalPages = {totalPages}
                handleChangePagination = {this.handleChangePagination}/>
            </React.Fragment>
        )
    }


}




export default List