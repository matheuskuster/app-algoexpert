import styled from 'styled-components/native';

export const Container = styled.View`
  background: #001e3f;
  width: 370px;
  border-radius: 6px;
  margin-right: 25px;
`;

export const Thumbnail = styled.ImageBackground`
  width: 370px;
  height: 208px;
  border-radius: 6px;
`;

export const PlayButton = styled.TouchableOpacity`
  width: 370px;
  height: 208px;
  justify-content: center;
  align-items: center;
  border-color: #fff;
  border-bottom-width: 1px;

  background: rgba(255, 255, 255, 0.05);
`;

export const Title = styled.View``;

export const TitleText = styled.Text`
  font-size: 26px;
  font-family: JuraBold;
  margin-top: 10px;
  color: #fff;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 6,
})`
  color: #fff;
  font-family: Jura;

  font-size: 16px;
  margin-top: 5px;
`;

export const Watched = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: -5px;
`;

export const WatchedText = styled.Text`
  color: #fff;
  font-family: Jura;
  font-size: 16px;
  margin-left: 5px;
`;

export const Duration = styled.Text`
  color: #fff;
  font-family: JuraBold;
  font-size: 16px;
  margin-top: 10px;
`;

export const Unavailable = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-family: Jura;
  font-size: 16px;
`;
