import React from 'react';
import { View } from 'react-native';

import GroupedQuestions from '~/components/GroupedQuestions';

import themes from '~/util/themes';

export default function Difficulty({ questions, navigation }) {
  const easyQuestions = questions.filter(question => question.Difficulty === 1);
  const mediumQuestions = questions.filter(
    question => question.Difficulty === 2
  );
  const hardQuestions = questions.filter(question => question.Difficulty === 3);
  const veryHardQuestions = questions.filter(
    question => question.Difficulty === 4
  );
  const extremelyHardQuestions = questions.filter(
    question => question.Difficulty === 5
  );

  return (
    <View>
      <GroupedQuestions
        questions={easyQuestions}
        title="Easy"
        theme={themes[0]}
        navigation={navigation}
      />
      <GroupedQuestions
        questions={mediumQuestions}
        title="Medium"
        theme={themes[1]}
        navigation={navigation}
      />
      <GroupedQuestions
        questions={hardQuestions}
        title="Hard"
        theme={themes[2]}
        navigation={navigation}
      />
      <GroupedQuestions
        questions={veryHardQuestions}
        title="Very Hard"
        theme={themes[3]}
        navigation={navigation}
      />
      <GroupedQuestions
        questions={extremelyHardQuestions}
        title="Extremely Hard"
        theme={themes[4]}
        navigation={navigation}
      />
    </View>
  );
}
