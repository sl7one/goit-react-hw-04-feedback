import PropTypes from 'prop-types';
import Button from './Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(name => {
        return <Button key={name} title={name} onClick={onLeaveFeedback} />;
      })}
    </Wrapper>
  );
};

export default FeedBackOptions;

FeedBackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
