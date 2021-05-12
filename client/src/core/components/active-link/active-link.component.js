import { useRouter } from "next/router";

function ActiveLink({ children, href, style }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
