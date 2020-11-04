import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #F9F9F9;
  display: flex;
  flex-direction: row;

`;

export const Content = styled.div`
  width: calc(100% - 21.25rem);
  display: flex;
  flex-direction: column;
  padding: 1.875rem;
`;

export const OptionsHeader = styled.div`
  width: calc(100% - 40px);
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
`;

export const FilterIcons = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;

  li{
    width: 30px;
    height: 30px;
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #606060;
    align-items: center;
    margin: 0 3px;
  }
`;

export const OptionsProfile = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  .language{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.875rem;
  }

  .actions{
    width: 80px;
    ul{
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      list-style: none;

      li {
        width: 30px;
        height: 25px;
        margin: 0;
        font-size: 1.563rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }

  .profile{
    width: 110px;
    display: flex;
    flex-direction: row;
    align-items: center;

    .name-work{
      display: flex;
      flex-direction: column;
      font-family: 'Montserrat', sans-serif;

      .name {
        font-size: 0.875rem;
        color: #2c2c2c;
      }

      .work {
        font-size: 0.688rem;
        color: #2c2c2c;
        text-align: right;
      }
    }

    &-image{
      width: 30px;
      height: 30px;
      margin-left: 10px;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: -1px 1px 6px rgba(0, 0, 0, 0.235413);

      img {
        width: 100%;
      }
    }
    
  }
`;

export const TitlePage = styled.div`
  display: flex;
  flex-direction: row;

  .title{
    &-main{
      position: relative;

      h1 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 100;
        font-size: 1.5rem;
        display: block;
        position: relative;
        display: inline-block;
      }

      &::after{
        content: "";
        width: 1px;
        height: 30px;
        position: absolute;
        background-color: #979797;
        right: -15px;
        top: 15px;
      }
    }
  }

`;

export const BreadCrumb = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0 30px;
  padding: 0;
  list-style: none;
  align-items: center;
  
  li{
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: row;
    font-size: 0.875rem;

    .next{
      width: 15px;
      height: 15px;
      margin: 0 15px;
    }
  }

`;