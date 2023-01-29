import React, {Component} from 'react';
import Router from "next/router";
class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <div className="btn btn-primary" onClick={() => Router.push("/openai-image-generate")}>OpenAI Image Generation</div>
                    <div className="btn btn-primary mt-2" onClick={() => Router.push("/openai-completion")}>OpenAI Completion</div>
                    <div className="btn btn-primary mt-2" onClick={() => Router.push("/cohere-text-generation")}>Cohere Text Generation</div>
                </div>
            </div>
        );
    }
}

export default Home;