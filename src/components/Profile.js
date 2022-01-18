import { SkeletonBodyText, SkeletonDisplayText, TextContainer } from "@shopify/polaris"

const Profile = () => {
  return (
    <div className="container">
      <img src="profile_pic.jpg" alt="Profile pic" className="profile-pic" />
      <TextContainer>
        <SkeletonDisplayText size="large" />
        <SkeletonBodyText size="large" />
      </TextContainer>

    </div>
  )
}

export default Profile
