import React, { Component } from "react";
import { connect } from "react-redux";
import { createFish } from "../actions/fishActions";
import { Redirect } from "react-router-dom";

class AddFish extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeSex = this.onChangeSex.bind(this);
        this.saveFish = this.saveFish.bind(this);

        this.state = {
            name: "",
            type: "",
            age: "",
            sex: "",
            redirect: false,
        };
    }
    
    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
    }
    onChangeType(e) {
        this.setState({
            type: e.target.value,
        });
    }
    onChangeAge(e) {
        this.setState({
            age: e.target.value,
        });
    }
    onChangeSex(e) {
        this.setState({
            sex: e.target.value,
        });
    }
    saveFish() {
        const { name, type, age, sex } = this.state;
        this.props.createFish(name, type, age, sex).then(() => {
            this.setState({
                redirect: true,
            });
        });
    }

    render() {
        const { redirect } = this.setState;
        if (redirect) {
            return <Redirect to="/" />;
        }
        return (
            <div className="submit-form">
                <div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="name"
                            required
                            value={this.state.name}
                            onChange={this.onChangeName}
                            name="name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <input
                            type="text"
                            className="form-control"
                            id="type"
                            required
                            value={this.state.type}
                            onChange={this.onChangeType}
                            name="type"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input
                            type="text"
                            className="form-control"
                            id="age"
                            required
                            value={this.state.age}
                            onChange={this.onChangeAge}
                            name="age"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sex">Sex</label>
                        <input
                            type="text"
                            className="form-control"
                            id="sex"
                            required
                            value={this.state.sex}
                            onChange={this.onChangeSex}
                            name="sex"
                        />
                    </div>
                    <button onClick={this.saveFish} className="btn btn-success">
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(null, { createFish })(AddFish);