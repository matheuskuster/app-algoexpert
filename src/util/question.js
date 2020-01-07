/* eslint-disable no-nested-ternary */
import React from 'react';
import { darken } from 'polished';
import {
  Octicons,
  Entypo,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from '@expo/vector-icons';

export default question => {
  const difficulty =
    question.Difficulty === 1
      ? 'Easy'
      : question.Difficulty === 2
      ? 'Medium'
      : question.Difficulty === 3
      ? 'Hard'
      : question.Difficulty === 4
      ? 'Very Hard'
      : 'Extremely Hard';

  const color =
    question.Difficulty === 1
      ? '#34ed43'
      : question.Difficulty === 2
      ? '#51adef'
      : question.Difficulty === 3
      ? '#ef5151'
      : question.Difficulty === 4
      ? '#af51ef'
      : '#383535';
  let icon;

  switch (question.Category) {
    case 'Arrays':
      icon = (
        <MaterialCommunityIcons
          name="code-brackets"
          size={30}
          style={{
            color: darken(0.2, color),
            marginLeft: 20,
            marginTop: 20,
          }}
        />
      );
      break;
    case 'Strings':
      icon = (
        <MaterialCommunityIcons
          name="code-string"
          size={30}
          style={{
            color: darken(0.2, color),
            marginLeft: 20,
            marginTop: 20,
          }}
        />
      );
      break;
    case 'Binary Search Trees':
      icon = (
        <Entypo
          name="flow-tree"
          size={30}
          style={{
            color: darken(0.2, color),
            marginLeft: 20,
            marginTop: 20,
          }}
        />
      );
      break;
    case 'Binary Trees':
      icon = (
        <Octicons
          name="file-binary"
          size={30}
          style={{
            color: darken(0.2, color),
            marginLeft: 20,
            marginTop: 20,
          }}
        />
      );
      break;
    case 'Dynamic Programming':
      icon = (
        <MaterialCommunityIcons
          name="file-tree"
          size={30}
          style={{
            color: darken(0.2, color),
            marginLeft: 20,
            marginTop: 20,
          }}
        />
      );
      break;
    case 'Famous Algorithms':
      icon = (
        <Entypo
          name="star"
          size={30}
          style={{
            color: darken(0.2, color),
            marginLeft: 20,
            marginTop: 20,
          }}
        />
      );
      break;
    case 'Graphs':
      icon = (
        <MaterialCommunityIcons
          name="graphql"
          size={30}
          style={{
            color: darken(0.2, color),
            marginLeft: 20,
            marginTop: 20,
          }}
        />
      );
      break;
    case 'Heaps':
      icon = (
        <AntDesign
          name="sharealt"
          size={30}
          style={{
            color: darken(0.2, color),
            marginLeft: 20,
            marginTop: 20,
          }}
        />
      );
      break;
    case 'Linked Lists':
      icon = (
        <AntDesign
          name="link"
          size={30}
          style={{
            color: darken(0.2, color),
            marginLeft: 20,
            marginTop: 20,
          }}
        />
      );
      break;
    case 'Recursion':
      icon = (
        <MaterialCommunityIcons
          name="loop"
          size={30}
          style={{
            color: darken(0.2, color),
            marginLeft: 20,
            marginTop: 20,
          }}
        />
      );
      break;
    case 'Searching':
      icon = (
        <AntDesign
          name="search1"
          size={30}
          style={{
            color: darken(0.2, color),
            marginLeft: 20,
            marginTop: 20,
          }}
        />
      );
      break;
    case 'Sorting':
      icon = (
        <MaterialCommunityIcons
          name="sort"
          size={30}
          style={{
            color: darken(0.2, color),
            marginLeft: 20,
            marginTop: 20,
          }}
        />
      );
      break;
    case 'Stacks':
      icon = (
        <FontAwesome
          name="stack-overflow"
          size={30}
          style={{
            color: darken(0.2, color),
            marginLeft: 20,
            marginTop: 20,
          }}
        />
      );
      break;
    case 'Tries':
      icon = (
        <Entypo
          name="line-graph"
          size={30}
          style={{
            color: darken(0.2, color),
            marginLeft: 20,
            marginTop: 20,
          }}
        />
      );
      break;

    default:
  }

  return {
    color,
    icon,
    difficulty,
  };
};
