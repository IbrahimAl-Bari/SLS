import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-[#FF8C42]">
                    <div className="text-center">
                        <h1 className="text-white text-6xl mb-4">Oops! 🍊</h1>
                        <p className="text-white text-2xl mb-8">Something went wrong</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-white text-[#FF8C42] px-8 py-4 rounded-full text-xl font-heading"
                        >
                            Refresh Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}