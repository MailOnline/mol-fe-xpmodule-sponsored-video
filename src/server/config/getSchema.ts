interface SelectOptions {
  label: string;
  value: string;
}

interface Item {
  label: string;
  modelPath: string;
  selectOptions: SelectOptions[];
  type: string;
}

type GetSchema = () => {
  items: Item[];
};

const getSchema: GetSchema = () => ({
  items: [
    {
      label: 'Sample Input',
      modelPath: '.sampleInput',
      selectOptions: [
        { label: 'select', value: '' },
        { label: 'An Example Select Element', value: 'example' },
      ],
      type: 'select'
    }
  ]
});

export { getSchema };
