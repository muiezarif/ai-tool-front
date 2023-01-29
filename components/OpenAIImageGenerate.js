import React, {Component} from 'react';
import {connect} from "react-redux";
import {postPromptOpenAIImageGeneration} from "../redux/actions";
class OpenAiImageGenerate extends Component {
    state = {prompt:"",imageUrl:""}
    render() {
        const handleChange = (event) => {
            this.setState({ prompt: event.target.value });
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("handle submit")
            const data = {prompt:this.state.prompt}
            this.props.postPromptOpenAIImageGeneration(data).then((response) => {
                console.log("success")
                // console.log(response)
                console.log(this.props.responseData.response.url)
                this.setState({imageUrl:this.props.responseData.response.url})
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
                    {this.state.imageUrl ?<img src={this.state.imageUrl} width={300} height={300}/>:null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        responseData:state.openAIImageGenerate.openAIImageData
    };
}
export default connect(mapStateToProps,
    {postPromptOpenAIImageGeneration})(OpenAiImageGenerate);