import { SubmitHandler, useForm } from 'react-hook-form';
import { IPassengerRequestAction } from '@/apis/dto/passenger';
import { TextFieldProps } from '@mui/material';
import { usePassengerStore } from '@/stores/usePassengerStore';

type FilterForm = IPassengerRequestAction['where'];

const useFilterLogical = () => {
  //
  const { setFilter, filter } = usePassengerStore();
  const { handleSubmit, control, reset } = useForm<FilterForm>({
    defaultValues: filter.where,
  });

  const formFields: Record<keyof FilterForm, TextFieldProps> = {
    first_name: {
      placeholder: 'First Name',
      type: 'text',
    },
    phone: {
      placeholder: 'Phone Number',
      type: 'text',
      inputMode: 'numeric',
      onInput: (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const value = target.value;
        const newValue = value.replace(/[^0-9]/g, '');
        target.value = newValue;
      },
    },
  };

  const formFieldsNames = Object.keys(formFields) as (keyof FilterForm)[];

  const onSubmit: SubmitHandler<FilterForm> = (data) => {
    setFilter({
      where: data,
      sort: 'createdAt DESC',
      limit: 30,
      offset: 0,
    });
  };

  const handleReset = () => {
    reset({
      first_name: '',
      phone: '',
    });

    setFilter({
      where: {
        first_name: '',
        phone: '',
      },
      sort: 'createdAt DESC',
      limit: 30,
      offset: 0,
    });
  };

  return {
    formFields,
    formFieldsNames,
    onSubmit,
    handleSubmit,
    control,
    handleReset,
  };
};

export default useFilterLogical;
