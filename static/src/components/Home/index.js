import React from 'react';
import Dropzone from 'react-dropzone'

export const Home = () => 
    <section>
        <div className="container text-center">
            <h1>Welcome to Keras Model Builder</h1>
            <Dropzone onDrop = {(files) => {console.log(files)}} className='upload-box'>
                <p> Drag and drop your keras model or click to upload</p>
            </Dropzone>
        </div>
    </section>