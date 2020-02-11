export default question => {
  if (question.Difficulty === 1) {
    return 'Easy';
  }

  if (question.Difficulty === 2) {
    return 'Medium';
  }

  if (question.Difficulty === 3) {
    return 'Hard';
  }

  if (question.Difficulty === 4) {
    return 'Very Hard';
  }

  return 'Extremely Hard';
};
