import React from "react";

export const Alert = ({ text }: { text: string }) => (
  <div className="alert alert-primary" role="alert">
    {text}
  </div>
);
