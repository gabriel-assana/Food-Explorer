import styled from 'styled-components'

export const Container = styled.div`
      position: relative;
      
      width: 30rem;
      height: 51.2rem;
      border-radius: 0.8rem;
      border: 1px solid rgba(0, 0, 0, 0.65);
      
      background: rgba(0, 0, 0, 0.32);

      .favButton {
          position: absolute;
          top: 1.2rem;
          right: 1.2rem;
          background: transparent;
          border: none;
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-size: 3rem;
      }

      .container {
          display: grid;
          padding: 3.8rem 2.6rem;
          text-align: center;

          > img {
            width: 17.6rem;
            height: 17.6rem;
            margin: 3rem auto 1.6rem;
          }
      }

      .product-title {
          font-weight: 700;
          font-size: 2.4rem;
          color: ${({ theme }) => theme.COLORS.WHITE};
          
          margin-bottom: 1.8rem;
      }
      
      .description {
        font-family: 'Roboto', sans-serif;
        font-size: 1.4rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        margin-bottom: 1.6rem;
      }

      .price {
        font-family: 'Roboto', sans-serif;
        font-size: 3.2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.BLUE};

        margin-bottom: 1.6rem;
      }
`;