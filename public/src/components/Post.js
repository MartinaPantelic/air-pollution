import React from 'react';
import { Container } from "react-bootstrap";

import citizens_masks from '../img/citizens_masks.jpg';
import fabrics from '../img/fabrics.jpg';

export default function Post() {


    return (

        <Container className="post">

            <div className="img-text mb-5">
                <h2>How does air pollution affect us?</h2>
                <img src={citizens_masks} alt="citizens_masks" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque explicabo aspernatur delectus voluptate, nesciunt quibusdam ab reprehenderit, non et temporibus. Aut commodi, voluptates nulla deleniti pariatur vitae vel eos sit asperiores aliquid,
        molestiae recusandae placeat corporis earum assumenda dolorem! Earum necessitatibus tempora enim nisi officiis in. Ducimus illo placeat eveniet.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque explicabo aspernatur delectus voluptate, nesciunt quibusdam ab reprehenderit, non et temporibus. Aut commodi, voluptates nulla deleniti pariatur vitae vel eos sit asperiores aliquid,
        molestiae recusandae placeat corporis earum assumenda dolorem! Earum necessitatibus tempora enim nisi officiis in. Ducimus illo placeat eveniet.</p>

            </div>
            <div className="text-img mb-5">

                <h2>What are the pollutants of main concern to air quality in USA?</h2>
                <img src={fabrics} alt="citizens-masks" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque explicabo aspernatur delectus voluptate, nesciunt quibusdam ab reprehenderit, non et temporibus. Aut commodi, voluptates nulla deleniti pariatur vitae vel eos sit asperiores aliquid,
        molestiae recusandae placeat corporis earum assumenda dolorem! Earum necessitatibus tempora enim nisi officiis in. Ducimus illo placeat eveniet.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque explicabo aspernatur delectus voluptate, nesciunt quibusdam ab reprehenderit, non et temporibus. Aut commodi, voluptates nulla deleniti pariatur vitae vel eos sit asperiores aliquid,
        molestiae recusandae placeat corporis earum assumenda dolorem! Earum necessitatibus tempora enim nisi officiis in. Ducimus illo placeat eveniet.</p>

            </div>


        </Container>

    )
}
