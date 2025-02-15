import { JSX } from 'react';
import { ModalWithRedux } from 'features/modalWithRedux';
import { FormComponent } from 'entities/form';

export const MyModal = (): JSX.Element => {
  return (
    <ModalWithRedux>
      <FormComponent />
    </ModalWithRedux>
  );
};
