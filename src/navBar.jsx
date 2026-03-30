function NavBar() {
  const items = ['Home', 'Profile', 'Support', 'Skills']

  return (
    <div id="navBar">
      <ol>
        {items.map((item, index) => (
          <li key={index} className={item}>
            <h2>{item}</h2>
          </li>
        ))}
      </ol>
    </div>
  )
}
export default NavBar