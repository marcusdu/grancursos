import React from 'react'
import { BellOIcon, CalendarMinusIcon, CheckSquareIcon, CommentAltIcon, EnvelopeIcon, StarOIcon, BellIcon, SearchIcon, HomeIcon, AngleDoubleRightIcon } from 'react-line-awesome';
import DocumentTitle from '../../../helpers/documentTitle';
import Menu from '../../components/common/menu/menu';
import { Container, Content, FilterIcons, OptionsProfile, OptionsHeader, TitlePage, BreadCrumb } from './home.style';

const Home = () => {
  return (
    <DocumentTitle title="Gran Cursos - Página Inicial">
      <Container>
        <Menu />
        <Content>
          <OptionsHeader>
            <FilterIcons>
              <li>
                <CheckSquareIcon />
              </li>
              <li>
                <CommentAltIcon />
              </li>
              <li>
                <EnvelopeIcon />
              </li>
              <li>
                <CalendarMinusIcon />
              </li>
              <li>
                <StarOIcon style={{ color: '#bbbbbb' }} />
              </li>
            </FilterIcons>
            <OptionsProfile>
              <div className="language">
                English
              </div>
              <div className="actions">
                <ul>
                  <li>
                    <BellOIcon />
                  </li>
                  <li>
                    <SearchIcon />
                  </li>
                </ul>
              </div>
              <div className="profile">
                <div className="name-work">
                  <div className="name">
                    John Doe
                  </div>
                  <div className="work">
                    Available
                  </div>
                </div>
                <div className="profile-image">
                  <img src={require('../../assets/profile.jpg')} alt="Perfil" />
                </div>
              </div>
            </OptionsProfile>
          </OptionsHeader>
          <TitlePage>
            <div className="title-main">
              <h1>
                Card Actions
              </h1>
            </div>
            <BreadCrumb>
              <li>
                <HomeIcon />
                <div className="next">
                  <AngleDoubleRightIcon />
                </div>
              </li>
              <li>
                eCommerce
                <div className="next">
                  <AngleDoubleRightIcon />
                </div>
              </li>
              <li>
                Eletronics
              </li>
            </BreadCrumb>
          </TitlePage>
        </Content>
      </Container>
    </DocumentTitle>
  )
}

export default Home;
