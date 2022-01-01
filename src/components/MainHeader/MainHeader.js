import React from 'react';

import { Container, Avatar, OnlineStatus, RightSide, Button } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';



import colors from '../../styles/colors';

const MainHeader = () => {
  return (
    <Container>
      <Avatar>
        <OnlineStatus />
      </Avatar>

      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather
            name="search"
            size={26}
            color={colors.black}
          />
        </Button>
      </RightSide>
    </Container>
  );
}

export default MainHeader;
