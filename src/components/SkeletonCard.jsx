import React from "react";

function SkeletonCard() {
  return (
    <div className="card skeleton">
      <div className="skeleton-header"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text short"></div>
      <div className="skeleton-actions"></div>
    </div>
  );
}

export default SkeletonCard;
