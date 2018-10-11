import React from "react";
import Dropzone from "react-dropzone";
import Button from "material-ui/FloatingActionButton";
import AddIcon from "material-ui/svg-icons/content/add";

export const Home = props => {
    console.log(props);

    const onDrop = files => {
        const reader = new FileReader();
        reader.onload = () => {
            const modelText = reader.result;
            props.onDrop(modelText);
        };

        reader.readAsBinaryString(files[0]);
    };
    return (
        <section>
            <div className="container text-center">
                <h1>Welcome to Keras Model Builder</h1>
                <Dropzone onDrop={onDrop} className="upload-box">
                    <p> Drag and drop your keras model or click to upload</p>
                </Dropzone>
                <div className="create-button">
                    <Button
                        color="primary"
                        aria-label="Add"
                        className="create-button-icon"
                    >
                        <AddIcon />
                    </Button>
                    Click to create new model
                </div>
            </div>
        </section>
    );
};
