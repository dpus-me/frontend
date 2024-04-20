import { useEffect, useState } from "react";

export default function Lost() {
  const [isLoading, setLoading] = useState(false);

  return <div>{isLoading ? <div></div> : <div></div>}</div>;
}
