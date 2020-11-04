import React from 'react';
import {
  Container,
  Brand,
  MenuList,
  MenuItem,
  IconMenuItem,
  MenuLabel,
  MenuChevron,
  MenuSection,
  MenuSectionItem
} from './menu.style';
import {
  HomeIcon,
  AngleDownIcon,
  CircleIcon,
  EnvelopeIcon,
  CommentIcon,
  CheckSquareIcon,
  CalendarIcon,
  ThLargeIcon,
  TintIcon,
  CreditCardIcon,
  AngleRightIcon,
  BorderAllIcon,
  CopyIcon,
  FileAltIcon,
  CheckCircleOIcon
}
  from 'react-line-awesome';

const Menu = () => {
  return (
    <Container>
      <Brand>
        <img src={require('../../../assets/brand.svg')} alt="Logotipo - GranCursos" />
      </Brand>
      <MenuList>
        <MenuItem className="active">
          <IconMenuItem>
            <HomeIcon />
          </IconMenuItem>
          <MenuLabel>
            Dashboard
          </MenuLabel>
          <MenuChevron>
            <AngleDownIcon />
          </MenuChevron>
        </MenuItem>
        <MenuItem>
          <IconMenuItem>
            <CircleIcon />
          </IconMenuItem>
          <MenuLabel>
            eCommerce
          </MenuLabel>
        </MenuItem>

        <MenuSection>
          Apps
        </MenuSection>
        <MenuSectionItem>
          <IconMenuItem>
            <EnvelopeIcon />
          </IconMenuItem>
          <MenuLabel>
            Email
          </MenuLabel>
        </MenuSectionItem>
        <MenuSectionItem>
          <IconMenuItem>
            <CommentIcon />
          </IconMenuItem>
          <MenuLabel>
            Chat
          </MenuLabel>
        </MenuSectionItem>
        <MenuSectionItem>
          <IconMenuItem>
            <CheckSquareIcon />
          </IconMenuItem>
          <MenuLabel>
            Todo
          </MenuLabel>
        </MenuSectionItem>
        <MenuSectionItem>
          <IconMenuItem>
            <CalendarIcon />
          </IconMenuItem>
          <MenuLabel>
            Calendar
          </MenuLabel>
        </MenuSectionItem>

        <MenuSection>
          UI Elements
        </MenuSection>
        <MenuSectionItem>
          <IconMenuItem>
            <ThLargeIcon />
          </IconMenuItem>
          <MenuLabel>
            Grid
          </MenuLabel>
          <MenuChevron>
            <AngleRightIcon />
          </MenuChevron>
        </MenuSectionItem>
        <MenuSectionItem>
          <IconMenuItem>
            <TintIcon />
          </IconMenuItem>
          <MenuLabel>
            Color
          </MenuLabel>
        </MenuSectionItem>
        <MenuSectionItem>
          <IconMenuItem>
            <CreditCardIcon />
          </IconMenuItem>
          <MenuLabel>
            Card
          </MenuLabel>
          <MenuChevron>
            <AngleRightIcon />
          </MenuChevron>
        </MenuSectionItem>
        <MenuSectionItem>
          <IconMenuItem>
            <BorderAllIcon />
          </IconMenuItem>
          <MenuLabel>
            Table
          </MenuLabel>
        </MenuSectionItem>
        <MenuSectionItem>
          <IconMenuItem>
            <ThLargeIcon />
          </IconMenuItem>
          <MenuLabel>
            Components
          </MenuLabel>
          <MenuChevron>
            <AngleRightIcon />
          </MenuChevron>
        </MenuSectionItem>

        <MenuSection>
          Forms
        </MenuSection>
        <MenuSectionItem>
          <IconMenuItem>
            <CopyIcon />
          </IconMenuItem>
          <MenuLabel>
            Form Elements
          </MenuLabel>
          <MenuChevron>
            <AngleRightIcon />
          </MenuChevron>
        </MenuSectionItem>
        <MenuSectionItem>
          <IconMenuItem>
            <BorderAllIcon />
          </IconMenuItem>
          <MenuLabel>
            Form Layouts
          </MenuLabel>
        </MenuSectionItem>
        <MenuSectionItem>
          <IconMenuItem>
            <FileAltIcon />
          </IconMenuItem>
          <MenuLabel>
            Form Wizard
          </MenuLabel>
        </MenuSectionItem>
        <MenuSectionItem>
          <IconMenuItem>
            <CheckCircleOIcon />
          </IconMenuItem>
          <MenuLabel>
            Form Valiation
          </MenuLabel>
        </MenuSectionItem>
      </MenuList>
    </Container>
  )
}

export default Menu
