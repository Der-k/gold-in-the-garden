export function Footer() {
    return (
        <footer className="border-t bg-gray-900 text-gray-400">
            <div className="container mx-auto flex h-16 items-center justify-center px-4">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Gold in the Garden. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
