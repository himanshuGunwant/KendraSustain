import styled from '@emotion/styled';
export const Container = styled.div`
  color: #ffffff;
  --background-color: #0e2c38;
  background-color: var(--background-color);
  width: 100%;
  padding: 0 1rem;
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.3rem;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap-reverse;
`;
export const Links = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  li {
  }
`;
export const Circle = styled.div`
  width: 8px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: #ffffff;
`;
export const Image = styled.div`
  display: flex;
  font-weight: 700;
  align-items: flex-end;
  gap: 0.8rem;
  font-size: 12px;
  img {
    width: 150px;
  }
`;
