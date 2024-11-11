import { Button, Stack, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import useFilterLogical from './filters.hook';

const FilterSection = () => {
  const { control, formFields, formFieldsNames, handleReset, handleSubmit, onSubmit } =
    useFilterLogical();

  return (
    <Stack component={'form'} direction="row" onSubmit={handleSubmit(onSubmit)}>
      <Stack
        direction={{
          xs: 'column',
          md: 'row',
        }}
        width="100%"
        spacing={3}
      >
        {formFieldsNames.map((fieldName) => (
          <Controller
            key={fieldName}
            name={fieldName}
            control={control}
            render={({ field, formState }) => {
              const isError = !!formState.errors[fieldName];

              return (
                <TextField
                  {...formFields[fieldName]}
                  {...field}
                  error={isError}
                  size="small"
                  sx={{
                    bgcolor: 'white',
                    width: '100%',
                    borderRadius: (theme) => theme.shape.borderRadius,
                    ':root': {
                      borderRadius: (theme) => theme.shape.borderRadius,
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                />
              );
            }}
          />
        ))}
        <Stack
          direction={{
            xs: 'column',
            md: 'row',
          }}
          gap={3}
          justifyContent="flex-start"
        >
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
          <Button type="reset" onClick={handleReset} variant="outlined">
            Reset
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FilterSection;
