import React, { useEffect, useState } from "react";
import { SkeletonList } from "../components/SkeletonList";
import { useLoadingState } from "../hooks/useLoadingState";

export function UsersList() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((d) => setUsers(d))
      .catch(() => setUsers([]))
      .finally(() => setLoading(false));
  }, []);

  const { showSkeleton, ready } = useLoadingState({
    data: users,
    isFetching: loading,
    minMs: 2000,
  });

  if (showSkeleton && !ready) {
    return <SkeletonList count={6} />;
  }

  if (!users) return <div>No data</div>;

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>
          <strong>{u.name}</strong> — {u.email}
        </li>
      ))}
    </ul>
  );
}
