import React, { useEffect, useRef } from 'react';

import { ButtonApp } from '../button';

import { ModalProps } from './types';

import styles from './styles.module.scss';

export const BaseModal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      className={`${styles.modal} ${isOpen ? styles.open : styles.closed}`}
      ref={modalRef}
      onClick={handleOverlayClick}
      aria-hidden
    >
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <ButtonApp onClick={onClose}>Close</ButtonApp>
        </div>
        {children}
      </div>
    </div>
  );
};
