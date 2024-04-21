export default function CommunityNotice(props) {
  return (
    <div
      className={`community-notice ${
        props.color ? "community-notice-" + props.color : ""
      }`}
    >
      <p>공지글 123</p>
    </div>
  );
}
