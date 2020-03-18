export const searchChallengeByUser = /* GraphQL */ `
  query searchChallengeByUser($userID: String!) {
    listChallenges(limit: 1000, filter: {userID: {eq: $userID}}) {
      items {
        id
        userID
        title
        startDate
        increase
        isValid
        task1Name
        task1IsDone
        task1Date
        task2Name
        task2IsDone
        task2Date
        task3Name
        task3IsDone
        task3Date
        task4Name
        task4IsDone
        task4Date
        task5Name
        task5IsDone
        task5Date
        task6Name
        task6IsDone
        task6Date
        task7Name
        task7IsDone
        task7Date
        task8Name
        task8IsDone
        task8Date
        task9Name
        task9IsDone
        task9Date
        task10Name
        task10IsDone
        task10Date
        task11Name
        task11IsDone
        task11Date
        task12Name
        task12IsDone
        task12Date
        task13Name
        task13IsDone
        task13Date
        task14Name
        task14IsDone
        task14Date
        task15Name
        task15IsDone
        task15Date
        task16Name
        task16IsDone
        task16Date
        task17Name
        task17IsDone
        task17Date
        task18Name
        task18IsDone
        task18Date
        task19Name
        task19IsDone
        task19Date
        task20Name
        task20IsDone
        task20Date
        task21Name
        task21IsDone
        task21Date
        task22Name
        task22IsDone
        task22Date
        task23Name
        task23IsDone
        task23Date
        task24Name
        task24IsDone
        task24Date
        task25Name
        task25IsDone
        task25Date
        task26Name
        task26IsDone
        task26Date
        task27Name
        task27IsDone
        task27Date
        task28Name
        task28IsDone
        task28Date
        task29Name
        task29IsDone
        task29Date
        task30Name
        task30IsDone
        task30Date
      }
    }
  }
`;
