import React from "react";
import { ReactComponent as NetflixIcon } from "../asset/NetflixIcon.svg";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../asset/SearchIcon.svg";
import { ReactComponent as AlarmIcon } from "../asset/AlarmIcon.svg";
import { ReactComponent as DownIcon } from "../asset/DownIcon.svg";

const Header = () => {
  return (
    <Container>
      <MenuContainer>
        <StyledIcon />
        <MenuBtn>홈</MenuBtn>
        <MenuBtn>시리즈</MenuBtn>
        <MenuBtn>영화</MenuBtn>
        <MenuBtn>New 요즘 대세 콘텐츠</MenuBtn>
        <MenuBtn>내가 찜한 콘텐츠</MenuBtn>
        <MenuBtn>언어별로 찾아보기</MenuBtn>
      </MenuContainer>
      <UserContainer>
        <StyledSearch />
        <StyledAlarm />
        <Profile />
        <DownIcon />
      </UserContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100vw;
  height: 50px;
  background-color: ${(props) => props.theme.black};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledIcon = styled(NetflixIcon)`
  width: 100px;
  height: 100%;
`;

const MenuContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;
const MenuBtn = styled.button`
  border: none;
  background: none;
  font-size: 10px;
  color: ${(props) => props.theme.white};
`;
const UserContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Profile = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
  margin: 10px;
`;

const StyledSearch = styled(SearchIcon)`
  width: 24px;
  height: 24px;
  margin: 10px;
`;

const StyledAlarm = styled(AlarmIcon)`
  width: 24px;
  height: 24px;
  margin: 10px;
`;

const StyledDown = styled(DownIcon)`
  width: 24px;
  height: 24px;
  margin: 10px;
`;
