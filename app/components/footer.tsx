export default function Footer() {
    return (
        <footer className="py-12 bg-background/50 backdrop-blur-lg">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} aplyed.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="https://x.com/_Tarakesh_" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    );
}