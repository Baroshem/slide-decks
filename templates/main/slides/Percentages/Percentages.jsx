import styled from 'styled-components';
import { string, arrayOf, exact, number } from 'prop-types';
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
  grid-gap: 80px;
`;

const Projects = ({ title, content, items, styles }) => (
  <Container styles={styles} className="projects">
    <BoxHeading align="center" title={title} content={content}>
      <Items className="items">
        {items.map(item => (
          <Item key={item.value} {...item} />
        ))}
      </Items>
    </BoxHeading>
  </Container>
);

Projects.propTypes = {
  title: string,
  content: string,
  items: arrayOf(
    exact({
      value: number,
      title: string,
      content: string,
    }),
  ),
  styles: arrayOf(string),
};

export default Projects;
