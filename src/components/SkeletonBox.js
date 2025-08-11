import React from "react";

export function SkeletonBox({
  width = "100%",
  height = 16,
  className = "",
  rounded = false,
  style,
  ...rest
}) {
  const styleObj = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    ...style,
  };
  return (
    <div
      role="status"
      aria-busy={true}
      className={`skeleton ${rounded ? "round" : ""} ${className}`}
      style={styleObj}
      {...rest}
    />
  );
}
