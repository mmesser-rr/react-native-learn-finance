export const customCreateLearnStatus = /* GraphQL */ `
  mutation CustomCreateLearnStatus(
    $input: CreateLearnStatusInput!
    $condition: ModelLearnStatusConditionInput
  ) {
    createLearnStatus(input: $input, condition: $condition) {
      id
      athleteId
      learnItemId
      passedDepositsCount
    }
  }
`;

export const customUpdateLearnStatus = /* GraphQL */ `
  mutation CustomUpdateLearnStatus(
    $input: UpdateLearnStatusInput!
    $condition: ModelLearnStatusConditionInput
  ) {
    updateLearnStatus(input: $input, condition: $condition) {
      id
      athleteId
      learnItemId
      passedDepositsCount
    }
  }
`;

export const customDeleteLearnStatus = /* GraphQL */ `
  mutation CustomDeleteLearnStatus(
    $input: DeleteLearnStatusInput!
    $condition: ModelLearnStatusConditionInput
  ) {
    deleteLearnStatus(input: $input, condition: $condition) {
      id
      athleteId
      learnItemId
      passedDepositsCount
      wagered
      isWagered
    }
  }
`;

export const customCreateEventStatus = /* GraphQL */ `
  mutation CustomCreateEventStatus(
    $input: CreateEventStatusInput!
    $condition: ModelEventStatusConditionInput
  ) {
    createEventStatus(input: $input, condition: $condition) {
      id
      athleteId
      eventItemId
      registered
    }
  }
`;

export const customUpdateEventStatus = /* GraphQL */ `
  mutation CustomUpdateEventStatus(
    $input: UpdateEventStatusInput!
    $condition: ModelEventStatusConditionInput
  ) {
    updateEventStatus(input: $input, condition: $condition) {
      id
      athleteId
      eventItemId
      registered
    }
  }
`;

export const customDeleteEventStatus = /* GraphQL */ `
  mutation CustomDeleteEventStatus(
    $input: DeleteEventStatusInput!
    $condition: ModelEventStatusConditionInput
  ) {
    deleteEventStatus(input: $input, condition: $condition) {
      id
      athleteId
      eventItemId
      registered
    }
  }
`;

export const customCreateRewardStatus = /* GraphQL */ `
  mutation CustomCreateRewardStatus(
    $input: CreateRewardStatusInput!
    $condition: ModelRewardStatusConditionInput
  ) {
    createRewardStatus(input: $input, condition: $condition) {
      id
      athleteId
      rewardItemId
      redeemed
    }
  }
`;

export const customUpdateRewardStatus = /* GraphQL */ `
  mutation CustomUpdateRewardStatus(
    $input: UpdateRewardStatusInput!
    $condition: ModelRewardStatusConditionInput
  ) {
    updateRewardStatus(input: $input, condition: $condition) {
      id
      athleteId
      rewardItemId
      redeemed
    }
  }
`;

export const customDeleteRewardStatus = /* GraphQL */ `
  mutation CustomDeleteRewardStatus(
    $input: DeleteRewardStatusInput!
    $condition: ModelRewardStatusConditionInput
  ) {
    deleteRewardStatus(input: $input, condition: $condition) {
      id
      athleteId
      rewardItemId
      redeemed
    }
  }
`;