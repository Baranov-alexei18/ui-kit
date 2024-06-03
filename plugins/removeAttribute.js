import { createFilter } from '@rollup/pluginutils';

export default function removeDataTestId(options = {}) {
  const filter = createFilter(options.include || ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'], options.exclude);
  const dataTestIdPattern = /data-testid/g;

  return {
    name: 'remove-data-testid',
    transform(code, id) {
      if (!filter(id)) return null;

      const transformedCode = code.replace(dataTestIdPattern, '');

      return {
        code: transformedCode,
        map: { mappings: '' },
      };
    },
  };
}
