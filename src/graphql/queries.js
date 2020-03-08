/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      challenges {
        items {
          id
          userID
          title
          increase
          isValid
          task1Name
          task1IsDone
          task2Name
          task2IsDone
          task3Name
          task3IsDone
          task4Name
          task4IsDone
          task5Name
          task5IsDone
          task6Name
          task6IsDone
          task7Name
          task7IsDone
          task8Name
          task8IsDone
          task9Name
          task9IsDone
          task10Name
          task10IsDone
          task11Name
          task11IsDone
          task12Name
          task12IsDone
          task13Name
          task13IsDone
          task14Name
          task14IsDone
          task15Name
          task15IsDone
          task16Name
          task16IsDone
          task17Name
          task17IsDone
          task18Name
          task18IsDone
          task19Name
          task19IsDone
          task20Name
          task20IsDone
          task21Name
          task21IsDone
          task22Name
          task22IsDone
          task23Name
          task23IsDone
          task24Name
          task24IsDone
          task25Name
          task25IsDone
          task26Name
          task26IsDone
          task27Name
          task27IsDone
          task28Name
          task28IsDone
          task29Name
          task29IsDone
          task30Name
          task30IsDone
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        challenges {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getChallenge = /* GraphQL */ `
  query GetChallenge($id: ID!) {
    getChallenge(id: $id) {
      id
      userID
      title
      increase
      isValid
      task1Name
      task1IsDone
      task2Name
      task2IsDone
      task3Name
      task3IsDone
      task4Name
      task4IsDone
      task5Name
      task5IsDone
      task6Name
      task6IsDone
      task7Name
      task7IsDone
      task8Name
      task8IsDone
      task9Name
      task9IsDone
      task10Name
      task10IsDone
      task11Name
      task11IsDone
      task12Name
      task12IsDone
      task13Name
      task13IsDone
      task14Name
      task14IsDone
      task15Name
      task15IsDone
      task16Name
      task16IsDone
      task17Name
      task17IsDone
      task18Name
      task18IsDone
      task19Name
      task19IsDone
      task20Name
      task20IsDone
      task21Name
      task21IsDone
      task22Name
      task22IsDone
      task23Name
      task23IsDone
      task24Name
      task24IsDone
      task25Name
      task25IsDone
      task26Name
      task26IsDone
      task27Name
      task27IsDone
      task28Name
      task28IsDone
      task29Name
      task29IsDone
      task30Name
      task30IsDone
    }
  }
`;
export const listChallenges = /* GraphQL */ `
  query ListChallenges(
    $filter: ModelChallengeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChallenges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        title
        increase
        isValid
        task1Name
        task1IsDone
        task2Name
        task2IsDone
        task3Name
        task3IsDone
        task4Name
        task4IsDone
        task5Name
        task5IsDone
        task6Name
        task6IsDone
        task7Name
        task7IsDone
        task8Name
        task8IsDone
        task9Name
        task9IsDone
        task10Name
        task10IsDone
        task11Name
        task11IsDone
        task12Name
        task12IsDone
        task13Name
        task13IsDone
        task14Name
        task14IsDone
        task15Name
        task15IsDone
        task16Name
        task16IsDone
        task17Name
        task17IsDone
        task18Name
        task18IsDone
        task19Name
        task19IsDone
        task20Name
        task20IsDone
        task21Name
        task21IsDone
        task22Name
        task22IsDone
        task23Name
        task23IsDone
        task24Name
        task24IsDone
        task25Name
        task25IsDone
        task26Name
        task26IsDone
        task27Name
        task27IsDone
        task28Name
        task28IsDone
        task29Name
        task29IsDone
        task30Name
        task30IsDone
      }
      nextToken
    }
  }
`;
