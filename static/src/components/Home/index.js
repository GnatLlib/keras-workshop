import React from 'react';
import Dropzone from 'react-dropzone'
import PropTypes from 'prop-types'

export const Home = (props) => {
    console.log(props)

    const onDrop = (files) => {
        const reader = new FileReader();
        reader.onload = () => {
            const modelText = reader.result;
            console.log(modelText)
            props.onDrop(modelText)
        }
        
        reader.readAsBinaryString(files[0]);
    }
    return (
    <section>
        <div className="container text-center">
            <h1>Welcome to Keras Model Builder</h1>
            <Dropzone onDrop = {onDrop} className='upload-box'>
                <p> Drag and drop your keras model or click to upload</p>
            </Dropzone>
        </div>
    </section>
    )
}