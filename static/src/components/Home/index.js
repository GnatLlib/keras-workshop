import React from 'react';
import Dropzone from 'react-dropzone'
import PropTypes from 'prop-types'

export const Home = (props) => {
    console.log(props)
    return (
    <section>
        <div className="container text-center">
            <h1>Welcome to Keras Model Builder</h1>
            <Dropzone onDrop = {(files) => props.onDrop(files)} className='upload-box'>
                <p> Drag and drop your keras model or click to upload</p>
            </Dropzone>
        </div>
    </section>
    )
}