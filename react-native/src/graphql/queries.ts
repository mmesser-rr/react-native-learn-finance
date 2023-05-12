/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listPlaidAccounts = /* GraphQL */ `
  query ListPlaidAccounts($athleteId: ID!) {
    listPlaidAccounts(athleteId: $athleteId) {
      account_id
      balances {
        available
        current
        iso_currency_code
        limit
        unofficial_currency_code
      }
      mask
      name
      official_name
      subtype
      type
    }
  }
`;
export const listAthletUnitAccounts = /* GraphQL */ `
  query ListAthletUnitAccounts($athleteId: ID!) {
    listAthletUnitAccounts(athleteId: $athleteId) {
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
export const getAthleteUnitAccountById = /* GraphQL */ `
  query GetAthleteUnitAccountById($athleteId: ID!, $unitAccountId: String!) {
    getAthleteUnitAccountById(
      athleteId: $athleteId
      unitAccountId: $unitAccountId
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
export const getUnitTransactionById = /* GraphQL */ `
  query GetUnitTransactionById($athleteId: ID!, $unitTransactionId: String!) {
    getUnitTransactionById(
      athleteId: $athleteId
      unitTransactionId: $unitTransactionId
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
export const listAllUnitTransactions = /* GraphQL */ `
  query ListAllUnitTransactions($athleteId: ID!) {
    listAllUnitTransactions(athleteId: $athleteId) {
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
export const nearbyOpportunities = /* GraphQL */ `
  query NearbyOpportunities(
    $location: LocationInput!
    $distInMeters: Int
    $limit: Int
    $nextToken: String
  ) {
    nearbyOpportunities(
      location: $location
      distInMeters: $distInMeters
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
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
      total
      nextToken
    }
  }
`;
export const getAthletesCount = /* GraphQL */ `
  query GetAthletesCount {
    getAthletesCount
  }
`;
export const searchAppUsageLogs = /* GraphQL */ `
  query SearchAppUsageLogs(
    $filter: SearchableAppUsageLogFilterInput
    $sort: [SearchableAppUsageLogSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableAppUsageLogAggregationInput]
  ) {
    searchAppUsageLogs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchAthleteActivities = /* GraphQL */ `
  query SearchAthleteActivities(
    $filter: SearchableAthleteActivityFilterInput
    $sort: [SearchableAthleteActivitySortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableAthleteActivityAggregationInput]
  ) {
    searchAthleteActivities(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        wealthBalance
        allWagered
        loginCount
        activePeriodInMinutes
        id
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchEvents = /* GraphQL */ `
  query SearchEvents(
    $filter: SearchableEventFilterInput
    $sort: [SearchableEventSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableEventAggregationInput]
  ) {
    searchEvents(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchEventStatuses = /* GraphQL */ `
  query SearchEventStatuses(
    $filter: SearchableEventStatusFilterInput
    $sort: [SearchableEventStatusSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableEventStatusAggregationInput]
  ) {
    searchEventStatuses(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        eventItemId
        event {
          creatorId
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchLearns = /* GraphQL */ `
  query SearchLearns(
    $filter: SearchableLearnFilterInput
    $sort: [SearchableLearnSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableLearnAggregationInput]
  ) {
    searchLearns(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchLearnExercises = /* GraphQL */ `
  query SearchLearnExercises(
    $filter: SearchableLearnExerciseFilterInput
    $sort: [SearchableLearnExerciseSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableLearnExerciseAggregationInput]
  ) {
    searchLearnExercises(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchLearnStatuses = /* GraphQL */ `
  query SearchLearnStatuses(
    $filter: SearchableLearnStatusFilterInput
    $sort: [SearchableLearnStatusSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableLearnStatusAggregationInput]
  ) {
    searchLearnStatuses(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        learnItemId
        learn {
          creatorId
          bgImageUri
          sponsor
          title
          description
          level
          reward
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchOpportunities = /* GraphQL */ `
  query SearchOpportunities(
    $filter: SearchableOpportunityFilterInput
    $sort: [SearchableOpportunitySortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableOpportunityAggregationInput]
  ) {
    searchOpportunities(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchProposals = /* GraphQL */ `
  query SearchProposals(
    $filter: SearchableProposalFilterInput
    $sort: [SearchableProposalSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableProposalAggregationInput]
  ) {
    searchProposals(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchProposalSessions = /* GraphQL */ `
  query SearchProposalSessions(
    $filter: SearchableProposalSessionFilterInput
    $sort: [SearchableProposalSessionSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableProposalSessionAggregationInput]
  ) {
    searchProposalSessions(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        title
        startTime
        endTime
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchQRCodes = /* GraphQL */ `
  query SearchQRCodes(
    $filter: SearchableQRCodeFilterInput
    $sort: [SearchableQRCodeSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableQRCodeAggregationInput]
  ) {
    searchQRCodes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        learnId
        learn {
          creatorId
          bgImageUri
          sponsor
          title
          description
          level
          reward
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchResources = /* GraphQL */ `
  query SearchResources(
    $filter: SearchableResourceFilterInput
    $sort: [SearchableResourceSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableResourceAggregationInput]
  ) {
    searchResources(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        title
        heroImageUri
        link
        learnItem {
          creatorId
          bgImageUri
          sponsor
          title
          description
          level
          reward
          createdAt
          updatedAt
          id
        }
        id
        createdAt
        updatedAt
        learnResourcesId
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchRewards = /* GraphQL */ `
  query SearchRewards(
    $filter: SearchableRewardFilterInput
    $sort: [SearchableRewardSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableRewardAggregationInput]
  ) {
    searchRewards(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchRewardStatuses = /* GraphQL */ `
  query SearchRewardStatuses(
    $filter: SearchableRewardStatusFilterInput
    $sort: [SearchableRewardStatusSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableRewardStatusAggregationInput]
  ) {
    searchRewardStatuses(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        rewardItemId
        reward {
          id
          creatorId
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchVotedUsers = /* GraphQL */ `
  query SearchVotedUsers(
    $filter: SearchableVotedUserFilterInput
    $sort: [SearchableVotedUserSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableVotedUserAggregationInput]
  ) {
    searchVotedUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchVotingSessions = /* GraphQL */ `
  query SearchVotingSessions(
    $filter: SearchableVotingSessionFilterInput
    $sort: [SearchableVotingSessionSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableVotingSessionAggregationInput]
  ) {
    searchVotingSessions(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        title
        startTime
        endTime
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getAppUsageLog = /* GraphQL */ `
  query GetAppUsageLog($dateString: String!) {
    getAppUsageLog(dateString: $dateString) {
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
export const listAppUsageLogs = /* GraphQL */ `
  query ListAppUsageLogs(
    $dateString: String
    $filter: ModelAppUsageLogFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAppUsageLogs(
      dateString: $dateString
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAthlete = /* GraphQL */ `
  query GetAthlete($id: ID!) {
    getAthlete(id: $id) {
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
export const listAthletes = /* GraphQL */ `
  query ListAthletes(
    $filter: ModelAthleteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAthletes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAthleteAccount = /* GraphQL */ `
  query GetAthleteAccount($id: ID!) {
    getAthleteAccount(id: $id) {
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
export const listAthleteAccounts = /* GraphQL */ `
  query ListAthleteAccounts(
    $filter: ModelAthleteAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAthleteAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
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
      nextToken
    }
  }
`;
export const getRecentTransaction = /* GraphQL */ `
  query GetRecentTransaction($id: ID!) {
    getRecentTransaction(id: $id) {
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
export const listRecentTransactions = /* GraphQL */ `
  query ListRecentTransactions(
    $filter: ModelRecentTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecentTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAthleteActivity = /* GraphQL */ `
  query GetAthleteActivity($id: ID!) {
    getAthleteActivity(id: $id) {
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
export const listAthleteActivities = /* GraphQL */ `
  query ListAthleteActivities(
    $filter: ModelAthleteActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAthleteActivities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        wealthBalance
        allWagered
        loginCount
        activePeriodInMinutes
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEmailChallenge = /* GraphQL */ `
  query GetEmailChallenge($code: String!, $email: String!) {
    getEmailChallenge(code: $code, email: $email) {
      code
      email
      verified
      createdAt
      updatedAt
    }
  }
`;
export const listEmailChallenges = /* GraphQL */ `
  query ListEmailChallenges(
    $code: String
    $email: ModelStringKeyConditionInput
    $filter: ModelEmailChallengeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEmailChallenges(
      code: $code
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        code
        email
        verified
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEventStatus = /* GraphQL */ `
  query GetEventStatus($id: ID!) {
    getEventStatus(id: $id) {
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
export const listEventStatuses = /* GraphQL */ `
  query ListEventStatuses(
    $filter: ModelEventStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventStatuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        eventItemId
        event {
          creatorId
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
      nextToken
    }
  }
`;
export const getExerciseList = /* GraphQL */ `
  query GetExerciseList($id: ID!) {
    getExerciseList(id: $id) {
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
export const listExerciseLists = /* GraphQL */ `
  query ListExerciseLists(
    $filter: ModelExerciseListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExerciseLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getInvite = /* GraphQL */ `
  query GetInvite($code: String!, $status: Status!) {
    getInvite(code: $code, status: $status) {
      code
      status
      createdAt
      updatedAt
    }
  }
`;
export const listInvites = /* GraphQL */ `
  query ListInvites(
    $code: String
    $status: ModelStringKeyConditionInput
    $filter: ModelInviteFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listInvites(
      code: $code
      status: $status
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        code
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLearn = /* GraphQL */ `
  query GetLearn($id: ID!) {
    getLearn(id: $id) {
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
export const listLearns = /* GraphQL */ `
  query ListLearns(
    $filter: ModelLearnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLearns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLearnExercise = /* GraphQL */ `
  query GetLearnExercise($id: ID!) {
    getLearnExercise(id: $id) {
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
export const listLearnExercises = /* GraphQL */ `
  query ListLearnExercises(
    $filter: ModelLearnExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLearnExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLearnStatus = /* GraphQL */ `
  query GetLearnStatus($id: ID!) {
    getLearnStatus(id: $id) {
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
export const listLearnStatuses = /* GraphQL */ `
  query ListLearnStatuses(
    $filter: ModelLearnStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLearnStatuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        learnItemId
        learn {
          creatorId
          bgImageUri
          sponsor
          title
          description
          level
          reward
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
      nextToken
    }
  }
`;
export const getOpportunity = /* GraphQL */ `
  query GetOpportunity($id: ID!) {
    getOpportunity(id: $id) {
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
export const listOpportunities = /* GraphQL */ `
  query ListOpportunities(
    $filter: ModelOpportunityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOpportunities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
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
      total
      nextToken
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      displayName
      relationshipType
      opportunityId
      createdAt
      updatedAt
    }
  }
`;
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getPhoneChallenge = /* GraphQL */ `
  query GetPhoneChallenge($code: String!, $phoneNumber: String!) {
    getPhoneChallenge(code: $code, phoneNumber: $phoneNumber) {
      code
      phoneNumber
      verified
      createdAt
      updatedAt
    }
  }
`;
export const listPhoneChallenges = /* GraphQL */ `
  query ListPhoneChallenges(
    $code: String
    $phoneNumber: ModelStringKeyConditionInput
    $filter: ModelPhoneChallengeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPhoneChallenges(
      code: $code
      phoneNumber: $phoneNumber
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        code
        phoneNumber
        verified
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProposal = /* GraphQL */ `
  query GetProposal($id: ID!) {
    getProposal(id: $id) {
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
export const listProposals = /* GraphQL */ `
  query ListProposals(
    $filter: ModelProposalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProposals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProposalSession = /* GraphQL */ `
  query GetProposalSession($id: ID!) {
    getProposalSession(id: $id) {
      id
      title
      startTime
      endTime
      createdAt
      updatedAt
    }
  }
`;
export const listProposalSessions = /* GraphQL */ `
  query ListProposalSessions(
    $filter: ModelProposalSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProposalSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        startTime
        endTime
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQRCode = /* GraphQL */ `
  query GetQRCode($id: ID!) {
    getQRCode(id: $id) {
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
export const listQRCodes = /* GraphQL */ `
  query ListQRCodes(
    $filter: ModelQRCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQRCodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        learnId
        learn {
          creatorId
          bgImageUri
          sponsor
          title
          description
          level
          reward
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
      nextToken
    }
  }
`;
export const getResource = /* GraphQL */ `
  query GetResource($id: ID!) {
    getResource(id: $id) {
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
export const listResources = /* GraphQL */ `
  query ListResources(
    $filter: ModelResourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        title
        heroImageUri
        link
        learnItem {
          creatorId
          bgImageUri
          sponsor
          title
          description
          level
          reward
          createdAt
          updatedAt
          id
        }
        id
        createdAt
        updatedAt
        learnResourcesId
      }
      nextToken
    }
  }
`;
export const getReward = /* GraphQL */ `
  query GetReward($id: ID!) {
    getReward(id: $id) {
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
export const listRewards = /* GraphQL */ `
  query ListRewards(
    $filter: ModelRewardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRewards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRewardStatus = /* GraphQL */ `
  query GetRewardStatus($id: ID!) {
    getRewardStatus(id: $id) {
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
export const listRewardStatuses = /* GraphQL */ `
  query ListRewardStatuses(
    $filter: ModelRewardStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRewardStatuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          dateOfBirth
          plaidToken
          wyreId
          isActive
          handle
          createdAt
          updatedAt
        }
        rewardItemId
        reward {
          id
          creatorId
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
      nextToken
    }
  }
`;
export const getVotedUser = /* GraphQL */ `
  query GetVotedUser($id: ID!) {
    getVotedUser(id: $id) {
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
export const listVotedUsers = /* GraphQL */ `
  query ListVotedUsers(
    $filter: ModelVotedUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVotedUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getVotingSession = /* GraphQL */ `
  query GetVotingSession($id: ID!) {
    getVotingSession(id: $id) {
      id
      title
      startTime
      endTime
      createdAt
      updatedAt
    }
  }
`;
export const listVotingSessions = /* GraphQL */ `
  query ListVotingSessions(
    $filter: ModelVotingSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVotingSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        startTime
        endTime
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
