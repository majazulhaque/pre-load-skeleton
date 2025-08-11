import React from "react";
import { SkeletonBox } from "./SkeletonBox";

export function SkeletonList({ count = 5 }) {
  return (
    <ul
      aria-busy={true}
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "grid",
        gap: 12,
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <li key={i} style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <SkeletonBox width={5} height={5} rounded />
          <div style={{ display: "flex", flex: 1, gap: 10 }}>
            <SkeletonBox height={12} width="30%" style={{ marginBottom: 6 }} />
            <SkeletonBox height={12} width="10%" />
          </div>
        </li>
      ))}
    </ul>
  );
}
