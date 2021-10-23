import { useForm } from 'react-hook-form';
import React from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  RadioGroup,
  Radio,
  Stack,
  HStack,
} from '@chakra-ui/react';

const InfoForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const submitHandler = values => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Stack maxWidth={1200} margin="auto" spacing={5} marginTop={5}>
        <FormControl as="fieldset">
          <FormLabel as="goals">Fitness Goals?</FormLabel>
          <RadioGroup {...register('goals')}>
            <HStack>
              <Radio value="lose">lose</Radio>
              <Radio value="maintain">maintain</Radio>
              <Radio value="gain">gain</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="gender">Gender?</FormLabel>
          <RadioGroup {...register('gender')}>
            <HStack>
              <Radio value="male">male</Radio>
              <Radio value="female">female</Radio>
              <Radio value="other">other</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <FormControl isInvalid={errors.weight}>
          <FormLabel htmlFor="weight">Weight?</FormLabel>
          <Input
            id="weight"
            placeholder="weight"
            type="number"
            {...register('weight', {
              required: 'This is required',
              min: 50,
              max: 500,
            })}
          />
          <FormErrorMessage>{errors.weight?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.height}>
          <FormLabel htmlFor="height">Height in inches?</FormLabel>
          <Input
            id="height"
            placeholder="height"
            type="number"
            {...register('height', {
              required: 'This is required',
              min: 10,
              max: 500,
            })}
          />
          <FormErrorMessage>{errors.weight?.message}</FormErrorMessage>
        </FormControl>
        <FormControl as="fieldset">
          <FormLabel as="activity">Activity Level?</FormLabel>
          <RadioGroup {...register('activity')}>
            <HStack>
              <Radio value="0">0</Radio>
              <Radio value="1">1</Radio>
              <Radio value="2">2</Radio>
              <Radio value="3">3</Radio>
              <Radio value="4">4</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <FormControl isInvalid={errors.age}>
          <FormLabel htmlFor="age">Age?</FormLabel>
          <Input
            id="age"
            placeholder="age"
            type="number"
            {...register('age', {
              required: 'This is required',
              min: 0,
              max: 150,
            })}
          />
          <FormErrorMessage>{errors.weight?.message}</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel as="body">Body Type?</FormLabel>
          <RadioGroup {...register('body')}>
            <HStack>
              <Radio value="mesomorph">Mesomorph</Radio>
              <Radio value="endomorph">Endomorph</Radio>
              <Radio value="ectomorph">Ectomorph</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default InfoForm;
