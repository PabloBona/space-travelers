import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Missions from '../../components/Missions/Missions';
import store from '../../redux/store';

describe('Missions', () => {
  test('Component renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}><Missions /></Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component has spinner and no error', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();

    const errorAlert = screen.queryByRole('alert');
    expect(errorAlert).not.toBeInTheDocument();
  });
});
