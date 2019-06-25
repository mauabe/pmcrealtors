const customHeaders = {
  'D-User': testuser,
  'D-Company': testcompany,
  'userId': userId,
  'selection': company,
  'valueMode': 0,   // "ds30" --> 0 / Ads --> 1
  'year': year,
}

export const fetchPDF = () => {
  return fetch(url, { method: 'GET', headers: customHeaders})
  .then(response => response.json())
  .then(json => JSON.stringify(json))
  .catch(err => console.log(err));
  // body: JSON.stringify('')
};

fetchPDF();


  console.log(response.status);     //=> number 100–599
  console.log(response.statusText); //=> String
  console.log(response.headers);    //=> Headers
  console.log(response.url);        //=> String
  


import { FETCH_BITCOIN } from './constants';

  export const fetchBitcoin = () => {
    return dispatch => {
      return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => response.json())
          .then(json => dispatch({ type: FETCH_BITCOIN, bitcoin: json }) );
    }
  }


  export const fetchTodos = () => {
    axios
      .get('api/todoList', { params: { listName: this.state.listName } })
      .then(({ data }) =>
        this.setState({ todos: data }, () => console.log(this.state))
      )
      .catch(err => console.log(err));
  }

  handleInput(e) {
    this.setState({
      todo: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { todo, todos, listName } = this.state;
    axios
      .post('/api/todoList', { todo, listName: this.state.listName })
      .then(this.fetchTodos())
      .catch(err => console.log(err));
    e.target.reset();
  }


