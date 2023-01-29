import React, {Component} from 'react';
import {postPromptCoherentTextGeneration} from "../redux/actions/index.js"
import {connect} from "react-redux";
class CohereTextGeneration extends Component {
    state = {prompt:"",textResponse:""}
    render() {
        const handleChange = (event) => {
            this.setState({ prompt: event.target.value });
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("handle submit")
            const data = {prompt:this.state.prompt}
            this.props.postPromptCoherentTextGeneration(data).then((response) => {
                console.log("success")
                // console.log(response)
                console.log(this.props.responseData.response.text)
                this.setState({textResponse:this.props.responseData.response.text})
            }).catch(err =>{
                console.log(err)
            })
        }
        return (
            <div className="container d-flex height-100 align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center mx-auto">
                    <form onSubmit={handleSubmit}>
                        <input type="text" className="form-control" name="prompt" placeholder="Enter text here" onChange={handleChange} />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                    {this.state.textResponse?<p>{this.state.textResponse}</p>:null}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        responseData:state.cohereAITextGenerate.cohereTextData
    };
}
export default connect(mapStateToProps,
    {postPromptCoherentTextGeneration})(CohereTextGeneration);