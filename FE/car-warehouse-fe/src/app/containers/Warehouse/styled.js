const { default: styled } = require("styled-components");

const LayoutWarehouse = styled.div`
  max-width: 1400px;
  margin: auto;
  height: 100vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const LayoutButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export { LayoutWarehouse, LayoutButton };
