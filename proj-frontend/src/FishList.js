
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { retrieveFishies, deleteFish } from "../actions/fishActions";

class FishList extends Component {
    componentDidMount() {
        this.props.retrieveFishies();
    }
    removeFish = (id) => {
        this.props.deleteFish(id).then(() => {
            this.props.retrieveFishies();
        });
    };
    render() {
        const { fishies } = this.props;
        return (
            <div className="list row">
                <div className="col-md-6">
                    <h4>Fish List</h4>
                    <div>
                        <Link to="/add-fish">
                            <button className="button-primary">Add fish</button>
                        </Link>
                    </div>
                    <table className="u-full-width">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Age</th>
                                <th>Sex</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fishies && 
                                fishies.map(
                                    ({ id, name, type, age, sex }, i) => (
                                    <tr key={i}>
                                        <td>{name}</td>
                                        <td>{type}</td>
                                        <td>{age}</td>
                                        <td>{sex}</td>
                                        <td>
                                            <button onClick={() => this.removeFish(id)}>
                                                Delete
                                            </button>
                                            <Link to={`/edit-fish/${id}`}>
                                                <button>Edit</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pets: state.pets,
    };
};

export default connect(mapStateToProps, { retrieveFishies, deleteFish})(FishList);

