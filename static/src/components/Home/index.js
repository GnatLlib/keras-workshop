import React from "react";
import Dropzone from "react-dropzone";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ModelContainer from "../../containers/ModelContainer";

export const Home = props => {
    const onDrop = files => {
        const reader = new FileReader();
        reader.onload = () => {
            const modelText = reader.result;
            props.onDrop(modelText);
        };

        reader.readAsBinaryString(files[0]);
    };

    const uploadModel = () => {
        return (
            <div className="container text-center">
                <h1>Welcome to Keras Model Builder</h1>
                <Dropzone onDrop={onDrop} className="upload-box">
                    <p> Drag and drop your keras model or click to upload</p>
                </Dropzone>
                <div className="create-button">
                    <Button
                        variant="fab"
                        color="primary"
                        aria-label="Add"
                        className="create-button-icon"
                    >
                        <AddIcon />
                    </Button>
                    Click to create new model
                </div>
            </div>
        );
    };
    return (
        <section>
            {props.model.model ? <ModelContainer /> : uploadModel()}
        </section>
    );
};
