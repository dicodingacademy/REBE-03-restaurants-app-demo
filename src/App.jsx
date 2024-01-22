import React from 'react';
import RestaurantList from './components/RestaurantList';
import { getRestaurants } from './data/network';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      loading: true,
      error: false,
    };
  }

  async componentDidMount() {
    try {
      const restaurants = await getRestaurants();
      this.setState({ restaurants, loading: false });
    } catch (error) {
      this.setState({ loading: false, error: true });
    }
  }

  render() {
    const { restaurants, loading, error } = this.state;

    if (loading) {
      return (
        <p>Loading ...</p>
      );
    }

    if (error) {
      return (
        <p>error showing restaurant</p>
      );
    }

    return (
      <RestaurantList restaurants={restaurants} />
    );
  }
}

export default App;
