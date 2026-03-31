function NavBar() {
  const items = ['Home', 'Profile', 'Support', 'Skills']

  return (
    <div className="navBar">
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