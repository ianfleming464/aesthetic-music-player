import { gql } from '@apollo/client';

// export const GET_SONGS = gql`
//   subscription GetSongs {
//     songs(order_by: { created_at: desc }) {
//       artist
//       duration
//       id
//       thumbnail
//       title
//       url
//     }
//   }
// `;

export const GET_SONGS = gql`
  subscription getSongs {
    songs(order_by: { created_at: desc }) {
      artist
      duration
      id
      thumbnail
      title
      url
    }
  }
`;
