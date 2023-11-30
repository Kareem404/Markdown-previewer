import React from "react";
import './MarkDownPrev.css'
import $ from 'jquery';
import { marked } from 'marked';

class MarkDownPrev extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            input: '', 
        }

        this.handleChange  = this.handleChange.bind(this)
    }

    handleChange(event){
        const parsedValue = marked(event.target.value, {gfm: true})
        $(".view-md-div").html(parsedValue)
        this.setState({
            input: event.target.value,
        })
    }

    render(){
        return(
        <div className="container-fluid">
            <h1 className="text-center title">MarkDown Previwer</h1>
            <hr/>
            
            <div className="row justify-content-center">
                <div className="col-md-5 write-div">
                    {/*write code here*/}
                    <p className="write text-center">
                        Write
                    </p>

                    <textarea rows = "14" className="text-area" onChange = {this.handleChange}></textarea>
                </div>

                <div className="col-md-7 prev-div">
                    <p className="preview text-center">
                        Preview
                    </p>
                    <div className="view-md-div">
                        
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default MarkDownPrev