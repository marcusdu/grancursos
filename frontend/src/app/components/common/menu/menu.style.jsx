import styled from "styled-components";

export const Container = styled.div`
  width: 17.5rem;
  height: 100vh;
  display: flex;
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.170509);
  flex-direction: column;
`;

export const Brand = styled.div`
  width: 162px;
  height: 30px;
  margin: 30px 25px;
`;

export const MenuSection = styled.div`
  font-family: 'Montserrat', Arial, sans-serif;
  color: rgba(153,153,153,1);
  font-weight: 600;
  margin-top: 30px;
  text-transform: uppercase;
  font-size: 0.875rem;
`;

export const MenuList = styled.ul`
  width: 14.750rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;

export const MenuItem = styled.li`
  width: 100%;
  margin: 0 auto;
  height: 36px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  margin-bottom: 10px;
  color: rgba(44,44,44,1);

  &.active{
    background-color: rgba(236,236,236,1);
  }
`;

export const MenuSectionItem = styled.li`
  width: 100%;
  margin: 0 auto;
  height: 36px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  margin-bottom: 5px;
  font-weight: 600;
  color: rgba(44,44,44,1);

  &.active{
    background-color: rgba(236,236,236,1);
  }
`;

export const IconMenuItem = styled.div`
  width: 26px;
  height: 21px;
  font-size: 21px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 11px;
`;

export const MenuLabel = styled.div`
  font-size: 0.9375rem;
  font-family: 'Montserrat', Arial, sans-serif;
`;

export const MenuChevron = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  right: 15px;
`;