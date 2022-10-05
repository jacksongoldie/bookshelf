

function AccountInfo({ user }) {
  return (
    <div>
        <h2>Account Info</h2>
        <p>Welcome back, {user.email}!</p>
    </div>
  )
};

export default AccountInfo;