import { Input, Box } from '@chakra-ui/react';
import React, { useCallback } from 'react';

interface Props {
  value: string;
  onChange: (newValue: string) => void;
}

export default function Cell({ value, onChange }: Props) {
  const onChangeHandler = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      onChange(ev.target.value);
    },
    [onChange],
  );

  return (
    <Box>
      <Input value={value} borderRadius={0} width="full" onChange={onChangeHandler} />
    </Box>
  );
}
