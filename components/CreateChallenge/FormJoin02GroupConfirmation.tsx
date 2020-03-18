import React, {Component, useEffect} from 'react';
import {StyleSheet, TextInput, Alert} from 'react-native';
import {
  Container,
  Header,
  Content,
  H1,
  H2,
  H3,
  Text,
  Form,
  Item,
  Input,
  Label,
  Button,
  DatePicker,
  Card,
  CardItem,
  Body,
  View,
  StatusBar,
  FlatList,
  List,
  ListItem,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import * as queries from '../../src/graphql/queries';
import * as customMutations from '../../src/graphql/customMutations';
import useStore from '../../state/state';

function FormJoin02GroupConfirmation({navigation, route}, props) {
  const state = useStore(state => state);

  const taskQuantityArray = [];
  // const taskName = state.challengeInput.taskName;

  //To get group challenge data
  useEffect(() => {
    console.log('state.challengeInput.groupId :', state.challengeInput.groupId);
    API.graphql(
      graphqlOperation(queries.listGroupChallenges, {
        groupId: state.challengeInput.groupId,
      }),
    )
      .then(res => {
        console.log(
          'res listGroupChallenges userEffect:',
          res.data.listGroupChallenges.items,
        );
        state.setGroupChallengeInformation(
          res.data.listGroupChallenges.items[0],
        );
      })
      .catch(error =>
        console.log('Error happens in getGroupChallenge: ', error),
      );
  }, []);

  // if (state.challengeType === 'quantity') {
  //   unitsVariable = 'times';
  // } else if (state.challengeType === 'time') {
  //   unitsVariable = 'minutes';
  // }

  // function getDateOfChallenge(ordinalDate) {
  //   const standardDate = new Date(state.challengeInput.startDate);
  //   const startDate = standardDate.getDate();
  //   standardDate.setDate(startDate + ordinalDate - 1);
  //   return standardDate.toString();
  // }
  const useGroupInput = {
    userId: route.params.userName,
    groupId: state.challengeInput.groupId,
  };
  const groupChallengeInput = {
    groupId: state.challengeInput.groupId,
    userId: route.params.userName,
    isValid: true ? 'true' : 'false',
    task1IsDone: false,
    task2IsDone: false,
    task3IsDone: false,
    task4IsDone: false,
    task5IsDone: false,
    task6IsDone: false,
    task7IsDone: false,
    task8IsDone: false,
    task9IsDone: false,
    task10IsDone: false,
    task11IsDone: false,
    task12IsDone: false,
    task13IsDone: false,
    task14IsDone: false,
    task15IsDone: false,
    task16IsDone: false,
    task17IsDone: false,
    task18IsDone: false,
    task19IsDone: false,
    task20IsDone: false,
    task21IsDone: false,
    task22IsDone: false,
    task23IsDone: false,
    task24IsDone: false,
    task25IsDone: false,
    task26IsDone: false,
    task27IsDone: false,
    task28IsDone: false,
    task29IsDone: false,
    task30IsDone: false,
  };
  const insertChallenge = () => {
    console.log('useGroupInput:  ********  ', useGroupInput);
    console.log('groupChallengeInput:  ********  ', {
      ...groupChallengeInput,
      challengeId: state.groupChallengeInformation.challengeId,
      startDate: state.groupChallengeInformation.startDate,
      task30Date: state.groupChallengeInformation.task30Date,
    });

    API.graphql(
      graphqlOperation(customMutations.joinGroupWithUserAndGroupAndChallenge, {
        inputUserGroup: useGroupInput,
        inputGroupChallenge: {
          ...groupChallengeInput,
          challengeId: state.groupChallengeInformation.challengeId,
          startDate: state.groupChallengeInformation.startDate,
          task30Date: state.groupChallengeInformation.task30Date,
        },
      }),
    )
      .then(res => {
        console.log('res joinGroupWithUserAndGroupAndChallenge:', res);
        state.setUserHasActiveChallenge(true);
      })
      .catch(error =>
        console.log(
          'Error happens in joinGroupWithUserAndGroupAndChallenge: ',
          error,
        ),
      );
  };
  // if (!state.groupChallengeInformation) {
  //   Alert.alert(
  //     'Error',
  //     'There is no group challenge id',
  //     [
  //       {
  //         text: 'OK',
  //         onPress: () => navigation.navigate('JoinGroupChallenge'),
  //       },
  //     ],
  //     {cancelable: false},
  //   );
  // }
  return (
    <Container style={styles.Container}>
      <Content padder>
        <Text style={styles.textDefault}>
          {/* Title: {state.groupChallengeInformation.challenge.title} */}
        </Text>
        {/*   <H1>Double check your Challenge</H1>
        <Text style={styles.textDefault}>
          See your 30-day challenge below. Use the back button if you need to
          make any changes.
        </Text>
        
        <Text style={styles.textDefault}>
          Start Date: {state.groupChallengeInformation.startDate}
        </Text>
        {/* <List>
          <ListItem>
            <Text>{taskQuantityArray[0]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[1]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[2]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[3]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[4]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[5]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[6]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[7]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[8]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[9]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[10]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[11]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[12]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[13]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[14]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[15]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[16]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[17]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[18]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[19]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[20]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[21]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[22]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[23]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[24]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[25]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[26]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[27]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[28]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[29]}</Text>
          </ListItem>
        </List> */}
        <Button
          title="Start Group Challenge"
          onPress={() => {
            insertChallenge();
            // props.changeView();
            navigation.navigate('Home', {screen: 'HomeUser'});
          }}>
          <Text>Save Challenge</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 20,
    marginTop: 20,
  },
  Title: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  textDefault: {
    marginTop: 20,
  },
  textInputDefault: {
    margin: 10,
  },
  btn: {
    marginTop: 20,
  },
});

export default FormJoin02GroupConfirmation;