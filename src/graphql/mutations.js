import { gql } from '@apollo/client';

export const ADD_SONG = gql`
  mutation addSongs(
    $title: String!
    $artist: String!
    $thumbnail: String!
    $duration: Float!
    $url: String!
  ) {
    insert_songs(
      objects: {
        artist: $artist
        title: $title
        duration: $duration
        thumbnail: $thumbnail
        url: $url
      }
    ) {
      affected_rows
    }
  }
`;
