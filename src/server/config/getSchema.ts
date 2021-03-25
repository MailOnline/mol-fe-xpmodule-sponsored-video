interface SelectOptions {
  label: string;
  value: string;
}

interface Item {
  label: string;
  modelPath: string;
  selectOptions?: SelectOptions[];
  type: string;
}

type GetSchema = () => {
  items: Item[];
};

const getSchema: GetSchema = () => ({
  items: [
    {
      label: 'Video Title',
      modelPath: '.title',
      type: 'input'
    },
    {
      label: 'Video URL',
      modelPath: '.url',
      type: 'input'
    },
    {
      label: 'Video Thumbnail',
      modelPath: '.thumb',
      type: 'input'
    },
    {
      label: 'Preview Text',
      modelPath: '.preview',
      type: 'input'
    },
  ]
});

export { getSchema };
