import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto mt-20 h-full w-80 rounded-lg bg-neutral p-10 text-slate-300">
          <h2>
            There was an error.{" "}
            <Link to="/" className="link-error link">
              Click here
            </Link>{" "}
            to back to the home page.
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
