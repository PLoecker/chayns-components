import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ControlButton from './ControlButton';
import AmountInput from './AmountInput';

export default class AmountControl extends React.Component {

    static propTypes = {
        amount: PropTypes.number,
        onChange: PropTypes.func,
        onAdd: PropTypes.func,
        onRemove: PropTypes.func,
        equalize: PropTypes.string,
        disabled: PropTypes.bool,
        disableInput: PropTypes.bool
    };

    static defaultProps = {
        amount: 0
    };


    constructor() {
        super();

        this.state = {
            tempValue: null
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            tempValue: null
        });
    }

    addItem = () => {
        const {amount, onAdd} = this.props;

        if(onAdd) onAdd();

        this.changeAmount(amount + 1);
    };

    removeItem = () => {
        const {amount, onRemove} = this.props;

        if(onRemove) onRemove();

        if(amount - 1 >= 0) {
            this.changeAmount(amount - 1);
        }
    };

    changeAmount = (amount) => {
        const {onChange} = this.props;

        if(onChange) {
            onChange(amount);
        }
    };

    onInput = (value) => {
        this.setState({
            tempValue: value
        });
    };

    getRemoveIcon() {
        const {amount} = this.props;
        const {tempValue} = this.state;

        if(amount > 1 && tempValue > 1) return 'fa-minus';
        if(tempValue > 1) return 'fa-minus';
        if(amount > 1 && tempValue === null)  return 'fa-minus';

        return 'fa-trash fa-2x';
    }

    render() {
        const {amount, buttonText, equalize, disabled, disableInput} = this.props;

        const className = classnames('amount-control', {
            'amount-control--active': amount > 0
        });

        return(
            <div
                className={className}
                ref={(node) => this.node = node}
            >
                <ControlButton
                    icon={this.getRemoveIcon()}
                    onClick={this.removeItem}
                    disabled={disabled}
                    className="amount-control__remove"
                />
                <AmountInput
                    amount={amount}
                    onChange={this.changeAmount}
                    onInput={this.onInput}
                    onAdd={this.addItem}
                    buttonText={buttonText}
                    disabled={disabled}
                    disableInput={disableInput}
                    equalize={equalize}
                />
                <ControlButton
                    icon="fa-plus"
                    onClick={this.addItem}
                    disabled={disabled}
                    className="amount-control__add"
                />
            </div>
        );
    }
}