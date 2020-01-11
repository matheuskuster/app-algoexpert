import React from 'react';
import {
  Octicons,
  Entypo,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from '@expo/vector-icons';

export default category => {
  let icon;

  switch (category) {
    case 'Arrays':
      icon = (
        <MaterialCommunityIcons
          name="code-brackets"
          size={30}
          color="#02203c"
        />
      );
      break;
    case 'Strings':
      icon = (
        <MaterialCommunityIcons name="code-string" size={30} color="#02203c" />
      );
      break;
    case 'Binary Search Trees':
      icon = <Entypo name="flow-tree" size={30} color="#02203c" />;
      break;
    case 'Binary Trees':
      icon = <Octicons name="file-binary" size={30} color="#02203c" />;
      break;
    case 'Dynamic Programming':
      icon = (
        <MaterialCommunityIcons name="file-tree" size={30} color="#02203c" />
      );
      break;
    case 'Famous Algorithms':
      icon = <Entypo name="star" size={30} color="#02203c" />;
      break;
    case 'Graphs':
      icon = (
        <MaterialCommunityIcons name="graphql" size={30} color="#02203c" />
      );
      break;
    case 'Heaps':
      icon = <AntDesign name="sharealt" size={30} color="#02203c" />;
      break;
    case 'Linked Lists':
      icon = <AntDesign name="link" size={30} color="#02203c" />;
      break;
    case 'Recursion':
      icon = <MaterialCommunityIcons name="loop" size={30} color="#02203c" />;
      break;
    case 'Searching':
      icon = <AntDesign name="search1" size={30} color="#02203c" />;
      break;
    case 'Sorting':
      icon = <MaterialCommunityIcons name="sort" size={30} color="#02203c" />;
      break;
    case 'Stacks':
      icon = <FontAwesome name="stack-overflow" size={30} color="#02203c" />;
      break;
    case 'Tries':
      icon = <Entypo name="line-graph" size={30} color="#02203c" />;
      break;

    default:
  }

  return icon;
};
