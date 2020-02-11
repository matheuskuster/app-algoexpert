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
      icon = {
        type: MaterialCommunityIcons,
        name: 'code-brackets',
      };
      break;
    case 'Strings':
      icon = {
        type: MaterialCommunityIcons,
        name: 'code-string',
      };
      break;
    case 'Binary Search Trees':
      icon = {
        type: Entypo,
        name: 'flow-tree',
      };
      break;
    case 'Binary Trees':
      icon = {
        type: Octicons,
        name: 'file-binary',
      };
      break;
    case 'Dynamic Programming':
      icon = {
        type: MaterialCommunityIcons,
        name: 'file-tree',
      };
      break;
    case 'Famous Algorithms':
      icon = {
        type: Entypo,
        name: 'star',
      };
      break;
    case 'Graphs':
      icon = {
        type: MaterialCommunityIcons,
        name: 'graphql',
      };
      break;
    case 'Heaps':
      icon = { type: AntDesign, name: 'sharealt' };
      break;
    case 'Linked Lists':
      icon = {
        type: AntDesign,
        name: 'link',
      };
      break;
    case 'Recursion':
      icon = {
        type: MaterialCommunityIcons,
        name: 'loop',
      };
      break;
    case 'Searching':
      icon = {
        type: AntDesign,
        name: 'search1',
      };
      break;
    case 'Sorting':
      icon = {
        type: MaterialCommunityIcons,
        name: 'sort',
      };
      break;
    case 'Stacks':
      icon = {
        type: FontAwesome,
        name: 'stack-overflow',
      };
      break;
    case 'Tries':
      icon = {
        type: Entypo,
        name: 'line-graph',
      };
      break;

    default:
  }

  return icon;
};
