export default language => {
  let formattedLanguage;

  switch (language) {
    case 'cpp':
      formattedLanguage = 'C++';
      break;
    case 'csharp':
      formattedLanguage = 'C#';
      break;
    case 'go':
      formattedLanguage = 'Go';
      break;
    case 'java':
      formattedLanguage = 'Java';
      break;
    case 'javascript':
      formattedLanguage = 'JavaScript';
      break;
    case 'python':
      formattedLanguage = 'Python';
      break;
    case 'swift':
      formattedLanguage = 'Swift';
      break;
    default:
  }

  return formattedLanguage;
};
