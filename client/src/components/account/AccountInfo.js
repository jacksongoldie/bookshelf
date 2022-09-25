

function AccountInfo({ user }) {
  return (
    <div>
        <h2>Account Info</h2>
        <p>{user.email}</p>
        <p>{user.password}</p>
        <p>{user.id}</p>
    </div>
  )
};

export default AccountInfo;