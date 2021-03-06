/* eslint-disable react-hooks/exhaustive-deps */
import React, {Component, useEffect, useState, useRef} from 'react';
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
  Right,
  Body,
  View,
  StatusBar,
  FlatList,
  List,
  Icon,
  ListItem,
  Spinner,
} from 'native-base';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import * as queries from '../../src/graphql/queries';
import useStore from '../../state/state';
import Colors from '../../variablesColors';

function FormGroup03ChallengeLibrary({navigation, route}, props) {
  const state = useStore(state => state);
  const [loading, setLoading] = useState(true);
  const [allChallengeList, setAllChallengeList] = useState([]);
  const [filteredChallengeList, setFilteredChallengeList] = useState([]);

  //To get group challenge data
  useEffect(() => {
    state.setChallengeType('library');
    const getAllChallenges = async () => {
      const result = await API.graphql(
        graphqlOperation(queries.listChallenges, {
          limit: 1000, //Just in case
        }),
      );
      setAllChallengeList(result.data.listChallenges.items);
      setFilteredChallengeList(result.data.listChallenges.items);
      setLoading(false);
    };
    getAllChallenges();
  }, []);

  const filterChallengeList = word => {
    const updateList = allChallengeList.filter(challenge => {
      return challenge.title.toLowerCase().search(word.toLowerCase()) !== -1;
    });
    setFilteredChallengeList(updateList);
  };

  if (loading) {
    return (
      <Container>
        <Header />
        <Content>
          <Spinner color="blue" />
        </Content>
      </Container>
    );
  } else {
    return (
      <Container style={styles.container}>
        <Content padder>
          <H1>Search the Challenge library</H1>

          <Text>
            Search through the challenge library to find one that will get you
            started achieving your goals.
          </Text>
          <Form>
            <Item>
              <Input
                placeholder="Enter Search Here"
                onChangeText={value => filterChallengeList(value)}
                style={{marginBottom: 10}}
              />
            </Item>
            {filteredChallengeList.map(item => (
              <ListItem
                style={{
                  marginRight: 20,
                  backgroundColor: 'rgba(24, 61, 95, 0.03)',
                }}
                key={item.id}
                onPress={() => {
                  state.setChallengeInput({
                    ...state.challengeInput,
                    taskName: item,
                    title: item.title,
                  });
                  navigation.navigate('GroupChallengeConfirmation');
                }}>
                <Body>
                  <Text style={styles.Text}>
                    <Text style={styles.Text}>
                      {item.title}
                      {'\n'}
                    </Text>
                  </Text>
                </Body>
                <Right>
                  <Icon active style={styles.arrowmark} name="arrow-forward" />
                </Right>
              </ListItem>
            ))}
          </Form>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  Title: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  H3: {
    margin: 20,
  },
  H1: {
    margin: 20,
  },
  Text: {
    fontSize: 18,
  },

  arrowmark: {
    color: 'rgba(24, 61, 95, 1)',
  },

  button: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: Colors.primary,
  },
});

export default FormGroup03ChallengeLibrary;
