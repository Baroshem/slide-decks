import styled from 'styled-components';
import { string, arrayOf, exact } from 'prop-types';
import { BoxHeading } from '../../components';
import Item from './Item';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px;
  ${props => props.styles}
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: min-content;
  grid-gap: 80px 72px;
`;

const Services = ({ title, content, items, styles }) => (
  <Container styles={styles} className="services">
    <BoxHeading align="center" title={title} content={content}>
      <Items className="items">
        {items.map(item => (
          <Item key={item.icon} {...item} />
        ))}
      </Items>
    </BoxHeading>
  </Container>
);

Services.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  items: arrayOf(
    exact({
      icon: string,
      title: string,
      content: string,
    }),
  ),
  styles: arrayOf(string),
};

export default Services;
