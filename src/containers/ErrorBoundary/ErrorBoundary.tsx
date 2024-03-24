import React, { Component, ReactNode } from 'react';
import { ContentLayout } from '../Layouts';

interface Props {
  children: ReactNode;
  fallback: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log the error to an error reporting service (sentry, new relic etc)
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const fallBack = this.props.fallback ?? null;
      return (
        <ContentLayout>
          <>{fallBack}</>
        </ContentLayout>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
