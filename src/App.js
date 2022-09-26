import BookList from './components/book/BookList';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import BookDetail from './components/book/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Switch>

        <Route path="/books/:id">
          <BookDetail/>
        </Route>

        <Route path="/books">
          <Link to='/'>go to home!</Link>
          <BookList />
        </Route>

        <Route path="/">
          <h1>im on main page!</h1>
          <Link to='/books'>go to books!</Link>
        </Route>

      </Switch>
    </main>
  );
}
// netlify fix
export default App;
