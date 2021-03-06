import React, { Component } from 'react';

import ExampleContainer from '../ExampleContainer';

import { Swiper, Swipe } from '../../src/index';
import '../../src/react-chayns-swiper/index.scss';

export default class Example extends Component {
    render() {
        return(
            <ExampleContainer headline="Swiper">
                <Swiper
                    setHeight={(width) => { return width; }}
                    overlay={(
                        <div className="swiper-overlay">
                            <div className="swiper-overlay--title">
                                Technology
                            </div>
                        </div>
                    )}
                >
                    <Swipe image="http://lorempixel.com/output/technics-q-g-640-480-1.jpg">
                    </Swipe>
                    <Swipe image="http://lorempixel.com/output/technics-q-g-640-480-7.jpg">
                    </Swipe>
                    <Swipe
                        image="http://lorempixel.com/output/technics-q-g-640-480-4.jpg"
                        onClick={() => {
                            console.log('click3');
                        }}
                    >
                    </Swipe>
                </Swiper>
            </ExampleContainer>
        );
    }
}
