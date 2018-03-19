/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

export default class Step3 extends React.Component {
    static contextTypes = {
        nextStep: PropTypes.func,
        stepComplete: PropTypes.func,
        previousStep: PropTypes.func
    };

    nextStep = this.context.nextStep;
    stepComplete = this.context.stepComplete;
    previousStep = this.context.previousStep;

    render() {
        return (
            <div className="accordion__content">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore
                    et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                    rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <div className="input-group">
                    <input
                        className="input"
                        type="text"
                        id="requiredInput"
                        required
                        style={{ marginBottom: '10px' }}
                        onKeyUp={(response) => {
                            this.stepComplete(response.target.value !== '');
                        }}
                    />
                        <label>Eingabe</label>
                </div>
                <div
                    style={
                        {
                            textAlign: 'center'
                        }
                    }
                >
                    {/* <div */}
                        {/* className="button" */}
                        {/* style={{ marginRight: '10px' }} */}
                        {/* onClick={() => { */}
                            {/* this.previousStep(); */}
                        {/* }} */}
                    {/* > */}
                        {/* Zurück */}
                    {/* </div> */}
                    <div
                        className="button"
                        onClick={() => {
                            this.nextStep();
                        }}
                    >
                        Weiter
                    </div>
                </div>
            </div>
        );
    }
}
