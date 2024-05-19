import { TruncateTextPipe } from './truncate-text.pipe';

describe('TruncateTextPipe', () => {
  let pipe: TruncateTextPipe;

  beforeEach(() => {
    pipe = new TruncateTextPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the same text if text length is less than or equal to maxLength', () => {
    const text = 'Short text';
    const maxLength = 20;
    const result = pipe.transform(text, maxLength);
    expect(result).toBe(text);
  });

  it('should truncate the text if text length is greater than maxLength', () => {
    const text = 'This is a long text that needs to be truncated';
    const maxLength = 20;
    const result = pipe.transform(text, maxLength);
    expect(result).toBe('This is a long te...');
  });

  it('should handle empty text', () => {
    const text = '';
    const maxLength = 20;
    const result = pipe.transform(text, maxLength);
    expect(result).toBe('');
  });

});
