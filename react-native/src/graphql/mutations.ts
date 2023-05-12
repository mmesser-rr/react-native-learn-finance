/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const initiatePhoneChallenge = /* GraphQL */ `
  mutation InitiatePhoneChallenge($phoneNumber: String!) {
    initiatePhoneChallenge(phoneNumber: $phoneNumber) {
      code
      phoneNumber
      verified
      createdAt
      updatedAt
    }
  }
`;
export const returnUserChallenge = /* GraphQL */ `
  mutation ReturnUserChallenge($phoneNumber: String!) {
    returnUserChallenge(phoneNumber: $phoneNumber) {
      code
      phoneNumber
      verified
      createdAt
      updatedAt
    }
  }
`;
export const validateReturnUser = /* GraphQL */ `
  mutation ValidateReturnUser($phoneNumber: String!, $code: String!) {
    validateReturnUser(phoneNumber: $phoneNumber, code: $code)
  }
`;
export const tryPhoneChallenge = /* GraphQL */ `
  mutation TryPhoneChallenge($phoneNumber: String!, $code: String!) {
    tryPhoneChallenge(phoneNumber: $phoneNumber, code: $code)
  }
`;
export const generateInvite = /* GraphQL */ `
  mutation GenerateInvite {
    generateInvite {
      code
      status
      createdAt
      updatedAt
    }
  }
`;
export const initiateEmailChallenge = /* GraphQL */ `
  mutation InitiateEmailChallenge($email: String!) {
    initiateEmailChallenge(email: $email) {
      code
      email
      verified
      createdAt
      updatedAt
    }
  }
`;
export const tryEmailChallenge = /* GraphQL */ `
  mutation TryEmailChallenge($email: String!, $code: String!) {
    tryEmailChallenge(email: $email, code: $code)
  }
`;
export const openAppAndAccount = /* GraphQL */ `
  mutation OpenAppAndAccount($ssn: String!, $athleteId: ID!) {
    openAppAndAccount(ssn: $ssn, athleteId: $athleteId) {
      athlete {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      unitAccountId
      routingCode
      accountNumber
      podName
      id
      createdAt
      updatedAt
      athleteAccountsId
    }
  }
`;
export const openAccount = /* GraphQL */ `
  mutation OpenAccount($athleteId: ID!) {
    openAccount(athleteId: $athleteId) {
      athlete {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      unitAccountId
      routingCode
      accountNumber
      podName
      id
      createdAt
      updatedAt
      athleteAccountsId
    }
  }
`;
export const unitWebhookService = /* GraphQL */ `
  mutation UnitWebhookService($data: String) {
    unitWebhookService(data: $data) {
      type
      id
      attributes {
        createdAt
        direction
        amount
        balance
        summary
        description
        counterparty {
          name
          routingNumber
          accountNumber
          accountType
        }
        name
        status
        routingNumber
        accountNumber
        currency
        hold
        available
      }
    }
  }
`;
export const podSettings = /* GraphQL */ `
  mutation PodSettings(
    $athleteId: ID!
    $savings: Int!
    $investments: Int!
    $spending: Int!
  ) {
    podSettings(
      athleteId: $athleteId
      savings: $savings
      investments: $investments
      spending: $spending
    ) {
      athlete {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      unitAccountId
      routingCode
      accountNumber
      podName
      id
      createdAt
      updatedAt
      athleteAccountsId
    }
  }
`;
export const createPlaidLink = /* GraphQL */ `
  mutation CreatePlaidLink($athleteId: ID!) {
    createPlaidLink(athleteId: $athleteId) {
      access_token
      item_id
      link_token
      request_id
      new_access_token
    }
  }
`;
export const updatePlaidLink = /* GraphQL */ `
  mutation UpdatePlaidLink($athleteId: ID!, $accessToken: String!) {
    updatePlaidLink(athleteId: $athleteId, accessToken: $accessToken) {
      access_token
      item_id
      link_token
      request_id
      new_access_token
    }
  }
`;
export const createPlaidPayment = /* GraphQL */ `
  mutation CreatePlaidPayment(
    $athleteId: ID!
    $plaidAccountId: String!
    $amount: Float!
    $description: String
  ) {
    createPlaidPayment(
      athleteId: $athleteId
      plaidAccountId: $plaidAccountId
      amount: $amount
      description: $description
    ) {
      type
      id
      attributes {
        createdAt
        direction
        amount
        balance
        summary
        description
        counterparty {
          name
          routingNumber
          accountNumber
          accountType
        }
        name
        status
        routingNumber
        accountNumber
        currency
        hold
        available
      }
    }
  }
`;
export const bookPayment = /* GraphQL */ `
  mutation BookPayment(
    $athleteId: ID!
    $unitAccountId: String!
    $amount: Float!
    $description: String
    $receiverUnitAccountId: String!
    $receiverAccountType: String
  ) {
    bookPayment(
      athleteId: $athleteId
      unitAccountId: $unitAccountId
      amount: $amount
      description: $description
      receiverUnitAccountId: $receiverUnitAccountId
      receiverAccountType: $receiverAccountType
    ) {
      type
      id
      attributes {
        createdAt
        direction
        amount
        balance
        summary
        description
        counterparty {
          name
          routingNumber
          accountNumber
          accountType
        }
        name
        status
        routingNumber
        accountNumber
        currency
        hold
        available
      }
    }
  }
`;
export const debitAccount = /* GraphQL */ `
  mutation DebitAccount(
    $athleteId: ID!
    $unitAccountId: String!
    $amount: Float!
    $description: String
    $receiverName: String!
    $receiverRoutingNumber: String!
    $receiverAccountNumber: String!
    $receiverAccountType: String
    $addenda: String
  ) {
    debitAccount(
      athleteId: $athleteId
      unitAccountId: $unitAccountId
      amount: $amount
      description: $description
      receiverName: $receiverName
      receiverRoutingNumber: $receiverRoutingNumber
      receiverAccountNumber: $receiverAccountNumber
      receiverAccountType: $receiverAccountType
      addenda: $addenda
    ) {
      type
      id
      attributes {
        createdAt
        direction
        amount
        balance
        summary
        description
        counterparty {
          name
          routingNumber
          accountNumber
          accountType
        }
        name
        status
        routingNumber
        accountNumber
        currency
        hold
        available
      }
    }
  }
`;
export const creditAccount = /* GraphQL */ `
  mutation CreditAccount(
    $athleteId: ID!
    $unitAccountId: String!
    $amount: Float!
    $description: String
    $receiverName: String!
    $receiverRoutingNumber: String!
    $receiverAccountNumber: String!
    $receiverAccountType: String
    $addenda: String
  ) {
    creditAccount(
      athleteId: $athleteId
      unitAccountId: $unitAccountId
      amount: $amount
      description: $description
      receiverName: $receiverName
      receiverRoutingNumber: $receiverRoutingNumber
      receiverAccountNumber: $receiverAccountNumber
      receiverAccountType: $receiverAccountType
      addenda: $addenda
    ) {
      type
      id
      attributes {
        createdAt
        direction
        amount
        balance
        summary
        description
        counterparty {
          name
          routingNumber
          accountNumber
          accountType
        }
        name
        status
        routingNumber
        accountNumber
        currency
        hold
        available
      }
    }
  }
`;
export const increaseAthletesCount = /* GraphQL */ `
  mutation IncreaseAthletesCount {
    increaseAthletesCount
  }
`;
export const increaseSessionsCount = /* GraphQL */ `
  mutation IncreaseSessionsCount {
    increaseSessionsCount
  }
`;
export const updateRSVPedEventsCount = /* GraphQL */ `
  mutation UpdateRSVPedEventsCount($increase: Boolean!) {
    updateRSVPedEventsCount(increase: $increase)
  }
`;
export const increaseTotalMinutesInApp = /* GraphQL */ `
  mutation IncreaseTotalMinutesInApp($byAmountInSeconds: Int!) {
    increaseTotalMinutesInApp(byAmountInSeconds: $byAmountInSeconds)
  }
`;
export const increaseCompletedModulesCount = /* GraphQL */ `
  mutation IncreaseCompletedModulesCount {
    increaseCompletedModulesCount
  }
`;
export const increaseTotalTrueOrFalseChoiceCount = /* GraphQL */ `
  mutation IncreaseTotalTrueOrFalseChoiceCount($increaseTrueChoice: Boolean!) {
    increaseTotalTrueOrFalseChoiceCount(increaseTrueChoice: $increaseTrueChoice)
  }
`;
export const increaseTotalAskedQuestionsCount = /* GraphQL */ `
  mutation IncreaseTotalAskedQuestionsCount {
    increaseTotalAskedQuestionsCount
  }
`;
export const createAppUsageLog = /* GraphQL */ `
  mutation CreateAppUsageLog(
    $input: CreateAppUsageLogInput!
    $condition: ModelAppUsageLogConditionInput
  ) {
    createAppUsageLog(input: $input, condition: $condition) {
      dateString
      athletesCount
      sessionsCount
      rsvpedEventsCount
      totalMinutesInApp
      completedModulesCount
      totalTrueChoiceCount
      totalFalseChoiceCount
      totalAskedQuestionsCount
      createdAt
      updatedAt
    }
  }
`;
export const updateAppUsageLog = /* GraphQL */ `
  mutation UpdateAppUsageLog(
    $input: UpdateAppUsageLogInput!
    $condition: ModelAppUsageLogConditionInput
  ) {
    updateAppUsageLog(input: $input, condition: $condition) {
      dateString
      athletesCount
      sessionsCount
      rsvpedEventsCount
      totalMinutesInApp
      completedModulesCount
      totalTrueChoiceCount
      totalFalseChoiceCount
      totalAskedQuestionsCount
      createdAt
      updatedAt
    }
  }
`;
export const deleteAppUsageLog = /* GraphQL */ `
  mutation DeleteAppUsageLog(
    $input: DeleteAppUsageLogInput!
    $condition: ModelAppUsageLogConditionInput
  ) {
    deleteAppUsageLog(input: $input, condition: $condition) {
      dateString
      athletesCount
      sessionsCount
      rsvpedEventsCount
      totalMinutesInApp
      completedModulesCount
      totalTrueChoiceCount
      totalFalseChoiceCount
      totalAskedQuestionsCount
      createdAt
      updatedAt
    }
  }
`;
export const createAthlete = /* GraphQL */ `
  mutation CreateAthlete(
    $input: CreateAthleteInput!
    $condition: ModelAthleteConditionInput
  ) {
    createAthlete(input: $input, condition: $condition) {
      id
      firstName
      lastName
      mobilePhone
      athleteTag
      bio
      profilePhotoUri
      heroPhotoUri
      email
      level
      sport {
        name
        airTableId
        isActive
      }
      team {
        name
        airTableId
        isActive
      }
      address {
        streetAddress
        apt
        city
        state
        zipCode
      }
      dateOfBirth
      accounts {
        items {
          unitAccountId
          routingCode
          accountNumber
          podName
          id
          createdAt
          updatedAt
          athleteAccountsId
        }
        nextToken
      }
      unitLookup {
        appId
        custId
      }
      podSettings {
        SAVINGS
        INVESTMENTS
        SPENDING
      }
      plaidToken
      plaidProcessorToken {
        plaidAccountId
        processorToken
      }
      wyreId
      isActive
      handle
      rewardedQrCodes {
        id
        itemOrEventName
      }
      activity {
        wealthBalance
        allWagered
        loginCount
        activePeriodInMinutes
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAthlete = /* GraphQL */ `
  mutation UpdateAthlete(
    $input: UpdateAthleteInput!
    $condition: ModelAthleteConditionInput
  ) {
    updateAthlete(input: $input, condition: $condition) {
      id
      firstName
      lastName
      mobilePhone
      athleteTag
      bio
      profilePhotoUri
      heroPhotoUri
      email
      level
      sport {
        name
        airTableId
        isActive
      }
      team {
        name
        airTableId
        isActive
      }
      address {
        streetAddress
        apt
        city
        state
        zipCode
      }
      dateOfBirth
      accounts {
        items {
          unitAccountId
          routingCode
          accountNumber
          podName
          id
          createdAt
          updatedAt
          athleteAccountsId
        }
        nextToken
      }
      unitLookup {
        appId
        custId
      }
      podSettings {
        SAVINGS
        INVESTMENTS
        SPENDING
      }
      plaidToken
      plaidProcessorToken {
        plaidAccountId
        processorToken
      }
      wyreId
      isActive
      handle
      rewardedQrCodes {
        id
        itemOrEventName
      }
      activity {
        wealthBalance
        allWagered
        loginCount
        activePeriodInMinutes
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAthlete = /* GraphQL */ `
  mutation DeleteAthlete(
    $input: DeleteAthleteInput!
    $condition: ModelAthleteConditionInput
  ) {
    deleteAthlete(input: $input, condition: $condition) {
      id
      firstName
      lastName
      mobilePhone
      athleteTag
      bio
      profilePhotoUri
      heroPhotoUri
      email
      level
      sport {
        name
        airTableId
        isActive
      }
      team {
        name
        airTableId
        isActive
      }
      address {
        streetAddress
        apt
        city
        state
        zipCode
      }
      dateOfBirth
      accounts {
        items {
          unitAccountId
          routingCode
          accountNumber
          podName
          id
          createdAt
          updatedAt
          athleteAccountsId
        }
        nextToken
      }
      unitLookup {
        appId
        custId
      }
      podSettings {
        SAVINGS
        INVESTMENTS
        SPENDING
      }
      plaidToken
      plaidProcessorToken {
        plaidAccountId
        processorToken
      }
      wyreId
      isActive
      handle
      rewardedQrCodes {
        id
        itemOrEventName
      }
      activity {
        wealthBalance
        allWagered
        loginCount
        activePeriodInMinutes
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAthleteAccount = /* GraphQL */ `
  mutation CreateAthleteAccount(
    $input: CreateAthleteAccountInput!
    $condition: ModelAthleteAccountConditionInput
  ) {
    createAthleteAccount(input: $input, condition: $condition) {
      athlete {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      unitAccountId
      routingCode
      accountNumber
      podName
      id
      createdAt
      updatedAt
      athleteAccountsId
    }
  }
`;
export const updateAthleteAccount = /* GraphQL */ `
  mutation UpdateAthleteAccount(
    $input: UpdateAthleteAccountInput!
    $condition: ModelAthleteAccountConditionInput
  ) {
    updateAthleteAccount(input: $input, condition: $condition) {
      athlete {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      unitAccountId
      routingCode
      accountNumber
      podName
      id
      createdAt
      updatedAt
      athleteAccountsId
    }
  }
`;
export const deleteAthleteAccount = /* GraphQL */ `
  mutation DeleteAthleteAccount(
    $input: DeleteAthleteAccountInput!
    $condition: ModelAthleteAccountConditionInput
  ) {
    deleteAthleteAccount(input: $input, condition: $condition) {
      athlete {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      unitAccountId
      routingCode
      accountNumber
      podName
      id
      createdAt
      updatedAt
      athleteAccountsId
    }
  }
`;
export const createRecentTransaction = /* GraphQL */ `
  mutation CreateRecentTransaction(
    $input: CreateRecentTransactionInput!
    $condition: ModelRecentTransactionConditionInput
  ) {
    createRecentTransaction(input: $input, condition: $condition) {
      transactionId
      athleteId
      status
      amount
      direction
      createdAt
      read
      settled
      podAllocation {
        SAVINGS
        INVESTMENTS
        SPENDING
      }
      id
      updatedAt
    }
  }
`;
export const updateRecentTransaction = /* GraphQL */ `
  mutation UpdateRecentTransaction(
    $input: UpdateRecentTransactionInput!
    $condition: ModelRecentTransactionConditionInput
  ) {
    updateRecentTransaction(input: $input, condition: $condition) {
      transactionId
      athleteId
      status
      amount
      direction
      createdAt
      read
      settled
      podAllocation {
        SAVINGS
        INVESTMENTS
        SPENDING
      }
      id
      updatedAt
    }
  }
`;
export const deleteRecentTransaction = /* GraphQL */ `
  mutation DeleteRecentTransaction(
    $input: DeleteRecentTransactionInput!
    $condition: ModelRecentTransactionConditionInput
  ) {
    deleteRecentTransaction(input: $input, condition: $condition) {
      transactionId
      athleteId
      status
      amount
      direction
      createdAt
      read
      settled
      podAllocation {
        SAVINGS
        INVESTMENTS
        SPENDING
      }
      id
      updatedAt
    }
  }
`;
export const createAthleteActivity = /* GraphQL */ `
  mutation CreateAthleteActivity(
    $input: CreateAthleteActivityInput!
    $condition: ModelAthleteActivityConditionInput
  ) {
    createAthleteActivity(input: $input, condition: $condition) {
      wealthBalance
      allWagered
      loginCount
      activePeriodInMinutes
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateAthleteActivity = /* GraphQL */ `
  mutation UpdateAthleteActivity(
    $input: UpdateAthleteActivityInput!
    $condition: ModelAthleteActivityConditionInput
  ) {
    updateAthleteActivity(input: $input, condition: $condition) {
      wealthBalance
      allWagered
      loginCount
      activePeriodInMinutes
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteAthleteActivity = /* GraphQL */ `
  mutation DeleteAthleteActivity(
    $input: DeleteAthleteActivityInput!
    $condition: ModelAthleteActivityConditionInput
  ) {
    deleteAthleteActivity(input: $input, condition: $condition) {
      wealthBalance
      allWagered
      loginCount
      activePeriodInMinutes
      id
      createdAt
      updatedAt
    }
  }
`;
export const createEmailChallenge = /* GraphQL */ `
  mutation CreateEmailChallenge(
    $input: CreateEmailChallengeInput!
    $condition: ModelEmailChallengeConditionInput
  ) {
    createEmailChallenge(input: $input, condition: $condition) {
      code
      email
      verified
      createdAt
      updatedAt
    }
  }
`;
export const updateEmailChallenge = /* GraphQL */ `
  mutation UpdateEmailChallenge(
    $input: UpdateEmailChallengeInput!
    $condition: ModelEmailChallengeConditionInput
  ) {
    updateEmailChallenge(input: $input, condition: $condition) {
      code
      email
      verified
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmailChallenge = /* GraphQL */ `
  mutation DeleteEmailChallenge(
    $input: DeleteEmailChallengeInput!
    $condition: ModelEmailChallengeConditionInput
  ) {
    deleteEmailChallenge(input: $input, condition: $condition) {
      code
      email
      verified
      createdAt
      updatedAt
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      creatorId
      creator {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      sponsor
      title
      category
      heroPhotoUri
      logoUri
      tagline
      description
      dateTime
      location
      reward
      createdAt
      updatedAt
      id
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      creatorId
      creator {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      sponsor
      title
      category
      heroPhotoUri
      logoUri
      tagline
      description
      dateTime
      location
      reward
      createdAt
      updatedAt
      id
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      creatorId
      creator {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      sponsor
      title
      category
      heroPhotoUri
      logoUri
      tagline
      description
      dateTime
      location
      reward
      createdAt
      updatedAt
      id
    }
  }
`;
export const createEventStatus = /* GraphQL */ `
  mutation CreateEventStatus(
    $input: CreateEventStatusInput!
    $condition: ModelEventStatusConditionInput
  ) {
    createEventStatus(input: $input, condition: $condition) {
      athleteId
      athlete {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      eventItemId
      event {
        creatorId
        creator {
          id
          firstName
          lastName
          mobilePhone
          athleteTag
          bio
          profilePhotoUri
          heroPhotoUri
          email
          level
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        sponsor
        title
        category
        heroPhotoUri
        logoUri
        tagline
        description
        dateTime
        location
        reward
        createdAt
        updatedAt
        id
      }
      registered
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateEventStatus = /* GraphQL */ `
  mutation UpdateEventStatus(
    $input: UpdateEventStatusInput!
    $condition: ModelEventStatusConditionInput
  ) {
    updateEventStatus(input: $input, condition: $condition) {
      athleteId
      athlete {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      eventItemId
      event {
        creatorId
        creator {
          id
          firstName
          lastName
          mobilePhone
          athleteTag
          bio
          profilePhotoUri
          heroPhotoUri
          email
          level
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        sponsor
        title
        category
        heroPhotoUri
        logoUri
        tagline
        description
        dateTime
        location
        reward
        createdAt
        updatedAt
        id
      }
      registered
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteEventStatus = /* GraphQL */ `
  mutation DeleteEventStatus(
    $input: DeleteEventStatusInput!
    $condition: ModelEventStatusConditionInput
  ) {
    deleteEventStatus(input: $input, condition: $condition) {
      athleteId
      athlete {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      eventItemId
      event {
        creatorId
        creator {
          id
          firstName
          lastName
          mobilePhone
          athleteTag
          bio
          profilePhotoUri
          heroPhotoUri
          email
          level
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        sponsor
        title
        category
        heroPhotoUri
        logoUri
        tagline
        description
        dateTime
        location
        reward
        createdAt
        updatedAt
        id
      }
      registered
      id
      createdAt
      updatedAt
    }
  }
`;
export const createExerciseList = /* GraphQL */ `
  mutation CreateExerciseList(
    $input: CreateExerciseListInput!
    $condition: ModelExerciseListConditionInput
  ) {
    createExerciseList(input: $input, condition: $condition) {
      id
      exerciseId
      exercise {
        bgImageUri
        title
        description
        level
        reward
        sponsor
        problem
        createdAt
        updatedAt
        id
      }
      studentEmail
      answer
      approveDecline
      isChecked
      isShowed
      createdAt
      updatedAt
    }
  }
`;
export const updateExerciseList = /* GraphQL */ `
  mutation UpdateExerciseList(
    $input: UpdateExerciseListInput!
    $condition: ModelExerciseListConditionInput
  ) {
    updateExerciseList(input: $input, condition: $condition) {
      id
      exerciseId
      exercise {
        bgImageUri
        title
        description
        level
        reward
        sponsor
        problem
        createdAt
        updatedAt
        id
      }
      studentEmail
      answer
      approveDecline
      isChecked
      isShowed
      createdAt
      updatedAt
    }
  }
`;
export const deleteExerciseList = /* GraphQL */ `
  mutation DeleteExerciseList(
    $input: DeleteExerciseListInput!
    $condition: ModelExerciseListConditionInput
  ) {
    deleteExerciseList(input: $input, condition: $condition) {
      id
      exerciseId
      exercise {
        bgImageUri
        title
        description
        level
        reward
        sponsor
        problem
        createdAt
        updatedAt
        id
      }
      studentEmail
      answer
      approveDecline
      isChecked
      isShowed
      createdAt
      updatedAt
    }
  }
`;
export const createInvite = /* GraphQL */ `
  mutation CreateInvite(
    $input: CreateInviteInput!
    $condition: ModelInviteConditionInput
  ) {
    createInvite(input: $input, condition: $condition) {
      code
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateInvite = /* GraphQL */ `
  mutation UpdateInvite(
    $input: UpdateInviteInput!
    $condition: ModelInviteConditionInput
  ) {
    updateInvite(input: $input, condition: $condition) {
      code
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteInvite = /* GraphQL */ `
  mutation DeleteInvite(
    $input: DeleteInviteInput!
    $condition: ModelInviteConditionInput
  ) {
    deleteInvite(input: $input, condition: $condition) {
      code
      status
      createdAt
      updatedAt
    }
  }
`;
export const createLearn = /* GraphQL */ `
  mutation CreateLearn(
    $input: CreateLearnInput!
    $condition: ModelLearnConditionInput
  ) {
    createLearn(input: $input, condition: $condition) {
      creatorId
      creator {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      bgImageUri
      sponsor
      title
      description
      level
      reward
      deposits {
        videoUri
        videoDuration
        title
        questions {
          questionText
          answers
          correctAnswer
        }
      }
      qaItems {
        questionItem {
          question
          authorId
          authorName
          createdAt
        }
        answerItems {
          answer
          authorEmail
          authorName
          authorTitle
          createdAt
          updatedAt
        }
      }
      socialHandles {
        discord
        instagram
        telegram
        tiktok
        twitter
        youtube
      }
      resources {
        items {
          title
          heroImageUri
          link
          id
          createdAt
          updatedAt
          learnResourcesId
        }
        nextToken
      }
      createdAt
      updatedAt
      id
    }
  }
`;
export const updateLearn = /* GraphQL */ `
  mutation UpdateLearn(
    $input: UpdateLearnInput!
    $condition: ModelLearnConditionInput
  ) {
    updateLearn(input: $input, condition: $condition) {
      creatorId
      creator {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      bgImageUri
      sponsor
      title
      description
      level
      reward
      deposits {
        videoUri
        videoDuration
        title
        questions {
          questionText
          answers
          correctAnswer
        }
      }
      qaItems {
        questionItem {
          question
          authorId
          authorName
          createdAt
        }
        answerItems {
          answer
          authorEmail
          authorName
          authorTitle
          createdAt
          updatedAt
        }
      }
      socialHandles {
        discord
        instagram
        telegram
        tiktok
        twitter
        youtube
      }
      resources {
        items {
          title
          heroImageUri
          link
          id
          createdAt
          updatedAt
          learnResourcesId
        }
        nextToken
      }
      createdAt
      updatedAt
      id
    }
  }
`;
export const deleteLearn = /* GraphQL */ `
  mutation DeleteLearn(
    $input: DeleteLearnInput!
    $condition: ModelLearnConditionInput
  ) {
    deleteLearn(input: $input, condition: $condition) {
      creatorId
      creator {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      bgImageUri
      sponsor
      title
      description
      level
      reward
      deposits {
        videoUri
        videoDuration
        title
        questions {
          questionText
          answers
          correctAnswer
        }
      }
      qaItems {
        questionItem {
          question
          authorId
          authorName
          createdAt
        }
        answerItems {
          answer
          authorEmail
          authorName
          authorTitle
          createdAt
          updatedAt
        }
      }
      socialHandles {
        discord
        instagram
        telegram
        tiktok
        twitter
        youtube
      }
      resources {
        items {
          title
          heroImageUri
          link
          id
          createdAt
          updatedAt
          learnResourcesId
        }
        nextToken
      }
      createdAt
      updatedAt
      id
    }
  }
`;
export const createLearnExercise = /* GraphQL */ `
  mutation CreateLearnExercise(
    $input: CreateLearnExerciseInput!
    $condition: ModelLearnExerciseConditionInput
  ) {
    createLearnExercise(input: $input, condition: $condition) {
      bgImageUri
      title
      description
      level
      reward
      sponsor
      problem
      createdAt
      updatedAt
      id
    }
  }
`;
export const updateLearnExercise = /* GraphQL */ `
  mutation UpdateLearnExercise(
    $input: UpdateLearnExerciseInput!
    $condition: ModelLearnExerciseConditionInput
  ) {
    updateLearnExercise(input: $input, condition: $condition) {
      bgImageUri
      title
      description
      level
      reward
      sponsor
      problem
      createdAt
      updatedAt
      id
    }
  }
`;
export const deleteLearnExercise = /* GraphQL */ `
  mutation DeleteLearnExercise(
    $input: DeleteLearnExerciseInput!
    $condition: ModelLearnExerciseConditionInput
  ) {
    deleteLearnExercise(input: $input, condition: $condition) {
      bgImageUri
      title
      description
      level
      reward
      sponsor
      problem
      createdAt
      updatedAt
      id
    }
  }
`;
export const createLearnStatus = /* GraphQL */ `
  mutation CreateLearnStatus(
    $input: CreateLearnStatusInput!
    $condition: ModelLearnStatusConditionInput
  ) {
    createLearnStatus(input: $input, condition: $condition) {
      athleteId
      athlete {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      learnItemId
      learn {
        creatorId
        creator {
          id
          firstName
          lastName
          mobilePhone
          athleteTag
          bio
          profilePhotoUri
          heroPhotoUri
          email
          level
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        bgImageUri
        sponsor
        title
        description
        level
        reward
        deposits {
          videoUri
          videoDuration
          title
        }
        socialHandles {
          discord
          instagram
          telegram
          tiktok
          twitter
          youtube
        }
        resources {
          nextToken
        }
        createdAt
        updatedAt
        id
      }
      passedDepositsCount
      wagered
      isWagered
      test
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateLearnStatus = /* GraphQL */ `
  mutation UpdateLearnStatus(
    $input: UpdateLearnStatusInput!
    $condition: ModelLearnStatusConditionInput
  ) {
    updateLearnStatus(input: $input, condition: $condition) {
      athleteId
      athlete {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      learnItemId
      learn {
        creatorId
        creator {
          id
          firstName
          lastName
          mobilePhone
          athleteTag
          bio
          profilePhotoUri
          heroPhotoUri
          email
          level
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        bgImageUri
        sponsor
        title
        description
        level
        reward
        deposits {
          videoUri
          videoDuration
          title
        }
        socialHandles {
          discord
          instagram
          telegram
          tiktok
          twitter
          youtube
        }
        resources {
          nextToken
        }
        createdAt
        updatedAt
        id
      }
      passedDepositsCount
      wagered
      isWagered
      test
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteLearnStatus = /* GraphQL */ `
  mutation DeleteLearnStatus(
    $input: DeleteLearnStatusInput!
    $condition: ModelLearnStatusConditionInput
  ) {
    deleteLearnStatus(input: $input, condition: $condition) {
      athleteId
      athlete {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      learnItemId
      learn {
        creatorId
        creator {
          id
          firstName
          lastName
          mobilePhone
          athleteTag
          bio
          profilePhotoUri
          heroPhotoUri
          email
          level
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        bgImageUri
        sponsor
        title
        description
        level
        reward
        deposits {
          videoUri
          videoDuration
          title
        }
        socialHandles {
          discord
          instagram
          telegram
          tiktok
          twitter
          youtube
        }
        resources {
          nextToken
        }
        createdAt
        updatedAt
        id
      }
      passedDepositsCount
      wagered
      isWagered
      test
      id
      createdAt
      updatedAt
    }
  }
`;
export const createOpportunity = /* GraphQL */ `
  mutation CreateOpportunity(
    $input: CreateOpportunityInput!
    $condition: ModelOpportunityConditionInput
  ) {
    createOpportunity(input: $input, condition: $condition) {
      id
      categories
      creatorId
      creator {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      details
      detailsTldr
      endDateTime
      eventType
      heroPhotoUri
      isPrivate
      location {
        lat
        lon
      }
      locationDetail {
        address
        unit
        city
        state
        zipCode
        country
        name
      }
      logoUri
      onlineReserved
      onlineTotal
      organizations {
        items {
          id
          displayName
          relationshipType
          opportunityId
          createdAt
          updatedAt
        }
        nextToken
      }
      orgs {
        displayName
        relationshipType
      }
      registrationUrl
      reward
      rewardDetails
      seatsReserved
      seatsTotal
      startDateTime
      status
      subtitle
      tags
      title
      timezone
      websitePrompt
      websiteUrl
      createdAt
      updatedAt
    }
  }
`;
export const updateOpportunity = /* GraphQL */ `
  mutation UpdateOpportunity(
    $input: UpdateOpportunityInput!
    $condition: ModelOpportunityConditionInput
  ) {
    updateOpportunity(input: $input, condition: $condition) {
      id
      categories
      creatorId
      creator {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      details
      detailsTldr
      endDateTime
      eventType
      heroPhotoUri
      isPrivate
      location {
        lat
        lon
      }
      locationDetail {
        address
        unit
        city
        state
        zipCode
        country
        name
      }
      logoUri
      onlineReserved
      onlineTotal
      organizations {
        items {
          id
          displayName
          relationshipType
          opportunityId
          createdAt
          updatedAt
        }
        nextToken
      }
      orgs {
        displayName
        relationshipType
      }
      registrationUrl
      reward
      rewardDetails
      seatsReserved
      seatsTotal
      startDateTime
      status
      subtitle
      tags
      title
      timezone
      websitePrompt
      websiteUrl
      createdAt
      updatedAt
    }
  }
`;
export const deleteOpportunity = /* GraphQL */ `
  mutation DeleteOpportunity(
    $input: DeleteOpportunityInput!
    $condition: ModelOpportunityConditionInput
  ) {
    deleteOpportunity(input: $input, condition: $condition) {
      id
      categories
      creatorId
      creator {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      details
      detailsTldr
      endDateTime
      eventType
      heroPhotoUri
      isPrivate
      location {
        lat
        lon
      }
      locationDetail {
        address
        unit
        city
        state
        zipCode
        country
        name
      }
      logoUri
      onlineReserved
      onlineTotal
      organizations {
        items {
          id
          displayName
          relationshipType
          opportunityId
          createdAt
          updatedAt
        }
        nextToken
      }
      orgs {
        displayName
        relationshipType
      }
      registrationUrl
      reward
      rewardDetails
      seatsReserved
      seatsTotal
      startDateTime
      status
      subtitle
      tags
      title
      timezone
      websitePrompt
      websiteUrl
      createdAt
      updatedAt
    }
  }
`;
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
      id
      displayName
      relationshipType
      opportunityId
      createdAt
      updatedAt
    }
  }
`;
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
      id
      displayName
      relationshipType
      opportunityId
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
      id
      displayName
      relationshipType
      opportunityId
      createdAt
      updatedAt
    }
  }
`;
export const createPhoneChallenge = /* GraphQL */ `
  mutation CreatePhoneChallenge(
    $input: CreatePhoneChallengeInput!
    $condition: ModelPhoneChallengeConditionInput
  ) {
    createPhoneChallenge(input: $input, condition: $condition) {
      code
      phoneNumber
      verified
      createdAt
      updatedAt
    }
  }
`;
export const updatePhoneChallenge = /* GraphQL */ `
  mutation UpdatePhoneChallenge(
    $input: UpdatePhoneChallengeInput!
    $condition: ModelPhoneChallengeConditionInput
  ) {
    updatePhoneChallenge(input: $input, condition: $condition) {
      code
      phoneNumber
      verified
      createdAt
      updatedAt
    }
  }
`;
export const deletePhoneChallenge = /* GraphQL */ `
  mutation DeletePhoneChallenge(
    $input: DeletePhoneChallengeInput!
    $condition: ModelPhoneChallengeConditionInput
  ) {
    deletePhoneChallenge(input: $input, condition: $condition) {
      code
      phoneNumber
      verified
      createdAt
      updatedAt
    }
  }
`;
export const createProposal = /* GraphQL */ `
  mutation CreateProposal(
    $input: CreateProposalInput!
    $condition: ModelProposalConditionInput
  ) {
    createProposal(input: $input, condition: $condition) {
      id
      sessionId
      proposalSession {
        id
        title
        startTime
        endTime
        createdAt
        updatedAt
      }
      email
      track
      actionVerb
      statement
      desiredGoal
      votingCount
      createdAt
      updatedAt
    }
  }
`;
export const updateProposal = /* GraphQL */ `
  mutation UpdateProposal(
    $input: UpdateProposalInput!
    $condition: ModelProposalConditionInput
  ) {
    updateProposal(input: $input, condition: $condition) {
      id
      sessionId
      proposalSession {
        id
        title
        startTime
        endTime
        createdAt
        updatedAt
      }
      email
      track
      actionVerb
      statement
      desiredGoal
      votingCount
      createdAt
      updatedAt
    }
  }
`;
export const deleteProposal = /* GraphQL */ `
  mutation DeleteProposal(
    $input: DeleteProposalInput!
    $condition: ModelProposalConditionInput
  ) {
    deleteProposal(input: $input, condition: $condition) {
      id
      sessionId
      proposalSession {
        id
        title
        startTime
        endTime
        createdAt
        updatedAt
      }
      email
      track
      actionVerb
      statement
      desiredGoal
      votingCount
      createdAt
      updatedAt
    }
  }
`;
export const createProposalSession = /* GraphQL */ `
  mutation CreateProposalSession(
    $input: CreateProposalSessionInput!
    $condition: ModelProposalSessionConditionInput
  ) {
    createProposalSession(input: $input, condition: $condition) {
      id
      title
      startTime
      endTime
      createdAt
      updatedAt
    }
  }
`;
export const updateProposalSession = /* GraphQL */ `
  mutation UpdateProposalSession(
    $input: UpdateProposalSessionInput!
    $condition: ModelProposalSessionConditionInput
  ) {
    updateProposalSession(input: $input, condition: $condition) {
      id
      title
      startTime
      endTime
      createdAt
      updatedAt
    }
  }
`;
export const deleteProposalSession = /* GraphQL */ `
  mutation DeleteProposalSession(
    $input: DeleteProposalSessionInput!
    $condition: ModelProposalSessionConditionInput
  ) {
    deleteProposalSession(input: $input, condition: $condition) {
      id
      title
      startTime
      endTime
      createdAt
      updatedAt
    }
  }
`;
export const createQRCode = /* GraphQL */ `
  mutation CreateQRCode(
    $input: CreateQRCodeInput!
    $condition: ModelQRCodeConditionInput
  ) {
    createQRCode(input: $input, condition: $condition) {
      learnId
      learn {
        creatorId
        creator {
          id
          firstName
          lastName
          mobilePhone
          athleteTag
          bio
          profilePhotoUri
          heroPhotoUri
          email
          level
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        bgImageUri
        sponsor
        title
        description
        level
        reward
        deposits {
          videoUri
          videoDuration
          title
        }
        socialHandles {
          discord
          instagram
          telegram
          tiktok
          twitter
          youtube
        }
        resources {
          nextToken
        }
        createdAt
        updatedAt
        id
      }
      depositNum
      wealthPointAmount
      rewardAmount
      itemName
      eventName
      limitCount
      usedCount
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateQRCode = /* GraphQL */ `
  mutation UpdateQRCode(
    $input: UpdateQRCodeInput!
    $condition: ModelQRCodeConditionInput
  ) {
    updateQRCode(input: $input, condition: $condition) {
      learnId
      learn {
        creatorId
        creator {
          id
          firstName
          lastName
          mobilePhone
          athleteTag
          bio
          profilePhotoUri
          heroPhotoUri
          email
          level
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        bgImageUri
        sponsor
        title
        description
        level
        reward
        deposits {
          videoUri
          videoDuration
          title
        }
        socialHandles {
          discord
          instagram
          telegram
          tiktok
          twitter
          youtube
        }
        resources {
          nextToken
        }
        createdAt
        updatedAt
        id
      }
      depositNum
      wealthPointAmount
      rewardAmount
      itemName
      eventName
      limitCount
      usedCount
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteQRCode = /* GraphQL */ `
  mutation DeleteQRCode(
    $input: DeleteQRCodeInput!
    $condition: ModelQRCodeConditionInput
  ) {
    deleteQRCode(input: $input, condition: $condition) {
      learnId
      learn {
        creatorId
        creator {
          id
          firstName
          lastName
          mobilePhone
          athleteTag
          bio
          profilePhotoUri
          heroPhotoUri
          email
          level
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        bgImageUri
        sponsor
        title
        description
        level
        reward
        deposits {
          videoUri
          videoDuration
          title
        }
        socialHandles {
          discord
          instagram
          telegram
          tiktok
          twitter
          youtube
        }
        resources {
          nextToken
        }
        createdAt
        updatedAt
        id
      }
      depositNum
      wealthPointAmount
      rewardAmount
      itemName
      eventName
      limitCount
      usedCount
      id
      createdAt
      updatedAt
    }
  }
`;
export const createResource = /* GraphQL */ `
  mutation CreateResource(
    $input: CreateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    createResource(input: $input, condition: $condition) {
      title
      heroImageUri
      link
      learnItem {
        creatorId
        creator {
          id
          firstName
          lastName
          mobilePhone
          athleteTag
          bio
          profilePhotoUri
          heroPhotoUri
          email
          level
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        bgImageUri
        sponsor
        title
        description
        level
        reward
        deposits {
          videoUri
          videoDuration
          title
        }
        socialHandles {
          discord
          instagram
          telegram
          tiktok
          twitter
          youtube
        }
        resources {
          nextToken
        }
        createdAt
        updatedAt
        id
      }
      id
      createdAt
      updatedAt
      learnResourcesId
    }
  }
`;
export const updateResource = /* GraphQL */ `
  mutation UpdateResource(
    $input: UpdateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    updateResource(input: $input, condition: $condition) {
      title
      heroImageUri
      link
      learnItem {
        creatorId
        creator {
          id
          firstName
          lastName
          mobilePhone
          athleteTag
          bio
          profilePhotoUri
          heroPhotoUri
          email
          level
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        bgImageUri
        sponsor
        title
        description
        level
        reward
        deposits {
          videoUri
          videoDuration
          title
        }
        socialHandles {
          discord
          instagram
          telegram
          tiktok
          twitter
          youtube
        }
        resources {
          nextToken
        }
        createdAt
        updatedAt
        id
      }
      id
      createdAt
      updatedAt
      learnResourcesId
    }
  }
`;
export const deleteResource = /* GraphQL */ `
  mutation DeleteResource(
    $input: DeleteResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    deleteResource(input: $input, condition: $condition) {
      title
      heroImageUri
      link
      learnItem {
        creatorId
        creator {
          id
          firstName
          lastName
          mobilePhone
          athleteTag
          bio
          profilePhotoUri
          heroPhotoUri
          email
          level
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        bgImageUri
        sponsor
        title
        description
        level
        reward
        deposits {
          videoUri
          videoDuration
          title
        }
        socialHandles {
          discord
          instagram
          telegram
          tiktok
          twitter
          youtube
        }
        resources {
          nextToken
        }
        createdAt
        updatedAt
        id
      }
      id
      createdAt
      updatedAt
      learnResourcesId
    }
  }
`;
export const createReward = /* GraphQL */ `
  mutation CreateReward(
    $input: CreateRewardInput!
    $condition: ModelRewardConditionInput
  ) {
    createReward(input: $input, condition: $condition) {
      id
      creatorId
      creator {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      title
      wealthAmount
      logoUri
      description
      heroPhotoUri
      createdAt
      updatedAt
    }
  }
`;
export const updateReward = /* GraphQL */ `
  mutation UpdateReward(
    $input: UpdateRewardInput!
    $condition: ModelRewardConditionInput
  ) {
    updateReward(input: $input, condition: $condition) {
      id
      creatorId
      creator {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      title
      wealthAmount
      logoUri
      description
      heroPhotoUri
      createdAt
      updatedAt
    }
  }
`;
export const deleteReward = /* GraphQL */ `
  mutation DeleteReward(
    $input: DeleteRewardInput!
    $condition: ModelRewardConditionInput
  ) {
    deleteReward(input: $input, condition: $condition) {
      id
      creatorId
      creator {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      title
      wealthAmount
      logoUri
      description
      heroPhotoUri
      createdAt
      updatedAt
    }
  }
`;
export const createRewardStatus = /* GraphQL */ `
  mutation CreateRewardStatus(
    $input: CreateRewardStatusInput!
    $condition: ModelRewardStatusConditionInput
  ) {
    createRewardStatus(input: $input, condition: $condition) {
      athleteId
      athlete {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      rewardItemId
      reward {
        id
        creatorId
        creator {
          id
          firstName
          lastName
          mobilePhone
          athleteTag
          bio
          profilePhotoUri
          heroPhotoUri
          email
          level
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        title
        wealthAmount
        logoUri
        description
        heroPhotoUri
        createdAt
        updatedAt
      }
      redeemed
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateRewardStatus = /* GraphQL */ `
  mutation UpdateRewardStatus(
    $input: UpdateRewardStatusInput!
    $condition: ModelRewardStatusConditionInput
  ) {
    updateRewardStatus(input: $input, condition: $condition) {
      athleteId
      athlete {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      rewardItemId
      reward {
        id
        creatorId
        creator {
          id
          firstName
          lastName
          mobilePhone
          athleteTag
          bio
          profilePhotoUri
          heroPhotoUri
          email
          level
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        title
        wealthAmount
        logoUri
        description
        heroPhotoUri
        createdAt
        updatedAt
      }
      redeemed
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteRewardStatus = /* GraphQL */ `
  mutation DeleteRewardStatus(
    $input: DeleteRewardStatusInput!
    $condition: ModelRewardStatusConditionInput
  ) {
    deleteRewardStatus(input: $input, condition: $condition) {
      athleteId
      athlete {
        id
        firstName
        lastName
        mobilePhone
        athleteTag
        bio
        profilePhotoUri
        heroPhotoUri
        email
        level
        sport {
          name
          airTableId
          isActive
        }
        team {
          name
          airTableId
          isActive
        }
        address {
          streetAddress
          apt
          city
          state
          zipCode
        }
        dateOfBirth
        accounts {
          nextToken
        }
        unitLookup {
          appId
          custId
        }
        podSettings {
          SAVINGS
          INVESTMENTS
          SPENDING
        }
        plaidToken
        plaidProcessorToken {
          plaidAccountId
          processorToken
        }
        wyreId
        isActive
        handle
        rewardedQrCodes {
          id
          itemOrEventName
        }
        activity {
          wealthBalance
          allWagered
          loginCount
          activePeriodInMinutes
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      rewardItemId
      reward {
        id
        creatorId
        creator {
          id
          firstName
          lastName
          mobilePhone
          athleteTag
          bio
          profilePhotoUri
          heroPhotoUri
          email
          level
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        title
        wealthAmount
        logoUri
        description
        heroPhotoUri
        createdAt
        updatedAt
      }
      redeemed
      id
      createdAt
      updatedAt
    }
  }
`;
export const createVotedUser = /* GraphQL */ `
  mutation CreateVotedUser(
    $input: CreateVotedUserInput!
    $condition: ModelVotedUserConditionInput
  ) {
    createVotedUser(input: $input, condition: $condition) {
      id
      sessionId
      votingSession {
        id
        title
        startTime
        endTime
        createdAt
        updatedAt
      }
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateVotedUser = /* GraphQL */ `
  mutation UpdateVotedUser(
    $input: UpdateVotedUserInput!
    $condition: ModelVotedUserConditionInput
  ) {
    updateVotedUser(input: $input, condition: $condition) {
      id
      sessionId
      votingSession {
        id
        title
        startTime
        endTime
        createdAt
        updatedAt
      }
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteVotedUser = /* GraphQL */ `
  mutation DeleteVotedUser(
    $input: DeleteVotedUserInput!
    $condition: ModelVotedUserConditionInput
  ) {
    deleteVotedUser(input: $input, condition: $condition) {
      id
      sessionId
      votingSession {
        id
        title
        startTime
        endTime
        createdAt
        updatedAt
      }
      email
      createdAt
      updatedAt
    }
  }
`;
export const createVotingSession = /* GraphQL */ `
  mutation CreateVotingSession(
    $input: CreateVotingSessionInput!
    $condition: ModelVotingSessionConditionInput
  ) {
    createVotingSession(input: $input, condition: $condition) {
      id
      title
      startTime
      endTime
      createdAt
      updatedAt
    }
  }
`;
export const updateVotingSession = /* GraphQL */ `
  mutation UpdateVotingSession(
    $input: UpdateVotingSessionInput!
    $condition: ModelVotingSessionConditionInput
  ) {
    updateVotingSession(input: $input, condition: $condition) {
      id
      title
      startTime
      endTime
      createdAt
      updatedAt
    }
  }
`;
export const deleteVotingSession = /* GraphQL */ `
  mutation DeleteVotingSession(
    $input: DeleteVotingSessionInput!
    $condition: ModelVotingSessionConditionInput
  ) {
    deleteVotingSession(input: $input, condition: $condition) {
      id
      title
      startTime
      endTime
      createdAt
      updatedAt
    }
  }
`;
