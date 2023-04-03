import * as React from 'react';
import type { PropsWithChildren } from 'react';

import Modal from 'react-modal';

import './modal.css';

Modal.setAppElement('*');

interface InjectedProps extends PropsWithChildren {
  openModal: () => void;
  closeModal: () => void;
  isOpenModal: boolean;
  children: React.ReactNode;
}

function ModalElement(props: InjectedProps) {
  const { closeModal, isOpenModal, children } = props;
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <div className="reveal">
      <Modal isOpen={isOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <div className="ml-24 mr-24">{children}</div>
      </Modal>
    </div>
  );
}

export default ModalElement;
