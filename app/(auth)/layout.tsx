const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-950 to-slate-900">
            {children}
        </div>
    );
};

export default AuthLayout;
