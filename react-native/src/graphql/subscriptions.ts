/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAppUsageLog = /* GraphQL */ `
  subscription OnCreateAppUsageLog {
    onCreateAppUsageLog {
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
export const onUpdateAppUsageLog = /* GraphQL */ `
  subscription OnUpdateAppUsageLog {
    onUpdateAppUsageLog {
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
export const onDeleteAppUsageLog = /* GraphQL */ `
  subscription OnDeleteAppUsageLog {
    onDeleteAppUsageLog {
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
export const onCreateAthlete = /* GraphQL */ `
  subscription OnCreateAthlete {
    onCreateAthlete {
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
export const onUpdateAthlete = /* GraphQL */ `
  subscription OnUpdateAthlete {
    onUpdateAthlete {
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
export const onDeleteAthlete = /* GraphQL */ `
  subscription OnDeleteAthlete {
    onDeleteAthlete {
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
export const onCreateAthleteAccount = /* GraphQL */ `
  subscription OnCreateAthleteAccount {
    onCreateAthleteAccount {
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
export const onUpdateAthleteAccount = /* GraphQL */ `
  subscription OnUpdateAthleteAccount {
    onUpdateAthleteAccount {
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
export const onDeleteAthleteAccount = /* GraphQL */ `
  subscription OnDeleteAthleteAccount {
    onDeleteAthleteAccount {
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
export const onCreateRecentTransaction = /* GraphQL */ `
  subscription OnCreateRecentTransaction {
    onCreateRecentTransaction {
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
export const onUpdateRecentTransaction = /* GraphQL */ `
  subscription OnUpdateRecentTransaction {
    onUpdateRecentTransaction {
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
export const onDeleteRecentTransaction = /* GraphQL */ `
  subscription OnDeleteRecentTransaction {
    onDeleteRecentTransaction {
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
export const onCreateAthleteActivity = /* GraphQL */ `
  subscription OnCreateAthleteActivity {
    onCreateAthleteActivity {
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
export const onUpdateAthleteActivity = /* GraphQL */ `
  subscription OnUpdateAthleteActivity {
    onUpdateAthleteActivity {
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
export const onDeleteAthleteActivity = /* GraphQL */ `
  subscription OnDeleteAthleteActivity {
    onDeleteAthleteActivity {
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
export const onCreateEmailChallenge = /* GraphQL */ `
  subscription OnCreateEmailChallenge {
    onCreateEmailChallenge {
      code
      email
      verified
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEmailChallenge = /* GraphQL */ `
  subscription OnUpdateEmailChallenge {
    onUpdateEmailChallenge {
      code
      email
      verified
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEmailChallenge = /* GraphQL */ `
  subscription OnDeleteEmailChallenge {
    onDeleteEmailChallenge {
      code
      email
      verified
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateEventStatus = /* GraphQL */ `
  subscription OnCreateEventStatus {
    onCreateEventStatus {
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
export const onUpdateEventStatus = /* GraphQL */ `
  subscription OnUpdateEventStatus {
    onUpdateEventStatus {
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
export const onDeleteEventStatus = /* GraphQL */ `
  subscription OnDeleteEventStatus {
    onDeleteEventStatus {
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
export const onCreateExerciseList = /* GraphQL */ `
  subscription OnCreateExerciseList {
    onCreateExerciseList {
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
export const onUpdateExerciseList = /* GraphQL */ `
  subscription OnUpdateExerciseList {
    onUpdateExerciseList {
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
export const onDeleteExerciseList = /* GraphQL */ `
  subscription OnDeleteExerciseList {
    onDeleteExerciseList {
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
export const onCreateInvite = /* GraphQL */ `
  subscription OnCreateInvite {
    onCreateInvite {
      code
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInvite = /* GraphQL */ `
  subscription OnUpdateInvite {
    onUpdateInvite {
      code
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInvite = /* GraphQL */ `
  subscription OnDeleteInvite {
    onDeleteInvite {
      code
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLearn = /* GraphQL */ `
  subscription OnCreateLearn {
    onCreateLearn {
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
export const onUpdateLearn = /* GraphQL */ `
  subscription OnUpdateLearn {
    onUpdateLearn {
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
export const onDeleteLearn = /* GraphQL */ `
  subscription OnDeleteLearn {
    onDeleteLearn {
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
export const onCreateLearnExercise = /* GraphQL */ `
  subscription OnCreateLearnExercise {
    onCreateLearnExercise {
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
export const onUpdateLearnExercise = /* GraphQL */ `
  subscription OnUpdateLearnExercise {
    onUpdateLearnExercise {
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
export const onDeleteLearnExercise = /* GraphQL */ `
  subscription OnDeleteLearnExercise {
    onDeleteLearnExercise {
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
export const onCreateLearnStatus = /* GraphQL */ `
  subscription OnCreateLearnStatus {
    onCreateLearnStatus {
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
export const onUpdateLearnStatus = /* GraphQL */ `
  subscription OnUpdateLearnStatus {
    onUpdateLearnStatus {
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
export const onDeleteLearnStatus = /* GraphQL */ `
  subscription OnDeleteLearnStatus {
    onDeleteLearnStatus {
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
export const onCreateOpportunity = /* GraphQL */ `
  subscription OnCreateOpportunity {
    onCreateOpportunity {
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
export const onUpdateOpportunity = /* GraphQL */ `
  subscription OnUpdateOpportunity {
    onUpdateOpportunity {
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
export const onDeleteOpportunity = /* GraphQL */ `
  subscription OnDeleteOpportunity {
    onDeleteOpportunity {
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
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization {
    onCreateOrganization {
      id
      displayName
      relationshipType
      opportunityId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization {
    onUpdateOrganization {
      id
      displayName
      relationshipType
      opportunityId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization {
    onDeleteOrganization {
      id
      displayName
      relationshipType
      opportunityId
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePhoneChallenge = /* GraphQL */ `
  subscription OnCreatePhoneChallenge {
    onCreatePhoneChallenge {
      code
      phoneNumber
      verified
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePhoneChallenge = /* GraphQL */ `
  subscription OnUpdatePhoneChallenge {
    onUpdatePhoneChallenge {
      code
      phoneNumber
      verified
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePhoneChallenge = /* GraphQL */ `
  subscription OnDeletePhoneChallenge {
    onDeletePhoneChallenge {
      code
      phoneNumber
      verified
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProposal = /* GraphQL */ `
  subscription OnCreateProposal {
    onCreateProposal {
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
export const onUpdateProposal = /* GraphQL */ `
  subscription OnUpdateProposal {
    onUpdateProposal {
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
export const onDeleteProposal = /* GraphQL */ `
  subscription OnDeleteProposal {
    onDeleteProposal {
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
export const onCreateProposalSession = /* GraphQL */ `
  subscription OnCreateProposalSession {
    onCreateProposalSession {
      id
      title
      startTime
      endTime
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProposalSession = /* GraphQL */ `
  subscription OnUpdateProposalSession {
    onUpdateProposalSession {
      id
      title
      startTime
      endTime
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProposalSession = /* GraphQL */ `
  subscription OnDeleteProposalSession {
    onDeleteProposalSession {
      id
      title
      startTime
      endTime
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQRCode = /* GraphQL */ `
  subscription OnCreateQRCode {
    onCreateQRCode {
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
export const onUpdateQRCode = /* GraphQL */ `
  subscription OnUpdateQRCode {
    onUpdateQRCode {
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
export const onDeleteQRCode = /* GraphQL */ `
  subscription OnDeleteQRCode {
    onDeleteQRCode {
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
export const onCreateResource = /* GraphQL */ `
  subscription OnCreateResource {
    onCreateResource {
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
export const onUpdateResource = /* GraphQL */ `
  subscription OnUpdateResource {
    onUpdateResource {
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
export const onDeleteResource = /* GraphQL */ `
  subscription OnDeleteResource {
    onDeleteResource {
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
export const onCreateReward = /* GraphQL */ `
  subscription OnCreateReward {
    onCreateReward {
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
export const onUpdateReward = /* GraphQL */ `
  subscription OnUpdateReward {
    onUpdateReward {
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
export const onDeleteReward = /* GraphQL */ `
  subscription OnDeleteReward {
    onDeleteReward {
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
export const onCreateRewardStatus = /* GraphQL */ `
  subscription OnCreateRewardStatus {
    onCreateRewardStatus {
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
export const onUpdateRewardStatus = /* GraphQL */ `
  subscription OnUpdateRewardStatus {
    onUpdateRewardStatus {
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
export const onDeleteRewardStatus = /* GraphQL */ `
  subscription OnDeleteRewardStatus {
    onDeleteRewardStatus {
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
export const onCreateVotedUser = /* GraphQL */ `
  subscription OnCreateVotedUser {
    onCreateVotedUser {
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
export const onUpdateVotedUser = /* GraphQL */ `
  subscription OnUpdateVotedUser {
    onUpdateVotedUser {
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
export const onDeleteVotedUser = /* GraphQL */ `
  subscription OnDeleteVotedUser {
    onDeleteVotedUser {
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
export const onCreateVotingSession = /* GraphQL */ `
  subscription OnCreateVotingSession {
    onCreateVotingSession {
      id
      title
      startTime
      endTime
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVotingSession = /* GraphQL */ `
  subscription OnUpdateVotingSession {
    onUpdateVotingSession {
      id
      title
      startTime
      endTime
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVotingSession = /* GraphQL */ `
  subscription OnDeleteVotingSession {
    onDeleteVotingSession {
      id
      title
      startTime
      endTime
      createdAt
      updatedAt
    }
  }
`;
