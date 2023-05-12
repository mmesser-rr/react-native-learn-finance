/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLearnStatusInput = {
  athleteId: string,
  learnItemId: string,
  passedDepositsCount?: number | null,
  wagered?: number | null,
  isWagered?: boolean | null,
  test?: number | null,
  id?: string | null,
};

export type ModelLearnStatusConditionInput = {
  athleteId?: ModelIDInput | null,
  learnItemId?: ModelIDInput | null,
  passedDepositsCount?: ModelIntInput | null,
  wagered?: ModelIntInput | null,
  isWagered?: ModelBooleanInput | null,
  test?: ModelIntInput | null,
  and?: Array< ModelLearnStatusConditionInput | null > | null,
  or?: Array< ModelLearnStatusConditionInput | null > | null,
  not?: ModelLearnStatusConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type LearnStatus = {
  __typename: "LearnStatus",
  athleteId: string,
  athlete?: Athlete | null,
  learnItemId: string,
  learn?: Learn | null,
  passedDepositsCount?: number | null,
  wagered?: number | null,
  isWagered?: boolean | null,
  test?: number | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type Athlete = {
  __typename: "Athlete",
  id: string,
  firstName: string,
  lastName: string,
  mobilePhone: string,
  athleteTag?: string | null,
  bio?: string | null,
  profilePhotoUri?: string | null,
  heroPhotoUri?: string | null,
  email: string,
  level?: AthleteLevel | null,
  sport?: AthleteSport | null,
  team?: AthleteTeam | null,
  address?: Address | null,
  dateOfBirth?: string | null,
  accounts?: ModelAthleteAccountConnection | null,
  unitLookup?: AthleteUnitLookup | null,
  podSettings?: PodSettings | null,
  plaidToken?: string | null,
  plaidProcessorToken?: ProcessorToken | null,
  wyreId?: string | null,
  isActive: boolean,
  handle?: string | null,
  rewardedQrCodes?:  Array<QrCodes | null > | null,
  activity?: AthleteActivity | null,
  createdAt: string,
  updatedAt: string,
};

export enum AthleteLevel {
  COLLEGE = "COLLEGE",
  PROFESSIONAL = "PROFESSIONAL",
}


export type AthleteSport = {
  __typename: "AthleteSport",
  name: string,
  airTableId: string,
  isActive?: boolean | null,
};

export type AthleteTeam = {
  __typename: "AthleteTeam",
  name: string,
  airTableId: string,
  isActive?: boolean | null,
};

export type Address = {
  __typename: "Address",
  streetAddress: string,
  apt?: string | null,
  city: string,
  state: string,
  zipCode: string,
};

export type ModelAthleteAccountConnection = {
  __typename: "ModelAthleteAccountConnection",
  items:  Array<AthleteAccount | null >,
  nextToken?: string | null,
};

export type AthleteAccount = {
  __typename: "AthleteAccount",
  athlete: Athlete,
  unitAccountId: string,
  routingCode: string,
  accountNumber: string,
  podName: string,
  id: string,
  createdAt: string,
  updatedAt: string,
  athleteAccountsId?: string | null,
};

export type AthleteUnitLookup = {
  __typename: "AthleteUnitLookup",
  appId: string,
  custId?: string | null,
};

export type PodSettings = {
  __typename: "PodSettings",
  SAVINGS: number,
  INVESTMENTS: number,
  SPENDING: number,
};

export type ProcessorToken = {
  __typename: "ProcessorToken",
  plaidAccountId: string,
  processorToken?: string | null,
};

export type QrCodes = {
  __typename: "QrCodes",
  id?: string | null,
  itemOrEventName?: string | null,
};

export type AthleteActivity = {
  __typename: "AthleteActivity",
  wealthBalance?: number | null,
  allWagered?: number | null,
  loginCount?: number | null,
  activePeriodInMinutes?: number | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type Learn = {
  __typename: "Learn",
  creatorId: string,
  creator?: Athlete | null,
  bgImageUri?: string | null,
  sponsor: string,
  title: string,
  description?: string | null,
  level: LearnLevel,
  reward: number,
  deposits:  Array<Deposit >,
  qaItems?:  Array<QAItem > | null,
  socialHandles?: SocialHandles | null,
  resources?: ModelResourceConnection | null,
  createdAt: string,
  updatedAt: string,
  id: string,
};

export enum LearnLevel {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
}


export type Deposit = {
  __typename: "Deposit",
  videoUri: string,
  videoDuration?: number | null,
  title: string,
  questions:  Array<Quiz >,
};

export type Quiz = {
  __typename: "Quiz",
  questionText: string,
  answers: Array< string >,
  correctAnswer: string,
};

export type QAItem = {
  __typename: "QAItem",
  questionItem: QuestionItem,
  answerItems:  Array<AnswerItem >,
};

export type QuestionItem = {
  __typename: "QuestionItem",
  question: string,
  authorId: string,
  authorName?: string | null,
  createdAt?: string | null,
};

export type AnswerItem = {
  __typename: "AnswerItem",
  answer: string,
  authorEmail?: string | null,
  authorName?: string | null,
  authorTitle?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type SocialHandles = {
  __typename: "SocialHandles",
  discord?: string | null,
  instagram?: string | null,
  telegram?: string | null,
  tiktok?: string | null,
  twitter?: string | null,
  youtube?: string | null,
};

export type ModelResourceConnection = {
  __typename: "ModelResourceConnection",
  items:  Array<Resource | null >,
  nextToken?: string | null,
};

export type Resource = {
  __typename: "Resource",
  title: string,
  heroImageUri: string,
  link: string,
  learnItem?: Learn | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  learnResourcesId?: string | null,
};

export type UpdateLearnStatusInput = {
  athleteId?: string | null,
  learnItemId?: string | null,
  passedDepositsCount?: number | null,
  wagered?: number | null,
  isWagered?: boolean | null,
  test?: number | null,
  id: string,
};

export type DeleteLearnStatusInput = {
  id: string,
};

export type CreateEventStatusInput = {
  athleteId: string,
  eventItemId: string,
  registered: boolean,
  id?: string | null,
};

export type ModelEventStatusConditionInput = {
  athleteId?: ModelIDInput | null,
  eventItemId?: ModelIDInput | null,
  registered?: ModelBooleanInput | null,
  and?: Array< ModelEventStatusConditionInput | null > | null,
  or?: Array< ModelEventStatusConditionInput | null > | null,
  not?: ModelEventStatusConditionInput | null,
};

export type EventStatus = {
  __typename: "EventStatus",
  athleteId: string,
  athlete?: Athlete | null,
  eventItemId: string,
  event?: Event | null,
  registered: boolean,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type Event = {
  __typename: "Event",
  creatorId: string,
  creator?: Athlete | null,
  sponsor: string,
  title: string,
  category: string,
  heroPhotoUri: string,
  logoUri: string,
  tagline: string,
  description: string,
  dateTime: number,
  location: string,
  reward: number,
  createdAt: string,
  updatedAt: string,
  id: string,
};

export type UpdateEventStatusInput = {
  athleteId?: string | null,
  eventItemId?: string | null,
  registered?: boolean | null,
  id: string,
};

export type DeleteEventStatusInput = {
  id: string,
};

export type CreateRewardStatusInput = {
  athleteId: string,
  rewardItemId: string,
  redeemed: boolean,
  id?: string | null,
};

export type ModelRewardStatusConditionInput = {
  athleteId?: ModelIDInput | null,
  rewardItemId?: ModelIDInput | null,
  redeemed?: ModelBooleanInput | null,
  and?: Array< ModelRewardStatusConditionInput | null > | null,
  or?: Array< ModelRewardStatusConditionInput | null > | null,
  not?: ModelRewardStatusConditionInput | null,
};

export type RewardStatus = {
  __typename: "RewardStatus",
  athleteId: string,
  athlete?: Athlete | null,
  rewardItemId: string,
  reward?: Reward | null,
  redeemed: boolean,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type Reward = {
  __typename: "Reward",
  id: string,
  creatorId: string,
  creator?: Athlete | null,
  title: string,
  wealthAmount: number,
  logoUri?: string | null,
  description?: string | null,
  heroPhotoUri?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRewardStatusInput = {
  athleteId?: string | null,
  rewardItemId?: string | null,
  redeemed?: boolean | null,
  id: string,
};

export type DeleteRewardStatusInput = {
  id: string,
};

export type SearchableLearnFilterInput = {
  creatorId?: SearchableIDFilterInput | null,
  bgImageUri?: SearchableStringFilterInput | null,
  sponsor?: SearchableStringFilterInput | null,
  title?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  reward?: SearchableIntFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  id?: SearchableIDFilterInput | null,
  level?: SearchableStringFilterInput | null,
  and?: Array< SearchableLearnFilterInput | null > | null,
  or?: Array< SearchableLearnFilterInput | null > | null,
  not?: SearchableLearnFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableLearnSortInput = {
  field?: SearchableLearnSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableLearnSortableFields {
  creatorId = "creatorId",
  bgImageUri = "bgImageUri",
  sponsor = "sponsor",
  title = "title",
  description = "description",
  reward = "reward",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  id = "id",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableLearnAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableLearnAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableLearnAggregateField {
  creatorId = "creatorId",
  bgImageUri = "bgImageUri",
  sponsor = "sponsor",
  title = "title",
  description = "description",
  level = "level",
  reward = "reward",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  id = "id",
}


export type SearchableLearnConnection = {
  __typename: "SearchableLearnConnection",
  items:  Array<Learn | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type SearchableLearnStatusFilterInput = {
  athleteId?: SearchableIDFilterInput | null,
  learnItemId?: SearchableIDFilterInput | null,
  passedDepositsCount?: SearchableIntFilterInput | null,
  wagered?: SearchableIntFilterInput | null,
  isWagered?: SearchableBooleanFilterInput | null,
  test?: SearchableIntFilterInput | null,
  id?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableLearnStatusFilterInput | null > | null,
  or?: Array< SearchableLearnStatusFilterInput | null > | null,
  not?: SearchableLearnStatusFilterInput | null,
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type SearchableLearnStatusSortInput = {
  field?: SearchableLearnStatusSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableLearnStatusSortableFields {
  athleteId = "athleteId",
  learnItemId = "learnItemId",
  passedDepositsCount = "passedDepositsCount",
  wagered = "wagered",
  isWagered = "isWagered",
  test = "test",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableLearnStatusAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableLearnStatusAggregateField,
};

export enum SearchableLearnStatusAggregateField {
  athleteId = "athleteId",
  learnItemId = "learnItemId",
  passedDepositsCount = "passedDepositsCount",
  wagered = "wagered",
  isWagered = "isWagered",
  test = "test",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableLearnStatusConnection = {
  __typename: "SearchableLearnStatusConnection",
  items:  Array<LearnStatus | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type PhoneChallenge = {
  __typename: "PhoneChallenge",
  code: string,
  phoneNumber: string,
  verified: boolean,
  createdAt: string,
  updatedAt: string,
};

export type Invite = {
  __typename: "Invite",
  code: string,
  status: Status,
  createdAt: string,
  updatedAt: string,
};

export enum Status {
  AVAILABLE = "AVAILABLE",
  CHALLENGE = "CHALLENGE",
  VERIFIED = "VERIFIED",
  CLAIMED = "CLAIMED",
}


export type EmailChallenge = {
  __typename: "EmailChallenge",
  code: string,
  email: string,
  verified: boolean,
  createdAt: string,
  updatedAt: string,
};

export type UnitAccount = {
  __typename: "UnitAccount",
  type?: string | null,
  id?: string | null,
  attributes?: Attributes | null,
};

export type Attributes = {
  __typename: "Attributes",
  createdAt?: string | null,
  direction?: string | null,
  amount?: number | null,
  balance?: number | null,
  summary?: string | null,
  description?: string | null,
  counterparty?: Counterparty | null,
  name?: string | null,
  status?: string | null,
  routingNumber?: string | null,
  accountNumber?: string | null,
  currency?: string | null,
  hold?: number | null,
  available?: number | null,
};

export type Counterparty = {
  __typename: "Counterparty",
  name?: string | null,
  routingNumber?: string | null,
  accountNumber?: string | null,
  accountType?: string | null,
};

export type PlaidToken = {
  __typename: "PlaidToken",
  access_token?: string | null,
  item_id?: string | null,
  link_token?: string | null,
  request_id?: string | null,
  new_access_token?: string | null,
};

export type CreateAppUsageLogInput = {
  dateString: string,
  athletesCount?: number | null,
  sessionsCount?: number | null,
  rsvpedEventsCount?: number | null,
  totalMinutesInApp?: number | null,
  completedModulesCount?: number | null,
  totalTrueChoiceCount?: number | null,
  totalFalseChoiceCount?: number | null,
  totalAskedQuestionsCount?: number | null,
};

export type ModelAppUsageLogConditionInput = {
  athletesCount?: ModelIntInput | null,
  sessionsCount?: ModelIntInput | null,
  rsvpedEventsCount?: ModelIntInput | null,
  totalMinutesInApp?: ModelFloatInput | null,
  completedModulesCount?: ModelIntInput | null,
  totalTrueChoiceCount?: ModelIntInput | null,
  totalFalseChoiceCount?: ModelIntInput | null,
  totalAskedQuestionsCount?: ModelIntInput | null,
  and?: Array< ModelAppUsageLogConditionInput | null > | null,
  or?: Array< ModelAppUsageLogConditionInput | null > | null,
  not?: ModelAppUsageLogConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type AppUsageLog = {
  __typename: "AppUsageLog",
  dateString: string,
  athletesCount?: number | null,
  sessionsCount?: number | null,
  rsvpedEventsCount?: number | null,
  totalMinutesInApp?: number | null,
  completedModulesCount?: number | null,
  totalTrueChoiceCount?: number | null,
  totalFalseChoiceCount?: number | null,
  totalAskedQuestionsCount?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAppUsageLogInput = {
  dateString: string,
  athletesCount?: number | null,
  sessionsCount?: number | null,
  rsvpedEventsCount?: number | null,
  totalMinutesInApp?: number | null,
  completedModulesCount?: number | null,
  totalTrueChoiceCount?: number | null,
  totalFalseChoiceCount?: number | null,
  totalAskedQuestionsCount?: number | null,
};

export type DeleteAppUsageLogInput = {
  dateString: string,
};

export type CreateAthleteInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  mobilePhone: string,
  athleteTag?: string | null,
  bio?: string | null,
  profilePhotoUri?: string | null,
  heroPhotoUri?: string | null,
  email: string,
  level?: AthleteLevel | null,
  sport?: AthleteSportInput | null,
  team?: AthleteTeamInput | null,
  address?: AddressInput | null,
  dateOfBirth?: string | null,
  unitLookup?: AthleteUnitLookupInput | null,
  podSettings?: PodSettingsInput | null,
  plaidToken?: string | null,
  plaidProcessorToken?: ProcessorTokenInput | null,
  wyreId?: string | null,
  isActive: boolean,
  handle?: string | null,
  rewardedQrCodes?: Array< QrCodesInput | null > | null,
};

export type AthleteSportInput = {
  name: string,
  airTableId: string,
  isActive?: boolean | null,
};

export type AthleteTeamInput = {
  name: string,
  airTableId: string,
  isActive?: boolean | null,
};

export type AddressInput = {
  streetAddress: string,
  apt?: string | null,
  city: string,
  state: string,
  zipCode: string,
};

export type AthleteUnitLookupInput = {
  appId: string,
  custId?: string | null,
};

export type PodSettingsInput = {
  SAVINGS: number,
  INVESTMENTS: number,
  SPENDING: number,
};

export type ProcessorTokenInput = {
  plaidAccountId: string,
  processorToken?: string | null,
};

export type QrCodesInput = {
  id?: string | null,
  itemOrEventName?: string | null,
};

export type ModelAthleteConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  mobilePhone?: ModelStringInput | null,
  athleteTag?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  profilePhotoUri?: ModelStringInput | null,
  heroPhotoUri?: ModelStringInput | null,
  email?: ModelStringInput | null,
  level?: ModelAthleteLevelInput | null,
  dateOfBirth?: ModelStringInput | null,
  plaidToken?: ModelStringInput | null,
  wyreId?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  handle?: ModelStringInput | null,
  and?: Array< ModelAthleteConditionInput | null > | null,
  or?: Array< ModelAthleteConditionInput | null > | null,
  not?: ModelAthleteConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelAthleteLevelInput = {
  eq?: AthleteLevel | null,
  ne?: AthleteLevel | null,
};

export type UpdateAthleteInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  mobilePhone?: string | null,
  athleteTag?: string | null,
  bio?: string | null,
  profilePhotoUri?: string | null,
  heroPhotoUri?: string | null,
  email?: string | null,
  level?: AthleteLevel | null,
  sport?: AthleteSportInput | null,
  team?: AthleteTeamInput | null,
  address?: AddressInput | null,
  dateOfBirth?: string | null,
  unitLookup?: AthleteUnitLookupInput | null,
  podSettings?: PodSettingsInput | null,
  plaidToken?: string | null,
  plaidProcessorToken?: ProcessorTokenInput | null,
  wyreId?: string | null,
  isActive?: boolean | null,
  handle?: string | null,
  rewardedQrCodes?: Array< QrCodesInput | null > | null,
};

export type DeleteAthleteInput = {
  id: string,
};

export type CreateAthleteAccountInput = {
  unitAccountId: string,
  routingCode: string,
  accountNumber: string,
  podName: string,
  id?: string | null,
  athleteAccountsId?: string | null,
};

export type ModelAthleteAccountConditionInput = {
  unitAccountId?: ModelStringInput | null,
  routingCode?: ModelStringInput | null,
  accountNumber?: ModelStringInput | null,
  podName?: ModelStringInput | null,
  and?: Array< ModelAthleteAccountConditionInput | null > | null,
  or?: Array< ModelAthleteAccountConditionInput | null > | null,
  not?: ModelAthleteAccountConditionInput | null,
  athleteAccountsId?: ModelIDInput | null,
};

export type UpdateAthleteAccountInput = {
  unitAccountId?: string | null,
  routingCode?: string | null,
  accountNumber?: string | null,
  podName?: string | null,
  id: string,
  athleteAccountsId?: string | null,
};

export type DeleteAthleteAccountInput = {
  id: string,
};

export type CreateRecentTransactionInput = {
  transactionId: string,
  athleteId?: string | null,
  status?: string | null,
  amount?: number | null,
  direction?: string | null,
  createdAt?: string | null,
  read?: boolean | null,
  settled?: string | null,
  podAllocation?: PodSettingsInput | null,
  id?: string | null,
};

export type ModelRecentTransactionConditionInput = {
  transactionId?: ModelStringInput | null,
  athleteId?: ModelStringInput | null,
  status?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  direction?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  read?: ModelBooleanInput | null,
  settled?: ModelStringInput | null,
  and?: Array< ModelRecentTransactionConditionInput | null > | null,
  or?: Array< ModelRecentTransactionConditionInput | null > | null,
  not?: ModelRecentTransactionConditionInput | null,
};

export type RecentTransaction = {
  __typename: "RecentTransaction",
  transactionId: string,
  athleteId?: string | null,
  status?: string | null,
  amount?: number | null,
  direction?: string | null,
  createdAt?: string | null,
  read?: boolean | null,
  settled?: string | null,
  podAllocation?: PodSettings | null,
  id: string,
  updatedAt: string,
};

export type UpdateRecentTransactionInput = {
  transactionId?: string | null,
  athleteId?: string | null,
  status?: string | null,
  amount?: number | null,
  direction?: string | null,
  createdAt?: string | null,
  read?: boolean | null,
  settled?: string | null,
  podAllocation?: PodSettingsInput | null,
  id: string,
};

export type DeleteRecentTransactionInput = {
  id: string,
};

export type CreateAthleteActivityInput = {
  wealthBalance?: number | null,
  allWagered?: number | null,
  loginCount?: number | null,
  activePeriodInMinutes?: number | null,
  id?: string | null,
};

export type ModelAthleteActivityConditionInput = {
  wealthBalance?: ModelIntInput | null,
  allWagered?: ModelIntInput | null,
  loginCount?: ModelIntInput | null,
  activePeriodInMinutes?: ModelIntInput | null,
  and?: Array< ModelAthleteActivityConditionInput | null > | null,
  or?: Array< ModelAthleteActivityConditionInput | null > | null,
  not?: ModelAthleteActivityConditionInput | null,
};

export type UpdateAthleteActivityInput = {
  wealthBalance?: number | null,
  allWagered?: number | null,
  loginCount?: number | null,
  activePeriodInMinutes?: number | null,
  id: string,
};

export type DeleteAthleteActivityInput = {
  id: string,
};

export type CreateEmailChallengeInput = {
  code: string,
  email: string,
  verified: boolean,
};

export type ModelEmailChallengeConditionInput = {
  verified?: ModelBooleanInput | null,
  and?: Array< ModelEmailChallengeConditionInput | null > | null,
  or?: Array< ModelEmailChallengeConditionInput | null > | null,
  not?: ModelEmailChallengeConditionInput | null,
};

export type UpdateEmailChallengeInput = {
  code: string,
  email: string,
  verified?: boolean | null,
};

export type DeleteEmailChallengeInput = {
  code: string,
  email: string,
};

export type CreateEventInput = {
  creatorId: string,
  sponsor: string,
  title: string,
  category: string,
  heroPhotoUri: string,
  logoUri: string,
  tagline: string,
  description: string,
  dateTime: number,
  location: string,
  reward: number,
  createdAt?: string | null,
  updatedAt?: string | null,
  id?: string | null,
};

export type ModelEventConditionInput = {
  creatorId?: ModelIDInput | null,
  sponsor?: ModelStringInput | null,
  title?: ModelStringInput | null,
  category?: ModelStringInput | null,
  heroPhotoUri?: ModelStringInput | null,
  logoUri?: ModelStringInput | null,
  tagline?: ModelStringInput | null,
  description?: ModelStringInput | null,
  dateTime?: ModelFloatInput | null,
  location?: ModelStringInput | null,
  reward?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type UpdateEventInput = {
  creatorId?: string | null,
  sponsor?: string | null,
  title?: string | null,
  category?: string | null,
  heroPhotoUri?: string | null,
  logoUri?: string | null,
  tagline?: string | null,
  description?: string | null,
  dateTime?: number | null,
  location?: string | null,
  reward?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  id: string,
};

export type DeleteEventInput = {
  id: string,
};

export type CreateExerciseListInput = {
  id?: string | null,
  exerciseId: string,
  studentEmail?: string | null,
  answer?: string | null,
  approveDecline?: boolean | null,
  isChecked?: boolean | null,
  isShowed?: boolean | null,
};

export type ModelExerciseListConditionInput = {
  exerciseId?: ModelIDInput | null,
  studentEmail?: ModelStringInput | null,
  answer?: ModelStringInput | null,
  approveDecline?: ModelBooleanInput | null,
  isChecked?: ModelBooleanInput | null,
  isShowed?: ModelBooleanInput | null,
  and?: Array< ModelExerciseListConditionInput | null > | null,
  or?: Array< ModelExerciseListConditionInput | null > | null,
  not?: ModelExerciseListConditionInput | null,
};

export type ExerciseList = {
  __typename: "ExerciseList",
  id: string,
  exerciseId: string,
  exercise?: LearnExercise | null,
  studentEmail?: string | null,
  answer?: string | null,
  approveDecline?: boolean | null,
  isChecked?: boolean | null,
  isShowed?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type LearnExercise = {
  __typename: "LearnExercise",
  bgImageUri: string,
  title: string,
  description?: string | null,
  level: ExerciseLevel,
  reward: number,
  sponsor: string,
  problem: string,
  createdAt: string,
  updatedAt: string,
  id: string,
};

export enum ExerciseLevel {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
}


export type UpdateExerciseListInput = {
  id: string,
  exerciseId?: string | null,
  studentEmail?: string | null,
  answer?: string | null,
  approveDecline?: boolean | null,
  isChecked?: boolean | null,
  isShowed?: boolean | null,
};

export type DeleteExerciseListInput = {
  id: string,
};

export type CreateInviteInput = {
  code: string,
  status: Status,
};

export type ModelInviteConditionInput = {
  and?: Array< ModelInviteConditionInput | null > | null,
  or?: Array< ModelInviteConditionInput | null > | null,
  not?: ModelInviteConditionInput | null,
};

export type UpdateInviteInput = {
  code: string,
  status: Status,
};

export type DeleteInviteInput = {
  code: string,
  status: Status,
};

export type CreateLearnInput = {
  creatorId: string,
  bgImageUri?: string | null,
  sponsor: string,
  title: string,
  description?: string | null,
  level: LearnLevel,
  reward: number,
  deposits: Array< DepositInput >,
  qaItems?: Array< QAItemInput > | null,
  socialHandles?: SocialHandlesInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  id?: string | null,
};

export type DepositInput = {
  videoUri: string,
  videoDuration?: number | null,
  title: string,
  questions: Array< QuizInput >,
};

export type QuizInput = {
  questionText: string,
  answers: Array< string >,
  correctAnswer: string,
};

export type QAItemInput = {
  questionItem: QuestionItemInput,
  answerItems: Array< AnswerItemInput >,
};

export type QuestionItemInput = {
  question: string,
  authorId: string,
  authorName?: string | null,
  createdAt?: string | null,
};

export type AnswerItemInput = {
  answer: string,
  authorEmail?: string | null,
  authorName?: string | null,
  authorTitle?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type SocialHandlesInput = {
  discord?: string | null,
  instagram?: string | null,
  telegram?: string | null,
  tiktok?: string | null,
  twitter?: string | null,
  youtube?: string | null,
};

export type ModelLearnConditionInput = {
  creatorId?: ModelIDInput | null,
  bgImageUri?: ModelStringInput | null,
  sponsor?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  level?: ModelLearnLevelInput | null,
  reward?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLearnConditionInput | null > | null,
  or?: Array< ModelLearnConditionInput | null > | null,
  not?: ModelLearnConditionInput | null,
};

export type ModelLearnLevelInput = {
  eq?: LearnLevel | null,
  ne?: LearnLevel | null,
};

export type UpdateLearnInput = {
  creatorId?: string | null,
  bgImageUri?: string | null,
  sponsor?: string | null,
  title?: string | null,
  description?: string | null,
  level?: LearnLevel | null,
  reward?: number | null,
  deposits?: Array< DepositInput > | null,
  qaItems?: Array< QAItemInput > | null,
  socialHandles?: SocialHandlesInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  id: string,
};

export type DeleteLearnInput = {
  id: string,
};

export type CreateLearnExerciseInput = {
  bgImageUri: string,
  title: string,
  description?: string | null,
  level: ExerciseLevel,
  reward: number,
  sponsor: string,
  problem: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  id?: string | null,
};

export type ModelLearnExerciseConditionInput = {
  bgImageUri?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  level?: ModelExerciseLevelInput | null,
  reward?: ModelIntInput | null,
  sponsor?: ModelStringInput | null,
  problem?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLearnExerciseConditionInput | null > | null,
  or?: Array< ModelLearnExerciseConditionInput | null > | null,
  not?: ModelLearnExerciseConditionInput | null,
};

export type ModelExerciseLevelInput = {
  eq?: ExerciseLevel | null,
  ne?: ExerciseLevel | null,
};

export type UpdateLearnExerciseInput = {
  bgImageUri?: string | null,
  title?: string | null,
  description?: string | null,
  level?: ExerciseLevel | null,
  reward?: number | null,
  sponsor?: string | null,
  problem?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  id: string,
};

export type DeleteLearnExerciseInput = {
  id: string,
};

export type CreateOpportunityInput = {
  id?: string | null,
  categories: Array< string | null >,
  creatorId: string,
  details: string,
  detailsTldr: string,
  endDateTime: number,
  eventType: string,
  heroPhotoUri: string,
  isPrivate: boolean,
  location?: LocationInput | null,
  locationDetail?: LocationDetailInput | null,
  logoUri: string,
  onlineReserved: number,
  onlineTotal: number,
  orgs?: Array< OrgInput | null > | null,
  registrationUrl: string,
  reward: number,
  rewardDetails: string,
  seatsReserved: number,
  seatsTotal: number,
  startDateTime: number,
  status: string,
  subtitle: string,
  tags: Array< string | null >,
  title: string,
  timezone: string,
  websitePrompt: string,
  websiteUrl: string,
};

export type LocationInput = {
  lat: number,
  lon: number,
};

export type LocationDetailInput = {
  address: string,
  unit?: string | null,
  city: string,
  state: string,
  zipCode: string,
  country: string,
  name?: string | null,
};

export type OrgInput = {
  displayName: string,
  relationshipType: OrganizationRelationshipType,
};

export enum OrganizationRelationshipType {
  ORGANIZER = "ORGANIZER",
  OWNER = "OWNER",
  SPONSOR = "SPONSOR",
}


export type ModelOpportunityConditionInput = {
  categories?: ModelStringInput | null,
  creatorId?: ModelIDInput | null,
  details?: ModelStringInput | null,
  detailsTldr?: ModelStringInput | null,
  endDateTime?: ModelFloatInput | null,
  eventType?: ModelStringInput | null,
  heroPhotoUri?: ModelStringInput | null,
  isPrivate?: ModelBooleanInput | null,
  logoUri?: ModelStringInput | null,
  onlineReserved?: ModelIntInput | null,
  onlineTotal?: ModelIntInput | null,
  registrationUrl?: ModelStringInput | null,
  reward?: ModelFloatInput | null,
  rewardDetails?: ModelStringInput | null,
  seatsReserved?: ModelIntInput | null,
  seatsTotal?: ModelIntInput | null,
  startDateTime?: ModelFloatInput | null,
  status?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  title?: ModelStringInput | null,
  timezone?: ModelStringInput | null,
  websitePrompt?: ModelStringInput | null,
  websiteUrl?: ModelStringInput | null,
  and?: Array< ModelOpportunityConditionInput | null > | null,
  or?: Array< ModelOpportunityConditionInput | null > | null,
  not?: ModelOpportunityConditionInput | null,
};

export type Opportunity = {
  __typename: "Opportunity",
  id: string,
  categories: Array< string | null >,
  creatorId: string,
  creator: Athlete,
  details: string,
  detailsTldr: string,
  endDateTime: number,
  eventType: string,
  heroPhotoUri: string,
  isPrivate: boolean,
  location?: Location | null,
  locationDetail?: LocationDetail | null,
  logoUri: string,
  onlineReserved: number,
  onlineTotal: number,
  organizations?: ModelOrganizationConnection | null,
  orgs?:  Array<Org | null > | null,
  registrationUrl: string,
  reward: number,
  rewardDetails: string,
  seatsReserved: number,
  seatsTotal: number,
  startDateTime: number,
  status: string,
  subtitle: string,
  tags: Array< string | null >,
  title: string,
  timezone: string,
  websitePrompt: string,
  websiteUrl: string,
  createdAt: string,
  updatedAt: string,
};

export type Location = {
  __typename: "Location",
  lat: number,
  lon: number,
};

export type LocationDetail = {
  __typename: "LocationDetail",
  address: string,
  unit?: string | null,
  city: string,
  state: string,
  zipCode: string,
  country: string,
  name?: string | null,
};

export type ModelOrganizationConnection = {
  __typename: "ModelOrganizationConnection",
  items:  Array<Organization | null >,
  nextToken?: string | null,
};

export type Organization = {
  __typename: "Organization",
  id: string,
  displayName: string,
  relationshipType: OrganizationRelationshipType,
  opportunityId: string,
  createdAt: string,
  updatedAt: string,
};

export type Org = {
  __typename: "Org",
  displayName: string,
  relationshipType: OrganizationRelationshipType,
};

export type UpdateOpportunityInput = {
  id: string,
  categories?: Array< string | null > | null,
  creatorId?: string | null,
  details?: string | null,
  detailsTldr?: string | null,
  endDateTime?: number | null,
  eventType?: string | null,
  heroPhotoUri?: string | null,
  isPrivate?: boolean | null,
  location?: LocationInput | null,
  locationDetail?: LocationDetailInput | null,
  logoUri?: string | null,
  onlineReserved?: number | null,
  onlineTotal?: number | null,
  orgs?: Array< OrgInput | null > | null,
  registrationUrl?: string | null,
  reward?: number | null,
  rewardDetails?: string | null,
  seatsReserved?: number | null,
  seatsTotal?: number | null,
  startDateTime?: number | null,
  status?: string | null,
  subtitle?: string | null,
  tags?: Array< string | null > | null,
  title?: string | null,
  timezone?: string | null,
  websitePrompt?: string | null,
  websiteUrl?: string | null,
};

export type DeleteOpportunityInput = {
  id: string,
};

export type CreateOrganizationInput = {
  id?: string | null,
  displayName: string,
  relationshipType: OrganizationRelationshipType,
  opportunityId: string,
};

export type ModelOrganizationConditionInput = {
  displayName?: ModelStringInput | null,
  relationshipType?: ModelOrganizationRelationshipTypeInput | null,
  opportunityId?: ModelIDInput | null,
  and?: Array< ModelOrganizationConditionInput | null > | null,
  or?: Array< ModelOrganizationConditionInput | null > | null,
  not?: ModelOrganizationConditionInput | null,
};

export type ModelOrganizationRelationshipTypeInput = {
  eq?: OrganizationRelationshipType | null,
  ne?: OrganizationRelationshipType | null,
};

export type UpdateOrganizationInput = {
  id: string,
  displayName?: string | null,
  relationshipType?: OrganizationRelationshipType | null,
  opportunityId?: string | null,
};

export type DeleteOrganizationInput = {
  id: string,
};

export type CreatePhoneChallengeInput = {
  code: string,
  phoneNumber: string,
  verified: boolean,
};

export type ModelPhoneChallengeConditionInput = {
  verified?: ModelBooleanInput | null,
  and?: Array< ModelPhoneChallengeConditionInput | null > | null,
  or?: Array< ModelPhoneChallengeConditionInput | null > | null,
  not?: ModelPhoneChallengeConditionInput | null,
};

export type UpdatePhoneChallengeInput = {
  code: string,
  phoneNumber: string,
  verified?: boolean | null,
};

export type DeletePhoneChallengeInput = {
  code: string,
  phoneNumber: string,
};

export type CreateProposalInput = {
  id?: string | null,
  sessionId: string,
  email: string,
  track: ProposalTrackType,
  actionVerb: ProposalActionVerbType,
  statement: string,
  desiredGoal: string,
  votingCount?: number | null,
};

export enum ProposalTrackType {
  COMMUNITY = "COMMUNITY",
  LEARNING = "LEARNING",
  PROFESSIONAL = "PROFESSIONAL",
  FEATURES = "FEATURES",
}


export enum ProposalActionVerbType {
  CREATE = "CREATE",
  DEVELOP = "DEVELOP",
  IMPROVE = "IMPROVE",
  INCREASE = "INCREASE",
  EXPAND = "EXPAND",
  REMOVE = "REMOVE",
}


export type ModelProposalConditionInput = {
  sessionId?: ModelIDInput | null,
  email?: ModelStringInput | null,
  track?: ModelProposalTrackTypeInput | null,
  actionVerb?: ModelProposalActionVerbTypeInput | null,
  statement?: ModelStringInput | null,
  desiredGoal?: ModelStringInput | null,
  votingCount?: ModelIntInput | null,
  and?: Array< ModelProposalConditionInput | null > | null,
  or?: Array< ModelProposalConditionInput | null > | null,
  not?: ModelProposalConditionInput | null,
};

export type ModelProposalTrackTypeInput = {
  eq?: ProposalTrackType | null,
  ne?: ProposalTrackType | null,
};

export type ModelProposalActionVerbTypeInput = {
  eq?: ProposalActionVerbType | null,
  ne?: ProposalActionVerbType | null,
};

export type Proposal = {
  __typename: "Proposal",
  id: string,
  sessionId: string,
  proposalSession?: ProposalSession | null,
  email: string,
  track: ProposalTrackType,
  actionVerb: ProposalActionVerbType,
  statement: string,
  desiredGoal: string,
  votingCount?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type ProposalSession = {
  __typename: "ProposalSession",
  id: string,
  title?: string | null,
  startTime: string,
  endTime: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProposalInput = {
  id: string,
  sessionId?: string | null,
  email?: string | null,
  track?: ProposalTrackType | null,
  actionVerb?: ProposalActionVerbType | null,
  statement?: string | null,
  desiredGoal?: string | null,
  votingCount?: number | null,
};

export type DeleteProposalInput = {
  id: string,
};

export type CreateProposalSessionInput = {
  id?: string | null,
  title?: string | null,
  startTime: string,
  endTime: string,
};

export type ModelProposalSessionConditionInput = {
  title?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  and?: Array< ModelProposalSessionConditionInput | null > | null,
  or?: Array< ModelProposalSessionConditionInput | null > | null,
  not?: ModelProposalSessionConditionInput | null,
};

export type UpdateProposalSessionInput = {
  id: string,
  title?: string | null,
  startTime?: string | null,
  endTime?: string | null,
};

export type DeleteProposalSessionInput = {
  id: string,
};

export type CreateQRCodeInput = {
  learnId: string,
  depositNum: number,
  wealthPointAmount?: number | null,
  rewardAmount?: number | null,
  itemName?: string | null,
  eventName?: string | null,
  limitCount: number,
  usedCount?: number | null,
  id?: string | null,
};

export type ModelQRCodeConditionInput = {
  learnId?: ModelIDInput | null,
  depositNum?: ModelIntInput | null,
  wealthPointAmount?: ModelIntInput | null,
  rewardAmount?: ModelIntInput | null,
  itemName?: ModelStringInput | null,
  eventName?: ModelStringInput | null,
  limitCount?: ModelIntInput | null,
  usedCount?: ModelIntInput | null,
  and?: Array< ModelQRCodeConditionInput | null > | null,
  or?: Array< ModelQRCodeConditionInput | null > | null,
  not?: ModelQRCodeConditionInput | null,
};

export type QRCode = {
  __typename: "QRCode",
  learnId: string,
  learn?: Learn | null,
  depositNum: number,
  wealthPointAmount?: number | null,
  rewardAmount?: number | null,
  itemName?: string | null,
  eventName?: string | null,
  limitCount: number,
  usedCount?: number | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateQRCodeInput = {
  learnId?: string | null,
  depositNum?: number | null,
  wealthPointAmount?: number | null,
  rewardAmount?: number | null,
  itemName?: string | null,
  eventName?: string | null,
  limitCount?: number | null,
  usedCount?: number | null,
  id: string,
};

export type DeleteQRCodeInput = {
  id: string,
};

export type CreateResourceInput = {
  title: string,
  heroImageUri: string,
  link: string,
  id?: string | null,
  learnResourcesId?: string | null,
};

export type ModelResourceConditionInput = {
  title?: ModelStringInput | null,
  heroImageUri?: ModelStringInput | null,
  link?: ModelStringInput | null,
  and?: Array< ModelResourceConditionInput | null > | null,
  or?: Array< ModelResourceConditionInput | null > | null,
  not?: ModelResourceConditionInput | null,
  learnResourcesId?: ModelIDInput | null,
};

export type UpdateResourceInput = {
  title?: string | null,
  heroImageUri?: string | null,
  link?: string | null,
  id: string,
  learnResourcesId?: string | null,
};

export type DeleteResourceInput = {
  id: string,
};

export type CreateRewardInput = {
  id?: string | null,
  creatorId: string,
  title: string,
  wealthAmount: number,
  logoUri?: string | null,
  description?: string | null,
  heroPhotoUri?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelRewardConditionInput = {
  creatorId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  wealthAmount?: ModelIntInput | null,
  logoUri?: ModelStringInput | null,
  description?: ModelStringInput | null,
  heroPhotoUri?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRewardConditionInput | null > | null,
  or?: Array< ModelRewardConditionInput | null > | null,
  not?: ModelRewardConditionInput | null,
};

export type UpdateRewardInput = {
  id: string,
  creatorId?: string | null,
  title?: string | null,
  wealthAmount?: number | null,
  logoUri?: string | null,
  description?: string | null,
  heroPhotoUri?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteRewardInput = {
  id: string,
};

export type CreateVotedUserInput = {
  id?: string | null,
  sessionId: string,
  email: string,
};

export type ModelVotedUserConditionInput = {
  sessionId?: ModelIDInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelVotedUserConditionInput | null > | null,
  or?: Array< ModelVotedUserConditionInput | null > | null,
  not?: ModelVotedUserConditionInput | null,
};

export type VotedUser = {
  __typename: "VotedUser",
  id: string,
  sessionId: string,
  votingSession?: VotingSession | null,
  email: string,
  createdAt: string,
  updatedAt: string,
};

export type VotingSession = {
  __typename: "VotingSession",
  id: string,
  title?: string | null,
  startTime: string,
  endTime: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateVotedUserInput = {
  id: string,
  sessionId?: string | null,
  email?: string | null,
};

export type DeleteVotedUserInput = {
  id: string,
};

export type CreateVotingSessionInput = {
  id?: string | null,
  title?: string | null,
  startTime: string,
  endTime: string,
};

export type ModelVotingSessionConditionInput = {
  title?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  and?: Array< ModelVotingSessionConditionInput | null > | null,
  or?: Array< ModelVotingSessionConditionInput | null > | null,
  not?: ModelVotingSessionConditionInput | null,
};

export type UpdateVotingSessionInput = {
  id: string,
  title?: string | null,
  startTime?: string | null,
  endTime?: string | null,
};

export type DeleteVotingSessionInput = {
  id: string,
};

export type PlaidAccountDetail = {
  __typename: "PlaidAccountDetail",
  account_id?: string | null,
  balances?: Balance | null,
  mask?: string | null,
  name?: string | null,
  official_name?: string | null,
  subtype?: string | null,
  type?: string | null,
};

export type Balance = {
  __typename: "Balance",
  available?: number | null,
  current?: string | null,
  iso_currency_code?: string | null,
  limit?: string | null,
  unofficial_currency_code?: string | null,
};

export type ModelOpportunityConnection = {
  __typename: "ModelOpportunityConnection",
  items?:  Array<Opportunity | null > | null,
  total?: number | null,
  nextToken?: string | null,
};

export type SearchableAppUsageLogFilterInput = {
  dateString?: SearchableStringFilterInput | null,
  athletesCount?: SearchableIntFilterInput | null,
  sessionsCount?: SearchableIntFilterInput | null,
  rsvpedEventsCount?: SearchableIntFilterInput | null,
  totalMinutesInApp?: SearchableFloatFilterInput | null,
  completedModulesCount?: SearchableIntFilterInput | null,
  totalTrueChoiceCount?: SearchableIntFilterInput | null,
  totalFalseChoiceCount?: SearchableIntFilterInput | null,
  totalAskedQuestionsCount?: SearchableIntFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableAppUsageLogFilterInput | null > | null,
  or?: Array< SearchableAppUsageLogFilterInput | null > | null,
  not?: SearchableAppUsageLogFilterInput | null,
};

export type SearchableFloatFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableAppUsageLogSortInput = {
  field?: SearchableAppUsageLogSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableAppUsageLogSortableFields {
  dateString = "dateString",
  athletesCount = "athletesCount",
  sessionsCount = "sessionsCount",
  rsvpedEventsCount = "rsvpedEventsCount",
  totalMinutesInApp = "totalMinutesInApp",
  completedModulesCount = "completedModulesCount",
  totalTrueChoiceCount = "totalTrueChoiceCount",
  totalFalseChoiceCount = "totalFalseChoiceCount",
  totalAskedQuestionsCount = "totalAskedQuestionsCount",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableAppUsageLogAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableAppUsageLogAggregateField,
};

export enum SearchableAppUsageLogAggregateField {
  dateString = "dateString",
  athletesCount = "athletesCount",
  sessionsCount = "sessionsCount",
  rsvpedEventsCount = "rsvpedEventsCount",
  totalMinutesInApp = "totalMinutesInApp",
  completedModulesCount = "completedModulesCount",
  totalTrueChoiceCount = "totalTrueChoiceCount",
  totalFalseChoiceCount = "totalFalseChoiceCount",
  totalAskedQuestionsCount = "totalAskedQuestionsCount",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableAppUsageLogConnection = {
  __typename: "SearchableAppUsageLogConnection",
  items:  Array<AppUsageLog | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAthleteActivityFilterInput = {
  wealthBalance?: SearchableIntFilterInput | null,
  allWagered?: SearchableIntFilterInput | null,
  loginCount?: SearchableIntFilterInput | null,
  activePeriodInMinutes?: SearchableIntFilterInput | null,
  id?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableAthleteActivityFilterInput | null > | null,
  or?: Array< SearchableAthleteActivityFilterInput | null > | null,
  not?: SearchableAthleteActivityFilterInput | null,
};

export type SearchableAthleteActivitySortInput = {
  field?: SearchableAthleteActivitySortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableAthleteActivitySortableFields {
  wealthBalance = "wealthBalance",
  allWagered = "allWagered",
  loginCount = "loginCount",
  activePeriodInMinutes = "activePeriodInMinutes",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableAthleteActivityAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableAthleteActivityAggregateField,
};

export enum SearchableAthleteActivityAggregateField {
  wealthBalance = "wealthBalance",
  allWagered = "allWagered",
  loginCount = "loginCount",
  activePeriodInMinutes = "activePeriodInMinutes",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableAthleteActivityConnection = {
  __typename: "SearchableAthleteActivityConnection",
  items:  Array<AthleteActivity | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableEventFilterInput = {
  creatorId?: SearchableIDFilterInput | null,
  sponsor?: SearchableStringFilterInput | null,
  title?: SearchableStringFilterInput | null,
  category?: SearchableStringFilterInput | null,
  heroPhotoUri?: SearchableStringFilterInput | null,
  logoUri?: SearchableStringFilterInput | null,
  tagline?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  dateTime?: SearchableFloatFilterInput | null,
  location?: SearchableStringFilterInput | null,
  reward?: SearchableIntFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  id?: SearchableIDFilterInput | null,
  and?: Array< SearchableEventFilterInput | null > | null,
  or?: Array< SearchableEventFilterInput | null > | null,
  not?: SearchableEventFilterInput | null,
};

export type SearchableEventSortInput = {
  field?: SearchableEventSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableEventSortableFields {
  creatorId = "creatorId",
  sponsor = "sponsor",
  title = "title",
  category = "category",
  heroPhotoUri = "heroPhotoUri",
  logoUri = "logoUri",
  tagline = "tagline",
  description = "description",
  dateTime = "dateTime",
  location = "location",
  reward = "reward",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  id = "id",
}


export type SearchableEventAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableEventAggregateField,
};

export enum SearchableEventAggregateField {
  creatorId = "creatorId",
  sponsor = "sponsor",
  title = "title",
  category = "category",
  heroPhotoUri = "heroPhotoUri",
  logoUri = "logoUri",
  tagline = "tagline",
  description = "description",
  dateTime = "dateTime",
  location = "location",
  reward = "reward",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  id = "id",
}


export type SearchableEventConnection = {
  __typename: "SearchableEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableEventStatusFilterInput = {
  athleteId?: SearchableIDFilterInput | null,
  eventItemId?: SearchableIDFilterInput | null,
  registered?: SearchableBooleanFilterInput | null,
  id?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableEventStatusFilterInput | null > | null,
  or?: Array< SearchableEventStatusFilterInput | null > | null,
  not?: SearchableEventStatusFilterInput | null,
};

export type SearchableEventStatusSortInput = {
  field?: SearchableEventStatusSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableEventStatusSortableFields {
  athleteId = "athleteId",
  eventItemId = "eventItemId",
  registered = "registered",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableEventStatusAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableEventStatusAggregateField,
};

export enum SearchableEventStatusAggregateField {
  athleteId = "athleteId",
  eventItemId = "eventItemId",
  registered = "registered",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableEventStatusConnection = {
  __typename: "SearchableEventStatusConnection",
  items:  Array<EventStatus | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableLearnExerciseFilterInput = {
  bgImageUri?: SearchableStringFilterInput | null,
  title?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  reward?: SearchableIntFilterInput | null,
  sponsor?: SearchableStringFilterInput | null,
  problem?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  id?: SearchableIDFilterInput | null,
  level?: SearchableStringFilterInput | null,
  and?: Array< SearchableLearnExerciseFilterInput | null > | null,
  or?: Array< SearchableLearnExerciseFilterInput | null > | null,
  not?: SearchableLearnExerciseFilterInput | null,
};

export type SearchableLearnExerciseSortInput = {
  field?: SearchableLearnExerciseSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableLearnExerciseSortableFields {
  bgImageUri = "bgImageUri",
  title = "title",
  description = "description",
  reward = "reward",
  sponsor = "sponsor",
  problem = "problem",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  id = "id",
}


export type SearchableLearnExerciseAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableLearnExerciseAggregateField,
};

export enum SearchableLearnExerciseAggregateField {
  bgImageUri = "bgImageUri",
  title = "title",
  description = "description",
  level = "level",
  reward = "reward",
  sponsor = "sponsor",
  problem = "problem",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  id = "id",
}


export type SearchableLearnExerciseConnection = {
  __typename: "SearchableLearnExerciseConnection",
  items:  Array<LearnExercise | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableOpportunityFilterInput = {
  id?: SearchableIDFilterInput | null,
  categories?: SearchableStringFilterInput | null,
  creatorId?: SearchableIDFilterInput | null,
  details?: SearchableStringFilterInput | null,
  detailsTldr?: SearchableStringFilterInput | null,
  endDateTime?: SearchableFloatFilterInput | null,
  eventType?: SearchableStringFilterInput | null,
  heroPhotoUri?: SearchableStringFilterInput | null,
  isPrivate?: SearchableBooleanFilterInput | null,
  logoUri?: SearchableStringFilterInput | null,
  onlineReserved?: SearchableIntFilterInput | null,
  onlineTotal?: SearchableIntFilterInput | null,
  registrationUrl?: SearchableStringFilterInput | null,
  reward?: SearchableFloatFilterInput | null,
  rewardDetails?: SearchableStringFilterInput | null,
  seatsReserved?: SearchableIntFilterInput | null,
  seatsTotal?: SearchableIntFilterInput | null,
  startDateTime?: SearchableFloatFilterInput | null,
  status?: SearchableStringFilterInput | null,
  subtitle?: SearchableStringFilterInput | null,
  tags?: SearchableStringFilterInput | null,
  title?: SearchableStringFilterInput | null,
  timezone?: SearchableStringFilterInput | null,
  websitePrompt?: SearchableStringFilterInput | null,
  websiteUrl?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableOpportunityFilterInput | null > | null,
  or?: Array< SearchableOpportunityFilterInput | null > | null,
  not?: SearchableOpportunityFilterInput | null,
};

export type SearchableOpportunitySortInput = {
  field?: SearchableOpportunitySortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableOpportunitySortableFields {
  id = "id",
  categories = "categories",
  creatorId = "creatorId",
  details = "details",
  detailsTldr = "detailsTldr",
  endDateTime = "endDateTime",
  eventType = "eventType",
  heroPhotoUri = "heroPhotoUri",
  isPrivate = "isPrivate",
  logoUri = "logoUri",
  onlineReserved = "onlineReserved",
  onlineTotal = "onlineTotal",
  registrationUrl = "registrationUrl",
  reward = "reward",
  rewardDetails = "rewardDetails",
  seatsReserved = "seatsReserved",
  seatsTotal = "seatsTotal",
  startDateTime = "startDateTime",
  status = "status",
  subtitle = "subtitle",
  tags = "tags",
  title = "title",
  timezone = "timezone",
  websitePrompt = "websitePrompt",
  websiteUrl = "websiteUrl",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableOpportunityAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableOpportunityAggregateField,
};

export enum SearchableOpportunityAggregateField {
  id = "id",
  categories = "categories",
  creatorId = "creatorId",
  details = "details",
  detailsTldr = "detailsTldr",
  endDateTime = "endDateTime",
  eventType = "eventType",
  heroPhotoUri = "heroPhotoUri",
  isPrivate = "isPrivate",
  logoUri = "logoUri",
  onlineReserved = "onlineReserved",
  onlineTotal = "onlineTotal",
  registrationUrl = "registrationUrl",
  reward = "reward",
  rewardDetails = "rewardDetails",
  seatsReserved = "seatsReserved",
  seatsTotal = "seatsTotal",
  startDateTime = "startDateTime",
  status = "status",
  subtitle = "subtitle",
  tags = "tags",
  title = "title",
  timezone = "timezone",
  websitePrompt = "websitePrompt",
  websiteUrl = "websiteUrl",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableOpportunityConnection = {
  __typename: "SearchableOpportunityConnection",
  items:  Array<Opportunity | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableProposalFilterInput = {
  id?: SearchableIDFilterInput | null,
  sessionId?: SearchableIDFilterInput | null,
  email?: SearchableStringFilterInput | null,
  statement?: SearchableStringFilterInput | null,
  desiredGoal?: SearchableStringFilterInput | null,
  votingCount?: SearchableIntFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  track?: SearchableStringFilterInput | null,
  actionVerb?: SearchableStringFilterInput | null,
  and?: Array< SearchableProposalFilterInput | null > | null,
  or?: Array< SearchableProposalFilterInput | null > | null,
  not?: SearchableProposalFilterInput | null,
};

export type SearchableProposalSortInput = {
  field?: SearchableProposalSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableProposalSortableFields {
  id = "id",
  sessionId = "sessionId",
  email = "email",
  statement = "statement",
  desiredGoal = "desiredGoal",
  votingCount = "votingCount",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableProposalAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableProposalAggregateField,
};

export enum SearchableProposalAggregateField {
  id = "id",
  sessionId = "sessionId",
  email = "email",
  track = "track",
  actionVerb = "actionVerb",
  statement = "statement",
  desiredGoal = "desiredGoal",
  votingCount = "votingCount",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableProposalConnection = {
  __typename: "SearchableProposalConnection",
  items:  Array<Proposal | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableProposalSessionFilterInput = {
  id?: SearchableIDFilterInput | null,
  title?: SearchableStringFilterInput | null,
  startTime?: SearchableStringFilterInput | null,
  endTime?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableProposalSessionFilterInput | null > | null,
  or?: Array< SearchableProposalSessionFilterInput | null > | null,
  not?: SearchableProposalSessionFilterInput | null,
};

export type SearchableProposalSessionSortInput = {
  field?: SearchableProposalSessionSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableProposalSessionSortableFields {
  id = "id",
  title = "title",
  startTime = "startTime",
  endTime = "endTime",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableProposalSessionAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableProposalSessionAggregateField,
};

export enum SearchableProposalSessionAggregateField {
  id = "id",
  title = "title",
  startTime = "startTime",
  endTime = "endTime",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableProposalSessionConnection = {
  __typename: "SearchableProposalSessionConnection",
  items:  Array<ProposalSession | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableQRCodeFilterInput = {
  learnId?: SearchableIDFilterInput | null,
  depositNum?: SearchableIntFilterInput | null,
  wealthPointAmount?: SearchableIntFilterInput | null,
  rewardAmount?: SearchableIntFilterInput | null,
  itemName?: SearchableStringFilterInput | null,
  eventName?: SearchableStringFilterInput | null,
  limitCount?: SearchableIntFilterInput | null,
  usedCount?: SearchableIntFilterInput | null,
  id?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableQRCodeFilterInput | null > | null,
  or?: Array< SearchableQRCodeFilterInput | null > | null,
  not?: SearchableQRCodeFilterInput | null,
};

export type SearchableQRCodeSortInput = {
  field?: SearchableQRCodeSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableQRCodeSortableFields {
  learnId = "learnId",
  depositNum = "depositNum",
  wealthPointAmount = "wealthPointAmount",
  rewardAmount = "rewardAmount",
  itemName = "itemName",
  eventName = "eventName",
  limitCount = "limitCount",
  usedCount = "usedCount",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableQRCodeAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableQRCodeAggregateField,
};

export enum SearchableQRCodeAggregateField {
  learnId = "learnId",
  depositNum = "depositNum",
  wealthPointAmount = "wealthPointAmount",
  rewardAmount = "rewardAmount",
  itemName = "itemName",
  eventName = "eventName",
  limitCount = "limitCount",
  usedCount = "usedCount",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableQRCodeConnection = {
  __typename: "SearchableQRCodeConnection",
  items:  Array<QRCode | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableResourceFilterInput = {
  title?: SearchableStringFilterInput | null,
  heroImageUri?: SearchableStringFilterInput | null,
  link?: SearchableStringFilterInput | null,
  id?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  learnResourcesId?: SearchableIDFilterInput | null,
  and?: Array< SearchableResourceFilterInput | null > | null,
  or?: Array< SearchableResourceFilterInput | null > | null,
  not?: SearchableResourceFilterInput | null,
};

export type SearchableResourceSortInput = {
  field?: SearchableResourceSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableResourceSortableFields {
  title = "title",
  heroImageUri = "heroImageUri",
  link = "link",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  learnResourcesId = "learnResourcesId",
}


export type SearchableResourceAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableResourceAggregateField,
};

export enum SearchableResourceAggregateField {
  title = "title",
  heroImageUri = "heroImageUri",
  link = "link",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  learnResourcesId = "learnResourcesId",
}


export type SearchableResourceConnection = {
  __typename: "SearchableResourceConnection",
  items:  Array<Resource | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableRewardFilterInput = {
  id?: SearchableIDFilterInput | null,
  creatorId?: SearchableIDFilterInput | null,
  title?: SearchableStringFilterInput | null,
  wealthAmount?: SearchableIntFilterInput | null,
  logoUri?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  heroPhotoUri?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableRewardFilterInput | null > | null,
  or?: Array< SearchableRewardFilterInput | null > | null,
  not?: SearchableRewardFilterInput | null,
};

export type SearchableRewardSortInput = {
  field?: SearchableRewardSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableRewardSortableFields {
  id = "id",
  creatorId = "creatorId",
  title = "title",
  wealthAmount = "wealthAmount",
  logoUri = "logoUri",
  description = "description",
  heroPhotoUri = "heroPhotoUri",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableRewardAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableRewardAggregateField,
};

export enum SearchableRewardAggregateField {
  id = "id",
  creatorId = "creatorId",
  title = "title",
  wealthAmount = "wealthAmount",
  logoUri = "logoUri",
  description = "description",
  heroPhotoUri = "heroPhotoUri",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableRewardConnection = {
  __typename: "SearchableRewardConnection",
  items:  Array<Reward | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableRewardStatusFilterInput = {
  athleteId?: SearchableIDFilterInput | null,
  rewardItemId?: SearchableIDFilterInput | null,
  redeemed?: SearchableBooleanFilterInput | null,
  id?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableRewardStatusFilterInput | null > | null,
  or?: Array< SearchableRewardStatusFilterInput | null > | null,
  not?: SearchableRewardStatusFilterInput | null,
};

export type SearchableRewardStatusSortInput = {
  field?: SearchableRewardStatusSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableRewardStatusSortableFields {
  athleteId = "athleteId",
  rewardItemId = "rewardItemId",
  redeemed = "redeemed",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableRewardStatusAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableRewardStatusAggregateField,
};

export enum SearchableRewardStatusAggregateField {
  athleteId = "athleteId",
  rewardItemId = "rewardItemId",
  redeemed = "redeemed",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableRewardStatusConnection = {
  __typename: "SearchableRewardStatusConnection",
  items:  Array<RewardStatus | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableVotedUserFilterInput = {
  id?: SearchableIDFilterInput | null,
  sessionId?: SearchableIDFilterInput | null,
  email?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableVotedUserFilterInput | null > | null,
  or?: Array< SearchableVotedUserFilterInput | null > | null,
  not?: SearchableVotedUserFilterInput | null,
};

export type SearchableVotedUserSortInput = {
  field?: SearchableVotedUserSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableVotedUserSortableFields {
  id = "id",
  sessionId = "sessionId",
  email = "email",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableVotedUserAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableVotedUserAggregateField,
};

export enum SearchableVotedUserAggregateField {
  id = "id",
  sessionId = "sessionId",
  email = "email",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableVotedUserConnection = {
  __typename: "SearchableVotedUserConnection",
  items:  Array<VotedUser | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableVotingSessionFilterInput = {
  id?: SearchableIDFilterInput | null,
  title?: SearchableStringFilterInput | null,
  startTime?: SearchableStringFilterInput | null,
  endTime?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableVotingSessionFilterInput | null > | null,
  or?: Array< SearchableVotingSessionFilterInput | null > | null,
  not?: SearchableVotingSessionFilterInput | null,
};

export type SearchableVotingSessionSortInput = {
  field?: SearchableVotingSessionSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableVotingSessionSortableFields {
  id = "id",
  title = "title",
  startTime = "startTime",
  endTime = "endTime",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableVotingSessionAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableVotingSessionAggregateField,
};

export enum SearchableVotingSessionAggregateField {
  id = "id",
  title = "title",
  startTime = "startTime",
  endTime = "endTime",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableVotingSessionConnection = {
  __typename: "SearchableVotingSessionConnection",
  items:  Array<VotingSession | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type ModelAppUsageLogFilterInput = {
  dateString?: ModelStringInput | null,
  athletesCount?: ModelIntInput | null,
  sessionsCount?: ModelIntInput | null,
  rsvpedEventsCount?: ModelIntInput | null,
  totalMinutesInApp?: ModelFloatInput | null,
  completedModulesCount?: ModelIntInput | null,
  totalTrueChoiceCount?: ModelIntInput | null,
  totalFalseChoiceCount?: ModelIntInput | null,
  totalAskedQuestionsCount?: ModelIntInput | null,
  and?: Array< ModelAppUsageLogFilterInput | null > | null,
  or?: Array< ModelAppUsageLogFilterInput | null > | null,
  not?: ModelAppUsageLogFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAppUsageLogConnection = {
  __typename: "ModelAppUsageLogConnection",
  items:  Array<AppUsageLog | null >,
  nextToken?: string | null,
};

export type ModelAthleteFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  mobilePhone?: ModelStringInput | null,
  athleteTag?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  profilePhotoUri?: ModelStringInput | null,
  heroPhotoUri?: ModelStringInput | null,
  email?: ModelStringInput | null,
  level?: ModelAthleteLevelInput | null,
  dateOfBirth?: ModelStringInput | null,
  plaidToken?: ModelStringInput | null,
  wyreId?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  handle?: ModelStringInput | null,
  and?: Array< ModelAthleteFilterInput | null > | null,
  or?: Array< ModelAthleteFilterInput | null > | null,
  not?: ModelAthleteFilterInput | null,
};

export type ModelAthleteConnection = {
  __typename: "ModelAthleteConnection",
  items:  Array<Athlete | null >,
  nextToken?: string | null,
};

export type ModelAthleteAccountFilterInput = {
  unitAccountId?: ModelStringInput | null,
  routingCode?: ModelStringInput | null,
  accountNumber?: ModelStringInput | null,
  podName?: ModelStringInput | null,
  and?: Array< ModelAthleteAccountFilterInput | null > | null,
  or?: Array< ModelAthleteAccountFilterInput | null > | null,
  not?: ModelAthleteAccountFilterInput | null,
  athleteAccountsId?: ModelIDInput | null,
};

export type ModelRecentTransactionFilterInput = {
  transactionId?: ModelStringInput | null,
  athleteId?: ModelStringInput | null,
  status?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  direction?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  read?: ModelBooleanInput | null,
  settled?: ModelStringInput | null,
  and?: Array< ModelRecentTransactionFilterInput | null > | null,
  or?: Array< ModelRecentTransactionFilterInput | null > | null,
  not?: ModelRecentTransactionFilterInput | null,
};

export type ModelRecentTransactionConnection = {
  __typename: "ModelRecentTransactionConnection",
  items:  Array<RecentTransaction | null >,
  nextToken?: string | null,
};

export type ModelAthleteActivityFilterInput = {
  wealthBalance?: ModelIntInput | null,
  allWagered?: ModelIntInput | null,
  loginCount?: ModelIntInput | null,
  activePeriodInMinutes?: ModelIntInput | null,
  and?: Array< ModelAthleteActivityFilterInput | null > | null,
  or?: Array< ModelAthleteActivityFilterInput | null > | null,
  not?: ModelAthleteActivityFilterInput | null,
};

export type ModelAthleteActivityConnection = {
  __typename: "ModelAthleteActivityConnection",
  items:  Array<AthleteActivity | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelEmailChallengeFilterInput = {
  code?: ModelStringInput | null,
  email?: ModelStringInput | null,
  verified?: ModelBooleanInput | null,
  and?: Array< ModelEmailChallengeFilterInput | null > | null,
  or?: Array< ModelEmailChallengeFilterInput | null > | null,
  not?: ModelEmailChallengeFilterInput | null,
};

export type ModelEmailChallengeConnection = {
  __typename: "ModelEmailChallengeConnection",
  items:  Array<EmailChallenge | null >,
  nextToken?: string | null,
};

export type ModelEventFilterInput = {
  creatorId?: ModelIDInput | null,
  sponsor?: ModelStringInput | null,
  title?: ModelStringInput | null,
  category?: ModelStringInput | null,
  heroPhotoUri?: ModelStringInput | null,
  logoUri?: ModelStringInput | null,
  tagline?: ModelStringInput | null,
  description?: ModelStringInput | null,
  dateTime?: ModelFloatInput | null,
  location?: ModelStringInput | null,
  reward?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type ModelEventStatusFilterInput = {
  athleteId?: ModelIDInput | null,
  eventItemId?: ModelIDInput | null,
  registered?: ModelBooleanInput | null,
  and?: Array< ModelEventStatusFilterInput | null > | null,
  or?: Array< ModelEventStatusFilterInput | null > | null,
  not?: ModelEventStatusFilterInput | null,
};

export type ModelEventStatusConnection = {
  __typename: "ModelEventStatusConnection",
  items:  Array<EventStatus | null >,
  nextToken?: string | null,
};

export type ModelExerciseListFilterInput = {
  id?: ModelIDInput | null,
  exerciseId?: ModelIDInput | null,
  studentEmail?: ModelStringInput | null,
  answer?: ModelStringInput | null,
  approveDecline?: ModelBooleanInput | null,
  isChecked?: ModelBooleanInput | null,
  isShowed?: ModelBooleanInput | null,
  and?: Array< ModelExerciseListFilterInput | null > | null,
  or?: Array< ModelExerciseListFilterInput | null > | null,
  not?: ModelExerciseListFilterInput | null,
};

export type ModelExerciseListConnection = {
  __typename: "ModelExerciseListConnection",
  items:  Array<ExerciseList | null >,
  nextToken?: string | null,
};

export type ModelInviteFilterInput = {
  code?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelInviteFilterInput | null > | null,
  or?: Array< ModelInviteFilterInput | null > | null,
  not?: ModelInviteFilterInput | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type ModelInviteConnection = {
  __typename: "ModelInviteConnection",
  items:  Array<Invite | null >,
  nextToken?: string | null,
};

export type ModelLearnFilterInput = {
  creatorId?: ModelIDInput | null,
  bgImageUri?: ModelStringInput | null,
  sponsor?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  level?: ModelLearnLevelInput | null,
  reward?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLearnFilterInput | null > | null,
  or?: Array< ModelLearnFilterInput | null > | null,
  not?: ModelLearnFilterInput | null,
};

export type ModelLearnConnection = {
  __typename: "ModelLearnConnection",
  items:  Array<Learn | null >,
  nextToken?: string | null,
};

export type ModelLearnExerciseFilterInput = {
  bgImageUri?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  level?: ModelExerciseLevelInput | null,
  reward?: ModelIntInput | null,
  sponsor?: ModelStringInput | null,
  problem?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLearnExerciseFilterInput | null > | null,
  or?: Array< ModelLearnExerciseFilterInput | null > | null,
  not?: ModelLearnExerciseFilterInput | null,
};

export type ModelLearnExerciseConnection = {
  __typename: "ModelLearnExerciseConnection",
  items:  Array<LearnExercise | null >,
  nextToken?: string | null,
};

export type ModelLearnStatusFilterInput = {
  athleteId?: ModelIDInput | null,
  learnItemId?: ModelIDInput | null,
  passedDepositsCount?: ModelIntInput | null,
  wagered?: ModelIntInput | null,
  isWagered?: ModelBooleanInput | null,
  test?: ModelIntInput | null,
  and?: Array< ModelLearnStatusFilterInput | null > | null,
  or?: Array< ModelLearnStatusFilterInput | null > | null,
  not?: ModelLearnStatusFilterInput | null,
};

export type ModelLearnStatusConnection = {
  __typename: "ModelLearnStatusConnection",
  items:  Array<LearnStatus | null >,
  nextToken?: string | null,
};

export type ModelOpportunityFilterInput = {
  id?: ModelIDInput | null,
  categories?: ModelStringInput | null,
  creatorId?: ModelIDInput | null,
  details?: ModelStringInput | null,
  detailsTldr?: ModelStringInput | null,
  endDateTime?: ModelFloatInput | null,
  eventType?: ModelStringInput | null,
  heroPhotoUri?: ModelStringInput | null,
  isPrivate?: ModelBooleanInput | null,
  logoUri?: ModelStringInput | null,
  onlineReserved?: ModelIntInput | null,
  onlineTotal?: ModelIntInput | null,
  registrationUrl?: ModelStringInput | null,
  reward?: ModelFloatInput | null,
  rewardDetails?: ModelStringInput | null,
  seatsReserved?: ModelIntInput | null,
  seatsTotal?: ModelIntInput | null,
  startDateTime?: ModelFloatInput | null,
  status?: ModelStringInput | null,
  subtitle?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  title?: ModelStringInput | null,
  timezone?: ModelStringInput | null,
  websitePrompt?: ModelStringInput | null,
  websiteUrl?: ModelStringInput | null,
  and?: Array< ModelOpportunityFilterInput | null > | null,
  or?: Array< ModelOpportunityFilterInput | null > | null,
  not?: ModelOpportunityFilterInput | null,
};

export type ModelOrganizationFilterInput = {
  id?: ModelIDInput | null,
  displayName?: ModelStringInput | null,
  relationshipType?: ModelOrganizationRelationshipTypeInput | null,
  opportunityId?: ModelIDInput | null,
  and?: Array< ModelOrganizationFilterInput | null > | null,
  or?: Array< ModelOrganizationFilterInput | null > | null,
  not?: ModelOrganizationFilterInput | null,
};

export type ModelPhoneChallengeFilterInput = {
  code?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  verified?: ModelBooleanInput | null,
  and?: Array< ModelPhoneChallengeFilterInput | null > | null,
  or?: Array< ModelPhoneChallengeFilterInput | null > | null,
  not?: ModelPhoneChallengeFilterInput | null,
};

export type ModelPhoneChallengeConnection = {
  __typename: "ModelPhoneChallengeConnection",
  items:  Array<PhoneChallenge | null >,
  nextToken?: string | null,
};

export type ModelProposalFilterInput = {
  id?: ModelIDInput | null,
  sessionId?: ModelIDInput | null,
  email?: ModelStringInput | null,
  track?: ModelProposalTrackTypeInput | null,
  actionVerb?: ModelProposalActionVerbTypeInput | null,
  statement?: ModelStringInput | null,
  desiredGoal?: ModelStringInput | null,
  votingCount?: ModelIntInput | null,
  and?: Array< ModelProposalFilterInput | null > | null,
  or?: Array< ModelProposalFilterInput | null > | null,
  not?: ModelProposalFilterInput | null,
};

export type ModelProposalConnection = {
  __typename: "ModelProposalConnection",
  items:  Array<Proposal | null >,
  nextToken?: string | null,
};

export type ModelProposalSessionFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  and?: Array< ModelProposalSessionFilterInput | null > | null,
  or?: Array< ModelProposalSessionFilterInput | null > | null,
  not?: ModelProposalSessionFilterInput | null,
};

export type ModelProposalSessionConnection = {
  __typename: "ModelProposalSessionConnection",
  items:  Array<ProposalSession | null >,
  nextToken?: string | null,
};

export type ModelQRCodeFilterInput = {
  learnId?: ModelIDInput | null,
  depositNum?: ModelIntInput | null,
  wealthPointAmount?: ModelIntInput | null,
  rewardAmount?: ModelIntInput | null,
  itemName?: ModelStringInput | null,
  eventName?: ModelStringInput | null,
  limitCount?: ModelIntInput | null,
  usedCount?: ModelIntInput | null,
  and?: Array< ModelQRCodeFilterInput | null > | null,
  or?: Array< ModelQRCodeFilterInput | null > | null,
  not?: ModelQRCodeFilterInput | null,
};

export type ModelQRCodeConnection = {
  __typename: "ModelQRCodeConnection",
  items:  Array<QRCode | null >,
  nextToken?: string | null,
};

export type ModelResourceFilterInput = {
  title?: ModelStringInput | null,
  heroImageUri?: ModelStringInput | null,
  link?: ModelStringInput | null,
  and?: Array< ModelResourceFilterInput | null > | null,
  or?: Array< ModelResourceFilterInput | null > | null,
  not?: ModelResourceFilterInput | null,
  learnResourcesId?: ModelIDInput | null,
};

export type ModelRewardFilterInput = {
  id?: ModelIDInput | null,
  creatorId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  wealthAmount?: ModelIntInput | null,
  logoUri?: ModelStringInput | null,
  description?: ModelStringInput | null,
  heroPhotoUri?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRewardFilterInput | null > | null,
  or?: Array< ModelRewardFilterInput | null > | null,
  not?: ModelRewardFilterInput | null,
};

export type ModelRewardConnection = {
  __typename: "ModelRewardConnection",
  items:  Array<Reward | null >,
  nextToken?: string | null,
};

export type ModelRewardStatusFilterInput = {
  athleteId?: ModelIDInput | null,
  rewardItemId?: ModelIDInput | null,
  redeemed?: ModelBooleanInput | null,
  and?: Array< ModelRewardStatusFilterInput | null > | null,
  or?: Array< ModelRewardStatusFilterInput | null > | null,
  not?: ModelRewardStatusFilterInput | null,
};

export type ModelRewardStatusConnection = {
  __typename: "ModelRewardStatusConnection",
  items:  Array<RewardStatus | null >,
  nextToken?: string | null,
};

export type ModelVotedUserFilterInput = {
  id?: ModelIDInput | null,
  sessionId?: ModelIDInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelVotedUserFilterInput | null > | null,
  or?: Array< ModelVotedUserFilterInput | null > | null,
  not?: ModelVotedUserFilterInput | null,
};

export type ModelVotedUserConnection = {
  __typename: "ModelVotedUserConnection",
  items:  Array<VotedUser | null >,
  nextToken?: string | null,
};

export type ModelVotingSessionFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  and?: Array< ModelVotingSessionFilterInput | null > | null,
  or?: Array< ModelVotingSessionFilterInput | null > | null,
  not?: ModelVotingSessionFilterInput | null,
};

export type ModelVotingSessionConnection = {
  __typename: "ModelVotingSessionConnection",
  items:  Array<VotingSession | null >,
  nextToken?: string | null,
};

export type CustomCreateLearnStatusMutationVariables = {
  input: CreateLearnStatusInput,
  condition?: ModelLearnStatusConditionInput | null,
};

export type CustomCreateLearnStatusMutation = {
  createLearnStatus?:  {
    __typename: "LearnStatus",
    id: string,
    athleteId: string,
    learnItemId: string,
    passedDepositsCount?: number | null,
  } | null,
};

export type CustomUpdateLearnStatusMutationVariables = {
  input: UpdateLearnStatusInput,
  condition?: ModelLearnStatusConditionInput | null,
};

export type CustomUpdateLearnStatusMutation = {
  updateLearnStatus?:  {
    __typename: "LearnStatus",
    id: string,
    athleteId: string,
    learnItemId: string,
    passedDepositsCount?: number | null,
  } | null,
};

export type CustomDeleteLearnStatusMutationVariables = {
  input: DeleteLearnStatusInput,
  condition?: ModelLearnStatusConditionInput | null,
};

export type CustomDeleteLearnStatusMutation = {
  deleteLearnStatus?:  {
    __typename: "LearnStatus",
    id: string,
    athleteId: string,
    learnItemId: string,
    passedDepositsCount?: number | null,
    wagered?: number | null,
    isWagered?: boolean | null,
  } | null,
};

export type CustomCreateEventStatusMutationVariables = {
  input: CreateEventStatusInput,
  condition?: ModelEventStatusConditionInput | null,
};

export type CustomCreateEventStatusMutation = {
  createEventStatus?:  {
    __typename: "EventStatus",
    id: string,
    athleteId: string,
    eventItemId: string,
    registered: boolean,
  } | null,
};

export type CustomUpdateEventStatusMutationVariables = {
  input: UpdateEventStatusInput,
  condition?: ModelEventStatusConditionInput | null,
};

export type CustomUpdateEventStatusMutation = {
  updateEventStatus?:  {
    __typename: "EventStatus",
    id: string,
    athleteId: string,
    eventItemId: string,
    registered: boolean,
  } | null,
};

export type CustomDeleteEventStatusMutationVariables = {
  input: DeleteEventStatusInput,
  condition?: ModelEventStatusConditionInput | null,
};

export type CustomDeleteEventStatusMutation = {
  deleteEventStatus?:  {
    __typename: "EventStatus",
    id: string,
    athleteId: string,
    eventItemId: string,
    registered: boolean,
  } | null,
};

export type CustomCreateRewardStatusMutationVariables = {
  input: CreateRewardStatusInput,
  condition?: ModelRewardStatusConditionInput | null,
};

export type CustomCreateRewardStatusMutation = {
  createRewardStatus?:  {
    __typename: "RewardStatus",
    id: string,
    athleteId: string,
    rewardItemId: string,
    redeemed: boolean,
  } | null,
};

export type CustomUpdateRewardStatusMutationVariables = {
  input: UpdateRewardStatusInput,
  condition?: ModelRewardStatusConditionInput | null,
};

export type CustomUpdateRewardStatusMutation = {
  updateRewardStatus?:  {
    __typename: "RewardStatus",
    id: string,
    athleteId: string,
    rewardItemId: string,
    redeemed: boolean,
  } | null,
};

export type CustomDeleteRewardStatusMutationVariables = {
  input: DeleteRewardStatusInput,
  condition?: ModelRewardStatusConditionInput | null,
};

export type CustomDeleteRewardStatusMutation = {
  deleteRewardStatus?:  {
    __typename: "RewardStatus",
    id: string,
    athleteId: string,
    rewardItemId: string,
    redeemed: boolean,
  } | null,
};

export type searchCustomLearnItemIdsQueryVariables = {
  filter?: SearchableLearnFilterInput | null,
  sort?: Array< SearchableLearnSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableLearnAggregationInput | null > | null,
};

export type searchCustomLearnItemIdsQuery = {
  searchLearns?:  {
    __typename: "SearchableLearnConnection",
    items:  Array< {
      __typename: "Learn",
      id: string,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        questions:  Array< {
          __typename: "Quiz",
          questionText: string,
          correctAnswer: string,
          answers: Array< string >,
        } >,
        title: string,
        videoDuration?: number | null,
        videoUri: string,
      } >,
      qaItems?:  Array< {
        __typename: "QAItem",
        questionItem:  {
          __typename: "QuestionItem",
          question: string,
          authorId: string,
          authorName?: string | null,
          createdAt?: string | null,
        },
        answerItems:  Array< {
          __typename: "AnswerItem",
          answer: string,
          authorEmail?: string | null,
          authorName?: string | null,
          authorTitle?: string | null,
          createdAt?: string | null,
          updatedAt?: string | null,
        } >,
      } > | null,
      description?: string | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        items:  Array< {
          __typename: "Resource",
          title: string,
          heroImageUri: string,
          link: string,
        } | null >,
      } | null,
      socialHandles?:  {
        __typename: "SocialHandles",
        twitter?: string | null,
        tiktok?: string | null,
        instagram?: string | null,
        youtube?: string | null,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type searchCustomLearnStatusesQueryVariables = {
  filter?: SearchableLearnStatusFilterInput | null,
  sort?: Array< SearchableLearnStatusSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableLearnStatusAggregationInput | null > | null,
};

export type searchCustomLearnStatusesQuery = {
  searchLearnStatuses?:  {
    __typename: "SearchableLearnStatusConnection",
    items:  Array< {
      __typename: "LearnStatus",
      athleteId: string,
      learnItemId: string,
      passedDepositsCount?: number | null,
      wagered?: number | null,
      isWagered?: boolean | null,
      id: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type InitiatePhoneChallengeMutationVariables = {
  phoneNumber: string,
};

export type InitiatePhoneChallengeMutation = {
  initiatePhoneChallenge?:  {
    __typename: "PhoneChallenge",
    code: string,
    phoneNumber: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ReturnUserChallengeMutationVariables = {
  phoneNumber: string,
};

export type ReturnUserChallengeMutation = {
  returnUserChallenge?:  {
    __typename: "PhoneChallenge",
    code: string,
    phoneNumber: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ValidateReturnUserMutationVariables = {
  phoneNumber: string,
  code: string,
};

export type ValidateReturnUserMutation = {
  validateReturnUser: boolean,
};

export type TryPhoneChallengeMutationVariables = {
  phoneNumber: string,
  code: string,
};

export type TryPhoneChallengeMutation = {
  tryPhoneChallenge: boolean,
};

export type GenerateInviteMutation = {
  generateInvite?:  {
    __typename: "Invite",
    code: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type InitiateEmailChallengeMutationVariables = {
  email: string,
};

export type InitiateEmailChallengeMutation = {
  initiateEmailChallenge?:  {
    __typename: "EmailChallenge",
    code: string,
    email: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type TryEmailChallengeMutationVariables = {
  email: string,
  code: string,
};

export type TryEmailChallengeMutation = {
  tryEmailChallenge: boolean,
};

export type OpenAppAndAccountMutationVariables = {
  ssn: string,
  athleteId: string,
};

export type OpenAppAndAccountMutation = {
  openAppAndAccount?:  Array< {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
  } | null > | null,
};

export type OpenAccountMutationVariables = {
  athleteId: string,
};

export type OpenAccountMutation = {
  openAccount?:  {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
  } | null,
};

export type UnitWebhookServiceMutationVariables = {
  data?: string | null,
};

export type UnitWebhookServiceMutation = {
  unitWebhookService?:  {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      hold?: number | null,
      available?: number | null,
    } | null,
  } | null,
};

export type PodSettingsMutationVariables = {
  athleteId: string,
  savings: number,
  investments: number,
  spending: number,
};

export type PodSettingsMutation = {
  podSettings?:  {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
  } | null,
};

export type CreatePlaidLinkMutationVariables = {
  athleteId: string,
};

export type CreatePlaidLinkMutation = {
  createPlaidLink?:  {
    __typename: "PlaidToken",
    access_token?: string | null,
    item_id?: string | null,
    link_token?: string | null,
    request_id?: string | null,
    new_access_token?: string | null,
  } | null,
};

export type UpdatePlaidLinkMutationVariables = {
  athleteId: string,
  accessToken: string,
};

export type UpdatePlaidLinkMutation = {
  updatePlaidLink?:  {
    __typename: "PlaidToken",
    access_token?: string | null,
    item_id?: string | null,
    link_token?: string | null,
    request_id?: string | null,
    new_access_token?: string | null,
  } | null,
};

export type CreatePlaidPaymentMutationVariables = {
  athleteId: string,
  plaidAccountId: string,
  amount: number,
  description?: string | null,
};

export type CreatePlaidPaymentMutation = {
  createPlaidPayment?:  {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      hold?: number | null,
      available?: number | null,
    } | null,
  } | null,
};

export type BookPaymentMutationVariables = {
  athleteId: string,
  unitAccountId: string,
  amount: number,
  description?: string | null,
  receiverUnitAccountId: string,
  receiverAccountType?: string | null,
};

export type BookPaymentMutation = {
  bookPayment?:  {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      hold?: number | null,
      available?: number | null,
    } | null,
  } | null,
};

export type DebitAccountMutationVariables = {
  athleteId: string,
  unitAccountId: string,
  amount: number,
  description?: string | null,
  receiverName: string,
  receiverRoutingNumber: string,
  receiverAccountNumber: string,
  receiverAccountType?: string | null,
  addenda?: string | null,
};

export type DebitAccountMutation = {
  debitAccount?:  {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      hold?: number | null,
      available?: number | null,
    } | null,
  } | null,
};

export type CreditAccountMutationVariables = {
  athleteId: string,
  unitAccountId: string,
  amount: number,
  description?: string | null,
  receiverName: string,
  receiverRoutingNumber: string,
  receiverAccountNumber: string,
  receiverAccountType?: string | null,
  addenda?: string | null,
};

export type CreditAccountMutation = {
  creditAccount?:  {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      hold?: number | null,
      available?: number | null,
    } | null,
  } | null,
};

export type IncreaseAthletesCountMutation = {
  increaseAthletesCount?: number | null,
};

export type IncreaseSessionsCountMutation = {
  increaseSessionsCount?: number | null,
};

export type UpdateRSVPedEventsCountMutationVariables = {
  increase: boolean,
};

export type UpdateRSVPedEventsCountMutation = {
  updateRSVPedEventsCount?: number | null,
};

export type IncreaseTotalMinutesInAppMutationVariables = {
  byAmountInSeconds: number,
};

export type IncreaseTotalMinutesInAppMutation = {
  increaseTotalMinutesInApp?: number | null,
};

export type IncreaseCompletedModulesCountMutation = {
  increaseCompletedModulesCount?: number | null,
};

export type IncreaseTotalTrueOrFalseChoiceCountMutationVariables = {
  increaseTrueChoice: boolean,
};

export type IncreaseTotalTrueOrFalseChoiceCountMutation = {
  increaseTotalTrueOrFalseChoiceCount?: number | null,
};

export type IncreaseTotalAskedQuestionsCountMutation = {
  increaseTotalAskedQuestionsCount?: number | null,
};

export type CreateAppUsageLogMutationVariables = {
  input: CreateAppUsageLogInput,
  condition?: ModelAppUsageLogConditionInput | null,
};

export type CreateAppUsageLogMutation = {
  createAppUsageLog?:  {
    __typename: "AppUsageLog",
    dateString: string,
    athletesCount?: number | null,
    sessionsCount?: number | null,
    rsvpedEventsCount?: number | null,
    totalMinutesInApp?: number | null,
    completedModulesCount?: number | null,
    totalTrueChoiceCount?: number | null,
    totalFalseChoiceCount?: number | null,
    totalAskedQuestionsCount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAppUsageLogMutationVariables = {
  input: UpdateAppUsageLogInput,
  condition?: ModelAppUsageLogConditionInput | null,
};

export type UpdateAppUsageLogMutation = {
  updateAppUsageLog?:  {
    __typename: "AppUsageLog",
    dateString: string,
    athletesCount?: number | null,
    sessionsCount?: number | null,
    rsvpedEventsCount?: number | null,
    totalMinutesInApp?: number | null,
    completedModulesCount?: number | null,
    totalTrueChoiceCount?: number | null,
    totalFalseChoiceCount?: number | null,
    totalAskedQuestionsCount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAppUsageLogMutationVariables = {
  input: DeleteAppUsageLogInput,
  condition?: ModelAppUsageLogConditionInput | null,
};

export type DeleteAppUsageLogMutation = {
  deleteAppUsageLog?:  {
    __typename: "AppUsageLog",
    dateString: string,
    athletesCount?: number | null,
    sessionsCount?: number | null,
    rsvpedEventsCount?: number | null,
    totalMinutesInApp?: number | null,
    completedModulesCount?: number | null,
    totalTrueChoiceCount?: number | null,
    totalFalseChoiceCount?: number | null,
    totalAskedQuestionsCount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAthleteMutationVariables = {
  input: CreateAthleteInput,
  condition?: ModelAthleteConditionInput | null,
};

export type CreateAthleteMutation = {
  createAthlete?:  {
    __typename: "Athlete",
    id: string,
    firstName: string,
    lastName: string,
    mobilePhone: string,
    athleteTag?: string | null,
    bio?: string | null,
    profilePhotoUri?: string | null,
    heroPhotoUri?: string | null,
    email: string,
    level?: AthleteLevel | null,
    sport?:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    team?:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    address?:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    } | null,
    dateOfBirth?: string | null,
    accounts?:  {
      __typename: "ModelAthleteAccountConnection",
      items:  Array< {
        __typename: "AthleteAccount",
        unitAccountId: string,
        routingCode: string,
        accountNumber: string,
        podName: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteAccountsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    plaidToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreId?: string | null,
    isActive: boolean,
    handle?: string | null,
    rewardedQrCodes?:  Array< {
      __typename: "QrCodes",
      id?: string | null,
      itemOrEventName?: string | null,
    } | null > | null,
    activity?:  {
      __typename: "AthleteActivity",
      wealthBalance?: number | null,
      allWagered?: number | null,
      loginCount?: number | null,
      activePeriodInMinutes?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAthleteMutationVariables = {
  input: UpdateAthleteInput,
  condition?: ModelAthleteConditionInput | null,
};

export type UpdateAthleteMutation = {
  updateAthlete?:  {
    __typename: "Athlete",
    id: string,
    firstName: string,
    lastName: string,
    mobilePhone: string,
    athleteTag?: string | null,
    bio?: string | null,
    profilePhotoUri?: string | null,
    heroPhotoUri?: string | null,
    email: string,
    level?: AthleteLevel | null,
    sport?:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    team?:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    address?:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    } | null,
    dateOfBirth?: string | null,
    accounts?:  {
      __typename: "ModelAthleteAccountConnection",
      items:  Array< {
        __typename: "AthleteAccount",
        unitAccountId: string,
        routingCode: string,
        accountNumber: string,
        podName: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteAccountsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    plaidToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreId?: string | null,
    isActive: boolean,
    handle?: string | null,
    rewardedQrCodes?:  Array< {
      __typename: "QrCodes",
      id?: string | null,
      itemOrEventName?: string | null,
    } | null > | null,
    activity?:  {
      __typename: "AthleteActivity",
      wealthBalance?: number | null,
      allWagered?: number | null,
      loginCount?: number | null,
      activePeriodInMinutes?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAthleteMutationVariables = {
  input: DeleteAthleteInput,
  condition?: ModelAthleteConditionInput | null,
};

export type DeleteAthleteMutation = {
  deleteAthlete?:  {
    __typename: "Athlete",
    id: string,
    firstName: string,
    lastName: string,
    mobilePhone: string,
    athleteTag?: string | null,
    bio?: string | null,
    profilePhotoUri?: string | null,
    heroPhotoUri?: string | null,
    email: string,
    level?: AthleteLevel | null,
    sport?:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    team?:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    address?:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    } | null,
    dateOfBirth?: string | null,
    accounts?:  {
      __typename: "ModelAthleteAccountConnection",
      items:  Array< {
        __typename: "AthleteAccount",
        unitAccountId: string,
        routingCode: string,
        accountNumber: string,
        podName: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteAccountsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    plaidToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreId?: string | null,
    isActive: boolean,
    handle?: string | null,
    rewardedQrCodes?:  Array< {
      __typename: "QrCodes",
      id?: string | null,
      itemOrEventName?: string | null,
    } | null > | null,
    activity?:  {
      __typename: "AthleteActivity",
      wealthBalance?: number | null,
      allWagered?: number | null,
      loginCount?: number | null,
      activePeriodInMinutes?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAthleteAccountMutationVariables = {
  input: CreateAthleteAccountInput,
  condition?: ModelAthleteAccountConditionInput | null,
};

export type CreateAthleteAccountMutation = {
  createAthleteAccount?:  {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
  } | null,
};

export type UpdateAthleteAccountMutationVariables = {
  input: UpdateAthleteAccountInput,
  condition?: ModelAthleteAccountConditionInput | null,
};

export type UpdateAthleteAccountMutation = {
  updateAthleteAccount?:  {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
  } | null,
};

export type DeleteAthleteAccountMutationVariables = {
  input: DeleteAthleteAccountInput,
  condition?: ModelAthleteAccountConditionInput | null,
};

export type DeleteAthleteAccountMutation = {
  deleteAthleteAccount?:  {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
  } | null,
};

export type CreateRecentTransactionMutationVariables = {
  input: CreateRecentTransactionInput,
  condition?: ModelRecentTransactionConditionInput | null,
};

export type CreateRecentTransactionMutation = {
  createRecentTransaction?:  {
    __typename: "RecentTransaction",
    transactionId: string,
    athleteId?: string | null,
    status?: string | null,
    amount?: number | null,
    direction?: string | null,
    createdAt?: string | null,
    read?: boolean | null,
    settled?: string | null,
    podAllocation?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type UpdateRecentTransactionMutationVariables = {
  input: UpdateRecentTransactionInput,
  condition?: ModelRecentTransactionConditionInput | null,
};

export type UpdateRecentTransactionMutation = {
  updateRecentTransaction?:  {
    __typename: "RecentTransaction",
    transactionId: string,
    athleteId?: string | null,
    status?: string | null,
    amount?: number | null,
    direction?: string | null,
    createdAt?: string | null,
    read?: boolean | null,
    settled?: string | null,
    podAllocation?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type DeleteRecentTransactionMutationVariables = {
  input: DeleteRecentTransactionInput,
  condition?: ModelRecentTransactionConditionInput | null,
};

export type DeleteRecentTransactionMutation = {
  deleteRecentTransaction?:  {
    __typename: "RecentTransaction",
    transactionId: string,
    athleteId?: string | null,
    status?: string | null,
    amount?: number | null,
    direction?: string | null,
    createdAt?: string | null,
    read?: boolean | null,
    settled?: string | null,
    podAllocation?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type CreateAthleteActivityMutationVariables = {
  input: CreateAthleteActivityInput,
  condition?: ModelAthleteActivityConditionInput | null,
};

export type CreateAthleteActivityMutation = {
  createAthleteActivity?:  {
    __typename: "AthleteActivity",
    wealthBalance?: number | null,
    allWagered?: number | null,
    loginCount?: number | null,
    activePeriodInMinutes?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAthleteActivityMutationVariables = {
  input: UpdateAthleteActivityInput,
  condition?: ModelAthleteActivityConditionInput | null,
};

export type UpdateAthleteActivityMutation = {
  updateAthleteActivity?:  {
    __typename: "AthleteActivity",
    wealthBalance?: number | null,
    allWagered?: number | null,
    loginCount?: number | null,
    activePeriodInMinutes?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAthleteActivityMutationVariables = {
  input: DeleteAthleteActivityInput,
  condition?: ModelAthleteActivityConditionInput | null,
};

export type DeleteAthleteActivityMutation = {
  deleteAthleteActivity?:  {
    __typename: "AthleteActivity",
    wealthBalance?: number | null,
    allWagered?: number | null,
    loginCount?: number | null,
    activePeriodInMinutes?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEmailChallengeMutationVariables = {
  input: CreateEmailChallengeInput,
  condition?: ModelEmailChallengeConditionInput | null,
};

export type CreateEmailChallengeMutation = {
  createEmailChallenge?:  {
    __typename: "EmailChallenge",
    code: string,
    email: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEmailChallengeMutationVariables = {
  input: UpdateEmailChallengeInput,
  condition?: ModelEmailChallengeConditionInput | null,
};

export type UpdateEmailChallengeMutation = {
  updateEmailChallenge?:  {
    __typename: "EmailChallenge",
    code: string,
    email: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEmailChallengeMutationVariables = {
  input: DeleteEmailChallengeInput,
  condition?: ModelEmailChallengeConditionInput | null,
};

export type DeleteEmailChallengeMutation = {
  deleteEmailChallenge?:  {
    __typename: "EmailChallenge",
    code: string,
    email: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsor: string,
    title: string,
    category: string,
    heroPhotoUri: string,
    logoUri: string,
    tagline: string,
    description: string,
    dateTime: number,
    location: string,
    reward: number,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsor: string,
    title: string,
    category: string,
    heroPhotoUri: string,
    logoUri: string,
    tagline: string,
    description: string,
    dateTime: number,
    location: string,
    reward: number,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsor: string,
    title: string,
    category: string,
    heroPhotoUri: string,
    logoUri: string,
    tagline: string,
    description: string,
    dateTime: number,
    location: string,
    reward: number,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type CreateEventStatusMutationVariables = {
  input: CreateEventStatusInput,
  condition?: ModelEventStatusConditionInput | null,
};

export type CreateEventStatusMutation = {
  createEventStatus?:  {
    __typename: "EventStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventItemId: string,
    event?:  {
      __typename: "Event",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      sponsor: string,
      title: string,
      category: string,
      heroPhotoUri: string,
      logoUri: string,
      tagline: string,
      description: string,
      dateTime: number,
      location: string,
      reward: number,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    registered: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventStatusMutationVariables = {
  input: UpdateEventStatusInput,
  condition?: ModelEventStatusConditionInput | null,
};

export type UpdateEventStatusMutation = {
  updateEventStatus?:  {
    __typename: "EventStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventItemId: string,
    event?:  {
      __typename: "Event",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      sponsor: string,
      title: string,
      category: string,
      heroPhotoUri: string,
      logoUri: string,
      tagline: string,
      description: string,
      dateTime: number,
      location: string,
      reward: number,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    registered: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventStatusMutationVariables = {
  input: DeleteEventStatusInput,
  condition?: ModelEventStatusConditionInput | null,
};

export type DeleteEventStatusMutation = {
  deleteEventStatus?:  {
    __typename: "EventStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventItemId: string,
    event?:  {
      __typename: "Event",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      sponsor: string,
      title: string,
      category: string,
      heroPhotoUri: string,
      logoUri: string,
      tagline: string,
      description: string,
      dateTime: number,
      location: string,
      reward: number,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    registered: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateExerciseListMutationVariables = {
  input: CreateExerciseListInput,
  condition?: ModelExerciseListConditionInput | null,
};

export type CreateExerciseListMutation = {
  createExerciseList?:  {
    __typename: "ExerciseList",
    id: string,
    exerciseId: string,
    exercise?:  {
      __typename: "LearnExercise",
      bgImageUri: string,
      title: string,
      description?: string | null,
      level: ExerciseLevel,
      reward: number,
      sponsor: string,
      problem: string,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    studentEmail?: string | null,
    answer?: string | null,
    approveDecline?: boolean | null,
    isChecked?: boolean | null,
    isShowed?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateExerciseListMutationVariables = {
  input: UpdateExerciseListInput,
  condition?: ModelExerciseListConditionInput | null,
};

export type UpdateExerciseListMutation = {
  updateExerciseList?:  {
    __typename: "ExerciseList",
    id: string,
    exerciseId: string,
    exercise?:  {
      __typename: "LearnExercise",
      bgImageUri: string,
      title: string,
      description?: string | null,
      level: ExerciseLevel,
      reward: number,
      sponsor: string,
      problem: string,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    studentEmail?: string | null,
    answer?: string | null,
    approveDecline?: boolean | null,
    isChecked?: boolean | null,
    isShowed?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteExerciseListMutationVariables = {
  input: DeleteExerciseListInput,
  condition?: ModelExerciseListConditionInput | null,
};

export type DeleteExerciseListMutation = {
  deleteExerciseList?:  {
    __typename: "ExerciseList",
    id: string,
    exerciseId: string,
    exercise?:  {
      __typename: "LearnExercise",
      bgImageUri: string,
      title: string,
      description?: string | null,
      level: ExerciseLevel,
      reward: number,
      sponsor: string,
      problem: string,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    studentEmail?: string | null,
    answer?: string | null,
    approveDecline?: boolean | null,
    isChecked?: boolean | null,
    isShowed?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateInviteMutationVariables = {
  input: CreateInviteInput,
  condition?: ModelInviteConditionInput | null,
};

export type CreateInviteMutation = {
  createInvite?:  {
    __typename: "Invite",
    code: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInviteMutationVariables = {
  input: UpdateInviteInput,
  condition?: ModelInviteConditionInput | null,
};

export type UpdateInviteMutation = {
  updateInvite?:  {
    __typename: "Invite",
    code: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInviteMutationVariables = {
  input: DeleteInviteInput,
  condition?: ModelInviteConditionInput | null,
};

export type DeleteInviteMutation = {
  deleteInvite?:  {
    __typename: "Invite",
    code: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLearnMutationVariables = {
  input: CreateLearnInput,
  condition?: ModelLearnConditionInput | null,
};

export type CreateLearnMutation = {
  createLearn?:  {
    __typename: "Learn",
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    bgImageUri?: string | null,
    sponsor: string,
    title: string,
    description?: string | null,
    level: LearnLevel,
    reward: number,
    deposits:  Array< {
      __typename: "Deposit",
      videoUri: string,
      videoDuration?: number | null,
      title: string,
      questions:  Array< {
        __typename: "Quiz",
        questionText: string,
        answers: Array< string >,
        correctAnswer: string,
      } >,
    } >,
    qaItems?:  Array< {
      __typename: "QAItem",
      questionItem:  {
        __typename: "QuestionItem",
        question: string,
        authorId: string,
        authorName?: string | null,
        createdAt?: string | null,
      },
      answerItems:  Array< {
        __typename: "AnswerItem",
        answer: string,
        authorEmail?: string | null,
        authorName?: string | null,
        authorTitle?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } >,
    } > | null,
    socialHandles?:  {
      __typename: "SocialHandles",
      discord?: string | null,
      instagram?: string | null,
      telegram?: string | null,
      tiktok?: string | null,
      twitter?: string | null,
      youtube?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        title: string,
        heroImageUri: string,
        link: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        learnResourcesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type UpdateLearnMutationVariables = {
  input: UpdateLearnInput,
  condition?: ModelLearnConditionInput | null,
};

export type UpdateLearnMutation = {
  updateLearn?:  {
    __typename: "Learn",
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    bgImageUri?: string | null,
    sponsor: string,
    title: string,
    description?: string | null,
    level: LearnLevel,
    reward: number,
    deposits:  Array< {
      __typename: "Deposit",
      videoUri: string,
      videoDuration?: number | null,
      title: string,
      questions:  Array< {
        __typename: "Quiz",
        questionText: string,
        answers: Array< string >,
        correctAnswer: string,
      } >,
    } >,
    qaItems?:  Array< {
      __typename: "QAItem",
      questionItem:  {
        __typename: "QuestionItem",
        question: string,
        authorId: string,
        authorName?: string | null,
        createdAt?: string | null,
      },
      answerItems:  Array< {
        __typename: "AnswerItem",
        answer: string,
        authorEmail?: string | null,
        authorName?: string | null,
        authorTitle?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } >,
    } > | null,
    socialHandles?:  {
      __typename: "SocialHandles",
      discord?: string | null,
      instagram?: string | null,
      telegram?: string | null,
      tiktok?: string | null,
      twitter?: string | null,
      youtube?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        title: string,
        heroImageUri: string,
        link: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        learnResourcesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type DeleteLearnMutationVariables = {
  input: DeleteLearnInput,
  condition?: ModelLearnConditionInput | null,
};

export type DeleteLearnMutation = {
  deleteLearn?:  {
    __typename: "Learn",
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    bgImageUri?: string | null,
    sponsor: string,
    title: string,
    description?: string | null,
    level: LearnLevel,
    reward: number,
    deposits:  Array< {
      __typename: "Deposit",
      videoUri: string,
      videoDuration?: number | null,
      title: string,
      questions:  Array< {
        __typename: "Quiz",
        questionText: string,
        answers: Array< string >,
        correctAnswer: string,
      } >,
    } >,
    qaItems?:  Array< {
      __typename: "QAItem",
      questionItem:  {
        __typename: "QuestionItem",
        question: string,
        authorId: string,
        authorName?: string | null,
        createdAt?: string | null,
      },
      answerItems:  Array< {
        __typename: "AnswerItem",
        answer: string,
        authorEmail?: string | null,
        authorName?: string | null,
        authorTitle?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } >,
    } > | null,
    socialHandles?:  {
      __typename: "SocialHandles",
      discord?: string | null,
      instagram?: string | null,
      telegram?: string | null,
      tiktok?: string | null,
      twitter?: string | null,
      youtube?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        title: string,
        heroImageUri: string,
        link: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        learnResourcesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type CreateLearnExerciseMutationVariables = {
  input: CreateLearnExerciseInput,
  condition?: ModelLearnExerciseConditionInput | null,
};

export type CreateLearnExerciseMutation = {
  createLearnExercise?:  {
    __typename: "LearnExercise",
    bgImageUri: string,
    title: string,
    description?: string | null,
    level: ExerciseLevel,
    reward: number,
    sponsor: string,
    problem: string,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type UpdateLearnExerciseMutationVariables = {
  input: UpdateLearnExerciseInput,
  condition?: ModelLearnExerciseConditionInput | null,
};

export type UpdateLearnExerciseMutation = {
  updateLearnExercise?:  {
    __typename: "LearnExercise",
    bgImageUri: string,
    title: string,
    description?: string | null,
    level: ExerciseLevel,
    reward: number,
    sponsor: string,
    problem: string,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type DeleteLearnExerciseMutationVariables = {
  input: DeleteLearnExerciseInput,
  condition?: ModelLearnExerciseConditionInput | null,
};

export type DeleteLearnExerciseMutation = {
  deleteLearnExercise?:  {
    __typename: "LearnExercise",
    bgImageUri: string,
    title: string,
    description?: string | null,
    level: ExerciseLevel,
    reward: number,
    sponsor: string,
    problem: string,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type CreateLearnStatusMutationVariables = {
  input: CreateLearnStatusInput,
  condition?: ModelLearnStatusConditionInput | null,
};

export type CreateLearnStatusMutation = {
  createLearnStatus?:  {
    __typename: "LearnStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    learnItemId: string,
    learn?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    passedDepositsCount?: number | null,
    wagered?: number | null,
    isWagered?: boolean | null,
    test?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLearnStatusMutationVariables = {
  input: UpdateLearnStatusInput,
  condition?: ModelLearnStatusConditionInput | null,
};

export type UpdateLearnStatusMutation = {
  updateLearnStatus?:  {
    __typename: "LearnStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    learnItemId: string,
    learn?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    passedDepositsCount?: number | null,
    wagered?: number | null,
    isWagered?: boolean | null,
    test?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLearnStatusMutationVariables = {
  input: DeleteLearnStatusInput,
  condition?: ModelLearnStatusConditionInput | null,
};

export type DeleteLearnStatusMutation = {
  deleteLearnStatus?:  {
    __typename: "LearnStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    learnItemId: string,
    learn?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    passedDepositsCount?: number | null,
    wagered?: number | null,
    isWagered?: boolean | null,
    test?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOpportunityMutationVariables = {
  input: CreateOpportunityInput,
  condition?: ModelOpportunityConditionInput | null,
};

export type CreateOpportunityMutation = {
  createOpportunity?:  {
    __typename: "Opportunity",
    id: string,
    categories: Array< string | null >,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    details: string,
    detailsTldr: string,
    endDateTime: number,
    eventType: string,
    heroPhotoUri: string,
    isPrivate: boolean,
    location?:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    locationDetail?:  {
      __typename: "LocationDetail",
      address: string,
      unit?: string | null,
      city: string,
      state: string,
      zipCode: string,
      country: string,
      name?: string | null,
    } | null,
    logoUri: string,
    onlineReserved: number,
    onlineTotal: number,
    organizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        displayName: string,
        relationshipType: OrganizationRelationshipType,
        opportunityId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orgs?:  Array< {
      __typename: "Org",
      displayName: string,
      relationshipType: OrganizationRelationshipType,
    } | null > | null,
    registrationUrl: string,
    reward: number,
    rewardDetails: string,
    seatsReserved: number,
    seatsTotal: number,
    startDateTime: number,
    status: string,
    subtitle: string,
    tags: Array< string | null >,
    title: string,
    timezone: string,
    websitePrompt: string,
    websiteUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOpportunityMutationVariables = {
  input: UpdateOpportunityInput,
  condition?: ModelOpportunityConditionInput | null,
};

export type UpdateOpportunityMutation = {
  updateOpportunity?:  {
    __typename: "Opportunity",
    id: string,
    categories: Array< string | null >,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    details: string,
    detailsTldr: string,
    endDateTime: number,
    eventType: string,
    heroPhotoUri: string,
    isPrivate: boolean,
    location?:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    locationDetail?:  {
      __typename: "LocationDetail",
      address: string,
      unit?: string | null,
      city: string,
      state: string,
      zipCode: string,
      country: string,
      name?: string | null,
    } | null,
    logoUri: string,
    onlineReserved: number,
    onlineTotal: number,
    organizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        displayName: string,
        relationshipType: OrganizationRelationshipType,
        opportunityId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orgs?:  Array< {
      __typename: "Org",
      displayName: string,
      relationshipType: OrganizationRelationshipType,
    } | null > | null,
    registrationUrl: string,
    reward: number,
    rewardDetails: string,
    seatsReserved: number,
    seatsTotal: number,
    startDateTime: number,
    status: string,
    subtitle: string,
    tags: Array< string | null >,
    title: string,
    timezone: string,
    websitePrompt: string,
    websiteUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOpportunityMutationVariables = {
  input: DeleteOpportunityInput,
  condition?: ModelOpportunityConditionInput | null,
};

export type DeleteOpportunityMutation = {
  deleteOpportunity?:  {
    __typename: "Opportunity",
    id: string,
    categories: Array< string | null >,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    details: string,
    detailsTldr: string,
    endDateTime: number,
    eventType: string,
    heroPhotoUri: string,
    isPrivate: boolean,
    location?:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    locationDetail?:  {
      __typename: "LocationDetail",
      address: string,
      unit?: string | null,
      city: string,
      state: string,
      zipCode: string,
      country: string,
      name?: string | null,
    } | null,
    logoUri: string,
    onlineReserved: number,
    onlineTotal: number,
    organizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        displayName: string,
        relationshipType: OrganizationRelationshipType,
        opportunityId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orgs?:  Array< {
      __typename: "Org",
      displayName: string,
      relationshipType: OrganizationRelationshipType,
    } | null > | null,
    registrationUrl: string,
    reward: number,
    rewardDetails: string,
    seatsReserved: number,
    seatsTotal: number,
    startDateTime: number,
    status: string,
    subtitle: string,
    tags: Array< string | null >,
    title: string,
    timezone: string,
    websitePrompt: string,
    websiteUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrganizationMutationVariables = {
  input: CreateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type CreateOrganizationMutation = {
  createOrganization?:  {
    __typename: "Organization",
    id: string,
    displayName: string,
    relationshipType: OrganizationRelationshipType,
    opportunityId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrganizationMutationVariables = {
  input: UpdateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type UpdateOrganizationMutation = {
  updateOrganization?:  {
    __typename: "Organization",
    id: string,
    displayName: string,
    relationshipType: OrganizationRelationshipType,
    opportunityId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrganizationMutationVariables = {
  input: DeleteOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type DeleteOrganizationMutation = {
  deleteOrganization?:  {
    __typename: "Organization",
    id: string,
    displayName: string,
    relationshipType: OrganizationRelationshipType,
    opportunityId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePhoneChallengeMutationVariables = {
  input: CreatePhoneChallengeInput,
  condition?: ModelPhoneChallengeConditionInput | null,
};

export type CreatePhoneChallengeMutation = {
  createPhoneChallenge?:  {
    __typename: "PhoneChallenge",
    code: string,
    phoneNumber: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePhoneChallengeMutationVariables = {
  input: UpdatePhoneChallengeInput,
  condition?: ModelPhoneChallengeConditionInput | null,
};

export type UpdatePhoneChallengeMutation = {
  updatePhoneChallenge?:  {
    __typename: "PhoneChallenge",
    code: string,
    phoneNumber: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePhoneChallengeMutationVariables = {
  input: DeletePhoneChallengeInput,
  condition?: ModelPhoneChallengeConditionInput | null,
};

export type DeletePhoneChallengeMutation = {
  deletePhoneChallenge?:  {
    __typename: "PhoneChallenge",
    code: string,
    phoneNumber: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProposalMutationVariables = {
  input: CreateProposalInput,
  condition?: ModelProposalConditionInput | null,
};

export type CreateProposalMutation = {
  createProposal?:  {
    __typename: "Proposal",
    id: string,
    sessionId: string,
    proposalSession?:  {
      __typename: "ProposalSession",
      id: string,
      title?: string | null,
      startTime: string,
      endTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    track: ProposalTrackType,
    actionVerb: ProposalActionVerbType,
    statement: string,
    desiredGoal: string,
    votingCount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProposalMutationVariables = {
  input: UpdateProposalInput,
  condition?: ModelProposalConditionInput | null,
};

export type UpdateProposalMutation = {
  updateProposal?:  {
    __typename: "Proposal",
    id: string,
    sessionId: string,
    proposalSession?:  {
      __typename: "ProposalSession",
      id: string,
      title?: string | null,
      startTime: string,
      endTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    track: ProposalTrackType,
    actionVerb: ProposalActionVerbType,
    statement: string,
    desiredGoal: string,
    votingCount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProposalMutationVariables = {
  input: DeleteProposalInput,
  condition?: ModelProposalConditionInput | null,
};

export type DeleteProposalMutation = {
  deleteProposal?:  {
    __typename: "Proposal",
    id: string,
    sessionId: string,
    proposalSession?:  {
      __typename: "ProposalSession",
      id: string,
      title?: string | null,
      startTime: string,
      endTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    track: ProposalTrackType,
    actionVerb: ProposalActionVerbType,
    statement: string,
    desiredGoal: string,
    votingCount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProposalSessionMutationVariables = {
  input: CreateProposalSessionInput,
  condition?: ModelProposalSessionConditionInput | null,
};

export type CreateProposalSessionMutation = {
  createProposalSession?:  {
    __typename: "ProposalSession",
    id: string,
    title?: string | null,
    startTime: string,
    endTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProposalSessionMutationVariables = {
  input: UpdateProposalSessionInput,
  condition?: ModelProposalSessionConditionInput | null,
};

export type UpdateProposalSessionMutation = {
  updateProposalSession?:  {
    __typename: "ProposalSession",
    id: string,
    title?: string | null,
    startTime: string,
    endTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProposalSessionMutationVariables = {
  input: DeleteProposalSessionInput,
  condition?: ModelProposalSessionConditionInput | null,
};

export type DeleteProposalSessionMutation = {
  deleteProposalSession?:  {
    __typename: "ProposalSession",
    id: string,
    title?: string | null,
    startTime: string,
    endTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQRCodeMutationVariables = {
  input: CreateQRCodeInput,
  condition?: ModelQRCodeConditionInput | null,
};

export type CreateQRCodeMutation = {
  createQRCode?:  {
    __typename: "QRCode",
    learnId: string,
    learn?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    depositNum: number,
    wealthPointAmount?: number | null,
    rewardAmount?: number | null,
    itemName?: string | null,
    eventName?: string | null,
    limitCount: number,
    usedCount?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQRCodeMutationVariables = {
  input: UpdateQRCodeInput,
  condition?: ModelQRCodeConditionInput | null,
};

export type UpdateQRCodeMutation = {
  updateQRCode?:  {
    __typename: "QRCode",
    learnId: string,
    learn?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    depositNum: number,
    wealthPointAmount?: number | null,
    rewardAmount?: number | null,
    itemName?: string | null,
    eventName?: string | null,
    limitCount: number,
    usedCount?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQRCodeMutationVariables = {
  input: DeleteQRCodeInput,
  condition?: ModelQRCodeConditionInput | null,
};

export type DeleteQRCodeMutation = {
  deleteQRCode?:  {
    __typename: "QRCode",
    learnId: string,
    learn?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    depositNum: number,
    wealthPointAmount?: number | null,
    rewardAmount?: number | null,
    itemName?: string | null,
    eventName?: string | null,
    limitCount: number,
    usedCount?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateResourceMutationVariables = {
  input: CreateResourceInput,
  condition?: ModelResourceConditionInput | null,
};

export type CreateResourceMutation = {
  createResource?:  {
    __typename: "Resource",
    title: string,
    heroImageUri: string,
    link: string,
    learnItem?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    learnResourcesId?: string | null,
  } | null,
};

export type UpdateResourceMutationVariables = {
  input: UpdateResourceInput,
  condition?: ModelResourceConditionInput | null,
};

export type UpdateResourceMutation = {
  updateResource?:  {
    __typename: "Resource",
    title: string,
    heroImageUri: string,
    link: string,
    learnItem?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    learnResourcesId?: string | null,
  } | null,
};

export type DeleteResourceMutationVariables = {
  input: DeleteResourceInput,
  condition?: ModelResourceConditionInput | null,
};

export type DeleteResourceMutation = {
  deleteResource?:  {
    __typename: "Resource",
    title: string,
    heroImageUri: string,
    link: string,
    learnItem?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    learnResourcesId?: string | null,
  } | null,
};

export type CreateRewardMutationVariables = {
  input: CreateRewardInput,
  condition?: ModelRewardConditionInput | null,
};

export type CreateRewardMutation = {
  createReward?:  {
    __typename: "Reward",
    id: string,
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    wealthAmount: number,
    logoUri?: string | null,
    description?: string | null,
    heroPhotoUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRewardMutationVariables = {
  input: UpdateRewardInput,
  condition?: ModelRewardConditionInput | null,
};

export type UpdateRewardMutation = {
  updateReward?:  {
    __typename: "Reward",
    id: string,
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    wealthAmount: number,
    logoUri?: string | null,
    description?: string | null,
    heroPhotoUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRewardMutationVariables = {
  input: DeleteRewardInput,
  condition?: ModelRewardConditionInput | null,
};

export type DeleteRewardMutation = {
  deleteReward?:  {
    __typename: "Reward",
    id: string,
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    wealthAmount: number,
    logoUri?: string | null,
    description?: string | null,
    heroPhotoUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRewardStatusMutationVariables = {
  input: CreateRewardStatusInput,
  condition?: ModelRewardStatusConditionInput | null,
};

export type CreateRewardStatusMutation = {
  createRewardStatus?:  {
    __typename: "RewardStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rewardItemId: string,
    reward?:  {
      __typename: "Reward",
      id: string,
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      title: string,
      wealthAmount: number,
      logoUri?: string | null,
      description?: string | null,
      heroPhotoUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    redeemed: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRewardStatusMutationVariables = {
  input: UpdateRewardStatusInput,
  condition?: ModelRewardStatusConditionInput | null,
};

export type UpdateRewardStatusMutation = {
  updateRewardStatus?:  {
    __typename: "RewardStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rewardItemId: string,
    reward?:  {
      __typename: "Reward",
      id: string,
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      title: string,
      wealthAmount: number,
      logoUri?: string | null,
      description?: string | null,
      heroPhotoUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    redeemed: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRewardStatusMutationVariables = {
  input: DeleteRewardStatusInput,
  condition?: ModelRewardStatusConditionInput | null,
};

export type DeleteRewardStatusMutation = {
  deleteRewardStatus?:  {
    __typename: "RewardStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rewardItemId: string,
    reward?:  {
      __typename: "Reward",
      id: string,
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      title: string,
      wealthAmount: number,
      logoUri?: string | null,
      description?: string | null,
      heroPhotoUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    redeemed: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateVotedUserMutationVariables = {
  input: CreateVotedUserInput,
  condition?: ModelVotedUserConditionInput | null,
};

export type CreateVotedUserMutation = {
  createVotedUser?:  {
    __typename: "VotedUser",
    id: string,
    sessionId: string,
    votingSession?:  {
      __typename: "VotingSession",
      id: string,
      title?: string | null,
      startTime: string,
      endTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVotedUserMutationVariables = {
  input: UpdateVotedUserInput,
  condition?: ModelVotedUserConditionInput | null,
};

export type UpdateVotedUserMutation = {
  updateVotedUser?:  {
    __typename: "VotedUser",
    id: string,
    sessionId: string,
    votingSession?:  {
      __typename: "VotingSession",
      id: string,
      title?: string | null,
      startTime: string,
      endTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVotedUserMutationVariables = {
  input: DeleteVotedUserInput,
  condition?: ModelVotedUserConditionInput | null,
};

export type DeleteVotedUserMutation = {
  deleteVotedUser?:  {
    __typename: "VotedUser",
    id: string,
    sessionId: string,
    votingSession?:  {
      __typename: "VotingSession",
      id: string,
      title?: string | null,
      startTime: string,
      endTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateVotingSessionMutationVariables = {
  input: CreateVotingSessionInput,
  condition?: ModelVotingSessionConditionInput | null,
};

export type CreateVotingSessionMutation = {
  createVotingSession?:  {
    __typename: "VotingSession",
    id: string,
    title?: string | null,
    startTime: string,
    endTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVotingSessionMutationVariables = {
  input: UpdateVotingSessionInput,
  condition?: ModelVotingSessionConditionInput | null,
};

export type UpdateVotingSessionMutation = {
  updateVotingSession?:  {
    __typename: "VotingSession",
    id: string,
    title?: string | null,
    startTime: string,
    endTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVotingSessionMutationVariables = {
  input: DeleteVotingSessionInput,
  condition?: ModelVotingSessionConditionInput | null,
};

export type DeleteVotingSessionMutation = {
  deleteVotingSession?:  {
    __typename: "VotingSession",
    id: string,
    title?: string | null,
    startTime: string,
    endTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlaidAccountsQueryVariables = {
  athleteId: string,
};

export type ListPlaidAccountsQuery = {
  listPlaidAccounts?:  Array< {
    __typename: "PlaidAccountDetail",
    account_id?: string | null,
    balances?:  {
      __typename: "Balance",
      available?: number | null,
      current?: string | null,
      iso_currency_code?: string | null,
      limit?: string | null,
      unofficial_currency_code?: string | null,
    } | null,
    mask?: string | null,
    name?: string | null,
    official_name?: string | null,
    subtype?: string | null,
    type?: string | null,
  } | null > | null,
};

export type ListAthletUnitAccountsQueryVariables = {
  athleteId: string,
};

export type ListAthletUnitAccountsQuery = {
  listAthletUnitAccounts?:  Array< {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      hold?: number | null,
      available?: number | null,
    } | null,
  } | null > | null,
};

export type GetAthleteUnitAccountByIdQueryVariables = {
  athleteId: string,
  unitAccountId: string,
};

export type GetAthleteUnitAccountByIdQuery = {
  getAthleteUnitAccountById?:  {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      hold?: number | null,
      available?: number | null,
    } | null,
  } | null,
};

export type GetUnitTransactionByIdQueryVariables = {
  athleteId: string,
  unitTransactionId: string,
};

export type GetUnitTransactionByIdQuery = {
  getUnitTransactionById?:  {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      hold?: number | null,
      available?: number | null,
    } | null,
  } | null,
};

export type ListAllUnitTransactionsQueryVariables = {
  athleteId: string,
};

export type ListAllUnitTransactionsQuery = {
  listAllUnitTransactions?:  Array< {
    __typename: "UnitAccount",
    type?: string | null,
    id?: string | null,
    attributes?:  {
      __typename: "Attributes",
      createdAt?: string | null,
      direction?: string | null,
      amount?: number | null,
      balance?: number | null,
      summary?: string | null,
      description?: string | null,
      counterparty?:  {
        __typename: "Counterparty",
        name?: string | null,
        routingNumber?: string | null,
        accountNumber?: string | null,
        accountType?: string | null,
      } | null,
      name?: string | null,
      status?: string | null,
      routingNumber?: string | null,
      accountNumber?: string | null,
      currency?: string | null,
      hold?: number | null,
      available?: number | null,
    } | null,
  } | null > | null,
};

export type NearbyOpportunitiesQueryVariables = {
  location: LocationInput,
  distInMeters?: number | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NearbyOpportunitiesQuery = {
  nearbyOpportunities?:  {
    __typename: "ModelOpportunityConnection",
    items?:  Array< {
      __typename: "Opportunity",
      id: string,
      categories: Array< string | null >,
      creatorId: string,
      creator:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      details: string,
      detailsTldr: string,
      endDateTime: number,
      eventType: string,
      heroPhotoUri: string,
      isPrivate: boolean,
      location?:  {
        __typename: "Location",
        lat: number,
        lon: number,
      } | null,
      locationDetail?:  {
        __typename: "LocationDetail",
        address: string,
        unit?: string | null,
        city: string,
        state: string,
        zipCode: string,
        country: string,
        name?: string | null,
      } | null,
      logoUri: string,
      onlineReserved: number,
      onlineTotal: number,
      organizations?:  {
        __typename: "ModelOrganizationConnection",
        nextToken?: string | null,
      } | null,
      orgs?:  Array< {
        __typename: "Org",
        displayName: string,
        relationshipType: OrganizationRelationshipType,
      } | null > | null,
      registrationUrl: string,
      reward: number,
      rewardDetails: string,
      seatsReserved: number,
      seatsTotal: number,
      startDateTime: number,
      status: string,
      subtitle: string,
      tags: Array< string | null >,
      title: string,
      timezone: string,
      websitePrompt: string,
      websiteUrl: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    total?: number | null,
    nextToken?: string | null,
  } | null,
};

export type GetAthletesCountQuery = {
  getAthletesCount?: number | null,
};

export type SearchAppUsageLogsQueryVariables = {
  filter?: SearchableAppUsageLogFilterInput | null,
  sort?: Array< SearchableAppUsageLogSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableAppUsageLogAggregationInput | null > | null,
};

export type SearchAppUsageLogsQuery = {
  searchAppUsageLogs?:  {
    __typename: "SearchableAppUsageLogConnection",
    items:  Array< {
      __typename: "AppUsageLog",
      dateString: string,
      athletesCount?: number | null,
      sessionsCount?: number | null,
      rsvpedEventsCount?: number | null,
      totalMinutesInApp?: number | null,
      completedModulesCount?: number | null,
      totalTrueChoiceCount?: number | null,
      totalFalseChoiceCount?: number | null,
      totalAskedQuestionsCount?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchAthleteActivitiesQueryVariables = {
  filter?: SearchableAthleteActivityFilterInput | null,
  sort?: Array< SearchableAthleteActivitySortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableAthleteActivityAggregationInput | null > | null,
};

export type SearchAthleteActivitiesQuery = {
  searchAthleteActivities?:  {
    __typename: "SearchableAthleteActivityConnection",
    items:  Array< {
      __typename: "AthleteActivity",
      wealthBalance?: number | null,
      allWagered?: number | null,
      loginCount?: number | null,
      activePeriodInMinutes?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchEventsQueryVariables = {
  filter?: SearchableEventFilterInput | null,
  sort?: Array< SearchableEventSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableEventAggregationInput | null > | null,
};

export type SearchEventsQuery = {
  searchEvents?:  {
    __typename: "SearchableEventConnection",
    items:  Array< {
      __typename: "Event",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      sponsor: string,
      title: string,
      category: string,
      heroPhotoUri: string,
      logoUri: string,
      tagline: string,
      description: string,
      dateTime: number,
      location: string,
      reward: number,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchEventStatusesQueryVariables = {
  filter?: SearchableEventStatusFilterInput | null,
  sort?: Array< SearchableEventStatusSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableEventStatusAggregationInput | null > | null,
};

export type SearchEventStatusesQuery = {
  searchEventStatuses?:  {
    __typename: "SearchableEventStatusConnection",
    items:  Array< {
      __typename: "EventStatus",
      athleteId: string,
      athlete?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      eventItemId: string,
      event?:  {
        __typename: "Event",
        creatorId: string,
        sponsor: string,
        title: string,
        category: string,
        heroPhotoUri: string,
        logoUri: string,
        tagline: string,
        description: string,
        dateTime: number,
        location: string,
        reward: number,
        createdAt: string,
        updatedAt: string,
        id: string,
      } | null,
      registered: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchLearnsQueryVariables = {
  filter?: SearchableLearnFilterInput | null,
  sort?: Array< SearchableLearnSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableLearnAggregationInput | null > | null,
};

export type SearchLearnsQuery = {
  searchLearns?:  {
    __typename: "SearchableLearnConnection",
    items:  Array< {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchLearnExercisesQueryVariables = {
  filter?: SearchableLearnExerciseFilterInput | null,
  sort?: Array< SearchableLearnExerciseSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableLearnExerciseAggregationInput | null > | null,
};

export type SearchLearnExercisesQuery = {
  searchLearnExercises?:  {
    __typename: "SearchableLearnExerciseConnection",
    items:  Array< {
      __typename: "LearnExercise",
      bgImageUri: string,
      title: string,
      description?: string | null,
      level: ExerciseLevel,
      reward: number,
      sponsor: string,
      problem: string,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchLearnStatusesQueryVariables = {
  filter?: SearchableLearnStatusFilterInput | null,
  sort?: Array< SearchableLearnStatusSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableLearnStatusAggregationInput | null > | null,
};

export type SearchLearnStatusesQuery = {
  searchLearnStatuses?:  {
    __typename: "SearchableLearnStatusConnection",
    items:  Array< {
      __typename: "LearnStatus",
      athleteId: string,
      athlete?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      learnItemId: string,
      learn?:  {
        __typename: "Learn",
        creatorId: string,
        bgImageUri?: string | null,
        sponsor: string,
        title: string,
        description?: string | null,
        level: LearnLevel,
        reward: number,
        createdAt: string,
        updatedAt: string,
        id: string,
      } | null,
      passedDepositsCount?: number | null,
      wagered?: number | null,
      isWagered?: boolean | null,
      test?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchOpportunitiesQueryVariables = {
  filter?: SearchableOpportunityFilterInput | null,
  sort?: Array< SearchableOpportunitySortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableOpportunityAggregationInput | null > | null,
};

export type SearchOpportunitiesQuery = {
  searchOpportunities?:  {
    __typename: "SearchableOpportunityConnection",
    items:  Array< {
      __typename: "Opportunity",
      id: string,
      categories: Array< string | null >,
      creatorId: string,
      creator:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      details: string,
      detailsTldr: string,
      endDateTime: number,
      eventType: string,
      heroPhotoUri: string,
      isPrivate: boolean,
      location?:  {
        __typename: "Location",
        lat: number,
        lon: number,
      } | null,
      locationDetail?:  {
        __typename: "LocationDetail",
        address: string,
        unit?: string | null,
        city: string,
        state: string,
        zipCode: string,
        country: string,
        name?: string | null,
      } | null,
      logoUri: string,
      onlineReserved: number,
      onlineTotal: number,
      organizations?:  {
        __typename: "ModelOrganizationConnection",
        nextToken?: string | null,
      } | null,
      orgs?:  Array< {
        __typename: "Org",
        displayName: string,
        relationshipType: OrganizationRelationshipType,
      } | null > | null,
      registrationUrl: string,
      reward: number,
      rewardDetails: string,
      seatsReserved: number,
      seatsTotal: number,
      startDateTime: number,
      status: string,
      subtitle: string,
      tags: Array< string | null >,
      title: string,
      timezone: string,
      websitePrompt: string,
      websiteUrl: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchProposalsQueryVariables = {
  filter?: SearchableProposalFilterInput | null,
  sort?: Array< SearchableProposalSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableProposalAggregationInput | null > | null,
};

export type SearchProposalsQuery = {
  searchProposals?:  {
    __typename: "SearchableProposalConnection",
    items:  Array< {
      __typename: "Proposal",
      id: string,
      sessionId: string,
      proposalSession?:  {
        __typename: "ProposalSession",
        id: string,
        title?: string | null,
        startTime: string,
        endTime: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      track: ProposalTrackType,
      actionVerb: ProposalActionVerbType,
      statement: string,
      desiredGoal: string,
      votingCount?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchProposalSessionsQueryVariables = {
  filter?: SearchableProposalSessionFilterInput | null,
  sort?: Array< SearchableProposalSessionSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableProposalSessionAggregationInput | null > | null,
};

export type SearchProposalSessionsQuery = {
  searchProposalSessions?:  {
    __typename: "SearchableProposalSessionConnection",
    items:  Array< {
      __typename: "ProposalSession",
      id: string,
      title?: string | null,
      startTime: string,
      endTime: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchQRCodesQueryVariables = {
  filter?: SearchableQRCodeFilterInput | null,
  sort?: Array< SearchableQRCodeSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableQRCodeAggregationInput | null > | null,
};

export type SearchQRCodesQuery = {
  searchQRCodes?:  {
    __typename: "SearchableQRCodeConnection",
    items:  Array< {
      __typename: "QRCode",
      learnId: string,
      learn?:  {
        __typename: "Learn",
        creatorId: string,
        bgImageUri?: string | null,
        sponsor: string,
        title: string,
        description?: string | null,
        level: LearnLevel,
        reward: number,
        createdAt: string,
        updatedAt: string,
        id: string,
      } | null,
      depositNum: number,
      wealthPointAmount?: number | null,
      rewardAmount?: number | null,
      itemName?: string | null,
      eventName?: string | null,
      limitCount: number,
      usedCount?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchResourcesQueryVariables = {
  filter?: SearchableResourceFilterInput | null,
  sort?: Array< SearchableResourceSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableResourceAggregationInput | null > | null,
};

export type SearchResourcesQuery = {
  searchResources?:  {
    __typename: "SearchableResourceConnection",
    items:  Array< {
      __typename: "Resource",
      title: string,
      heroImageUri: string,
      link: string,
      learnItem?:  {
        __typename: "Learn",
        creatorId: string,
        bgImageUri?: string | null,
        sponsor: string,
        title: string,
        description?: string | null,
        level: LearnLevel,
        reward: number,
        createdAt: string,
        updatedAt: string,
        id: string,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      learnResourcesId?: string | null,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchRewardsQueryVariables = {
  filter?: SearchableRewardFilterInput | null,
  sort?: Array< SearchableRewardSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableRewardAggregationInput | null > | null,
};

export type SearchRewardsQuery = {
  searchRewards?:  {
    __typename: "SearchableRewardConnection",
    items:  Array< {
      __typename: "Reward",
      id: string,
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      title: string,
      wealthAmount: number,
      logoUri?: string | null,
      description?: string | null,
      heroPhotoUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchRewardStatusesQueryVariables = {
  filter?: SearchableRewardStatusFilterInput | null,
  sort?: Array< SearchableRewardStatusSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableRewardStatusAggregationInput | null > | null,
};

export type SearchRewardStatusesQuery = {
  searchRewardStatuses?:  {
    __typename: "SearchableRewardStatusConnection",
    items:  Array< {
      __typename: "RewardStatus",
      athleteId: string,
      athlete?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rewardItemId: string,
      reward?:  {
        __typename: "Reward",
        id: string,
        creatorId: string,
        title: string,
        wealthAmount: number,
        logoUri?: string | null,
        description?: string | null,
        heroPhotoUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      redeemed: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchVotedUsersQueryVariables = {
  filter?: SearchableVotedUserFilterInput | null,
  sort?: Array< SearchableVotedUserSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableVotedUserAggregationInput | null > | null,
};

export type SearchVotedUsersQuery = {
  searchVotedUsers?:  {
    __typename: "SearchableVotedUserConnection",
    items:  Array< {
      __typename: "VotedUser",
      id: string,
      sessionId: string,
      votingSession?:  {
        __typename: "VotingSession",
        id: string,
        title?: string | null,
        startTime: string,
        endTime: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type SearchVotingSessionsQueryVariables = {
  filter?: SearchableVotingSessionFilterInput | null,
  sort?: Array< SearchableVotingSessionSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableVotingSessionAggregationInput | null > | null,
};

export type SearchVotingSessionsQuery = {
  searchVotingSessions?:  {
    __typename: "SearchableVotingSessionConnection",
    items:  Array< {
      __typename: "VotingSession",
      id: string,
      title?: string | null,
      startTime: string,
      endTime: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetAppUsageLogQueryVariables = {
  dateString: string,
};

export type GetAppUsageLogQuery = {
  getAppUsageLog?:  {
    __typename: "AppUsageLog",
    dateString: string,
    athletesCount?: number | null,
    sessionsCount?: number | null,
    rsvpedEventsCount?: number | null,
    totalMinutesInApp?: number | null,
    completedModulesCount?: number | null,
    totalTrueChoiceCount?: number | null,
    totalFalseChoiceCount?: number | null,
    totalAskedQuestionsCount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAppUsageLogsQueryVariables = {
  dateString?: string | null,
  filter?: ModelAppUsageLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAppUsageLogsQuery = {
  listAppUsageLogs?:  {
    __typename: "ModelAppUsageLogConnection",
    items:  Array< {
      __typename: "AppUsageLog",
      dateString: string,
      athletesCount?: number | null,
      sessionsCount?: number | null,
      rsvpedEventsCount?: number | null,
      totalMinutesInApp?: number | null,
      completedModulesCount?: number | null,
      totalTrueChoiceCount?: number | null,
      totalFalseChoiceCount?: number | null,
      totalAskedQuestionsCount?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAthleteQueryVariables = {
  id: string,
};

export type GetAthleteQuery = {
  getAthlete?:  {
    __typename: "Athlete",
    id: string,
    firstName: string,
    lastName: string,
    mobilePhone: string,
    athleteTag?: string | null,
    bio?: string | null,
    profilePhotoUri?: string | null,
    heroPhotoUri?: string | null,
    email: string,
    level?: AthleteLevel | null,
    sport?:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    team?:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    address?:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    } | null,
    dateOfBirth?: string | null,
    accounts?:  {
      __typename: "ModelAthleteAccountConnection",
      items:  Array< {
        __typename: "AthleteAccount",
        unitAccountId: string,
        routingCode: string,
        accountNumber: string,
        podName: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteAccountsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    plaidToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreId?: string | null,
    isActive: boolean,
    handle?: string | null,
    rewardedQrCodes?:  Array< {
      __typename: "QrCodes",
      id?: string | null,
      itemOrEventName?: string | null,
    } | null > | null,
    activity?:  {
      __typename: "AthleteActivity",
      wealthBalance?: number | null,
      allWagered?: number | null,
      loginCount?: number | null,
      activePeriodInMinutes?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAthletesQueryVariables = {
  filter?: ModelAthleteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAthletesQuery = {
  listAthletes?:  {
    __typename: "ModelAthleteConnection",
    items:  Array< {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAthleteAccountQueryVariables = {
  id: string,
};

export type GetAthleteAccountQuery = {
  getAthleteAccount?:  {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
  } | null,
};

export type ListAthleteAccountsQueryVariables = {
  filter?: ModelAthleteAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAthleteAccountsQuery = {
  listAthleteAccounts?:  {
    __typename: "ModelAthleteAccountConnection",
    items:  Array< {
      __typename: "AthleteAccount",
      athlete:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      unitAccountId: string,
      routingCode: string,
      accountNumber: string,
      podName: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      athleteAccountsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRecentTransactionQueryVariables = {
  id: string,
};

export type GetRecentTransactionQuery = {
  getRecentTransaction?:  {
    __typename: "RecentTransaction",
    transactionId: string,
    athleteId?: string | null,
    status?: string | null,
    amount?: number | null,
    direction?: string | null,
    createdAt?: string | null,
    read?: boolean | null,
    settled?: string | null,
    podAllocation?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type ListRecentTransactionsQueryVariables = {
  filter?: ModelRecentTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecentTransactionsQuery = {
  listRecentTransactions?:  {
    __typename: "ModelRecentTransactionConnection",
    items:  Array< {
      __typename: "RecentTransaction",
      transactionId: string,
      athleteId?: string | null,
      status?: string | null,
      amount?: number | null,
      direction?: string | null,
      createdAt?: string | null,
      read?: boolean | null,
      settled?: string | null,
      podAllocation?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAthleteActivityQueryVariables = {
  id: string,
};

export type GetAthleteActivityQuery = {
  getAthleteActivity?:  {
    __typename: "AthleteActivity",
    wealthBalance?: number | null,
    allWagered?: number | null,
    loginCount?: number | null,
    activePeriodInMinutes?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAthleteActivitiesQueryVariables = {
  filter?: ModelAthleteActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAthleteActivitiesQuery = {
  listAthleteActivities?:  {
    __typename: "ModelAthleteActivityConnection",
    items:  Array< {
      __typename: "AthleteActivity",
      wealthBalance?: number | null,
      allWagered?: number | null,
      loginCount?: number | null,
      activePeriodInMinutes?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEmailChallengeQueryVariables = {
  code: string,
  email: string,
};

export type GetEmailChallengeQuery = {
  getEmailChallenge?:  {
    __typename: "EmailChallenge",
    code: string,
    email: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEmailChallengesQueryVariables = {
  code?: string | null,
  email?: ModelStringKeyConditionInput | null,
  filter?: ModelEmailChallengeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListEmailChallengesQuery = {
  listEmailChallenges?:  {
    __typename: "ModelEmailChallengeConnection",
    items:  Array< {
      __typename: "EmailChallenge",
      code: string,
      email: string,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsor: string,
    title: string,
    category: string,
    heroPhotoUri: string,
    logoUri: string,
    tagline: string,
    description: string,
    dateTime: number,
    location: string,
    reward: number,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      sponsor: string,
      title: string,
      category: string,
      heroPhotoUri: string,
      logoUri: string,
      tagline: string,
      description: string,
      dateTime: number,
      location: string,
      reward: number,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventStatusQueryVariables = {
  id: string,
};

export type GetEventStatusQuery = {
  getEventStatus?:  {
    __typename: "EventStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventItemId: string,
    event?:  {
      __typename: "Event",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      sponsor: string,
      title: string,
      category: string,
      heroPhotoUri: string,
      logoUri: string,
      tagline: string,
      description: string,
      dateTime: number,
      location: string,
      reward: number,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    registered: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventStatusesQueryVariables = {
  filter?: ModelEventStatusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventStatusesQuery = {
  listEventStatuses?:  {
    __typename: "ModelEventStatusConnection",
    items:  Array< {
      __typename: "EventStatus",
      athleteId: string,
      athlete?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      eventItemId: string,
      event?:  {
        __typename: "Event",
        creatorId: string,
        sponsor: string,
        title: string,
        category: string,
        heroPhotoUri: string,
        logoUri: string,
        tagline: string,
        description: string,
        dateTime: number,
        location: string,
        reward: number,
        createdAt: string,
        updatedAt: string,
        id: string,
      } | null,
      registered: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetExerciseListQueryVariables = {
  id: string,
};

export type GetExerciseListQuery = {
  getExerciseList?:  {
    __typename: "ExerciseList",
    id: string,
    exerciseId: string,
    exercise?:  {
      __typename: "LearnExercise",
      bgImageUri: string,
      title: string,
      description?: string | null,
      level: ExerciseLevel,
      reward: number,
      sponsor: string,
      problem: string,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    studentEmail?: string | null,
    answer?: string | null,
    approveDecline?: boolean | null,
    isChecked?: boolean | null,
    isShowed?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListExerciseListsQueryVariables = {
  filter?: ModelExerciseListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExerciseListsQuery = {
  listExerciseLists?:  {
    __typename: "ModelExerciseListConnection",
    items:  Array< {
      __typename: "ExerciseList",
      id: string,
      exerciseId: string,
      exercise?:  {
        __typename: "LearnExercise",
        bgImageUri: string,
        title: string,
        description?: string | null,
        level: ExerciseLevel,
        reward: number,
        sponsor: string,
        problem: string,
        createdAt: string,
        updatedAt: string,
        id: string,
      } | null,
      studentEmail?: string | null,
      answer?: string | null,
      approveDecline?: boolean | null,
      isChecked?: boolean | null,
      isShowed?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInviteQueryVariables = {
  code: string,
  status: Status,
};

export type GetInviteQuery = {
  getInvite?:  {
    __typename: "Invite",
    code: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInvitesQueryVariables = {
  code?: string | null,
  status?: ModelStringKeyConditionInput | null,
  filter?: ModelInviteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListInvitesQuery = {
  listInvites?:  {
    __typename: "ModelInviteConnection",
    items:  Array< {
      __typename: "Invite",
      code: string,
      status: Status,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLearnQueryVariables = {
  id: string,
};

export type GetLearnQuery = {
  getLearn?:  {
    __typename: "Learn",
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    bgImageUri?: string | null,
    sponsor: string,
    title: string,
    description?: string | null,
    level: LearnLevel,
    reward: number,
    deposits:  Array< {
      __typename: "Deposit",
      videoUri: string,
      videoDuration?: number | null,
      title: string,
      questions:  Array< {
        __typename: "Quiz",
        questionText: string,
        answers: Array< string >,
        correctAnswer: string,
      } >,
    } >,
    qaItems?:  Array< {
      __typename: "QAItem",
      questionItem:  {
        __typename: "QuestionItem",
        question: string,
        authorId: string,
        authorName?: string | null,
        createdAt?: string | null,
      },
      answerItems:  Array< {
        __typename: "AnswerItem",
        answer: string,
        authorEmail?: string | null,
        authorName?: string | null,
        authorTitle?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } >,
    } > | null,
    socialHandles?:  {
      __typename: "SocialHandles",
      discord?: string | null,
      instagram?: string | null,
      telegram?: string | null,
      tiktok?: string | null,
      twitter?: string | null,
      youtube?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        title: string,
        heroImageUri: string,
        link: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        learnResourcesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type ListLearnsQueryVariables = {
  filter?: ModelLearnFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLearnsQuery = {
  listLearns?:  {
    __typename: "ModelLearnConnection",
    items:  Array< {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLearnExerciseQueryVariables = {
  id: string,
};

export type GetLearnExerciseQuery = {
  getLearnExercise?:  {
    __typename: "LearnExercise",
    bgImageUri: string,
    title: string,
    description?: string | null,
    level: ExerciseLevel,
    reward: number,
    sponsor: string,
    problem: string,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type ListLearnExercisesQueryVariables = {
  filter?: ModelLearnExerciseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLearnExercisesQuery = {
  listLearnExercises?:  {
    __typename: "ModelLearnExerciseConnection",
    items:  Array< {
      __typename: "LearnExercise",
      bgImageUri: string,
      title: string,
      description?: string | null,
      level: ExerciseLevel,
      reward: number,
      sponsor: string,
      problem: string,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLearnStatusQueryVariables = {
  id: string,
};

export type GetLearnStatusQuery = {
  getLearnStatus?:  {
    __typename: "LearnStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    learnItemId: string,
    learn?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    passedDepositsCount?: number | null,
    wagered?: number | null,
    isWagered?: boolean | null,
    test?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLearnStatusesQueryVariables = {
  filter?: ModelLearnStatusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLearnStatusesQuery = {
  listLearnStatuses?:  {
    __typename: "ModelLearnStatusConnection",
    items:  Array< {
      __typename: "LearnStatus",
      athleteId: string,
      athlete?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      learnItemId: string,
      learn?:  {
        __typename: "Learn",
        creatorId: string,
        bgImageUri?: string | null,
        sponsor: string,
        title: string,
        description?: string | null,
        level: LearnLevel,
        reward: number,
        createdAt: string,
        updatedAt: string,
        id: string,
      } | null,
      passedDepositsCount?: number | null,
      wagered?: number | null,
      isWagered?: boolean | null,
      test?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOpportunityQueryVariables = {
  id: string,
};

export type GetOpportunityQuery = {
  getOpportunity?:  {
    __typename: "Opportunity",
    id: string,
    categories: Array< string | null >,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    details: string,
    detailsTldr: string,
    endDateTime: number,
    eventType: string,
    heroPhotoUri: string,
    isPrivate: boolean,
    location?:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    locationDetail?:  {
      __typename: "LocationDetail",
      address: string,
      unit?: string | null,
      city: string,
      state: string,
      zipCode: string,
      country: string,
      name?: string | null,
    } | null,
    logoUri: string,
    onlineReserved: number,
    onlineTotal: number,
    organizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        displayName: string,
        relationshipType: OrganizationRelationshipType,
        opportunityId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orgs?:  Array< {
      __typename: "Org",
      displayName: string,
      relationshipType: OrganizationRelationshipType,
    } | null > | null,
    registrationUrl: string,
    reward: number,
    rewardDetails: string,
    seatsReserved: number,
    seatsTotal: number,
    startDateTime: number,
    status: string,
    subtitle: string,
    tags: Array< string | null >,
    title: string,
    timezone: string,
    websitePrompt: string,
    websiteUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOpportunitiesQueryVariables = {
  filter?: ModelOpportunityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOpportunitiesQuery = {
  listOpportunities?:  {
    __typename: "ModelOpportunityConnection",
    items?:  Array< {
      __typename: "Opportunity",
      id: string,
      categories: Array< string | null >,
      creatorId: string,
      creator:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      details: string,
      detailsTldr: string,
      endDateTime: number,
      eventType: string,
      heroPhotoUri: string,
      isPrivate: boolean,
      location?:  {
        __typename: "Location",
        lat: number,
        lon: number,
      } | null,
      locationDetail?:  {
        __typename: "LocationDetail",
        address: string,
        unit?: string | null,
        city: string,
        state: string,
        zipCode: string,
        country: string,
        name?: string | null,
      } | null,
      logoUri: string,
      onlineReserved: number,
      onlineTotal: number,
      organizations?:  {
        __typename: "ModelOrganizationConnection",
        nextToken?: string | null,
      } | null,
      orgs?:  Array< {
        __typename: "Org",
        displayName: string,
        relationshipType: OrganizationRelationshipType,
      } | null > | null,
      registrationUrl: string,
      reward: number,
      rewardDetails: string,
      seatsReserved: number,
      seatsTotal: number,
      startDateTime: number,
      status: string,
      subtitle: string,
      tags: Array< string | null >,
      title: string,
      timezone: string,
      websitePrompt: string,
      websiteUrl: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    total?: number | null,
    nextToken?: string | null,
  } | null,
};

export type GetOrganizationQueryVariables = {
  id: string,
};

export type GetOrganizationQuery = {
  getOrganization?:  {
    __typename: "Organization",
    id: string,
    displayName: string,
    relationshipType: OrganizationRelationshipType,
    opportunityId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationsQuery = {
  listOrganizations?:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      id: string,
      displayName: string,
      relationshipType: OrganizationRelationshipType,
      opportunityId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPhoneChallengeQueryVariables = {
  code: string,
  phoneNumber: string,
};

export type GetPhoneChallengeQuery = {
  getPhoneChallenge?:  {
    __typename: "PhoneChallenge",
    code: string,
    phoneNumber: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPhoneChallengesQueryVariables = {
  code?: string | null,
  phoneNumber?: ModelStringKeyConditionInput | null,
  filter?: ModelPhoneChallengeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPhoneChallengesQuery = {
  listPhoneChallenges?:  {
    __typename: "ModelPhoneChallengeConnection",
    items:  Array< {
      __typename: "PhoneChallenge",
      code: string,
      phoneNumber: string,
      verified: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProposalQueryVariables = {
  id: string,
};

export type GetProposalQuery = {
  getProposal?:  {
    __typename: "Proposal",
    id: string,
    sessionId: string,
    proposalSession?:  {
      __typename: "ProposalSession",
      id: string,
      title?: string | null,
      startTime: string,
      endTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    track: ProposalTrackType,
    actionVerb: ProposalActionVerbType,
    statement: string,
    desiredGoal: string,
    votingCount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProposalsQueryVariables = {
  filter?: ModelProposalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProposalsQuery = {
  listProposals?:  {
    __typename: "ModelProposalConnection",
    items:  Array< {
      __typename: "Proposal",
      id: string,
      sessionId: string,
      proposalSession?:  {
        __typename: "ProposalSession",
        id: string,
        title?: string | null,
        startTime: string,
        endTime: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      track: ProposalTrackType,
      actionVerb: ProposalActionVerbType,
      statement: string,
      desiredGoal: string,
      votingCount?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProposalSessionQueryVariables = {
  id: string,
};

export type GetProposalSessionQuery = {
  getProposalSession?:  {
    __typename: "ProposalSession",
    id: string,
    title?: string | null,
    startTime: string,
    endTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProposalSessionsQueryVariables = {
  filter?: ModelProposalSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProposalSessionsQuery = {
  listProposalSessions?:  {
    __typename: "ModelProposalSessionConnection",
    items:  Array< {
      __typename: "ProposalSession",
      id: string,
      title?: string | null,
      startTime: string,
      endTime: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQRCodeQueryVariables = {
  id: string,
};

export type GetQRCodeQuery = {
  getQRCode?:  {
    __typename: "QRCode",
    learnId: string,
    learn?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    depositNum: number,
    wealthPointAmount?: number | null,
    rewardAmount?: number | null,
    itemName?: string | null,
    eventName?: string | null,
    limitCount: number,
    usedCount?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQRCodesQueryVariables = {
  filter?: ModelQRCodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQRCodesQuery = {
  listQRCodes?:  {
    __typename: "ModelQRCodeConnection",
    items:  Array< {
      __typename: "QRCode",
      learnId: string,
      learn?:  {
        __typename: "Learn",
        creatorId: string,
        bgImageUri?: string | null,
        sponsor: string,
        title: string,
        description?: string | null,
        level: LearnLevel,
        reward: number,
        createdAt: string,
        updatedAt: string,
        id: string,
      } | null,
      depositNum: number,
      wealthPointAmount?: number | null,
      rewardAmount?: number | null,
      itemName?: string | null,
      eventName?: string | null,
      limitCount: number,
      usedCount?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResourceQueryVariables = {
  id: string,
};

export type GetResourceQuery = {
  getResource?:  {
    __typename: "Resource",
    title: string,
    heroImageUri: string,
    link: string,
    learnItem?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    learnResourcesId?: string | null,
  } | null,
};

export type ListResourcesQueryVariables = {
  filter?: ModelResourceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourcesQuery = {
  listResources?:  {
    __typename: "ModelResourceConnection",
    items:  Array< {
      __typename: "Resource",
      title: string,
      heroImageUri: string,
      link: string,
      learnItem?:  {
        __typename: "Learn",
        creatorId: string,
        bgImageUri?: string | null,
        sponsor: string,
        title: string,
        description?: string | null,
        level: LearnLevel,
        reward: number,
        createdAt: string,
        updatedAt: string,
        id: string,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      learnResourcesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRewardQueryVariables = {
  id: string,
};

export type GetRewardQuery = {
  getReward?:  {
    __typename: "Reward",
    id: string,
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    wealthAmount: number,
    logoUri?: string | null,
    description?: string | null,
    heroPhotoUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRewardsQueryVariables = {
  filter?: ModelRewardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRewardsQuery = {
  listRewards?:  {
    __typename: "ModelRewardConnection",
    items:  Array< {
      __typename: "Reward",
      id: string,
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      title: string,
      wealthAmount: number,
      logoUri?: string | null,
      description?: string | null,
      heroPhotoUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRewardStatusQueryVariables = {
  id: string,
};

export type GetRewardStatusQuery = {
  getRewardStatus?:  {
    __typename: "RewardStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rewardItemId: string,
    reward?:  {
      __typename: "Reward",
      id: string,
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      title: string,
      wealthAmount: number,
      logoUri?: string | null,
      description?: string | null,
      heroPhotoUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    redeemed: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRewardStatusesQueryVariables = {
  filter?: ModelRewardStatusFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRewardStatusesQuery = {
  listRewardStatuses?:  {
    __typename: "ModelRewardStatusConnection",
    items:  Array< {
      __typename: "RewardStatus",
      athleteId: string,
      athlete?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      rewardItemId: string,
      reward?:  {
        __typename: "Reward",
        id: string,
        creatorId: string,
        title: string,
        wealthAmount: number,
        logoUri?: string | null,
        description?: string | null,
        heroPhotoUri?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      redeemed: boolean,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVotedUserQueryVariables = {
  id: string,
};

export type GetVotedUserQuery = {
  getVotedUser?:  {
    __typename: "VotedUser",
    id: string,
    sessionId: string,
    votingSession?:  {
      __typename: "VotingSession",
      id: string,
      title?: string | null,
      startTime: string,
      endTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVotedUsersQueryVariables = {
  filter?: ModelVotedUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVotedUsersQuery = {
  listVotedUsers?:  {
    __typename: "ModelVotedUserConnection",
    items:  Array< {
      __typename: "VotedUser",
      id: string,
      sessionId: string,
      votingSession?:  {
        __typename: "VotingSession",
        id: string,
        title?: string | null,
        startTime: string,
        endTime: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVotingSessionQueryVariables = {
  id: string,
};

export type GetVotingSessionQuery = {
  getVotingSession?:  {
    __typename: "VotingSession",
    id: string,
    title?: string | null,
    startTime: string,
    endTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVotingSessionsQueryVariables = {
  filter?: ModelVotingSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVotingSessionsQuery = {
  listVotingSessions?:  {
    __typename: "ModelVotingSessionConnection",
    items:  Array< {
      __typename: "VotingSession",
      id: string,
      title?: string | null,
      startTime: string,
      endTime: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAppUsageLogSubscription = {
  onCreateAppUsageLog?:  {
    __typename: "AppUsageLog",
    dateString: string,
    athletesCount?: number | null,
    sessionsCount?: number | null,
    rsvpedEventsCount?: number | null,
    totalMinutesInApp?: number | null,
    completedModulesCount?: number | null,
    totalTrueChoiceCount?: number | null,
    totalFalseChoiceCount?: number | null,
    totalAskedQuestionsCount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAppUsageLogSubscription = {
  onUpdateAppUsageLog?:  {
    __typename: "AppUsageLog",
    dateString: string,
    athletesCount?: number | null,
    sessionsCount?: number | null,
    rsvpedEventsCount?: number | null,
    totalMinutesInApp?: number | null,
    completedModulesCount?: number | null,
    totalTrueChoiceCount?: number | null,
    totalFalseChoiceCount?: number | null,
    totalAskedQuestionsCount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAppUsageLogSubscription = {
  onDeleteAppUsageLog?:  {
    __typename: "AppUsageLog",
    dateString: string,
    athletesCount?: number | null,
    sessionsCount?: number | null,
    rsvpedEventsCount?: number | null,
    totalMinutesInApp?: number | null,
    completedModulesCount?: number | null,
    totalTrueChoiceCount?: number | null,
    totalFalseChoiceCount?: number | null,
    totalAskedQuestionsCount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAthleteSubscription = {
  onCreateAthlete?:  {
    __typename: "Athlete",
    id: string,
    firstName: string,
    lastName: string,
    mobilePhone: string,
    athleteTag?: string | null,
    bio?: string | null,
    profilePhotoUri?: string | null,
    heroPhotoUri?: string | null,
    email: string,
    level?: AthleteLevel | null,
    sport?:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    team?:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    address?:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    } | null,
    dateOfBirth?: string | null,
    accounts?:  {
      __typename: "ModelAthleteAccountConnection",
      items:  Array< {
        __typename: "AthleteAccount",
        unitAccountId: string,
        routingCode: string,
        accountNumber: string,
        podName: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteAccountsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    plaidToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreId?: string | null,
    isActive: boolean,
    handle?: string | null,
    rewardedQrCodes?:  Array< {
      __typename: "QrCodes",
      id?: string | null,
      itemOrEventName?: string | null,
    } | null > | null,
    activity?:  {
      __typename: "AthleteActivity",
      wealthBalance?: number | null,
      allWagered?: number | null,
      loginCount?: number | null,
      activePeriodInMinutes?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAthleteSubscription = {
  onUpdateAthlete?:  {
    __typename: "Athlete",
    id: string,
    firstName: string,
    lastName: string,
    mobilePhone: string,
    athleteTag?: string | null,
    bio?: string | null,
    profilePhotoUri?: string | null,
    heroPhotoUri?: string | null,
    email: string,
    level?: AthleteLevel | null,
    sport?:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    team?:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    address?:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    } | null,
    dateOfBirth?: string | null,
    accounts?:  {
      __typename: "ModelAthleteAccountConnection",
      items:  Array< {
        __typename: "AthleteAccount",
        unitAccountId: string,
        routingCode: string,
        accountNumber: string,
        podName: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteAccountsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    plaidToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreId?: string | null,
    isActive: boolean,
    handle?: string | null,
    rewardedQrCodes?:  Array< {
      __typename: "QrCodes",
      id?: string | null,
      itemOrEventName?: string | null,
    } | null > | null,
    activity?:  {
      __typename: "AthleteActivity",
      wealthBalance?: number | null,
      allWagered?: number | null,
      loginCount?: number | null,
      activePeriodInMinutes?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAthleteSubscription = {
  onDeleteAthlete?:  {
    __typename: "Athlete",
    id: string,
    firstName: string,
    lastName: string,
    mobilePhone: string,
    athleteTag?: string | null,
    bio?: string | null,
    profilePhotoUri?: string | null,
    heroPhotoUri?: string | null,
    email: string,
    level?: AthleteLevel | null,
    sport?:  {
      __typename: "AthleteSport",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    team?:  {
      __typename: "AthleteTeam",
      name: string,
      airTableId: string,
      isActive?: boolean | null,
    } | null,
    address?:  {
      __typename: "Address",
      streetAddress: string,
      apt?: string | null,
      city: string,
      state: string,
      zipCode: string,
    } | null,
    dateOfBirth?: string | null,
    accounts?:  {
      __typename: "ModelAthleteAccountConnection",
      items:  Array< {
        __typename: "AthleteAccount",
        unitAccountId: string,
        routingCode: string,
        accountNumber: string,
        podName: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        athleteAccountsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitLookup?:  {
      __typename: "AthleteUnitLookup",
      appId: string,
      custId?: string | null,
    } | null,
    podSettings?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    plaidToken?: string | null,
    plaidProcessorToken?:  {
      __typename: "ProcessorToken",
      plaidAccountId: string,
      processorToken?: string | null,
    } | null,
    wyreId?: string | null,
    isActive: boolean,
    handle?: string | null,
    rewardedQrCodes?:  Array< {
      __typename: "QrCodes",
      id?: string | null,
      itemOrEventName?: string | null,
    } | null > | null,
    activity?:  {
      __typename: "AthleteActivity",
      wealthBalance?: number | null,
      allWagered?: number | null,
      loginCount?: number | null,
      activePeriodInMinutes?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAthleteAccountSubscription = {
  onCreateAthleteAccount?:  {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
  } | null,
};

export type OnUpdateAthleteAccountSubscription = {
  onUpdateAthleteAccount?:  {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
  } | null,
};

export type OnDeleteAthleteAccountSubscription = {
  onDeleteAthleteAccount?:  {
    __typename: "AthleteAccount",
    athlete:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    unitAccountId: string,
    routingCode: string,
    accountNumber: string,
    podName: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    athleteAccountsId?: string | null,
  } | null,
};

export type OnCreateRecentTransactionSubscription = {
  onCreateRecentTransaction?:  {
    __typename: "RecentTransaction",
    transactionId: string,
    athleteId?: string | null,
    status?: string | null,
    amount?: number | null,
    direction?: string | null,
    createdAt?: string | null,
    read?: boolean | null,
    settled?: string | null,
    podAllocation?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRecentTransactionSubscription = {
  onUpdateRecentTransaction?:  {
    __typename: "RecentTransaction",
    transactionId: string,
    athleteId?: string | null,
    status?: string | null,
    amount?: number | null,
    direction?: string | null,
    createdAt?: string | null,
    read?: boolean | null,
    settled?: string | null,
    podAllocation?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRecentTransactionSubscription = {
  onDeleteRecentTransaction?:  {
    __typename: "RecentTransaction",
    transactionId: string,
    athleteId?: string | null,
    status?: string | null,
    amount?: number | null,
    direction?: string | null,
    createdAt?: string | null,
    read?: boolean | null,
    settled?: string | null,
    podAllocation?:  {
      __typename: "PodSettings",
      SAVINGS: number,
      INVESTMENTS: number,
      SPENDING: number,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAthleteActivitySubscription = {
  onCreateAthleteActivity?:  {
    __typename: "AthleteActivity",
    wealthBalance?: number | null,
    allWagered?: number | null,
    loginCount?: number | null,
    activePeriodInMinutes?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAthleteActivitySubscription = {
  onUpdateAthleteActivity?:  {
    __typename: "AthleteActivity",
    wealthBalance?: number | null,
    allWagered?: number | null,
    loginCount?: number | null,
    activePeriodInMinutes?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAthleteActivitySubscription = {
  onDeleteAthleteActivity?:  {
    __typename: "AthleteActivity",
    wealthBalance?: number | null,
    allWagered?: number | null,
    loginCount?: number | null,
    activePeriodInMinutes?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEmailChallengeSubscription = {
  onCreateEmailChallenge?:  {
    __typename: "EmailChallenge",
    code: string,
    email: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEmailChallengeSubscription = {
  onUpdateEmailChallenge?:  {
    __typename: "EmailChallenge",
    code: string,
    email: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEmailChallengeSubscription = {
  onDeleteEmailChallenge?:  {
    __typename: "EmailChallenge",
    code: string,
    email: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsor: string,
    title: string,
    category: string,
    heroPhotoUri: string,
    logoUri: string,
    tagline: string,
    description: string,
    dateTime: number,
    location: string,
    reward: number,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsor: string,
    title: string,
    category: string,
    heroPhotoUri: string,
    logoUri: string,
    tagline: string,
    description: string,
    dateTime: number,
    location: string,
    reward: number,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsor: string,
    title: string,
    category: string,
    heroPhotoUri: string,
    logoUri: string,
    tagline: string,
    description: string,
    dateTime: number,
    location: string,
    reward: number,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type OnCreateEventStatusSubscription = {
  onCreateEventStatus?:  {
    __typename: "EventStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventItemId: string,
    event?:  {
      __typename: "Event",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      sponsor: string,
      title: string,
      category: string,
      heroPhotoUri: string,
      logoUri: string,
      tagline: string,
      description: string,
      dateTime: number,
      location: string,
      reward: number,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    registered: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventStatusSubscription = {
  onUpdateEventStatus?:  {
    __typename: "EventStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventItemId: string,
    event?:  {
      __typename: "Event",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      sponsor: string,
      title: string,
      category: string,
      heroPhotoUri: string,
      logoUri: string,
      tagline: string,
      description: string,
      dateTime: number,
      location: string,
      reward: number,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    registered: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventStatusSubscription = {
  onDeleteEventStatus?:  {
    __typename: "EventStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    eventItemId: string,
    event?:  {
      __typename: "Event",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      sponsor: string,
      title: string,
      category: string,
      heroPhotoUri: string,
      logoUri: string,
      tagline: string,
      description: string,
      dateTime: number,
      location: string,
      reward: number,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    registered: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateExerciseListSubscription = {
  onCreateExerciseList?:  {
    __typename: "ExerciseList",
    id: string,
    exerciseId: string,
    exercise?:  {
      __typename: "LearnExercise",
      bgImageUri: string,
      title: string,
      description?: string | null,
      level: ExerciseLevel,
      reward: number,
      sponsor: string,
      problem: string,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    studentEmail?: string | null,
    answer?: string | null,
    approveDecline?: boolean | null,
    isChecked?: boolean | null,
    isShowed?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExerciseListSubscription = {
  onUpdateExerciseList?:  {
    __typename: "ExerciseList",
    id: string,
    exerciseId: string,
    exercise?:  {
      __typename: "LearnExercise",
      bgImageUri: string,
      title: string,
      description?: string | null,
      level: ExerciseLevel,
      reward: number,
      sponsor: string,
      problem: string,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    studentEmail?: string | null,
    answer?: string | null,
    approveDecline?: boolean | null,
    isChecked?: boolean | null,
    isShowed?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExerciseListSubscription = {
  onDeleteExerciseList?:  {
    __typename: "ExerciseList",
    id: string,
    exerciseId: string,
    exercise?:  {
      __typename: "LearnExercise",
      bgImageUri: string,
      title: string,
      description?: string | null,
      level: ExerciseLevel,
      reward: number,
      sponsor: string,
      problem: string,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    studentEmail?: string | null,
    answer?: string | null,
    approveDecline?: boolean | null,
    isChecked?: boolean | null,
    isShowed?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateInviteSubscription = {
  onCreateInvite?:  {
    __typename: "Invite",
    code: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInviteSubscription = {
  onUpdateInvite?:  {
    __typename: "Invite",
    code: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInviteSubscription = {
  onDeleteInvite?:  {
    __typename: "Invite",
    code: string,
    status: Status,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLearnSubscription = {
  onCreateLearn?:  {
    __typename: "Learn",
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    bgImageUri?: string | null,
    sponsor: string,
    title: string,
    description?: string | null,
    level: LearnLevel,
    reward: number,
    deposits:  Array< {
      __typename: "Deposit",
      videoUri: string,
      videoDuration?: number | null,
      title: string,
      questions:  Array< {
        __typename: "Quiz",
        questionText: string,
        answers: Array< string >,
        correctAnswer: string,
      } >,
    } >,
    qaItems?:  Array< {
      __typename: "QAItem",
      questionItem:  {
        __typename: "QuestionItem",
        question: string,
        authorId: string,
        authorName?: string | null,
        createdAt?: string | null,
      },
      answerItems:  Array< {
        __typename: "AnswerItem",
        answer: string,
        authorEmail?: string | null,
        authorName?: string | null,
        authorTitle?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } >,
    } > | null,
    socialHandles?:  {
      __typename: "SocialHandles",
      discord?: string | null,
      instagram?: string | null,
      telegram?: string | null,
      tiktok?: string | null,
      twitter?: string | null,
      youtube?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        title: string,
        heroImageUri: string,
        link: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        learnResourcesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type OnUpdateLearnSubscription = {
  onUpdateLearn?:  {
    __typename: "Learn",
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    bgImageUri?: string | null,
    sponsor: string,
    title: string,
    description?: string | null,
    level: LearnLevel,
    reward: number,
    deposits:  Array< {
      __typename: "Deposit",
      videoUri: string,
      videoDuration?: number | null,
      title: string,
      questions:  Array< {
        __typename: "Quiz",
        questionText: string,
        answers: Array< string >,
        correctAnswer: string,
      } >,
    } >,
    qaItems?:  Array< {
      __typename: "QAItem",
      questionItem:  {
        __typename: "QuestionItem",
        question: string,
        authorId: string,
        authorName?: string | null,
        createdAt?: string | null,
      },
      answerItems:  Array< {
        __typename: "AnswerItem",
        answer: string,
        authorEmail?: string | null,
        authorName?: string | null,
        authorTitle?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } >,
    } > | null,
    socialHandles?:  {
      __typename: "SocialHandles",
      discord?: string | null,
      instagram?: string | null,
      telegram?: string | null,
      tiktok?: string | null,
      twitter?: string | null,
      youtube?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        title: string,
        heroImageUri: string,
        link: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        learnResourcesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type OnDeleteLearnSubscription = {
  onDeleteLearn?:  {
    __typename: "Learn",
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    bgImageUri?: string | null,
    sponsor: string,
    title: string,
    description?: string | null,
    level: LearnLevel,
    reward: number,
    deposits:  Array< {
      __typename: "Deposit",
      videoUri: string,
      videoDuration?: number | null,
      title: string,
      questions:  Array< {
        __typename: "Quiz",
        questionText: string,
        answers: Array< string >,
        correctAnswer: string,
      } >,
    } >,
    qaItems?:  Array< {
      __typename: "QAItem",
      questionItem:  {
        __typename: "QuestionItem",
        question: string,
        authorId: string,
        authorName?: string | null,
        createdAt?: string | null,
      },
      answerItems:  Array< {
        __typename: "AnswerItem",
        answer: string,
        authorEmail?: string | null,
        authorName?: string | null,
        authorTitle?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } >,
    } > | null,
    socialHandles?:  {
      __typename: "SocialHandles",
      discord?: string | null,
      instagram?: string | null,
      telegram?: string | null,
      tiktok?: string | null,
      twitter?: string | null,
      youtube?: string | null,
    } | null,
    resources?:  {
      __typename: "ModelResourceConnection",
      items:  Array< {
        __typename: "Resource",
        title: string,
        heroImageUri: string,
        link: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        learnResourcesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type OnCreateLearnExerciseSubscription = {
  onCreateLearnExercise?:  {
    __typename: "LearnExercise",
    bgImageUri: string,
    title: string,
    description?: string | null,
    level: ExerciseLevel,
    reward: number,
    sponsor: string,
    problem: string,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type OnUpdateLearnExerciseSubscription = {
  onUpdateLearnExercise?:  {
    __typename: "LearnExercise",
    bgImageUri: string,
    title: string,
    description?: string | null,
    level: ExerciseLevel,
    reward: number,
    sponsor: string,
    problem: string,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type OnDeleteLearnExerciseSubscription = {
  onDeleteLearnExercise?:  {
    __typename: "LearnExercise",
    bgImageUri: string,
    title: string,
    description?: string | null,
    level: ExerciseLevel,
    reward: number,
    sponsor: string,
    problem: string,
    createdAt: string,
    updatedAt: string,
    id: string,
  } | null,
};

export type OnCreateLearnStatusSubscription = {
  onCreateLearnStatus?:  {
    __typename: "LearnStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    learnItemId: string,
    learn?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    passedDepositsCount?: number | null,
    wagered?: number | null,
    isWagered?: boolean | null,
    test?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLearnStatusSubscription = {
  onUpdateLearnStatus?:  {
    __typename: "LearnStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    learnItemId: string,
    learn?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    passedDepositsCount?: number | null,
    wagered?: number | null,
    isWagered?: boolean | null,
    test?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLearnStatusSubscription = {
  onDeleteLearnStatus?:  {
    __typename: "LearnStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    learnItemId: string,
    learn?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    passedDepositsCount?: number | null,
    wagered?: number | null,
    isWagered?: boolean | null,
    test?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOpportunitySubscription = {
  onCreateOpportunity?:  {
    __typename: "Opportunity",
    id: string,
    categories: Array< string | null >,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    details: string,
    detailsTldr: string,
    endDateTime: number,
    eventType: string,
    heroPhotoUri: string,
    isPrivate: boolean,
    location?:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    locationDetail?:  {
      __typename: "LocationDetail",
      address: string,
      unit?: string | null,
      city: string,
      state: string,
      zipCode: string,
      country: string,
      name?: string | null,
    } | null,
    logoUri: string,
    onlineReserved: number,
    onlineTotal: number,
    organizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        displayName: string,
        relationshipType: OrganizationRelationshipType,
        opportunityId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orgs?:  Array< {
      __typename: "Org",
      displayName: string,
      relationshipType: OrganizationRelationshipType,
    } | null > | null,
    registrationUrl: string,
    reward: number,
    rewardDetails: string,
    seatsReserved: number,
    seatsTotal: number,
    startDateTime: number,
    status: string,
    subtitle: string,
    tags: Array< string | null >,
    title: string,
    timezone: string,
    websitePrompt: string,
    websiteUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOpportunitySubscription = {
  onUpdateOpportunity?:  {
    __typename: "Opportunity",
    id: string,
    categories: Array< string | null >,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    details: string,
    detailsTldr: string,
    endDateTime: number,
    eventType: string,
    heroPhotoUri: string,
    isPrivate: boolean,
    location?:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    locationDetail?:  {
      __typename: "LocationDetail",
      address: string,
      unit?: string | null,
      city: string,
      state: string,
      zipCode: string,
      country: string,
      name?: string | null,
    } | null,
    logoUri: string,
    onlineReserved: number,
    onlineTotal: number,
    organizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        displayName: string,
        relationshipType: OrganizationRelationshipType,
        opportunityId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orgs?:  Array< {
      __typename: "Org",
      displayName: string,
      relationshipType: OrganizationRelationshipType,
    } | null > | null,
    registrationUrl: string,
    reward: number,
    rewardDetails: string,
    seatsReserved: number,
    seatsTotal: number,
    startDateTime: number,
    status: string,
    subtitle: string,
    tags: Array< string | null >,
    title: string,
    timezone: string,
    websitePrompt: string,
    websiteUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOpportunitySubscription = {
  onDeleteOpportunity?:  {
    __typename: "Opportunity",
    id: string,
    categories: Array< string | null >,
    creatorId: string,
    creator:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    details: string,
    detailsTldr: string,
    endDateTime: number,
    eventType: string,
    heroPhotoUri: string,
    isPrivate: boolean,
    location?:  {
      __typename: "Location",
      lat: number,
      lon: number,
    } | null,
    locationDetail?:  {
      __typename: "LocationDetail",
      address: string,
      unit?: string | null,
      city: string,
      state: string,
      zipCode: string,
      country: string,
      name?: string | null,
    } | null,
    logoUri: string,
    onlineReserved: number,
    onlineTotal: number,
    organizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        displayName: string,
        relationshipType: OrganizationRelationshipType,
        opportunityId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    orgs?:  Array< {
      __typename: "Org",
      displayName: string,
      relationshipType: OrganizationRelationshipType,
    } | null > | null,
    registrationUrl: string,
    reward: number,
    rewardDetails: string,
    seatsReserved: number,
    seatsTotal: number,
    startDateTime: number,
    status: string,
    subtitle: string,
    tags: Array< string | null >,
    title: string,
    timezone: string,
    websitePrompt: string,
    websiteUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrganizationSubscription = {
  onCreateOrganization?:  {
    __typename: "Organization",
    id: string,
    displayName: string,
    relationshipType: OrganizationRelationshipType,
    opportunityId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrganizationSubscription = {
  onUpdateOrganization?:  {
    __typename: "Organization",
    id: string,
    displayName: string,
    relationshipType: OrganizationRelationshipType,
    opportunityId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrganizationSubscription = {
  onDeleteOrganization?:  {
    __typename: "Organization",
    id: string,
    displayName: string,
    relationshipType: OrganizationRelationshipType,
    opportunityId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePhoneChallengeSubscription = {
  onCreatePhoneChallenge?:  {
    __typename: "PhoneChallenge",
    code: string,
    phoneNumber: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePhoneChallengeSubscription = {
  onUpdatePhoneChallenge?:  {
    __typename: "PhoneChallenge",
    code: string,
    phoneNumber: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePhoneChallengeSubscription = {
  onDeletePhoneChallenge?:  {
    __typename: "PhoneChallenge",
    code: string,
    phoneNumber: string,
    verified: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProposalSubscription = {
  onCreateProposal?:  {
    __typename: "Proposal",
    id: string,
    sessionId: string,
    proposalSession?:  {
      __typename: "ProposalSession",
      id: string,
      title?: string | null,
      startTime: string,
      endTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    track: ProposalTrackType,
    actionVerb: ProposalActionVerbType,
    statement: string,
    desiredGoal: string,
    votingCount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProposalSubscription = {
  onUpdateProposal?:  {
    __typename: "Proposal",
    id: string,
    sessionId: string,
    proposalSession?:  {
      __typename: "ProposalSession",
      id: string,
      title?: string | null,
      startTime: string,
      endTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    track: ProposalTrackType,
    actionVerb: ProposalActionVerbType,
    statement: string,
    desiredGoal: string,
    votingCount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProposalSubscription = {
  onDeleteProposal?:  {
    __typename: "Proposal",
    id: string,
    sessionId: string,
    proposalSession?:  {
      __typename: "ProposalSession",
      id: string,
      title?: string | null,
      startTime: string,
      endTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    track: ProposalTrackType,
    actionVerb: ProposalActionVerbType,
    statement: string,
    desiredGoal: string,
    votingCount?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProposalSessionSubscription = {
  onCreateProposalSession?:  {
    __typename: "ProposalSession",
    id: string,
    title?: string | null,
    startTime: string,
    endTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProposalSessionSubscription = {
  onUpdateProposalSession?:  {
    __typename: "ProposalSession",
    id: string,
    title?: string | null,
    startTime: string,
    endTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProposalSessionSubscription = {
  onDeleteProposalSession?:  {
    __typename: "ProposalSession",
    id: string,
    title?: string | null,
    startTime: string,
    endTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQRCodeSubscription = {
  onCreateQRCode?:  {
    __typename: "QRCode",
    learnId: string,
    learn?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    depositNum: number,
    wealthPointAmount?: number | null,
    rewardAmount?: number | null,
    itemName?: string | null,
    eventName?: string | null,
    limitCount: number,
    usedCount?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQRCodeSubscription = {
  onUpdateQRCode?:  {
    __typename: "QRCode",
    learnId: string,
    learn?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    depositNum: number,
    wealthPointAmount?: number | null,
    rewardAmount?: number | null,
    itemName?: string | null,
    eventName?: string | null,
    limitCount: number,
    usedCount?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQRCodeSubscription = {
  onDeleteQRCode?:  {
    __typename: "QRCode",
    learnId: string,
    learn?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    depositNum: number,
    wealthPointAmount?: number | null,
    rewardAmount?: number | null,
    itemName?: string | null,
    eventName?: string | null,
    limitCount: number,
    usedCount?: number | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateResourceSubscription = {
  onCreateResource?:  {
    __typename: "Resource",
    title: string,
    heroImageUri: string,
    link: string,
    learnItem?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    learnResourcesId?: string | null,
  } | null,
};

export type OnUpdateResourceSubscription = {
  onUpdateResource?:  {
    __typename: "Resource",
    title: string,
    heroImageUri: string,
    link: string,
    learnItem?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    learnResourcesId?: string | null,
  } | null,
};

export type OnDeleteResourceSubscription = {
  onDeleteResource?:  {
    __typename: "Resource",
    title: string,
    heroImageUri: string,
    link: string,
    learnItem?:  {
      __typename: "Learn",
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      bgImageUri?: string | null,
      sponsor: string,
      title: string,
      description?: string | null,
      level: LearnLevel,
      reward: number,
      deposits:  Array< {
        __typename: "Deposit",
        videoUri: string,
        videoDuration?: number | null,
        title: string,
      } >,
      socialHandles?:  {
        __typename: "SocialHandles",
        discord?: string | null,
        instagram?: string | null,
        telegram?: string | null,
        tiktok?: string | null,
        twitter?: string | null,
        youtube?: string | null,
      } | null,
      resources?:  {
        __typename: "ModelResourceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      id: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    learnResourcesId?: string | null,
  } | null,
};

export type OnCreateRewardSubscription = {
  onCreateReward?:  {
    __typename: "Reward",
    id: string,
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    wealthAmount: number,
    logoUri?: string | null,
    description?: string | null,
    heroPhotoUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRewardSubscription = {
  onUpdateReward?:  {
    __typename: "Reward",
    id: string,
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    wealthAmount: number,
    logoUri?: string | null,
    description?: string | null,
    heroPhotoUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRewardSubscription = {
  onDeleteReward?:  {
    __typename: "Reward",
    id: string,
    creatorId: string,
    creator?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    title: string,
    wealthAmount: number,
    logoUri?: string | null,
    description?: string | null,
    heroPhotoUri?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRewardStatusSubscription = {
  onCreateRewardStatus?:  {
    __typename: "RewardStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rewardItemId: string,
    reward?:  {
      __typename: "Reward",
      id: string,
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      title: string,
      wealthAmount: number,
      logoUri?: string | null,
      description?: string | null,
      heroPhotoUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    redeemed: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRewardStatusSubscription = {
  onUpdateRewardStatus?:  {
    __typename: "RewardStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rewardItemId: string,
    reward?:  {
      __typename: "Reward",
      id: string,
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      title: string,
      wealthAmount: number,
      logoUri?: string | null,
      description?: string | null,
      heroPhotoUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    redeemed: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRewardStatusSubscription = {
  onDeleteRewardStatus?:  {
    __typename: "RewardStatus",
    athleteId: string,
    athlete?:  {
      __typename: "Athlete",
      id: string,
      firstName: string,
      lastName: string,
      mobilePhone: string,
      athleteTag?: string | null,
      bio?: string | null,
      profilePhotoUri?: string | null,
      heroPhotoUri?: string | null,
      email: string,
      level?: AthleteLevel | null,
      sport?:  {
        __typename: "AthleteSport",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      team?:  {
        __typename: "AthleteTeam",
        name: string,
        airTableId: string,
        isActive?: boolean | null,
      } | null,
      address?:  {
        __typename: "Address",
        streetAddress: string,
        apt?: string | null,
        city: string,
        state: string,
        zipCode: string,
      } | null,
      dateOfBirth?: string | null,
      accounts?:  {
        __typename: "ModelAthleteAccountConnection",
        nextToken?: string | null,
      } | null,
      unitLookup?:  {
        __typename: "AthleteUnitLookup",
        appId: string,
        custId?: string | null,
      } | null,
      podSettings?:  {
        __typename: "PodSettings",
        SAVINGS: number,
        INVESTMENTS: number,
        SPENDING: number,
      } | null,
      plaidToken?: string | null,
      plaidProcessorToken?:  {
        __typename: "ProcessorToken",
        plaidAccountId: string,
        processorToken?: string | null,
      } | null,
      wyreId?: string | null,
      isActive: boolean,
      handle?: string | null,
      rewardedQrCodes?:  Array< {
        __typename: "QrCodes",
        id?: string | null,
        itemOrEventName?: string | null,
      } | null > | null,
      activity?:  {
        __typename: "AthleteActivity",
        wealthBalance?: number | null,
        allWagered?: number | null,
        loginCount?: number | null,
        activePeriodInMinutes?: number | null,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    rewardItemId: string,
    reward?:  {
      __typename: "Reward",
      id: string,
      creatorId: string,
      creator?:  {
        __typename: "Athlete",
        id: string,
        firstName: string,
        lastName: string,
        mobilePhone: string,
        athleteTag?: string | null,
        bio?: string | null,
        profilePhotoUri?: string | null,
        heroPhotoUri?: string | null,
        email: string,
        level?: AthleteLevel | null,
        dateOfBirth?: string | null,
        plaidToken?: string | null,
        wyreId?: string | null,
        isActive: boolean,
        handle?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      title: string,
      wealthAmount: number,
      logoUri?: string | null,
      description?: string | null,
      heroPhotoUri?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    redeemed: boolean,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateVotedUserSubscription = {
  onCreateVotedUser?:  {
    __typename: "VotedUser",
    id: string,
    sessionId: string,
    votingSession?:  {
      __typename: "VotingSession",
      id: string,
      title?: string | null,
      startTime: string,
      endTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVotedUserSubscription = {
  onUpdateVotedUser?:  {
    __typename: "VotedUser",
    id: string,
    sessionId: string,
    votingSession?:  {
      __typename: "VotingSession",
      id: string,
      title?: string | null,
      startTime: string,
      endTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVotedUserSubscription = {
  onDeleteVotedUser?:  {
    __typename: "VotedUser",
    id: string,
    sessionId: string,
    votingSession?:  {
      __typename: "VotingSession",
      id: string,
      title?: string | null,
      startTime: string,
      endTime: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateVotingSessionSubscription = {
  onCreateVotingSession?:  {
    __typename: "VotingSession",
    id: string,
    title?: string | null,
    startTime: string,
    endTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVotingSessionSubscription = {
  onUpdateVotingSession?:  {
    __typename: "VotingSession",
    id: string,
    title?: string | null,
    startTime: string,
    endTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVotingSessionSubscription = {
  onDeleteVotingSession?:  {
    __typename: "VotingSession",
    id: string,
    title?: string | null,
    startTime: string,
    endTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
