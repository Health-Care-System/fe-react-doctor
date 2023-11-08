export const Sidebar = ({ children }) => {
  return (
    <>
      <aside>
        <img src="" alt="Profile Picture" />
        <h5>Dr. Djaja Surya</h5>
        <p className="fs-2">Dokter Umum</p>
      </aside>
      {children}
    </>
  )
}
