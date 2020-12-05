import Header from "../components/header/Header";

export default function Layout(props) {
  return (
    <div className="App">
      <Header
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      {props.children}
    </div>
  )
}