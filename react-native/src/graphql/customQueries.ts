export const searchCustomLearnItemIds = /* GraphQL */ `
  query searchCustomLearnItemIds(
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
        id
        bgImageUri
        sponsor
        title
        level
        reward
        deposits {
          questions {
            questionText
            correctAnswer
            answers
          }
          title
          videoDuration
          videoUri
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
        description,
        resources {
          items {
            title
            heroImageUri
            link
          }
        }
        socialHandles {
          twitter
          tiktok
          instagram
          youtube
        }
        updatedAt
      }
      nextToken
    }
  }
`;

export const searchCustomLearnStatuses = /* GraphQL */ `
  query searchCustomLearnStatuses(
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
        learnItemId
        passedDepositsCount
        wagered
        isWagered
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