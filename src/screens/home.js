import React, {Component} from 'react';
import './home.css';


export default class Home extends Component{

    constructor(props){
        super(props);
        this.state={
            count:1000000,
            table_data:null,
            name:null,
            email:null
        }
    }
    componentDidMount(){

        this._get_table_data();


    }

    _get_table_data =()=>{
        return fetch("http://127.0.0.1:8000/api/getrestaurants")
            .then((response)=>response.json())
            .then((responsejson)=>{
                this.setState({
                    table_data:responsejson
                })
            }).catch((err)=>{
                console.log("err is ",err)
            })
    };


    _renderTable =()=>{
        if(this.state.table_data != null){
            return (
                <table className={"table"}>
                    <thead>
                    <tr>
                        <td>
                            Restaurants Id
                        </td>
                        <td>Restaurants Name</td>
                        <td>Cuisines</td>
                        <td>Average cost for two</td>
                        <td>Currency</td>
                        <td>Has Table Booking</td>
                        <td>Has online Delivery</td>
                        <td>Aggregate Rating</td>
                        <td>Rating Color</td>
                        <td>Rating Text</td>
                        <td>Rating Votes</td>
                        <td>Location</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.table_data.map((data,index)=>{
                        return <tr key={index}>

                            <td>{data.restaurant_id}</td>
                            <td>{data.restaurant_name}</td>
                            <td>{data.cuisines}</td>
                            <td>{data.avg_cost_for_two}</td>
                            <td>{data.currency}</td>
                            <td>{data.has_table_booking}</td>
                            <td>{data.has_online_booking}</td>
                            <td>{data.agg_rating}</td>
                            <td><p style={{backgroundColor:data.rating_color,borderRadius:20,width:20,height:20}}></p></td>
                            <td>{data.rating_text}</td>
                            <td>{data.votes}</td>
                            <td><button className={'btn btn-primary'} onClick={()=>{ this.props.history.push('/map')}}>Loaction</button></td>
                        </tr>
                    })}

                    </tbody>

                </table>
            )
        }

    }




    render(){
            console.log(this.state.name);
        return(
            <div className="container-fluid" style={{width:"100%",overflow:'hidden',justifyContent:'center',alignItem:'center'}}>
                <header className="App-header" style={{height:10}}>
                    <p className="header" >Restaurants Finder App</p>
                </header>
                <div className="container options">
                    <div className='row'>
                        <div className="col-md-4">
                            <span> Sort By: &nbsp; &nbsp;
                                <input type="radio" name="sortby" value="1"/> &nbsp; &nbsp;Vote &nbsp; &nbsp;
                                <input type="radio" name="sortby" value="2"/> &nbsp; &nbsp; Rating &nbsp; &nbsp;
                                <input type="radio" name="sortby" value="1"/> &nbsp; &nbsp; Average cost for two &nbsp; &nbsp;

                            </span>
                        </div>
                        <div className="col-md-4">

                            <input type={"text"} onChange={(e)=>this.setState({name:e.target.value})}/>
                            <input type={"text"} onChange={(e)=>this.setState({email:e.target.email})}/>

                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>

                <div className="container" style={{width:"100%"}}>
                    {this._renderTable()}
                </div>


            </div>
        );

    }

}