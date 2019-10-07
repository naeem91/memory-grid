import React from "react";
import Modal from '@material-ui/core/Modal';

const modalStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    opacity: 0.7
};


class StatusModal extends React.Component{
    render(){
        return (
            <Modal open={this.props.modalOpen}>
                <div style={modalStyle}>
                    <h5 id="transition-modal-title">{ this.props.title }</h5>
                    <p id="transition-modal-description">{ this.props.description }</p>
                </div>
            </Modal>
        );
    }
}

export default StatusModal;
