import React, { Component } from 'react'
import { Router, Route, Link,IndexLink,hashHistory, IndexRoute, browserHistory } from 'react-router'
class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='address' component={Address}>
            <IndexRoute component={TwitterFeed} />
            <Route path='/' component={Instagram} />
            <Route path='instagram' component={Instagram} />
          </Route>
          <Route path='/namedComponent' component={NamedComponents}>
  <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
</Route>
          <Route path='*' component={NotFound} />
          <Route path='/about/:name' component={About} />
        </Route>

      </Router>
    )
  }
}

const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>


const Address = (props) => (<div>
  <br />
  <Link activeStyle={{ color: 'red' }} to='/address'>Twitter Feed</Link><br />
  <Link activeStyle={{ color: 'red' }} to='/address'>awefaewfawf</Link><br />
  <Link activeStyle={{ color: 'red' }} to='/address/instagram'>Instagram Feed</Link><br />
  <h1>We are located at 555 Jackson St.</h1>
  {props.children}
</div>);

const About = (props) => (
  <div>
    <h3>Welcome to the About Page</h3>
    <h2>{props.params.name}</h2>
  </div>
)

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

const Nav = () => (
  <nav>
    <Link activeStyle={{ color: 'red' }} to='/'>Home</Link><br/>
    <Link activeStyle={{ color: 'red' }} to='/address'>Address</Link><br/>
    <Link activeStyle={{ color: 'red' }} to='/404'>404</Link><br/>
    <IndexLink activeStyle={{ color: 'red' }} to='/namedComponent'>Named Components</IndexLink>
  </nav>
)
const NamedComponents = (props) => (
  <div>
    {props.title}<br />
    {props.subTitle}
  </div>
)
const Title = () => (
  <h1>Hello from Title Component hYERHEWR ER </h1>
)
const SubTitle = () => (
  <h1>Hello from SubTitle Component</h1>
)



const Home = () => <h1>Hello from Home!</h1>
// // const Address = () => <h1>We are located at 555 Jackson St. <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;
// <Link to='/address'>Address</Link>&nbsp;&nbsp;&nbsp;
// <Link to='/404'>404</Link></h1>
const NotFound = () => (
  <h1>404.. This page is not found!</h1>)
export default App
